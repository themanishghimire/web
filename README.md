# ghimiremanish.com.np — Source Files

Personal SEO specialist website for Manish Ghimire, built as a static HTML/CSS/JS
site for GitHub Pages.

## Pages

| File | Page |
|---|---|
| `index.html` | Home |
| `about.html` | About |
| `services.html` | Services |
| `portfolio.html` | Case Studies |
| `resume.html` | Resume (with PDF download) |
| `contact.html` | Contact form |
| `404.html` | Custom "page not found" |
| `thank-you.html` | Shown after a contact form submission |
| `style.css` | Shared design system / styles |
| `script.js` | Mobile nav toggle |
| `assets/manish.jpg` | Profile photo |
| `assets/Manish_Ghimire_CV.pdf` | Downloadable resume PDF |
| `CNAME` | Keeps the custom domain (ghimiremanish.com.np) working on GitHub Pages |

## 1. Upload to GitHub

1. Go to your existing repo (the one currently serving ghimiremanish.com.np).
2. Delete the old files (`contact.html`, `index.html`, `resume.html`, `services.html`,
   `style.css`, `script.js`, `profile.jpg`, `title.png`) — or just add these new ones,
   since filenames match and will overwrite them.
3. Upload all files from this folder, keeping the same structure (the `assets/`
   folder must stay as a folder).
4. Commit directly to `main`.

GitHub Pages will redeploy automatically within a minute or two.

## 2. Make the contact form actually work (2 minutes, one-time)

The form on `contact.html` uses **Formspree** — a free service that lets static
sites like GitHub Pages receive form submissions by email, no backend needed.

1. Go to https://formspree.io and sign up free.
2. Create a new form. It will give you a form endpoint like:
   `https://formspree.io/f/abcd1234`
3. Open `contact.html`, find this line near the top of the `<form>` tag:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. Replace `YOUR_FORM_ID` with your real ID from Formspree.
5. Commit the change.

Until you do this, the form will show a Formspree error on submit instead of
sending you an email — so this step matters.

## 3. Optional next steps

- Add real client results (with permission) to `portfolio.html` once you have
  before/after Search Console or GA4 data to share.
- Add your GitHub, X/Twitter, or other profiles to the footer links if you'd
  like more of them listed.
- Swap the placeholder tool list / niches text if your focus shifts.

## Notes

- Fonts (Poppins + JetBrains Mono) load from Google Fonts via `<link>` tags —
  no build step needed.
- All pages are fully responsive (mobile nav collapses to a hamburger menu
  under ~860px width).
- `404.html` is automatically used by GitHub Pages for broken links once the
  site is live.
