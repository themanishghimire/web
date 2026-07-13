# ghimiremanish.com.np - Source Files

Personal SEO specialist website for Manish Ghimire. Every file sits in **one
flat folder** (no subfolders anywhere), and every page still gets a clean,
`.html`-free URL like `/about/`, `/services/`, `/projects/`, `/resume/`, and
`/contact/`.

## How the clean URLs work from a flat folder

GitHub Pages builds every site with Jekyll by default. Jekyll lets any page
declare its own output address with a `permalink` in a small front-matter
block at the very top of the file, three dashes, one line, three dashes:

```
---
permalink: /about/
---
<!DOCTYPE html>
...
```

So `about.html` sits flat in the repo right next to everything else, but
Jekyll publishes it at `/about/` (as a real, correctly-served page, not a
download). This is the standard, fully-supported GitHub Pages mechanism for
exactly this situation, no extra config or plugin needed, and no `.nojekyll`
file (this repo intentionally does not include one, since we need Jekyll to
run in order to read these permalinks).

Files with this front-matter block: `about.html`, `services.html`,
`projects.html`, `resume.html`, `contact.html`, `thank-you.html`.
`index.html` and `404.html` are left untouched (GitHub Pages already serves
those correctly at `/` and on any broken link).

**Important:** this only works with Jekyll processing turned on, which is
GitHub Pages' default. Don't add a `.nojekyll` file to this repo, and don't
use a plain non-Jekyll static host (e.g. a raw nginx/Apache file server with
no rewrite rules) for this exact flat-file setup, since those won't read the
front matter and will try to serve `about.html` as literal content instead.
If you ever do move to a host like that, the safe fallback is either
`about/index.html`-style folders, or a host-specific redirect rule mapping
`/about/` to `about.html`.

## Structure

| File | Live URL |
|---|---|
| `index.html` | `/` |
| `about.html` | `/about/` |
| `services.html` | `/services/` |
| `projects.html` | `/projects/` (SEO process, case examples, FAQ) |
| `resume.html` | `/resume/` (with PDF download) |
| `contact.html` | `/contact/` (form) |
| `thank-you.html` | `/thank-you/` (shown after a contact form submission, noindex) |
| `404.html` | Custom "page not found" (noindex), used automatically by GitHub Pages |
| `style.css` | Shared design system / styles |
| `script.js` | Mobile nav toggle |
| `manish.jpg` | Profile photo |
| `logo.png` | Logo used in the nav bar |
| `favicon-16x16.png`, `favicon-32x32.png`, `favicon-192.png`, `favicon-512.png`, `apple-touch-icon.png` | Favicon set generated from your logo |
| `favicon.ico` | Fallback favicon for older browsers |
| `Manish_Ghimire_CV.pdf` | Downloadable resume PDF |
| `robots.txt` | Tells search engines which pages to crawl |
| `sitemap.xml` | Lists all clean-URL pages for search engines |
| `CNAME` | Keeps the custom domain (ghimiremanish.com.np) working on GitHub Pages |

All images, the CV, and the favicons sit at the top level too (no `assets/`
folder), so you can move them into your own asset/media folder later and
just update the paths (e.g. `/manish.jpg`, `/logo.png`) across the pages.

## SEO built in

Since this is an SEO specialist's own site, it practices what it preaches:

- Unique title and meta description on every page
- Canonical tags and Open Graph / Twitter Card tags matching the clean URLs
- `meta name="robots" content="index, follow"` on every real content page.
  The two utility pages (`404.html`, `thank-you.html`) are intentionally kept
  `noindex` since they're not content pages.
- JSON-LD structured data: `ProfessionalService` + `Person` schema on the
  homepage, `Person` schema on About, `Service` schema (with an offer catalog
  of all 8 services) on Services
- `robots.txt` + `sitemap.xml` (clean URLs) for crawlability
- Semantic heading hierarchy (one `h1` per page) and descriptive `alt` text
  on images
- Fast-loading: no build step to run yourself (GitHub does it), no heavy JS
  frameworks, fonts loaded via `<link>`

**One thing to double check after upload:** give GitHub Pages a minute or two
to rebuild, then click every nav link to confirm `/about/`, `/services/`,
`/projects/`, `/resume/`, and `/contact/` all load properly (not download).
Also run each live page through Google's Rich Results Test
(search.google.com/test/rich-results) to confirm the structured data
validates.

## 1. Upload to GitHub

1. Go to your existing repo (the one currently serving ghimiremanish.com.np).
2. Delete any old files this replaces (old `.html` files, any old `assets/`
   folder, any old `.nojekyll` file).
3. Upload everything from this folder, flat, exactly as it is.
4. Commit directly to `main`.

GitHub Pages will rebuild automatically within a minute or two.

## 2. Make the contact form actually work (2 minutes, one time)

The form in `contact.html` uses Formspree, a free service that lets static
sites like GitHub Pages receive form submissions by email with no backend
needed.

1. Go to formspree.io and sign up free.
2. Create a new form. It will give you a form endpoint like:
   `https://formspree.io/f/abcd1234`
3. Open `contact.html`, find this line near the top of the `<form>` tag:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. Replace `YOUR_FORM_ID` with your real ID from Formspree.
5. Commit the change.

Until you do this, the form will show a Formspree error on submit instead of
sending you an email, so this step matters.

## 3. Optional next steps

- Add real client results (with permission) to `projects.html` once you have
  before/after Search Console or GA4 data to share for any of the project
  examples.
- Swap the placeholder tool list or niches text if your focus shifts.
- If you move images/PDF/favicons into your own asset folder, update the
  root-relative paths (`/manish.jpg`, `/logo.png`, `/Manish_Ghimire_CV.pdf`,
  the favicon links, etc.) across all pages to match the new folder name.

## Notes

- Fonts (Poppins + JetBrains Mono) load from Google Fonts via `<link>` tags.
- All pages are fully responsive (mobile nav collapses to a hamburger menu
  under about 860px width).
- `404.html` is automatically used by GitHub Pages for broken links once the
  site is live.
- Social icons (LinkedIn, GitHub, Facebook, Instagram) appear as icon buttons
  on the homepage hero, on the About page photo sidebar, and in the footer of
  every page.
