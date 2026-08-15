# Redesign port

Next.js App Router files for the bone and oxblood redesign. Plain React plus
inline styles, no Tailwind classes and no extra dependencies beyond what the
repo already has.

## Files

    app/page.jsx          homepage
    app/resume/page.jsx    full resume page
    app/portfolio.css      fonts, keyframes, hover rules, cursor rules
    app/layout.jsx         minimal root layout (metadata only)
    public/assets/portrait.jpg

## Install

1. Copy `app/` and `public/` over the repo, keeping your existing
   `app/globals.css`, `app/contact`, `app/works` and `app/services` if you
   still want those routes.
2. The redesign carries its own sticky header, so `components/Header.jsx`,
   `components/Nav.jsx` and `components/AmbientBackground.jsx` are no longer
   mounted by the new layout. Leave the files in place or delete them.
3. `npm run dev`

## Before you build

The `exp` branch currently has unresolved merge conflict markers committed in
`tailwind.config.js` and `app/layout.jsx` (`<<<<<<< Updated upstream`). The
build will fail until those are cleaned up. The `app/layout.jsx` in this port
replaces the broken one. `tailwind.config.js` still needs a manual fix, or can
be reduced to a stub since the redesign does not use Tailwind.

## Props

`app/page.jsx` accepts two optional props if you want to tone the motion down:

    <Home customCursor={false} motion="reduced" />

## Notes

- The custom cursor and magnetic hover are disabled automatically below 900px
  and on coarse pointers.
- The contact form opens a prefilled mail client. Wire it to EmailJS or a route
  handler when you want real submissions.
