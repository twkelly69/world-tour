# World Tour

A static landing page that highlights an 18-city, 60-day global journey. The site is designed to be deployed automatically to GitHub Pages via GitHub Actions.

## Local development

1. Open `site/index.html` in your browser to preview the page. No build tooling is required.
2. Update content in `site/index.html`, `site/styles.css`, or `site/script.js` as needed.

## Deployment

GitHub Pages is handled by the `Deploy static site to Pages` workflow in `.github/workflows/deploy.yml`.

Steps to enable deployment in your repository:

1. Push the `work` branch to GitHub.
2. In **Settings → Pages**, choose "GitHub Actions" as the source.
3. The workflow will upload the `site/` directory as a Pages artifact and publish it to the `github-pages` environment on each push.

You can monitor runs in **Actions → Deploy static site to Pages**.
