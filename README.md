# Hove Construction — Official Website

A premium, minimalist marketing website for **Hove Construction**, a design-build and general contracting company based in Harare, Zimbabwe, showcasing high-end residential, commercial, and design-build projects.

Built with React 19, TypeScript, Vite, Tailwind CSS v4, and Motion (Framer Motion).

## Run Locally

**Prerequisites:** Node.js 18+

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```
4. Preview the production build:
   ```bash
   npm run preview
   ```

## Project Structure

- `src/components/` — page sections (Navbar, Hero, About, Services, Projects, Process, Testimonials, Contact, Footer)
- `src/data.ts` — all site copy, project case studies, testimonials, and contact details in one place
- `public/` — static assets served as-is (favicon, robots.txt, sitemap.xml, social share image)

## Deployment

This is a static Vite build and deploys cleanly to Vercel, Netlify, or any static host with zero configuration.
