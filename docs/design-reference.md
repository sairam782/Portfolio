# Portfolio design reference — October 24, 2026

User-selected reference: [Portfolio template – v0 by lenxism](https://v0.app/templates/portfolio-template-v0-X6XcPALhbJD).

The public template preview was inspected directly. Its defining composition is a near-black canvas, a sticky introduction panel on the left, bold sans-serif type, subtle dotted texture, and a vertical gallery of large colorful projects on the right with overlaid tags and case-study links. This is an original local implementation adapted from that visible reference, not imported template source. No v0 account or repository synchronization was created.

The previous redesign was backed up, and the original tracked source at `237a782` was restored before this implementation. Verified resume content, contact links, and all seven hackathon entries were carried forward. `portfolio-backups/2026-10-24-before-template-rebuild`, beside the checkout, contains the original, last-committed, and pre-rebuild working sources plus Git history.

The current design uses the existing Framer Motion dependency for spring-driven pointer movement, Radix Dialog for accessible project details, and original animated SVG artwork. Visual studies are labelled as illustrations rather than product screenshots. Visitors can pause animation; OS reduced-motion preferences are respected. No new dependency was added.

Routes: `/` personal overview, name-led hero, career highlights, education, focus areas, recognition, and contact; `/works` selected projects; `/hackathons` searchable hackathon journal; `/resume` career, education, and skills; `/contact` about and contact. The legacy `/services` route redirects to contact.

The user approved the dark design and requested a stronger emphasis on their identity. The approved project-led design was backed up separately in `portfolio-backups/2026-10-24-approved-dark-design/` before the personal overview was added. The persistent sidebar now highlights the full name on every page.
