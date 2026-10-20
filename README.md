# Kigurumi Mask Studio

Static site for GitHub Pages. No build step.

```
index.html      Gallery
links.html      Link page
css/style.css   Styles and colors (top of file)
js/main.js      Footer year + missing-image fallback
assets/         avatar.jpg goes here
assets/masks/   mask-1.jpg ... mask-6.jpg go here
```

## Deploy
1. Push this folder to a GitHub repo.
2. Settings > Pages > Deploy from a branch > `main` / root.

## Edit
- **Photos:** drop files into `assets/masks/` using the names in `index.html` (or edit the `src`). Empty frames show "Add a photo".
- **Links:** edit the `<a class="btn">` lines in `links.html`.
- **Colors:** change the variables at the top of `css/style.css`.
