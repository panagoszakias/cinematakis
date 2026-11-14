# Adding pages or images

## Change text on an existing page

1. Open the page's `index.html`. Greek pages are at the root (`index.html`, `events/index.html`, `contact/index.html`). English pages are under `en/`.
2. Edit the text between the tags.
3. Do the same on the other language's page.

## Add the contact email later

When `info@cinematakis.gr` exists, search for `TODO` in `contact/index.html` and `en/contact/index.html`. Replace the "Coming soon" line with:

```html
<dd><a href="mailto:info@cinematakis.gr">info@cinematakis.gr</a></dd>
```

Then delete the `TODO` comment.

## Add an image

1. Put the file in `assets/img/`. Use lowercase names without spaces, such as `screen-night.jpg`.
2. Keep photos small (under about 300 KB) so the site stays fast. Resize them before you add them.
3. Add it to a page. The path depends on the page's depth:

| Page | Path to use |
|------|-------------|
| `index.html` | `assets/img/screen-night.jpg` |
| `events/index.html`, `en/index.html`, `contact/index.html` | `../assets/img/screen-night.jpg` |
| `en/events/index.html`, `en/contact/index.html` | `../../assets/img/screen-night.jpg` |

```html
<img src="assets/img/screen-night.jpg" alt="Outdoor screening in the village square" width="800" height="450">
```

Always write a short, meaningful `alt` text, in the page's language. Use `alt=""` only for purely decorative images.

## Add a new page

Example: an "About" page.

1. Copy `contact/index.html` to `about/index.html`, and `en/contact/index.html` to `en/about/index.html`.
2. In each copy, change the `<title>`, `description`, `canonical`, both `hreflang` links, the `og:` tags, the heading and the content.
3. Add a link to the menu on **every** page (all six existing pages plus the new ones). Mark the new page's own link with `aria-current="page"` and remove it from the others.
4. Update the language switcher link on each new page so it points to its twin.
5. Add both new URLs to `sitemap.xml`.
6. Check that the CSS, logo and link paths match the folder depth (see the table above).

## Change colours or the logo

- Colours: edit the variables at the top of `assets/css/style.css` (`--bg`, `--accent` and so on). Keep text contrast high.
- Logo: replace `assets/img/logo.svg` with your own, keeping the same file name, or update the path on every page.

## Publish

Commit and push, or use the GitHub web editor. See [`updating-events.md`](updating-events.md) for the steps. Check both languages after publishing.
