# Abhishek Sairam Gaduputi — portfolio

A Next.js portfolio for machine learning projects, hackathons, experience, and contact information. The dark split layout is adapted from the user's selected [v0 reference](https://v0.app/templates/portfolio-template-v0-X6XcPALhbJD). See `docs/design-reference.md` for provenance.

## Local development

```sh
npm ci
npm run dev
```

For a production preview:

```sh
npm run build
npm run start -- --hostname 127.0.0.1 --port 3000
```

## Content and implementation

- `lib/portfolio.js`: verified profile, career, education, project, and skill content.
- `lib/hackathons.js`: seven hackathon entries, source links, and demos.
- `components/studio/`: split-layout shell, spring-driven project artwork, accessible project dialogs, searchable hackathon journal, resume, and contact.
- `app/portfolio.css`: responsive design, animation, reduced-motion, and print styles.
- `public/assets/resume/Abhi_Gaduputi_Resume.pdf`: downloadable resume.
- `docs/hackathon-sources.md`: source verification notes.

The site uses React/Next.js, Framer Motion, Radix Dialog, and CSS/SVG. No PHP, account system, contact-form backend, or simulated live product metrics are used. Email links open the visitor's email client; the copy button provides clipboard feedback. All external project links are preserved.

## Routes

- `/`: personal introduction, career highlights, education, focus areas, recognition, and contact
- `/works`: selected work and interactive project details
- `/hackathons`: all builds, text/technology search, demo and award filters
- `/resume`: experience, education, and toolkit
- `/contact`: about, email, and social links
- `/services` → `/contact`

## Local backups

Before the October 24 rebuild, the original source (`237a782`), last committed version (`811b063`), and complete pre-rebuild working source were saved alongside this checkout in `../portfolio-backups/2026-10-24-before-template-rebuild/`. That folder also contains a Git history bundle and restore instructions. Backups are local and are not published with the website.
