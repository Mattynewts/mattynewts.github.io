# Matthew Newton Portfolio Template

A responsive, accessible static portfolio for GitHub Pages. No build tools or dependencies are required.

## Customize first

Search the entire project for `YOUR-USERNAME`, `YOUR-PROFILE`, `your.email@example.com`, `#`, and `Replace`. Update the biography, projects, publications, course history, links, and metadata. Replace the SVG placeholders and add `assets/Matthew-Newton-CV.pdf`.

## Preview locally

Open `index.html` directly, or from this folder run:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a repository named `YOUR-USERNAME.github.io` for a user site, or use any repository name for a project site.
2. Upload these files to the repository root and push to `main`.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/(root)`, then save.

For a project site, relative links in this template will continue to work. Update sitemap URLs to include the repository name.

## Optional custom domain

Configure the domain in **Settings → Pages** before changing DNS. If publishing from a branch, GitHub can add a `CNAME` file to the source branch. Follow GitHub's current custom-domain documentation rather than copying old DNS values.

## Structure

- `index.html`: homepage
- `about.html`, `research.html`, `publications.html`, `teaching.html`, `cv.html`, `contact.html`: content pages
- `404.html`: custom not-found page
- `assets/css/styles.css`: all styling and responsive rules
- `assets/js/main.js`: mobile navigation, current year, publication filtering
- `assets/img/`: replaceable SVG placeholders
- `robots.txt`, `sitemap.xml`: search-engine basics
- `.nojekyll`: serve the files directly without Jekyll processing

## Notes

- The contact page uses a mail link, not a server-side form. Static GitHub Pages cannot securely process form submissions by itself.
- Google Fonts are loaded from the web. Remove the `@import` line and change font families if you prefer fully local assets.
- Test all external links and PDF downloads before publishing.
