# CLAUDE.md

Development instructions for this project. Read this before making changes.

## What this is

A primarily static, 12-page public-facing website for Bingham Family Clinic.
Astro is the primary framework, using TypeScript where appropriate. The site
is deployed on Vercel and uses Astro's static output by default.

**Status:** All 12 pages are built and every nav link is live — no
placeholder routes remain:
`/` (home), `/about/`, `/about/board`, `/about/leadership`,
`/about/key-contributors`, `/classes/`, `/appointments/`, `/donate/`,
`/donate/wire-transfer`, `/volunteer/`, `/volunteer/apply`,
`/volunteer/provider-apply`.

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
src/config/         Site-wide config: site.ts (name, nav, logos,
                     default share image), footer.ts (contact, hours,
                     socials, closures) — see "Footer config" below
src/data/           Page-specific editable content: home, about, board,
                     leadership, contributors, classes, appointments,
                     donate, donors, volunteer
src/components/
  layout/           Header, Footer, Container
  navigation/        Navbar, MobileMenu
  ui/                Button, Card, Section
  sections/          Page-specific composed sections (Hero, StatsBar,
                      Mission, Eligibility, DonateHero, DonateOptions,
                      BoardCard, BoardGrid, AlumniGrid, ClassesGrid,
                      ApplySplit, ...; built as pages are built)
  seo/               ClinicSchema (sitewide structured data)
  forms/             VolunteerApplicationForm, MicrosoftForm
src/layouts/        BaseLayout.astro (SEO/meta shell for every page)
src/lib/            Shared helpers: supabase.ts, slug.ts
src/pages/          Route files — one .astro file per page
src/scripts/        Shared client-side scripts, only when genuinely needed
                     (board-deep-link.ts)
src/styles/         global.css (reset/base), variables.css (tokens),
                     components.css (layout + shared component styles)
src/types/          Shared TypeScript types
```

## Editable content

Three locations hold content that's expected to change without a code review:

- **`src/config/site.ts`** — site name, logos, `navItems` (header
  navigation), and `defaultOgImage` (site-wide share image).
  Add new site-wide values here rather than hardcoding them in a
  component.
- **`src/config/footer.ts`** — contact details, hours, social links,
  map embed, and closure dates. See "Footer config" below.
- **`src/data/<page>.ts`** — one file per page holding that page's copy,
  images, and any structured data (e.g. `src/data/home.ts` holds the
  hero copy, stats, mission statement, and the eligibility income table;
  `src/data/donate.ts` holds the donate page's quote and donation
  options).

When building a new page, follow this pattern: create `src/data/<page>.ts`
for its content, build any new one-off sections in
`src/components/sections/`, and keep the `.astro` page file itself mostly
composition — importing data and passing it to components. All internal
`href`s are live; point any new links at real routes from the start.

## Images

Key images are referenced by path and are expected at:

- `public/images/image2.webp` — waiting room (4279×2853); homepage
  hero background (`hero.backgroundImage` in `src/data/home.ts`) and
  the default social share image (`defaultOgImage` in
  `src/config/site.ts`)
- `public/images/image1.png` — medical suite (4032×3024); mission
  section background (`mission.backgroundImage` in `src/data/home.ts`)
  and the `ClinicSchema` structured-data image
- `public/images/image3.png` — logo, used in the header and footer
- `public/images/image4.png` — flat logo variant (`flat_logo` in
  `src/config/site.ts`), used in the header and footer on most pages
- `public/images/volunteer-hero.jpg` — volunteer page hero background
- `public/images/volunteer-why.jpg` — "Why Volunteer" section photo
- `public/images/venmo-qr.png` — Venmo QR code shown on the donate page
- `public/images/<name>.webp` — board/leadership/contributor portraits
  (e.g. `kirk.webp`, `sherilee.webp`); a member whose `image` is still
  `/images/placeholder.png` is hidden from the grids until a real
  photo is added

These are plain `<img>` references (not Astro's `Image` component), so a
missing file 404s in the browser rather than breaking the build — useful
while real assets are still being sourced, but don't ship to production
with any of these missing. If the share-image file is ever swapped,
re-measure its real pixel dimensions and update `width`/`height` in
`defaultOgImage` — nothing validates them automatically. Update the
paths in `src/config/site.ts` (`logo.src`, `flat_logo.src`,
`defaultOgImage.src`),
`src/data/home.ts` (`hero.backgroundImage`,
`mission.backgroundImage`), `src/data/volunteer.ts`
(`hero.backgroundImage`, `why.image`), and `src/data/donate.ts`
(`venmo.qrImage`) if filenames change.

## Adding a page

1. Create `src/pages/<route>.astro`.
2. Use `BaseLayout` and pass a real `title`/`description` — don't leave
   metadata generic (see "SEO conventions" for the title/description
   pattern). Canonical URLs and the share image are automatic; only
   pass `canonicalUrl`/`ogImage` to override the defaults.
   ```astro
   ---
   import BaseLayout from "../layouts/BaseLayout.astro";
   import Header from "../components/layout/Header.astro";
   import Footer from "../components/layout/Footer.astro";
   import { siteName, logo, navItems } from "../config/site";
   ---
   <BaseLayout title="Page Title" description="One or two sentence summary." siteName={siteName}>
     <Header navItems={navItems} slot="header">
       <a slot="logo" href="/"><img src={logo.src} alt={logo.alt} /></a>
     </Header>
     ...
     <Footer navItems={navItems} slot="footer" />
   </BaseLayout>
   ```
3. Compose the page from `Section`, `Container`, and existing `ui/`
   components where they fit. Build new components in
   `components/sections/` for content patterns that don't already exist.
4. Point any new links in `src/config/site.ts` / `src/data/*.ts` at the
   new route. (All `href`s are live — there are no placeholder links
   left to update.)

## SEO conventions

- **Titles/descriptions are local-intent.** Page `title` props are short
  (`BaseLayout` appends `| Bingham Family Clinic`); every page has a
  unique title (~40–60 chars rendered) and description (~100–160
  chars) carrying "Orem, UT" and/or "Utah County" plus an action cue
  (request, join, donate, apply). Keep new pages in this pattern.
- **Canonicals and share images are automatic.** `BaseLayout` derives a
  self-canonical from the site origin + current path (trailing-slash
  normalized) and falls back to `defaultOgImage` from
  `src/config/site.ts`. Only pass `canonicalUrl`/`ogImage` to override
  the defaults.
- **Structured data has two layers.** `ClinicSchema.astro`
  (`src/components/seo/`) emits sitewide `MedicalClinic` + `WebSite`
  JSON-LD on every page via `BaseLayout`; the three about pages
  additionally emit per-person `ItemList` JSON-LD. Values come from
  `src/config/` — don't hardcode NAP data into schema markup.
- **`BoardCard` rules — don't regress these.** Person anchor `id` is
  `slugifyName(name)` (shared with `src/lib/slug.ts`), the name is an
  `h2`, duties (`roleExplanation`) render first in the bio, and the
  Expand/Hide pill label is CSS `content` plus `aria-hidden` and
  `data-nosnippet` — never render "Expand"/"Hide" as text nodes or
  Google snippets pick them up. Deep-link opening (`#slug` expands the
  bio) lives in `src/scripts/board-deep-link.ts`, imported by
  `BoardGrid` and `AlumniGrid`.
- **Sitemap is generated, not written.** `@astrojs/sitemap` emits
  `sitemap-index.xml` at build time from `src/pages/`; never add a
  static `public/sitemap.xml`. `public/robots.txt` points at the
  generated index with an absolute URL — keep it absolute.

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

Two form patterns exist — don't mix them:

- **`VolunteerApplicationForm.astro`** (used by
  `volunteer/apply.astro`) submits directly to Supabase from the
  browser via `src/lib/supabase.ts`. It requires `PUBLIC_SUPABASE_URL`
  and `PUBLIC_SUPABASE_ANON_KEY` — see "Environment variables" below.
  Keep any submission JavaScript isolated rather than adding it
  globally.
- **`MicrosoftForm.astro`** embeds a Microsoft Forms iframe via a `src`
  URL. Used by `appointments/index.astro`,
  `donate/wire-transfer.astro`, and `volunteer/provider-apply.astro` —
  all three embeds are live. If a form changes, swap the `src` URL on
  the page (or in `src/data/appointments.ts`, which holds the
  appointments one), no component changes needed.
- `CustomForm.astro` is an unused skeleton — nothing references it.
  Don't wire it into a page; use one of the two patterns above.

## Donate page

`src/pages/donate/` follows the same nested-route pattern as
`src/pages/volunteer/`:

- **`donate/index.astro`** — the main donate page: `DonateHero` (the
  "Why Donate?" banner and quote — no icon on the quote, intentionally),
  `DonateOptions` (One-Time via Clover, Wire-Transfer, and the Venmo QR),
  and the homepage `Mission` section reused as-is (same component, same
  `mission` data from `src/data/home.ts`) at the bottom of the page.
- **`donate/wire-transfer.astro`** — embeds the live wire-transfer
  donation Microsoft Form via `MicrosoftForm.astro`. If the form
  changes, swap the `src` URL on the page.
- The One-Time Donation button links directly to the Clover pay widget
  (`https://www.clover.com/pay-widgets/b118e1ee-4bf5-40bb-9c0c-bae86e361a79`)
  as an external link (`Button`'s `external` prop) — update
  `options[0].ctaHref` in `src/data/donate.ts` if that widget URL ever
  changes.
- All donate copy and links live in `src/data/donate.ts`, per the
  "Editable content" convention above.

## Footer config

`src/config/footer.ts` is the second source of truth alongside
`site.ts`: contact details (address, phone, email), opening hours,
social links, the map embed URL, the footer tagline, and closure
dates. Three consumers read it, so edits propagate automatically:

- `Footer.astro` renders the map, contact info, socials, and the next
  upcoming closures (sorted, auto-advancing — see the format guide in
  the file's comments; just append next year's dates when the list
  runs out).
- `ClinicSchema.astro` derives the schema address, phone, `sameAs`
  links, and `openingHoursSpecification` from it. **Hours format is a
  contract:** entries look like `{ days: "Monday - Friday", time:
  "10:00 - 6:00" }` or `{ days: "Saturday-Sunday", time: "Closed" }`,
  and the parser assumes a closing time at/before the opening hour is
  PM. Keep that shape or opening-hours schema silently drops or
  misstates them.
- `site.ts` stays the home for name/logos/nav/share image — don't move
  those into `footer.ts`.

## Environment variables

The volunteer application form needs two public Supabase values (see
`src/lib/supabase.ts`):

- `PUBLIC_SUPABASE_URL`
- `PUBLIC_SUPABASE_ANON_KEY`

Set them in a local `.env` file (gitignored) for `npm run dev`, and in
the Vercel dashboard (project Settings → Environment Variables) for
preview/production. Without them the form on
`/volunteer/apply/` can't submit. Nothing else on the site needs env
vars.

## Analytics

`@vercel/analytics` is installed and `BaseLayout` calls `inject()` on
every page. It's inert locally and reports nothing until Analytics is
enabled for the project in the Vercel dashboard — no code changes
needed either way.

## Before committing

Run, in order, and fix any errors:

```bash
npm install
npm run dev      # sanity check
npm run typecheck
npm run build
```

## Things intentionally left unconfigured

- No CMS, authentication, or server-side database of our own — the only
  backend is Supabase, used solely as the submission store for the
  volunteer application form (see "Forms"). None of the rest should be
  added without an explicit decision to do so.
- No custom 404 page (`src/pages/404.astro` doesn't exist) — Astro's
  default serves in the meantime. A branded one with links back to
  Appointments/Classes/Donate/Volunteer is still on the wishlist.
- No per-page share images — every page falls back to `defaultOgImage`
  (see "SEO conventions"). The default file is ~1.8 MB; a ~1200×630
  crop would unfurl faster if one is ever exported.
- The eligibility income table in `src/data/home.ts` is dated to the
  2026 Federal Poverty Level. It needs a manual update each year the
  guidelines change — there's no automated source for it.
