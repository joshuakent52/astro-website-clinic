# CLAUDE.md

Development instructions for this project. Read this before making changes.

## What this is

A primarily static, 12-page public-facing website for Bingham Family Clinic.
Astro is the primary framework, using TypeScript where appropriate. The site
is deployed on Vercel and uses Astro's static output by default.

**Status:** The homepage (`src/pages/index.astro`) is the first page built.
It is currently the only real page in the site. Every internal link
(nav items, CTA buttons, the eligibility policy link) points to `/` as a
placeholder until the pages they should actually point to exist — see
"Placeholder links" below before adding new pages.

## Core principles

- **No other UI framework.** Do not introduce React, Vue, Svelte, or
  similar. Astro components (`.astro`) are the standard.
- **Static by default.** Keep pages statically rendered unless there is a
  specific, deliberate reason a page needs server rendering. Adding SSR
  means adding the Vercel adapter and changing `output` in
  `astro.config.mjs` — don't do this casually.
- **Minimize client-side JavaScript.** Prefer CSS for interactivity and
  animation. Where JavaScript is genuinely required (e.g. the mobile menu
  toggle in `MobileMenu.astro`), keep it scoped to the component that
  needs it, or in `src/scripts/` if it's shared.
- **Preserve the design system.** Don't hardcode colors, spacing, font
  sizes, or radii in component styles — use the CSS custom properties
  defined in `src/styles/variables.css`.
  - Primary color: `#02416b`
  - Secondary color: `#92a6b9`
  - Primary font: Barlow (self-hosted in `public/fonts/`, weights 400/500/600/700)
- **Keep editable content out of markup.** Copy, nav items, and other
  values likely to change live in `src/config/` and `src/data/`, not
  hardcoded inside components or pages. See "Editable content" below.
- **Reuse components where patterns repeat**, but avoid inventing
  abstractions for one-off content. Check `src/components/` before
  building something new.
- **Semantic HTML and accessibility are not optional.** Use correct
  landmark elements and heading order, keep focus states visible, and
  respect `prefers-reduced-motion`.
- **Don't modify unrelated files** when implementing a new page or
  feature. Keep changes scoped.
- **Don't add dependencies without a clear reason.** This project is
  intentionally lean. If you think a library is needed, state why before
  adding it.

## Project structure

```
public/            Static assets served as-is (fonts, images, icons, favicon)
public/images/      Page imagery — see "Images" below
src/config/         Site-wide config: name, nav items, logo (site.ts)
src/data/           Page-specific editable content (e.g. home.ts)
src/components/
  layout/           Header, Footer, Container
  navigation/        Navbar, MobileMenu
  ui/                Button, Card, Section
  sections/          Page-specific composed sections (Hero, StatsBar,
                      Mission, Eligibility, ...; built as pages are built)
  forms/             CustomForm, MicrosoftForm
src/layouts/        BaseLayout.astro (SEO/meta shell for every page)
src/pages/          Route files — one .astro file per page
src/scripts/        Shared client-side scripts, only when genuinely needed
src/styles/         global.css (reset/base), variables.css (tokens),
                     components.css (layout + shared component styles)
src/types/          Shared TypeScript types
```

## Editable content

Two locations hold content that's expected to change without a code review:

- **`src/config/site.ts`** — site name, logo, and `navItems` (shared by
  header and footer). Add new site-wide values here rather than
  hardcoding them in a component.
- **`src/data/<page>.ts`** — one file per page holding that page's copy,
  images, and any structured data (e.g. `src/data/home.ts` holds the
  hero copy, stats, mission statement, and the eligibility income table).

When building a new page, follow this pattern: create `src/data/<page>.ts`
for its content, build any new one-off sections in
`src/components/sections/`, and keep the `.astro` page file itself mostly
composition — importing data and passing it to components.

### Placeholder links

`navItems` in `src/config/site.ts`, the hero CTA (`ctaHref` in
`src/data/home.ts`), and the eligibility policy link (`policyLinkHref` in
the same file) all currently point to `/`. As each real page is built,
update the corresponding `href` in these files — no component changes are
needed to do this.

## Images

Homepage images are referenced by path and are expected at:

- `public/images/image1.png` — hero background (clinic waiting room)
- `public/images/image2.png` — mission section background (exam room)
- `public/images/image3.png` — logo, used in the header and footer

These are plain `<img>` references (not Astro's `Image` component), so a
missing file 404s in the browser rather than breaking the build — useful
while real assets are still being sourced, but don't ship to production
with any of these missing. Update the paths in `src/config/site.ts`
(`logo.src`) and `src/data/home.ts` (`hero.backgroundImage`,
`mission.backgroundImage`) if filenames change.

## Adding a page

1. Create `src/pages/<route>.astro`.
2. Use `BaseLayout` and pass real `title`/`description` (and
   `canonicalUrl`/`ogImage` when available) — don't leave metadata
   generic.
   ```astro
   ---
   import BaseLayout from "../layouts/BaseLayout.astro";
   import Header from "../components/layout/Header.astro";
   import Footer from "../components/layout/Footer.astro";
   import { siteName, siteDescription, logo, navItems } from "../config/site";
   ---
   <BaseLayout title="Page Title" description="One or two sentence summary." siteName={siteName}>
     <Header navItems={navItems} slot="header">
       <a slot="logo" href="/"><img src={logo.src} alt={logo.alt} /></a>
     </Header>
     ...
     <Footer navItems={navItems} slot="footer">
       <a slot="logo" href="/"><img src={logo.src} alt={logo.alt} /></a>
       <p slot="description">{siteDescription}</p>
       <Fragment slot="site-name">{siteName}</Fragment>
     </Footer>
   </BaseLayout>
   ```
3. Compose the page from `Section`, `Container`, and existing `ui/`
   components where they fit. Build new components in
   `components/sections/` for content patterns that don't already exist.
4. Update the relevant `href` in `src/config/site.ts` / `src/data/*.ts`
   (see "Placeholder links") now that the page exists — rather than
   leaving it pointing at `/`.

## Breakpoints

There is one shared stacking breakpoint used throughout the project:

- **768px (`md`)** — the point at which multi-column layouts collapse to
  a single column. Used by `Navbar`/`MobileMenu` (nav switches to the
  hamburger menu), the `.grid--2/3/4` utilities in `components.css`, and
  the homepage `Hero` and `Eligibility` sections.

`variables.css` documents a fuller reference scale in a comment (`sm:
480px | md: 768px | lg: 1024px | xl: 1280px`) for cases that need a
different breakpoint, but CSS custom properties can't be used inside
`@media` queries — write the pixel value directly in the component's
`<style>` block, and add a short comment noting which named breakpoint
it corresponds to (as the homepage sections do) so the convention stays
discoverable.

## Component additions from the homepage build

- **`Button` variant `"inverse"`** — a white button with primary-colored
  text, for CTAs placed on dark or photo backgrounds (e.g. hero
  sections) where `primary` or `outline` wouldn't have enough contrast.
  Defined in `components.css` alongside the other button variants.

## Forms

- `MicrosoftForm.astro` accepts an embed `src` URL — plug in the real
  Microsoft Forms embed URL when it's available.
- `CustomForm.astro` is a structural skeleton only. Fields, validation,
  and submission logic still need to be implemented; keep any submission
  JavaScript isolated rather than adding it globally.

## Before committing

Run, in order, and fix any errors:

```bash
npm install
npm run dev      # sanity check
npm run typecheck
npm run build
```

## Things intentionally left unconfigured

- `astro.config.mjs` `site` is a placeholder (`https://example.com`) —
  update it to the real production URL when known (needed for the
  sitemap and correct canonical/OG URLs).
- Social links and OG defaults are not set anywhere globally yet
  (`siteName`/`siteDescription` now live in `src/config/site.ts`).
- No analytics, tracking, CMS, authentication, or database — none of
  these should be added without an explicit decision to do so.
- The eligibility income table in `src/data/home.ts` is dated to the
  2026 Federal Poverty Level. It needs a manual update each year the
  guidelines change — there's no automated source for it.
