# ghimiremanish.com.np - Source Files

Personal SEO specialist website for Manish Ghimire, built as a static HTML/CSS/JS
site for GitHub Pages. Everything lives in **one flat folder** (no subfolders),
and every internal link is a clean URL with no `.html` extension.

## Structure

| File | Page / URL |
|---|---|
| `index.html` | Home (`/`) |
| `about` | About (`/about`) |
| `services` | Services (`/services`) |
| `projects` | Projects (`/projects`, SEO process, case examples, FAQ) |
| `resume` | Resume (`/resume`, with PDF download) |
| `contact` | Contact form (`/contact`) |
| `thank-you` | Shown after a contact form submission (`/thank-you`, noindex) |
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
| `.nojekyll` | Tells GitHub Pages to serve files as-is, with no Jekyll build step |

Every image, the CV, and the favicons sit at the top level (no `assets/`
folder), so you can move them into your own asset/media folder later and just
update the paths (e.g. `/manish.jpg`, `/logo.png`) in the affected files.

## Important: about `/about` vs `/about.html`

Files like `about`, `services`, `contact`, etc. have **no file extension** on
purpose, this is what makes the URLs clean (`/about` instead of
`/about.html`). This relies on GitHub Pages serving extension-less files with
the correct `text/html` content type, which it does by default for static
(non-Jekyll) sites, especially with the included `.nojekyll` file.

If you ever move this site to a different static host and pages show up as a
download or plain text instead of rendering, that host doesn't support
extension-less HTML the same way. The fix in that case is to rename each file
back to `name.html` and add that host's redirect/rewrite rule to map
`/about` -> `/about.html` (most hosts like Netlify or Vercel support this
easily), or use a folder-per-page (`about/index.html`) structure instead, which
gives you a trailing-slash URL like `/about/`.

## SEO built in

Since this is an SEO specialist's own site, it practices what it preaches:

- Unique title and meta description on every page
- Canonical tags and Open Graph / Twitter Card tags matching the clean URLs
- `meta name="robots" content="index, follow"` on every real content page.
  The two utility pages (`404.html`, `thank-you`) are intentionally kept
  `noindex` since they're not content pages.
- JSON-LD structured data: `ProfessionalService` + `Person` schema on the
  homepage, `Person` schema on About, `Service` schema (with an offer catalog
  of all 8 services) on Services
- `robots.txt` + `sitemap.xml` (clean URLs) for crawlability
- Semantic heading hierarchy (one `h1` per page) and descriptive `alt` text
  on images
- Fast-loading: no build step, no heavy JS frameworks, fonts loaded via `<link>`

**One thing to double check after upload:** open each page with Google's
Rich Results Test (search.google.com/test/rich-results) to confirm the
structured data validates once the domain is live, and click through every
nav link once live to confirm `/about`, `/services`, `/projects`, `/resume`,
and `/contact` all render properly (see the note above).

## 1. Upload to GitHub

1. Go to your existing repo (the one currently serving ghimiremanish.com.np).
2. Delete any old files this replaces (old `.html` files, the old `assets/`
   folder, etc.).
3. Upload everything from this folder, including the hidden `.nojekyll` file.
4. Commit directly to `main`.

GitHub Pages will redeploy automatically within a minute or two.

## 2. Make the contact form actually work (2 minutes, one time)

The form in `contact` uses Formspree, a free service that lets static sites
like GitHub Pages receive form submissions by email with no backend needed.

1. Go to formspree.io and sign up free.
2. Create a new form. It will give you a form endpoint like:
   `https://formspree.io/f/abcd1234`
3. Open `contact`, find this line near the top of the `<form>` tag:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. Replace `YOUR_FORM_ID` with your real ID from Formspree.
5. Commit the change.

Until you do this, the form will show a Formspree error on submit instead of
sending you an email, so this step matters.

## 3. Optional next steps

- Add real client results (with permission) to `projects` once you have
  before/after Search Console or GA4 data to share for any of the project
  examples.
- Swap the placeholder tool list or niches text if your focus shifts.
- If you move images/PDF/favicons into your own asset folder, update the
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
