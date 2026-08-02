# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A personal portfolio site (Ty Donnelly) built as a single-page Vue 3 app, bundled with Vite, and deployed to GitHub Pages.

## Commands

```bash
npm install      # install dependencies
npm run dev      # start Vite dev server with HMR
npm run build    # production build to dist/
npm run preview  # preview the production build locally
npm run lint      # run ESLint over the project
npm run lint:fix  # run ESLint and auto-fix what it can
```

Linting is ESLint (flat config, `eslint.config.js`) with `eslint-plugin-vue`'s recommended ruleset. There is no test suite or type checker configured in this repo.

## Architecture

- Single-page app: `src/main.js` mounts `App.vue`, which renders only `homepage.vue`. There is no router — every section of the site is a component rendered inside one long scrollable page.
- `homepage.vue` is the composition root: it renders the nav bar plus each page section (`aboutme`, `experience`, `projectCard`, `education`, `skills`) in order, and owns the content data for experience bullet points and project descriptions as inline arrays passed into components as props (e.g. `listExperienceOne`, `listProjectOne`). To edit resume/project copy, edit these arrays in `homepage.vue` rather than the child components.
- Nav links scroll to sections via template `ref`s and `scrollIntoView` (`scrollToSection` method in `homepage.vue`), not routing — section anchors are Vue refs (`aboutme`, `experience`, `projects`, `education`, `skills`), not URL hashes.
- Each section is a self-contained `.vue` file under `src/components/` using the Options API, with `<style scoped>` blocks — styling is done per-component rather than through a shared design system, plus a global `src/style.css` and fonts/vars set in `App.vue`.
- Static assets (project screenshots, tech icons, resume PDF) live in `public/` and are referenced by root-relative path (e.g. `/superfrog.jpg`).
- Font Awesome is included as a vendored copy under `src/assets/fontawesome/` and also loaded via a kit script tag in `index.html`.

## Deployment

Two GitHub Actions workflows exist under `.github/workflows/` and both trigger on push to `main`:
- `main.yml` — the active one: builds with `npm run build` and deploys `dist/` to GitHub Pages.
- `jekyll-gh-pages.yml` — a leftover default Jekyll workflow; it is not used for this Vite/Vue site and can likely be ignored or removed if touching CI.
