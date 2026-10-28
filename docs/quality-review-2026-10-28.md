# Portfolio review — October 28, 2026

Reviewed the local checkout starting from user commit `0625397`. Kept the approved dark design, personal emphasis, four projects, seven hackathon entries, and verified career content.

## Fixes

- Each main page now has its own visible H1, including on mobile where the sidebar introduction is hidden. Hackathon project titles follow as H2s.
- Home education and career links target the relevant resume sections and transfer focus to those sections.
- Project filters appear before the gallery, announce the result count, and retain focus without a forced scroll.
- Larger navigation, filter, social, and technology controls; clearer search placeholder and location labels. Narrow-screen controls wrap rather than overflow.
- Mobile portrait participates in document flow, avoiding overlap with the role title on 320px screens.
- Replaced the default Vercel favicon with a personal SVG monogram and made page descriptions reflect the personal portfolio.
- Removed the unused Swiper component and dependency.

## Dependency maintenance

Next.js moved from 14.2.5 to 15.5.28, with React/React DOM 19.3.1, matching Next ESLint configuration, and Framer Motion 11.18.2. The update follows the [official Next.js 15 migration guide](https://nextjs.org/docs/app/guides/upgrading/version-15). This application does not use the request APIs affected by the asynchronous API migration.

Next 15 pins PostCSS 8.4.31. A scoped npm override selects patched PostCSS 8.5.32, retaining the PostCSS 8 API. Keep this override until a future Next update supplies an unaffected version. Compatible transitive security updates are recorded in the lockfile.

The initial production dependency audit reported 11 affected package entries, including two critical entries. The final full audit, including development dependencies, reports **0 vulnerabilities** on October 28, 2026. This is a registry audit result at review time, not a guarantee against future advisories.

## Validation

- Clean `npm ci` succeeds with the committed-format lockfile and override.
- Production `npm run build` succeeds, including lint and static page generation.
- All five main routes return HTTP 200; `/services` redirects to `/contact`.
- Resume returns a PDF with the same SHA-256 digest as the user's original resume. SVG icon returns successfully.
- All five routes fit 320px and 1280px browser viewports without document-level horizontal overflow. Additional visual checks at 390px and 1024px.
- One visible main H1 per page; active navigation tracks the current page.
- Education anchor reaches and focuses the education section.
- Computer vision project filter returns two projects and retains button focus. Detail dialog traps keyboard focus; Escape closes it and restores focus to the trigger.
- Hackathon recognition filter returns Kalinga; live demo filter returns four builds. Empty search, reset, MongoDB technology search, and disclosure expansion work.
- Contact copy button shows successful clipboard feedback.
- Pause control disables the CSS page animation. Existing OS reduced-motion styles remain intact.
- No browser console errors or warnings during the tested final-route interactions.

External demos and social platforms retain the source links documented in `hackathon-sources.md`; availability and sign-in requirements on third-party sites are not guaranteed by this local review. Print and a full automated WCAG audit were not part of this browser check.

Changes are local; this review does not commit, push, or deploy them.
