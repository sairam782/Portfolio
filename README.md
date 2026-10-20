# Abhishek Sairam Gaduputi — Portfolio

The current portfolio in this workspace is `Portfolio-1`. Built with Next.js 14 and React 18, with a responsive editorial design, project filters, expandable project descriptions, a career timeline, and a dedicated resume page.

## Run locally

```bash
npm ci
npm run dev
```

Open http://localhost:3000. To check and run a production build:

```bash
npm run build
npm start
```

## Update content

- `lib/portfolio.js` is the shared source for contact information, work experience, projects, education, and skills.
- `app/page.jsx` contains the homepage introduction and impact highlights.
- `app/portfolio.css` contains the responsive design and print styles.
- `public/assets/resume/Abhi_Gaduputi_Resume.pdf` is the current resume download. Keep `public/assets/resume/cv.pdf` synchronized for existing download links.

The October 2026 update follows the supplied resume, including the NJIT Teaching Assistant role, Montra Electric Tractor, Froker, and Manipal research experience. Availability is May 2027.

## Routes

- `/`: portfolio, projects, experience, education, skills, and contact
- `/resume`: full experience and downloadable PDF
- `/works`: project gallery
- `/contact`: contact information
- `/services`: redirects to the homepage toolkit

Contact links open email or the linked professional profiles. No contact form backend or external font request is required. Motion respects reduced-motion preferences, and navigation and project details support keyboard interaction.

## Deployment

The production branch is `main`, with Vercel as the deployment target. Keep deployment configuration pointed at this Next.js project. The `exp` branch retains the original portfolio update history.
