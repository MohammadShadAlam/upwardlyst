# Marko - Next.js (migrated from Vite + React Router)

This is a 1:1 behavioral port of the original `marko-react` (Vite + React 19 +
React Router v7) project to Next.js (App Router). No UI, styling, layout,
copy, or business logic was changed — only the routing/build layer.

## Setup

This project was built in a sandbox with no network access, so dependencies
have **not** been installed and the build has **not** been run yet. To get it
running:

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## What changed vs. the original (and why)

Only what Next.js required. Everything else — JSX, className, CSS, copy,
data, component structure — is untouched.

1. **Routing**: `react-router-dom` (`BrowserRouter`/`Routes`/`Route`) was
   replaced by Next.js's file-system App Router. Every route from
   `src/Routers.jsx` has a matching folder under `src/app/`.
2. **`NavLink` → `next/link` + `usePathname`**: `Components/Header/header.jsx`
   and `Components/Context/NavContext.jsx` used `react-router-dom`'s
   `NavLink`/`useLocation` for active-link styling. These were swapped for
   `next/link` and `next/navigation`'s `usePathname`, replicating the exact
   same "active" class behavior (including the dropdown-group active logic).
3. **Plain `<a href="...">` links were left untouched.** The original app
   used real anchor tags (not React Router `Link`) for nearly all internal
   navigation (footer, sidebar, cards, buttons), so there was nothing to
   convert — behavior is already identical in Next.js.
4. **`"use client"` directives**: added to the 28 files that use state,
   effects, refs, context, or event handlers (forms, theme switcher, video
   modal, animate-on-scroll/counter hooks, sidebar, header, blog card, etc.).
   Every other component is a plain presentational component and needed no
   changes.
5. **Page title handling**: the original set `document.title` at runtime via
   a `<HeadTitle>` component (kept, unchanged, still works). Each route also
   now exports proper Next.js `metadata` (server-rendered `<title>`) for
   correct SEO/social previews — this is additive, not a behavior change.
6. **Bootstrap JS bundle**: `bootstrap/dist/js/bootstrap.bundle.min.js`
   touches `window` on import, which breaks server rendering. It's now
   loaded client-only via `src/app/BootstrapClient.jsx` (a `useEffect` +
   dynamic import) instead of a top-level import in `main.jsx`.
7. **Global CSS**: all the same stylesheets (Bootstrap CSS, `main.css`,
   `responsive.css`, Swiper CSS, `animate.css`) are imported once in
   `src/app/layout.jsx`, matching the original `main.jsx` import order.
8. **`public/` assets**: copied as-is. All image/font/vendor-CSS paths were
   already root-relative (`/assets/images/...`), so they resolve identically
   under Next.js's `public/` folder — no path rewrites needed.
9. Removed `public/_redirects` — a Netlify SPA-fallback file specific to the
   old Vite build; it has no meaning (and would be incorrect) for a Next.js
   deployment.

## Folder structure

```
src/
  app/            Next.js routes (thin server components: metadata + render)
  Page/           Original page-section compositions (client components) — unchanged structure
  Components/     Original components — unchanged structure
  Data/           Original static data — unchanged
  assets/css/     main.css, responsive.css — unchanged
public/           unchanged (images, webfonts, vendor CSS)
```
