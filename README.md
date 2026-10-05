# Vadathinnalur K. Ragupathi · Author Website

Bilingual (English / தமிழ்) portfolio site for Tamil poet, writer and teacher **வடதின்னலூர் கா. ரகுபதி**.

- Plain static site: `index.html`, `styles.css`, `main.js`, images in `assets/img/`. No build step.
- All text for both languages lives in the `t` dictionary and the `books` / `quotes` arrays at the top of `main.js`.
- The chosen language is remembered per visitor; Tamil is picked automatically for browsers set to Tamil.

## Run locally

```sh
python3 -m http.server 4173
# open http://localhost:4173
```

## Deploy

Import the repository at https://vercel.com/new. Framework preset: **Other**, no build command, output directory `.`. Every push to `main` redeploys.
