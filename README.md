# ghimiremanish.com.np - Source Files

Personal SEO specialist website for Manish Ghimire, built as a static HTML/CSS/JS
site for GitHub Pages, with clean (extensionless) URLs and all images/files kept
at the root so they're easy to re-sort into your own asset folder if you want.

## Pages (clean URLs, no `.html` in any link)

| File | URL | Page |
|---|---|---|
| `index.html` | `/` | Home |
| `about/index.html` | `/about/` | About |
| `services/index.html` | `/services/` | Services |
| `projects/index.html` | `/projects/` | Projects (SEO process, case examples, FAQ) |
| `resume/index.html` | `/resume/` | Resume (with PDF download) |
| `contact/index.html` | `/contact/` | Contact form |
| `thank-you/index.html` | `/thank-you/` | Shown after a contact form submission (noindex) |
| `404.html` | — | Custom "page not found" (noindex), must stay at the root for GitHub Pages |

Each inner page lives in its own folder as `index.html`, which is what gives you
a clean URL like `/about/` instead of `/about.html`. This works automatically on
GitHub Pages (and virtually every static host) with no extra configuration.

## Shared files (all at the root, no `assets/` folder)

| File | Purpose |
|---|---|
| `style.css` | Shared design system / styles |
| `script.js` | Mobile nav toggle |
| `manish.jpg` | Profile photo |
| `logo.png` | Logo used in the nav bar |
| `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `favicon-192.png`, `favicon-512.png`, `apple-touch-icon.png` | Favicon set |
| `Manish_Ghimire_CV.pdf` | Downloadable resume PDF |
| `robots.txt` | Tells search engines which pages to crawl |
| `sitemap.xml` | Lists all pages for search engines |
| `CNAME` | Keeps the custom domain (ghimiremanish.com.np) working on GitHub Pages |

All of these are plain files at the top level (not inside a subfolder), so if
you want to organize them into your own `assets/`, `images/`, etc., you can move
them freely, just update the matching `href="/..."` / `src="/..."` paths in the
HTML and CSS to match your new locations.

## SEO built in

Since this is an SEO specialist's own site, it practices what it preaches:

- Unique title and meta description on every page
- Clean, extensionless URLs with trailing slashes (`/about/`, not `/about.html`)
- `meta name="robots" content="index, follow"` on every real content page.
  The two utility pages (`404.html`, `/thank-you/`) are intentionally kept
  `noindex` since they're not content pages.
- Canonical tag on every page, matching the clean URL structure
- Internal links use root-relative paths (`/about/`, `/services/`, etc.) so
  there's exactly one URL per page, no duplicate `.html` vs extensionless
  versions competing in search results
- Open Graph and Twitter Card tags for clean social link previews
- JSON-LD structured data: `ProfessionalService` + `Person` schema on the
  homepage, `Person` schema on About, `Service` schema (with an offer catalog
  of all 8 services) on Services
- `robots.txt` + `sitemap.xml` for crawlability
- Semantic heading hierarchy (one `h1` per page) and descriptive `alt` text
  on images
- Fast-loading: no build step, no heavy JS frameworks, fonts loaded via `<link>`

**One thing to double check after upload:** open each page with Google's
Rich Results Test (search.google.com/test/rich-results) to confirm the
structured data validates once the domain is live.

## 1. Upload to GitHub

1. Go to your existing repo (the one currently serving ghimiremanish.com.np).
2. Upload all files and folders from this package, keeping the same structure
   (each page's `index.html` must stay inside its own folder, e.g.
   `about/index.html`, so the clean URL works).
3. Commit directly to `main`.

GitHub Pages will redeploy automatically within a minute or two.

## 2. Make the contact form actually work (2 minutes, one time)

The form on `/contact/` uses Formspree, a free service that lets static
sites like GitHub Pages receive form submissions by email with no backend
needed.

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

- Add real client results (with permission) to `/projects/` once you have
  before/after Search Console or GA4 data to share for any of the project
  examples.
- Swap the placeholder tool list or niches text if your focus shifts.
- Move the root-level images/PDF into your own asset folder if you'd like,
  just update the matching paths in the HTML/CSS afterward.

## Notes

- Fonts (Poppins + JetBrains Mono) load from Google Fonts via `<link>` tags,
  no build step needed.
- All pages are fully responsive (mobile nav collapses to a hamburger menu
  under about 860px width).
- `404.html` is automatically used by GitHub Pages for broken links once the
  site is live.
- Social icons (LinkedIn, GitHub, Facebook, Instagram) appear next to the
  homepage profile photo and throughout the footer on every page.
