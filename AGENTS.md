# Agents guide

- Use pnpm instead of npm
- data/* files contain the data for the resume and cover letter
- index.html and cover-letter.html are the templates for the resume and cover letter

# Usage

```bash
pnpm run dev
```

This will start the development server. It has a hot reload feature.

```bash
pnpm run generate-pdfs [COMPANY NAME]
```

This will generate the resume and cover letter PDFs for the given company name.

The PDFs will be saved in the `resumes` directory.
