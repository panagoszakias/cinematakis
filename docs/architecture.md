# Architecture

Cinematakis is a small static website. There is no server code, no database and no build step.

## How it fits together

```
You edit files  -->  git push to GitHub (main)  -->  GitHub Pages publishes  -->  https://cinematakis.gr
                                                              ^
                                          DNS records at papaki.com point the domain here
```

| Part | What it is |
|------|------------|
| Code and docs | This GitHub repository: <https://github.com/panagoszakias/cinematakis> |
| Hosting | GitHub Pages, deployed from the `main` branch, root folder. Every push to `main` updates the live site after a minute or two |
| Domain | `cinematakis.gr`, registered at papaki.com. See [`dns-and-domain.md`](dns-and-domain.md) |
| HTTPS | A free certificate issued and renewed automatically by GitHub (Let's Encrypt). "Enforce HTTPS" is on in Settings > Pages |
| Email | Handled separately by papaki (MX records). It is not part of this repository |

## Pages

| Greek (default) | English |
|-----------------|---------|
| `/` | `/en/` |
| `/events/` | `/en/events/` |
| `/contact/` | `/en/contact/` |

Each page has a Greek and an English version. If you change one, change the other.

## Events

Screenings are stored in [`data/events.json`](../data/events.json). The script [`assets/js/events.js`](../assets/js/events.js) loads that file in the visitor's browser and shows upcoming screenings. How to edit it: [`updating-events.md`](updating-events.md).

## Design decisions

- **Plain HTML, CSS and a little JavaScript.** Easy to understand, nothing to install, and nothing to keep updating.
- **No third-party scripts, fonts, CDNs or trackers.** Faster pages, better privacy, and no cookie banner needed.
- **Events instead of showtimes.** The cinema is mobile and free, so there are no opening hours or prices. Each event has its own place.
- **Public repository.** Required for free GitHub Pages. Never commit passwords, keys or personal data.

## Files that matter

| File | Purpose |
|------|---------|
| `CNAME` | Tells GitHub Pages to serve the site at `cinematakis.gr`. Do not delete it |
| `robots.txt`, `sitemap.xml` | For search engines. Add a line to `sitemap.xml` when you add a page |
| `assets/css/style.css` | All styling. Colours are variables at the top |
| `assets/img/logo.svg` | Draft logo, also used as the favicon |
