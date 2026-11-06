# Vedanshi Vala — Portfolio

A simple, responsive portfolio for Vedanshi Vala, featuring public health leadership, community safety initiatives, research, education, and honours.

**Website:** https://dhairyamishra.github.io/vedanshi-vala/

Uses the original four-page structure and components from [Dhairya Mishra's Astro portfolio](https://github.com/dhairyamishra/dhairyamishra.github.io), source commit `1598923922a1c91a32a531ac26a5e6b8fecadb1d`. Retains the template's typography, warm colour palette, navigation, cards, and layout patterns.

Content is based on the supplied April 23, 2026 resume. Education in progress is labelled with its expected completion date. Contact fields open a draft in the visitor’s email app. No third-party form backend or analytics is configured.

## Develop

Use Node.js 22 or newer.

```sh
npm ci
npm run dev
```

The local site is served at `/vedanshi-vala/`.

```sh
npm run check
npm run build
```

Edit `src/data/home.ts`, `src/data/resume.ts`, and `src/content/projects/` for portfolio content, and `src/components/` for navigation and contact links. Theme styles are in `src/styles/global.css` and `tailwind.config.js`.

## Deploy

GitHub Actions checks, builds, and publishes to GitHub Pages on each push to `main`. Pages must use **GitHub Actions** as its source. No deployment secrets or paid hosting are needed.
