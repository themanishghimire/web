# ghimiremanish.com.np - Source Files

Personal SEO specialist website for Manish Ghimire, built as a static HTML/CSS/JS
site for GitHub Pages, using clean folder-based URLs (no `.html` in any link).

## Structure

| Path | Page |
|---|---|
| `index.html` | Home (`/`) |
| `about/index.html` | About (`/about/`) |
| `services/index.html` | Services (`/services/`) |
| `projects/index.html` | Projects (`/projects/`, SEO process, case examples, FAQ) |
| `resume/index.html` | Resume (`/resume/`, with PDF download) |
| `contact/index.html` | Contact form (`/contact/`) |
| `thank-you/index.html` | Shown after a contact form submission (`/thank-you/`, noindex) |
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

All images, the CV, and the favicons live at the root (no `assets/` folder),
so you can move them into your own asset/media folder later and just update
the paths in the affected files. Every reference to them uses a root-relative
path (e.g. `/manish.jpg`, `/logo.png`) so they work identically no matter how
deep the page sits.

## Why folders, not flat extension-less files

An earlier version of this site tried plain files with no extension (e.g. a
file literally named `about` instead of `about/index.html`) to get clean
URLs while keeping everything in one folder. That does not work reliably:
browsers and static hosts need either a file extension or a real directory
to know how to serve a page, so extension-less files get offered as a
"download" instead of rendering. Folders with `index.html` inside are the
standard, dependable way every static host (GitHub Pages included) serves
`/about/`-style URLs, so that's what this version uses.

## Clean URLs

Every internal link points to a folder (e.g. `/about/`, `/services/`,
`/projects/`, `/resume/`, `/contact/`) rather than a `.html` file. This works
on GitHub Pages because each page now lives at `<folder>/index.html`, and
GitHub Pages serves `folder/index.html` automatically at `/folder/`.

## SEO built in

Since this is an SEO specialist's own site, it practices what it preaches:

- Unique title and meta description on every page
- Canonical tags and Open Graph / Twitter Card tags updated to the new clean
  URLs
- `meta name="robots" content="index, follow"` on every real content page.
  The two utility pages (`404.html`, `thank-you/index.html`) are intentionally
  kept `noindex` since they're not content pages.
- JSON-LD structured data: `ProfessionalService` + `Person` schema on the
  homepage, `Person` schema on About, `Service` schema (with an offer catalog
  of all 8 services) on Services
- `robots.txt` + `sitemap.xml` (updated to clean URLs) for crawlability
- Semantic heading hierarchy (one `h1` per page) and descriptive `alt` text
  on images
- Fast-loading: no build step, no heavy JS frameworks, fonts loaded via `<link>`

**One thing to double check after upload:** open each page with Google's
Rich Results Test (search.google.com/test/rich-results) to confirm the
structured data validates once the domain is live.

## 1. Upload to GitHub

1. Go to your existing repo (the one currently serving ghimiremanish.com.np).
2. Delete any old `.html` files (`about.html`, `services.html`, etc.) and the
   old `assets/` folder, since the structure has changed to folders with
   `index.html` inside and flattened root-level assets.
3. Upload everything from this folder, keeping the same structure (the
   `about/`, `services/`, `projects/`, `resume/`, `contact/`, and
   `thank-you/` folders must stay as folders, each with its `index.html`
   inside).
4. Commit directly to `main`.

GitHub Pages will redeploy automatically within a minute or two.

## 2. Make the contact form actually work (2 minutes, one time)

The form in `contact/index.html` uses Formspree, a free service that lets
static sites like GitHub Pages receive form submissions by email with no
backend needed.

1. Go to formspree.io and sign up free.
2. Create a new form. It will give you a form endpoint like:
   `https://formspree.io/f/abcd1234`
3. Open `contact/index.html`, find this line near the top of the `<form>` tag:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. Replace `YOUR_FORM_ID` with your real ID from Formspree.
5. Commit the change.

Until you do this, the form will show a Formspree error on submit instead of
sending you an email, so this step matters.

## 3. Optional next steps

- Add real client results (with permission) to `projects/index.html` once you
  have before/after Search Console or GA4 data to share for any of the
  project examples.
- Swap the placeholder tool list or niches text if your focus shifts.
- If you move the images/PDF/favicons into your own asset folder, update the
  root-relative paths (`/manish.jpg`, `/logo.png`, `/Manish_Ghimire_CV.pdf`,
  the favicon links, etc.) across all pages to match the new folder name.

## Notes

- Fonts (Poppins + JetBrains Mono) load from Google Fonts via `<link>` tags,
  no build step needed.
- All pages are fully responsive (mobile nav collapses to a hamburger menu
  under about 860px width).
- `404.html` is automatically used by GitHub Pages for broken links once the
  site is live.
- Social icons (LinkedIn, GitHub, Facebook, Instagram) appear as icon buttons
  on the homepage hero, on the About page photo sidebar, and in the footer of
  every page.
