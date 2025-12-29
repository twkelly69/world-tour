# World Tour

A minimal static itinerary site ready to publish with GitHub Pages.

## Local preview

Open the static HTML directly in your browser:

```bash
open site/index.html  # or start a simple server: python -m http.server --directory site 8000
```

## Deploying to GitHub Pages

1. Push this branch to GitHub.
2. In the repository settings, enable **GitHub Pages** and choose **GitHub Actions** as the source.
3. The included workflow `.github/workflows/pages.yml` publishes the contents of `site/` to Pages on every push to the `work` branch.
4. After the workflow completes, your site will be available at the URL shown in the deployment summary.

## Customizing

- Edit `site/index.html` for the itinerary content.
- Adjust styles in `site/styles.css`.
- If you use a different default branch, update the `branches` list in `.github/workflows/pages.yml` to match.
