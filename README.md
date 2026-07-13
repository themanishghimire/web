# ghimiremanish.com.np - Source Files

Personal SEO specialist website for Manish Ghimire, built as a static HTML/CSS/JS
site for GitHub Pages.

## Pages

| File | Page |
|---|---|
| `index.html` | Home |
| `about.html` | About |
| `services.html` | Services |
| `projects.html` | Selected Projects (SEO process, case examples, FAQ) |
| `resume.html` | Resume (with PDF download) |
| `contact.html` | Contact form |
| `404.html` | Custom "page not found" (noindex) |
| `thank-you.html` | Shown after a contact form submission (noindex) |
| `style.css` | Shared design system / styles |
| `script.js` | Mobile nav toggle |
| `assets/manish.jpg` | Profile photo |
| `assets/logo.png` | Logo used in the nav bar |
| `assets/favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png` | Favicon set generated from your logo |
| `favicon.ico` | Fallback favicon for older browsers |
| `assets/Manish_Ghimire_CV.pdf` | Downloadable resume PDF |
| `robots.txt` | Tells search engines which pages to crawl |
| `sitemap.xml` | Lists all pages for search engines |
| `CNAME` | Keeps the custom domain (ghimiremanish.com.np) working on GitHub Pages |

## SEO built in

Since this is an SEO specialist's own site, it practices what it preaches:

- Unique title and meta description on every page, using your exact requested
  homepage title/description
- `meta name="robots" content="index, follow"` on every real content page.
  The two utility pages (`404.html`, `thank-you.html`) are intentionally kept
  `noindex` since they're not content pages. Indexing a "thank you" or error
  page just creates thin, duplicate-feeling entries in search results with
  nothing useful for a searcher to land on. Say the word if you'd rather
  I switch these to `index, follow` too.
- Canonical tag on every page. The homepage canonical points to the root
  domain (`https://ghimiremanish.com.np/`)
- Internal links to the homepage use `/` instead of `index.html`, from the
  logo, the site name, and the "Home" nav link. This avoids the two-URLs-one-page
  issue where search engines might treat `/` and `/index.html` as separate,
  competing pages
- Open Graph and Twitter Card tags for clean social link previews
- JSON-LD structured data: `ProfessionalService` + `Person` schema on the
  homepage, `Person` schema on About, `Service` schema (with an offer catalog
  of all 8 services) on Services
- `robots.txt` + `sitemap.xml` for crawlability
- Semantic heading hierarchy (one `h1` per page) and descriptive `alt` text
  on images
- No em dashes or en dashes anywhere in the on-page copy
- Fast-loading: no build step, no heavy JS frameworks, fonts loaded via `<link>`

**One thing to double check after upload:** open each page with Google's
Rich Results Test (search.google.com/test/rich-results) to confirm the
structured data validates once the domain is live.

## 1. Upload to GitHub

1. Go to your existing repo (the one currently serving ghimiremanish.com.np).
2. Delete `portfolio.html` since it's replaced by `projects.html`.
3. Upload all files from this folder, keeping the same structure (the `assets/`
   folder must stay as a folder).
4. Commit directly to `main`.

GitHub Pages will redeploy automatically within a minute or two.

## 2. Make the contact form actually work (2 minutes, one time)

The form on `contact.html` uses Formspree, a free service that lets static
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
  before/after Search Console or GA4 data to share for any of the four project
  examples.
- Swap the placeholder tool list or niches text if your focus shifts.

## Notes

- Fonts (Poppins + JetBrains Mono) load from Google Fonts via `<link>` tags,
  no build step needed.
- All pages are fully responsive (mobile nav collapses to a hamburger menu
  under about 860px width).
- `404.html` is automatically used by GitHub Pages for broken links once the
  site is live.
- Facebook and Instagram links now appear in the footer on every page.
