# Cinematakis

Website for the Cinematakis cinema at **cinematakis.gr**, in Greek (default) and English.

It is a static site: plain HTML, CSS and a little vanilla JavaScript. There is no build step and no framework. It is hosted on GitHub Pages and served over HTTPS at <https://cinematakis.gr>. Every push to `main` updates the live site.

> Status: live. Home, events and contact pages exist in Greek and English, and the events list is driven by `data/events.json`. Logo, colours and tagline are drafts. See the [documentation](docs/README.md) and [`cinematakis-website-plan.md`](cinematakis-website-plan.md).

Cinematakis is a **mobile, pop-up cinema** from Tsintzina, Laconia, with free admission. There are no opening hours or ticket prices, so the site has an Events page (film, date, time and place of each screening) instead of fixed showtimes.

## Project layout

```
index.html              Greek home page (site root)
events/index.html       Greek events page
contact/index.html      Greek contact page
en/index.html           English home page
en/events/index.html    English events page
en/contact/index.html   English contact page
assets/css/style.css    Shared stylesheet
assets/img/logo.svg     Draft logo
assets/js/events.js     Renders upcoming events from the JSON file
data/events.json        The list of screenings (edit this to update the site)
CNAME                   Tells GitHub Pages the custom domain (do not delete)
docs/                   Project documentation
robots.txt, sitemap.xml Search engine files
```

## How to edit content

- Page text lives in the HTML files. Greek pages are at the root and English pages are under `en/`. Every page exists in both languages, so change both when you edit one.
- Screenings live in a single file, `data/events.json`. Updating the programme means editing that file only. Step-by-step guide: [`docs/updating-events.md`](docs/updating-events.md).
- The contact email (`info@cinematakis.gr`) is not shown yet. Add it to both contact pages once the mailbox exists (look for the `TODO` comment).

## How to preview locally

Open a terminal in the project folder and run:

```
python -m http.server 8000 --bind 127.0.0.1
```

Then open <http://127.0.0.1:8000/> in your browser. Opening the HTML files directly (`file://`) will not work once showtimes are loaded from JSON.

Alternatively, use the Live Server extension in VS Code.

## Security notes

- This is a public repository. Never commit passwords, API keys, personal data or `.env` files.
- Use HTTPS only and avoid third-party scripts and trackers.
