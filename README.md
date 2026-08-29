# Chirag Rathore — Portfolio

Single-file portfolio site for Chirag Rathore, a PMP-certified project manager.

- `index.html` — the entire site (HTML, CSS, and JS inline). No build step, no dependencies except Google Fonts.
- Hosted via GitHub Pages from the `main` branch.

## Editing

Open `index.html` and edit directly. Key spots:

| What | Where |
| --- | --- |
| Case studies | the `CASES` array in the `<script>` block near the bottom |
| Stats / hero numbers | the `#proof` and `.hero-card` sections |
| Timeline, certs, education | the `#about` section |
| Contact details | the `#contact` section |
| LinkedIn URL | search for `data-placeholder-link` (two links) |
| Headshot | the `#headshot` `<img>` in `#about` — set `src` and remove `hidden` |

## Local preview

Just open `index.html` in a browser, or:

```
python -m http.server 8000
```

then visit <http://localhost:8000>.
