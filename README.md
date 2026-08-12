# Website Foundation

A static, 12-page public-facing website built with Astro, TypeScript, and
modern CSS, ready for deployment on Vercel. Page content has not been
built yet — see `CLAUDE.md` for the development guide.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:4321.

## Commands

| Command             | Action                                    |
| :------------------ | :----------------------------------------- |
| `npm install`        | Install dependencies                       |
| `npm run dev`         | Start the local dev server                 |
| `npm run build`       | Build the production site to `./dist/`     |
| `npm run preview`     | Preview the production build locally       |
| `npm run typecheck`   | Type-check the project with `astro check`  |

## Project structure

See `CLAUDE.md` for the full structure, design system reference, and
conventions to follow when building pages.

## Deployment

This project builds to static output and can be deployed on Vercel with
its default Astro detection — no adapter or extra Vercel configuration
is required unless server rendering is introduced later.
