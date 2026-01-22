# Personal CV / Resume template

A beautiful, clean resume template built with React, TypeScript, and Tailwind CSS. Can be used to create your own resume and cover letter and generate the PDFs.

## Features

- **Clean Design**: White, professional layout optimized for printing
- **Responsive**: Works on desktop, tablet, and mobile devices
- **Print-Friendly**: Optimized CSS for PDF generation and printing
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

## Tech Stack

- React 18 with TypeScript
- Tailwind CSS for styling
- Vite for build tooling
- pnpm for package management

## Getting Started

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Start development server:

   ```bash
   pnpm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

4. Replace [YOUR NAME] and [YOUR TITLE] in the index.html and cover-letter.html files with your own name and title.

## Building for Production

```bash
pnpm run build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

## Customizing Resume Content

Edit the cover letter data in `src/data/coverLetter.ts`.
Edit the resume data in `src/data/resume.ts` to customize:

- Personal information
- Professional experience
- Education
- Skills
- Summary
- etc.

Edit the index.html and cover-letter.html files to customize the templates.

## Generating PDFs

```bash
pnpm run generate-pdfs [OPTIONAL-COMPANY-NAME]
```

## Printing/PDF Generation

The resume is optimized for printing. Use your browser's print function (Cmd+P / Ctrl+P) to generate a PDF.

### Disclaimer

This project uses [Standard Resume](https://standardresume.co/)'s fonts and CSS. It is a personal project to help me create my own resume and cover letter.
