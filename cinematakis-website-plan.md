# Cinematakis Website Plan

## Top-Level Overview

**Goal:** Launch a bilingual (Greek and English) website for a small cinema at `cinematakis.gr`. The domain was bought at papaki.com. Code and documentation live in a personal GitHub repository.

**Approach (simplest option that can grow later):**
- A static site built with plain HTML, CSS and a little vanilla JavaScript. It has no build step and no framework, which suits a beginner.
- Showtimes and movies are stored in one JSON data file. Updating content means editing that file. The pages render from it.
- Hosting is GitHub Pages, deployed from the `main` branch of a public repo. It is free and has automatic HTTPS and git-based versioning.
- The custom domain is `cinematakis.gr`, with DNS records managed at papaki.com pointing to GitHub Pages.
- Greek is the default language at the site root. English lives under `/en/`.

**Non-goals for launch:** online ticket booking, user accounts, payments, a backend or database. Possible later growth, in order: (1) a CMS or admin screen for staff, (2) migrating to a static site generator such as Astro, (3) an external ticketing link or service.

**Constraints and notes:**
- The workspace is empty (greenfield).
- Security rules apply: no secrets in the repo, HTTPS only, no unneeded third-party scripts, and a `.gitignore` must exist.
- A public repo is required for free GitHub Pages. Never commit personal data or credentials.
- Email for the domain (for example `info@cinematakis.gr`) is out of scope, but DNS changes must not break any mail records papaki already set up.

```
Repo (GitHub) --push--> GitHub Pages --serves--> cinematakis.gr
                                ^
                      DNS at papaki.com (A and CNAME records)
```

---

## Sub-Task 1: Repository and project scaffold

- **Intent:** Create the git repo and base folder structure so everything (code and docs) is versioned from the start.
- **Expected Outcomes:** A local git repo connected to a new GitHub repo, with `README.md`, `.gitignore`, a `docs/` folder and an empty site skeleton.
- **Todo List:**
  1. Install git if needed, and set `user.name` and `user.email`.
  2. Create a new public GitHub repo (for example `cinematakis`) on the personal account.
  3. Initialise git in the workspace folder and add the remote.
  4. Add `.gitignore` (OS and editor files, `.env`, `node_modules`).
  5. Add `README.md` describing the project, how to edit content and how to preview locally.
  6. Create the folder layout: `index.html` (Greek), `en/index.html`, `assets/css`, `assets/js`, `assets/img`, `data/`, `docs/`.
  7. Make the first commit and push to `main`.
- **Relevant Context:** Workspace root `c:\Users\000411726\OneDrive - IBM\Desktop\cinematakis` is currently empty. OneDrive syncing a git repo can cause file-lock problems, so consider moving the repo to a non-OneDrive path such as `C:\dev\cinematakis`.
- **Status:** [x] done. The user created the GitHub repo and pushed `main` to `https://github.com/panagoszakias/cinematakis.git` (verified: `main` tracks `origin/main`).
- **Completion Notes (for Sub-Task 2 and later):**
  - Local git repo initialised on branch `main`. First commit `029b024` "Initial project scaffold" has 10 files. Remote `origin` is `https://github.com/panagoszakias/cinematakis.git`. The default GitHub Pages URL will be `https://panagoszakias.github.io/cinematakis/`.
  - Git identity is set **locally to this repo only**: `user.name` = `PANAGIOTIS GRIGORIOU`, `user.email` = `petergrhg1@gmail.com` (personal). The global git email is still the IBM address, so do not remove the local setting.
  - Files created: `.gitignore`, `README.md` (layout, editing, local preview), `index.html` (Greek, `lang="el"`, "under construction" with a link to `en/`), `en/index.html` (English, `lang="en"`, link back to `../`), `docs/README.md` (index of planned guides), and `.gitkeep` in `assets/css`, `assets/js`, `assets/img` and `data`.
  - The placeholder pages have no stylesheet, no nav, no `hreflang` and no meta description yet. Sub-Task 2 adds these. Delete each `.gitkeep` once a real file is added to that folder.
  - `.gitignore` also ignores `.bob/`, `.vscode/`, `.env*`, `*.pem`, `*.key` and `node_modules/`. It was created through the shell, because the file tools block writing it.
  - Git warns that LF will become CRLF (Windows default). This is harmless. A `.gitattributes` file could be added later if wanted.
  - Page links use relative paths (`en/`, `../`), which also work under the GitHub Pages project sub-path in Sub-Task 5. Keep using relative paths for CSS, JS and images.
  - OneDrive caveat: the repo sits in a OneDrive folder. OneDrive can lock files inside `.git` and cause "index.lock" or sync errors. If this happens, move the project to a non-OneDrive path such as `C:\dev\cinematakis`. Alternatively, pause OneDrive syncing while running git commands.
  - The repo will be public. Do not put real personal data in it. Public phone, address and opening hours of the cinema are fine.

## Sub-Task 2: Site design, content structure and bilingual pages

- **Intent:** Build the actual site pages in Greek and English with a responsive, mobile-first layout.
- **Expected Outcomes:** These pages work in both languages and look good on phone and desktop, with a language switcher:
  - Home
  - Now Showing / Showtimes
  - Prices and Info
  - Contact and Location
- **Todo List:**
  1. Agree on content with the user: cinema name and tagline, address, phone, opening hours, ticket prices, logo and photos.
  2. Create a shared stylesheet (`assets/css/style.css`) that is responsive and accessible (semantic HTML, contrast, alt text, keyboard navigation).
  3. Build the Greek pages at the root and the English pages under `/en/`. Set `<html lang>` correctly and add `hreflang` links between the two versions.
  4. Add a language switcher and consistent navigation.
  5. Add a Contact and Location section with address and phone. For the map, use a link to Google Maps or OpenStreetMap, or an iframe only if the user wants one.
  6. Add basic SEO: page titles, meta descriptions, Open Graph tags, `favicon`, `robots.txt`, `sitemap.xml`.
  7. Avoid third-party CDNs and trackers. Self-host fonts and scripts, or use system fonts.
- **Relevant Context:** Files to create: `index.html`, `en/index.html`, and the showtimes, prices and contact pages in both languages. The user supplies the real cinema content and images.
- **Status:** [x] done (draft content, awaiting user review)
- **Completion Notes (for Sub-Task 3 and later):**
  - **Content decisions from the user:** the cinema is mobile and does pop-up events, so there are no opening hours and no fixed venue. Admission is free (no prices page). Base is Tsintzina, Laconia. No phone. Email `info@cinematakis.gr` is not set up yet, so the contact pages show "Coming soon" with a `TODO` comment. The name comes from "cinema" + "Takis", the owner's nickname.
  - **Pages changed from the original plan:** "Showtimes" became **Events** and "Prices and Info" was dropped. Pages now are home, events and contact in both languages (`/`, `/events/`, `/contact/`, `/en/`, `/en/events/`, `/en/contact/`).
  - **Draft branding (to be replaced when real branding exists):** tagline "Ο κινηματογράφος που έρχεται σε σένα" / "The cinema that comes to you". Dark theme with amber accent (`--accent: #f2a93b`) set as CSS variables at the top of `assets/css/style.css`. A simple film-reel logo is in `assets/img/logo.svg` (also used as favicon). No photos yet.
  - **SEO:** each page has a title, description, canonical, `hreflang` (el, en, x-default) and Open Graph tags. `robots.txt` and `sitemap.xml` use `https://cinematakis.gr/`, so they only fully work after Sub-Task 6. No `og:image` yet.
  - **Paths:** all CSS, image and page links are relative. Canonical and `hreflang` URLs are absolute `https://cinematakis.gr/...`.
  - **Events page for Sub-Task 3:** `events/index.html` and `en/events/index.html` contain `<div class="notice" id="events">` with a "schedule coming soon" message. `showtimes.js` should render into `#events` and keep that message when there are no upcoming events. Each event needs: film title (el, en), date, time, **location name (el, en)**, optional note. Free admission means no price field. The `assets/js/` folder still holds its `.gitkeep`.
  - No map embed and no contact form were added (not needed for a mobile cinema).
  - Verified locally that all internal `href` and `src` links resolve. Pages have not been checked in a browser yet (Sub-Task 4).

## Sub-Task 3: Data-driven showtimes

- **Intent:** Let the user update movies and showtimes by editing one data file, without touching the HTML.
- **Expected Outcomes:** `data/movies.json` (or similar) holds movies (Greek and English title, synopsis, poster, duration, rating) and their showtimes. The showtimes page and home page render from it in the correct language.
- **Todo List:**
  1. Define a simple JSON schema: movie id, bilingual title and description, poster path, duration, age rating, and a list of date and time showings.
  2. Write a small vanilla JS module (`assets/js/showtimes.js`) that fetches the JSON and renders the list for the current page language. It must escape or safely insert text (use `textContent`, not `innerHTML`) and handle a missing or invalid file with a friendly message.
  3. Show only upcoming showings, and group by date.
  4. Add sample data and a `docs/updating-showtimes.md` guide with step-by-step instructions for a beginner. It should cover editing on GitHub's web UI or locally, then commit and push.
  5. Add a basic `<noscript>` fallback message.
- **Relevant Context:** `data/`, `assets/js/`, `docs/`.
- **Status:** [ ] pending

## Sub-Task 4: Local preview and quality checks

- **Intent:** Verify the site works before publishing.
- **Expected Outcomes:** The site can be previewed locally. Links, accessibility and mobile layout have been checked.
- **Todo List:**
  1. Document how to preview locally. Use the VS Code Live Server extension, or `python -m http.server` bound to `127.0.0.1`. The JSON fetch will not work when opening files directly via `file://`.
  2. Check all internal links and both languages.
  3. Run Lighthouse in the browser for accessibility, SEO and performance.
  4. Test on a phone-sized viewport.
- **Relevant Context:** `README.md`, `docs/`.
- **Status:** [ ] pending

## Sub-Task 5: Deploy with GitHub Pages

- **Intent:** Publish the site on a free `*.github.io` URL first, to confirm the deployment works before touching DNS.
- **Expected Outcomes:** The site is live at `https://<username>.github.io/cinematakis/`, or at the root of a user site if preferred, and updates automatically on every push to `main`.
- **Todo List:**
  1. In the GitHub repo, open Settings > Pages and set the source to "Deploy from a branch" with `main` and `/ (root)`.
  2. Wait for the first deployment and verify the site loads.
  3. Check that asset paths work under the project sub-path. Use relative paths, or move to a custom domain right away (Sub-Task 6) so root-absolute paths work.
- **Relevant Context:** GitHub repo Settings > Pages.
- **Status:** [ ] pending

## Sub-Task 6: Connect cinematakis.gr (papaki.com DNS)

- **Intent:** Serve the site from the purchased domain over HTTPS.
- **Expected Outcomes:** `https://cinematakis.gr` and `https://www.cinematakis.gr` both load the site. HTTP redirects to HTTPS. A valid certificate is issued by GitHub.
- **Todo List:**
  1. Add a `CNAME` file at the repo root containing `cinematakis.gr` (or set the custom domain in Settings > Pages, which creates it).
  2. In the papaki.com control panel, open the DNS management for `cinematakis.gr`. Check whether papaki's default nameservers are in use. Keep any existing MX and TXT records for email.
  3. Remove any conflicting default A or CNAME records for `@` and `www` (parking pages).
  4. Add four `A` records for `@` pointing to GitHub Pages' IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`. Confirm the current IPs in GitHub's official docs before entering them.
  5. Optionally add four `AAAA` records for IPv6 (see GitHub docs).
  6. Add a `CNAME` record for `www` pointing to `<username>.github.io`.
  7. In GitHub Settings > Pages, enter `cinematakis.gr` as the custom domain and wait for the DNS check to pass.
  8. Enable "Enforce HTTPS" once the certificate is provisioned. DNS propagation can take some time.
  9. Consider verifying the domain in GitHub account settings (Pages > Add a domain) to prevent domain takeover.
  10. Test the apex domain, `www`, and HTTP-to-HTTPS redirect.
- **Relevant Context:** papaki.com control panel (DNS zone editor), GitHub Pages custom domain documentation, the `CNAME` file in the repo root.
- **Status:** [ ] pending

## Sub-Task 7: Documentation and handover

- **Intent:** Make the project maintainable by a beginner and keep documentation in git, as requested.
- **Expected Outcomes:** `docs/` contains clear, short guides. The README links to them.
- **Todo List:**
  1. Write `docs/architecture.md` (what the site is and how it is deployed).
  2. Write `docs/dns-and-domain.md` (the papaki records set, renewal date reminder, how to roll back).
  3. Write `docs/updating-showtimes.md` (from Sub-Task 3) and `docs/adding-pages-or-images.md`.
  4. Write a short "future ideas" note: CMS, Astro migration, ticketing integration, newsletter.
  5. Remind the user to enable domain auto-renewal at papaki.com and 2FA on GitHub and papaki.
- **Relevant Context:** `docs/`, `README.md`.
- **Status:** [ ] pending

---

## Open Items to Confirm Before or During Implementation
- Cinema content: name, address, phone, hours, prices, logo, photos, brand colours.
- Whether to embed a map, or only link to one.
- Whether a contact form is wanted (this would need a third-party service, so it is not included by default).
- Whether any email address on `cinematakis.gr` is already configured at papaki (affects the DNS steps).
