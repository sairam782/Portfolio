# Design notes

Rebuilt in November 2026. The brief: a company-grade site that mixes the calm of an AI lab with Apple-style product pages, with as much motion and interaction as the content can carry.

## Idea

A black canvas, large quiet type, and one source of color: a blue, violet, pink, and amber light. The light appears as the hero background, in key numbers, on hover, and behind page titles. Everything else stays neutral so the light reads as the brand.

## Patterns and where they come from

| Pattern | Seen on | Used for |
| --- | --- | --- |
| Full-screen hero with a living background | Apple, Stripe | Home hero |
| Text that lights up as you scroll | Apple product pages | The story statement, About intro |
| Bento grid of live tiles | Apple | Results with numbers |
| Pinned horizontal gallery | Apple | Selected work |
| Stacking cards | Product launch pages | Focus areas |
| Cursor spotlight and glowing borders | Linear | Every card |
| Floating glass navigation | Vercel, Linear | Header |
| Command palette | Linear, Vercel | Cmd+K quick search |
| Endless marquee | Vercel | Tools, hackathon cards |

## Tokens

All tokens are CSS custom properties at the top of `app/globals.css`.

| Token | Value | Use |
| --- | --- | --- |
| `--bg` | `#000000` | Page background |
| `--surface` | `#0e0e11` | Cards |
| `--text` / `--muted` / `--dim` | `#f5f5f7` / `#a1a1aa` / `#7c7c86` | Text levels |
| `--line` | white at 9% | Borders and rules |
| `--blue` `--violet` `--pink` `--amber` | `#3d80ff` `#9461ff` `#ff5ca8` `#ffa852` | The light |
| `--light` | gradient of the four | Gradient text, bars, progress |

Type is Geist for everything and Geist Mono for small labels. Headings are weight 600 with tight tracking. Display sizes scale with the viewport.

## Rules of thumb

- Color comes only from the light. No other accent colors.
- Gradient text is for one line per view: a headline's second line or a key number.
- Numbers are only shown when they come from the resume or a public source.
- Every animation has a reduced-motion fallback.
- The case study illustrations show how each system works. They are drawings, not screenshots.

## Hero video

`heroVideo` in `lib/site.js` swaps the shader for a looping video. Keep the clip dark, slow, and free of text, 8 to 10 seconds, under about 3 MB, and export both MP4 (H.264) and WebM plus a poster image.

## Earlier versions

The first design (dark sidebar layout) lives in git history up to commit `37fd0f3`.
