# Roblosapiens.github.io

Portfolio site for [https://roblosapiens.github.io](https://roblosapiens.github.io).

| Path | Purpose |
|------|---------|
| `/` | Project showcase — one card per project |
| `/old-world/` | Warhammer: The Old World tools and links |
| `/owb-renegade-drafts/` | OWB app (separate repo — [owb-renegade-drafts](https://github.com/Roblosapiens/owb-renegade-drafts)) |

## Adding a new project

1. Create a folder, e.g. `my-project/index.html`.
2. Add one card on `index.html` linking to `/my-project/`.
3. Put project-specific links on that subpage.

## Deploy

This repo powers the root GitHub Pages site. Push to `main`:

```bash
git add .
git commit -m "Update site."
git push
```

The OWB app is deployed separately from the `owb-renegade-drafts` repo via `gh-pages -d build`.
