# Abhishek Sairam Gaduputi: portfolio

A Next.js site that presents my machine learning work the way a company launches a product: a cinematic hero, measured results, case studies, and an easy way to get in touch.

Live: https://abhishek-drab-two-45.vercel.app

## Run it

```sh
npm ci
npm run dev        # http://localhost:3000
```

Production check:

```sh
npm run lint
npm run build
npm run start
```

## Where things live

| Path | What it holds |
| --- | --- |
| `lib/site.js` | Name, links, email, resume path, navigation, site URL, colour theme, optional hero video |
| `lib/themes.js` | The colour themes. Pick the default in `lib/site.js` |
| `lib/voice.js` | Settings and limits for the voice guide. See `docs/voice-guide.md` |
| `lib/work.js` | Case studies, technical capabilities, and the "How I build" principles |
| `lib/experience.js` | Work history, education, skills |
| `lib/hackathons.js` | Hackathon builds with source links |
| `app/` | Routes, global styles, fonts, SEO files |
| `components/` | Header, footer, command palette, cards, project illustrations |
| `components/home/` | Home page sections: hero, results grid, work rail, focus areas |
| `components/fx/` | Motion building blocks: shader background, smooth scroll, reveals, counters, spotlight, marquee |
| `public/assets/` | Portrait (original and background-removed cut-out) and resume PDF |
| `docs/` | Design notes and source verification for hackathon entries |

To update content, edit the files in `lib/`. Pages read from them, so nothing else needs to change.

## Routes

- `/` home: pitch, results, focus areas, case studies, hackathons, about
- `/work` and `/work/[slug]`: the case studies
- `/experience`: work history, education, skills
- `/hackathons`: searchable list of builds
- `/about`, `/contact`
- Old routes redirect: `/works` to `/work`, `/resume` to `/experience`, `/services` to `/contact`

## Motion and interaction

- Hero background: a WebGL shader of slow ribbons of light, in the active theme colour, that leans toward the cursor. It pauses off screen and steps down to a still frame on slow devices. To use a video instead, set `heroVideo` in `lib/site.js`.
- Smooth scrolling (Lenis) on desktop. Touch devices keep native scroll.
- Scroll-driven sections: a statement that lights up word by word, a pinned horizontal rail of case studies, and focus-area cards that stack.
- Cards follow the cursor with a spotlight and a slight tilt. Primary buttons are magnetic. Numbers count up when they enter the view.
- Quick search with Cmd+K or Ctrl+K: pages, case studies, hackathon builds, and actions such as copying the email address.
- Animated illustrations for each case study, drawn in SVG.
- Everything respects the reduced-motion setting: animations stop, pinned sections become normal ones, and marquees become plain lists.

## Voice guide

An AI guide answers questions about the work by voice or text. It is an ElevenLabs agent built from the site data, with guardrails at every layer and its own test set. Setup, guardrails and costs are in `docs/voice-guide.md`.

```bash
npm run voice:sync   # build or update the agent from lib/
npm run voice:test   # 12 guardrail checks
```

## Production details

- Every page is statically generated. The one server route hands out session passes for the voice guide.
- SEO: per-page titles and descriptions, canonical URLs, `sitemap.xml`, `robots.txt`, a generated social share image, and JSON-LD for the person and each case study.
- Security headers and redirects are set in `next.config.mjs`.
- Fonts (Geist and Geist Mono, SIL Open Font License) are self-hosted in `app/fonts`, so builds do not depend on a font CDN.
- Accessible by default: skip link, visible focus, labelled navigation, keyboard-operable search, and an automated axe scan with no violations on any page.
- Runtime dependencies: Next.js, React, Motion, Lenis, Lucide icons, and the ElevenLabs React SDK (loaded only when the voice guide is opened).

## Configuration

For the voice guide, set `ELEVENLABS_API_KEY` and `ELEVENLABS_AGENT_ID` in Vercel (see `.env.example`). Without them the guide stays hidden.

Set `NEXT_PUBLIC_SITE_URL` in Vercel if the site moves to a custom domain. It feeds canonical URLs, the sitemap, and share cards. Without it, the current Vercel URL is used.

## Content rules

Every number on the site comes from the resume or a public project source. `docs/hackathon-sources.md` records where each hackathon entry was verified. Keep that standard when adding work.

`package.json` pins two transitive dependencies to patched versions (PostCSS under Next, minimatch under the lint tooling). `npm audit` reports 0 vulnerabilities with them in place. Remove each override once the parent package ships a fixed release.
