# Cinematakis

Website for the Cinematakis cinema at **cinematakis.gr**, in Greek (default) and English.

It is a static site: plain HTML, CSS and a little vanilla JavaScript. There is no build step and no framework. It will be hosted on GitHub Pages.

> Status: project scaffold only. Pages, styling and showtimes are added in later steps. See [`cinematakis-website-plan.md`](cinematakis-website-plan.md).

## Project layout

```
index.html          Greek home page (site root)
en/index.html       English home page
assets/css/         Stylesheets
assets/js/          JavaScript
assets/img/         Images
data/               Movies and showtimes (JSON)
docs/               Project documentation
```

## How to edit content

- Page text lives in the HTML files. Greek pages are at the root and English pages are under `en/`.
- Movies and showtimes will live in a single file in `data/`. Updating the programme means editing that file only.
- A step-by-step guide will be added in `docs/` once the showtimes feature exists.

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
