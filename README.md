# Resume Frontend App

A beautiful, clean resume template built with React, TypeScript, and Tailwind CSS.

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

Edit the resume data in `src/data/resume.ts` to customize:

- Personal information
- Professional experience
- Education
- Skills
- Summary

## Printing/PDF Generation

The resume is optimized for printing. Use your browser's print function (Cmd+P / Ctrl+P) to generate a PDF.

## Deployment

The app can be deployed to:

- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Simply build the project and upload the `dist` folder contents.
