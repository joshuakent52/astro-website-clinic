# CLAUDE.md

Development instructions for this project. Read this before making changes.

## What this is

A primarily static, 12-page public-facing website. Astro is the primary
framework, using TypeScript where appropriate. The site is deployed on
Vercel and uses Astro's static output by default.

## Core principles

- **No other UI framework.** Do not introduce React, Vue, Svelte, or
  similar. Astro components (`.astro`) are the standard.
- **Static by default.** Keep pages statically rendered unless there is a
  specific, deliberate reason a page needs server rendering. Adding SSR
  means adding the Vercel adapter and changing `output` in
  `astro.config.mjs` — don't do this casually.
- **Minimize client-side JavaScript.** Prefer CSS for interactivity and
  animation. Where JavaScript is genuinely required (e.g. a mobile menu
  toggle), keep it scoped to the component that needs it, or in
  `src/scripts/` if it's shared.
- **Preserve the design system.** Don't hardcode colors, spacing, font
  sizes, or radii in component styles — use the CSS custom properties
  defined in `src/styles/variables.css`.
  - Primary color: `#02416b`
  - Secondary color: `#92a6b9`
  - Primary font: Barlow (self-hosted in `public/fonts/`, weights 400/500/600/700)
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
src/components/
  layout/           Header, Footer, Container
  navigation/        Navbar, MobileMenu
  ui/                Button, Card, Section
  sections/          Page-specific composed sections (built as pages are built)
  forms/             CustomForm, MicrosoftForm
src/layouts/        BaseLayout.astro (SEO/meta shell for every page)
src/pages/          Route files — one .astro file per page
src/scripts/        Shared client-side scripts, only when genuinely needed
src/styles/         global.css (reset/base), variables.css (tokens),
                     components.css (layout + shared component styles)
src/types/          Shared TypeScript types
```

## Adding a page

1. Create `src/pages/<route>.astro`.
2. Use `BaseLayout` and pass real `title`/`description` (and
   `canonicalUrl`/`ogImage` when available) — don't leave metadata
   generic.
   ```astro
   ---
   import BaseLayout from "../layouts/BaseLayout.astro";
   ---
   <BaseLayout title="Page Title" description="One or two sentence summary.">
     ...
   </BaseLayout>
   ```
3. Compose the page from `Section`, `Container`, and existing `ui/`
   components where they fit. Build new components in
   `components/sections/` for content patterns that don't already exist.
4. Provide real navigation labels/links (update `Header`/`Footer` nav
   arrays) rather than placeholders once IA is finalized.

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
- Site name, description, social links, and OG defaults are not set
  anywhere globally yet.
- No analytics, tracking, CMS, authentication, or database — none of
  these should be added without an explicit decision to do so.
