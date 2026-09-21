# Chirag Rathore — Portfolio

Static multi-page portfolio site for Chirag Rathore, a PMP-certified project manager.
No build step. The only external dependency is Google Fonts.

## Pages

| File | URL | Purpose |
| --- | --- | --- |
| `index.html` | `/` | Home: hero, headline numbers, contact prompt |
| `work.html` | `/work.html` | List of the four case studies |
| `method.html` | `/method.html` | How delivery is run (three principles) |
| `about.html` | `/about.html` | Bio, career timeline, transferable background, tools/certs/education |
| `contact.html` | `/contact.html` | Contact details |
| `case-nine-project-portfolio.html` | | Full case study |
| `case-resource-planning-107.html` | | Full case study |
| `case-eight-improvement-projects.html` | | Full case study |
| `case-sops-and-qa.html` | | Full case study |
| `assets/styles.css` | | Shared stylesheet for every page |
| `assets/site.js` | | Shared script: theme toggle, mobile nav, reveal-on-scroll |

Every page is a full standalone HTML document that links the shared CSS and JS.
There is no single-page routing anymore; each nav item is its own file.

## Editing

- **Copy / numbers** — edit the relevant HTML file directly.
- **Case studies** — each `case-*.html` holds its own content. If you change a case
  title or headline, update the matching card in `work.html` and the "Next:" link in
  the previous case page too.
- **Navigation** — the menu markup is repeated in each file's `.nav` block and in the
  footer. Change all pages if you add or rename an item. The current page's link
  carries `class="active"`.
- **Look and feel** — all styling is in `assets/styles.css`.
- **LinkedIn** — the profile URL is set in the nav of every page and on the contact page.
  Search for `linkedin.com` to change it everywhere.
- **Headshot** — `assets/headshot.jpg`, shown in the portrait box on `about.html`. Replace
  the file (same name) to change it.

## Local preview

```
cd chirag-portfolio
python -m http.server 8000
```

Then open <http://localhost:8000>.

## Deploy

Hosted on GitHub Pages from the `main` branch of
`chirag-rathore-7/chirag-portfolio`. Push to `main` and Pages redeploys within a
minute or two.
