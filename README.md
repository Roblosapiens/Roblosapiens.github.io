# Roblosapiens.github.io

Astro portfolio site for [https://roblosapiens.github.io](https://roblosapiens.github.io).

| URL | Source |
|-----|--------|
| `/` | Home — project cards from `src/data/projects.ts` |
| `/old-world/` | Warhammer: The Old World links |
| `/owb-renegade-drafts/` | OWB app (separate repo) |

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Deploy

Push to `main`. GitHub Actions builds Astro and deploys to GitHub Pages.

**One-time:** In repo **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from branch”).

## Add a new project

1. Add a card in `src/data/projects.ts` (`projects` array).
2. Add page content in `src/data/projects.ts` (`projectPages` record).
3. Create `src/pages/<slug>/index.astro`:

```astro
---
import ScrollLayout from "../../layouts/ScrollLayout.astro";
import LinkCard from "../../components/LinkCard.astro";
import { projectPages } from "../../data/projects";

const project = projectPages["your-slug"];
---

<ScrollLayout
  title={project.title}
  description={project.description}
  ornament={project.ornament}
  tagline={project.intro}
  introBox
  showBackLink
>
  {
    project.sections.map((section) => (
      <section>
        <h2>{section.heading}</h2>
        <ul>
          {section.links.map((link) => (
            <li>
              <LinkCard {...link} />
            </li>
          ))}
        </ul>
      </section>
    ))
  }
</ScrollLayout>
```

## Structure

```
src/
  components/     LinkCard, ScrollFooter
  data/           projects.ts — cards + project page content
  layouts/        BaseLayout, ScrollLayout (parchment theme)
  pages/          Routes
  styles/         global.css
```
