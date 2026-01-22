import { chromium, Browser, Page } from 'playwright';
import { fileURLToPath } from 'url';
import { dirname, join, extname } from 'path';
import { existsSync, readFileSync } from 'fs';
import { createServer } from 'http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

interface PDFConfig {
  path: string;
  format: 'Letter' | 'A4';
  printBackground: boolean;
  margin: {
    top: string;
    right: string;
    bottom: string;
    left: string;
  };
}

const pdfConfig: PDFConfig = {
  path: '',
  format: 'A4',
  printBackground: true,
  margin: {
    top: '10mm',
    right: '10mm',
    bottom: '10mm',
    left: '10mm'
  }
};

async function startServer(distPath: string): Promise<{ server: any; port: number; close: () => void }> {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      let filePath = join(distPath, req.url || '/');

      // Default to index.html for root
      if (filePath === join(distPath, '/')) {
        filePath = join(distPath, 'index.html');
      }

      // Handle assets with proper MIME types
      const ext = extname(filePath);
      const mimeTypes: { [key: string]: string } = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'application/javascript',
        '.svg': 'image/svg+xml',
        '.woff2': 'font/woff2',
        '.woff': 'font/woff',
        '.ttf': 'font/ttf'
      };

      const contentType = mimeTypes[ext] || 'text/plain';

      try {
        const content = readFileSync(filePath);
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
      } catch (error) {
        res.writeHead(404);
        res.end('File not found');
      }
    });

    server.listen(0, () => {
      const port = (server.address() as any)?.port || 0;
      resolve({
        server,
        port,
        close: () => server.close()
      });
    });
  });
}

async function generatePDF(page: Page, url: string, outputPath: string): Promise<void> {
  console.log(`Generating PDF from ${url}...`);

  // Navigate to the URL
  await page.goto(url);

  // Wait for fonts to load and content to render
  await page.waitForLoadState('networkidle');

  // Wait for React to render the content
  await page.waitForSelector('#root', { timeout: 10000 });

  // Wait a bit more for any dynamic content and fonts
  await page.waitForTimeout(2000);

  // Check if content is actually rendered
  const content = await page.textContent('#root');
  if (!content || content.trim().length < 10) {
    console.warn('⚠️  Warning: Content appears to be empty, but proceeding with PDF generation...');
  }

  // Generate PDF with the configured options
  await page.pdf({
    path: outputPath,
    format: pdfConfig.format,
    printBackground: pdfConfig.printBackground,
    margin: pdfConfig.margin,
    scale: 0.8
  });

  console.log(`✅ PDF generated: ${outputPath}`);
}

async function main(): Promise<void> {
  let browser: Browser | null = null;
  let server: any = null;

  try {
    const companyName = process.argv[2] || '';

    console.log(`🚀 Starting PDF generation for ${companyName}...`);

    // Check if dist directory exists
    const distPath = join(__dirname, '..', 'dist');
    if (!existsSync(distPath)) {
      throw new Error('❌ dist directory not found. Please run "npm run build" first.');
    }

    const resumesDir = join(__dirname, '..', '..', 'resumes');

    // Start local server to serve the built files
    console.log('🌐 Starting local server...');
    const { server: httpServer, port, close } = await startServer(distPath);
    server = httpServer;

    // Launch browser
    console.log('🌐 Launching browser...');
    browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    // Set viewport for consistent rendering
    await page.setViewportSize({ width: 1200, height: 800 });

    // URLs
    const resumeUrl = `http://localhost:${port}/`;
    const coverLetterUrl = `http://localhost:${port}/cover-letter.html`;

    // Create unique file names with company name
    const sanitizedCompanyName = companyName.replace(/[^a-zA-Z0-9\s-]/g, '').replace(/\s+/g, '-').toLowerCase();
    const currentYear = new Date().getFullYear();
    const resumeOutputPath = join(resumesDir, `your-name-resume${sanitizedCompanyName ? `-${sanitizedCompanyName}` : ''}-${currentYear}.pdf`);
    const coverLetterOutputPath = join(resumesDir, `your-name-cover-letter${sanitizedCompanyName ? `-${sanitizedCompanyName}` : ''}-${currentYear}.pdf`);

    // Generate resume PDF
    await generatePDF(page, resumeUrl, resumeOutputPath);

    // Generate cover letter PDF
    await generatePDF(page, coverLetterUrl, coverLetterOutputPath);

    console.log('🎉 All PDFs generated successfully!');
    console.log(`📄 Resume: ${resumeOutputPath}`);
    console.log(`📄 Cover Letter: ${coverLetterOutputPath}`);

  } catch (error) {
    console.error('❌ Error generating PDFs:', error);
    process.exit(1);
  } finally {
    if (browser) {
      await browser.close();
    }
    if (server) {
      server.close();
    }
  }
}

// Run the script
main().catch((error) => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
