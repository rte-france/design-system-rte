# Design System RTE — CI/CD Workflow

---

## Overview

Our design system uses a **Changesets-based release workflow** with automated CI on pull requests and main, manual release via `release.ts`, and automatic deployment of Storybook to GitHub Pages when tags are pushed.

---

## End-to-End Flow

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│  DEVELOPER WORKFLOW                                                             │
└─────────────────────────────────────────────────────────────────────────────────┘

  ┌──────────────┐      ┌──────────────────────┐      ┌──────────────────────┐
  │  Create PR   │ ───► │  Pull Request CI     │ ───► │  Merge to main       │
  │              │      │  • Lint & Tests      │      │                      │
  │              │      │  • Build validation  │      │                      │
  └──────────────┘      └──────────────────────┘      └──────────┬───────────┘
                                                                 │
                                                                 ▼
  ┌──────────────────────┐      ┌──────────────────────┐      ┌──────────────────────┐
  │  Publish & Deploy    │ ◄─── │  Run release.ts      │ ◄─── │  Main CI             │
  │  (tag pushed)        │      │  (manual, local)     │      │  • Build packages    │
  │  • Deploy.yaml       │      │  • Publish to npm    │      │  • Changesets PR     │
  │  • GitHub Pages      │      │  • Create tag        │      │  • Changelog         │
  └──────────────────────┘      └──────────────────────┘      └──────────────────────┘
```

---

## Workflow Details

### 1. Pull Request CI

| Trigger | Events |
|---------|--------|
| **When** | Every pull request to `main` (except Dependabot) |

| Step | Description |
|------|-------------|
| SonarQube | Code quality and security analysis |
| Global setup | Install dependencies, generate icons, build core package |
| React quality | Lint, build, and run tests for React package |
| Angular quality | Lint and run tests for Angular package |
| Core quality | Lint core package |

**Purpose:** Validate code before merging. No merge unless all checks pass.

---

### 2. Main CI

| Trigger | Events |
|---------|--------|
| **When** | Every push to `main` |

| Step | Description |
|------|-------------|
| Global setup | Install deps, generate icons, build core, cache artifacts |
| React pipeline | Lint → Build → Test (sequential) |
| Angular pipeline | Lint → Test (parallel with React) |
| Prepare release | [Changesets](https://github.com/changesets/changesets) creates or updates a release PR |
| Changelog | Auto-generate changelog in the release PR |
| Storybook preview | Trigger preview for the `changeset-release/main` branch |

**Purpose:** Build both frameworks, prepare version bumps, and preview the release Storybook.

---

### 3. Storybook Preview

| Trigger | Events |
|---------|--------|
| **When** | Push to any branch *except* `main`, or manual trigger |

| Step | Description |
|------|-------------|
| Build | Generate icons, build React & Core, build both Storybooks |
| Deploy | Publish to `preview/<branch-slug>/` on GitHub Pages |

**Purpose:** Preview Storybook for feature branches and release PRs before merging.

**URL pattern:** `https://opensource.rte-france.com/design-system-rte/preview/<branch-slug>/`

---

### 4. Cleanup Preview

| Trigger | Events |
|---------|--------|
| **When** | Pull request closed (merged or abandoned) |

| Step | Description |
|------|-------------|
| Cleanup | Remove `preview/<branch-slug>/` from GitHub Pages |

**Purpose:** Keep GitHub Pages tidy by removing obsolete previews.

---

### 5. Production Deploy

| Trigger | Events |
|---------|--------|
| **When** | Any tag push (e.g. `release-2025-02-09`) |

| Step | Description |
|------|-------------|
| Resolve tag | Get latest date-based release tag |
| Build | Generate icons, build React & Core, build both Storybooks |
| Deploy | Publish to GitHub Pages root (production) |

**Purpose:** Deploy the production Storybook documentation for each release.

---

## Release Process (Manual)

Releases are triggered locally with `npm run release` after the Changesets release PR is merged:

| Step | Command / Action |
|------|------------------|
| 1. Publish packages | `npm run publish:all` → publishes to npm registry |
| 2. Create release tag | `npm run tag-release` → creates date-based tag (e.g. `release-2025-02-09`) |
| 3. Push tag | `git push origin <tag>` → triggers Deploy workflow |

```bash
npm run release
```

---

## Summary

| Phase | Automation | Owner |
|-------|------------|-------|
| **CI** | Pull Request & Main workflows validate and build | Automated |
| **Release prep** | Changesets creates release PRs, changelog | Automated |
| **Publish** | `release.ts` publishes packages and pushes tag | Manual |
| **CD** | Deploy workflow publishes Storybook to GitHub Pages | Automated |
| **Previews** | Storybook previews for branches, cleanup on PR close | Automated |

---

## Diagram — High-Level

```
                    ┌─────────────────────────────────────────┐
                    │              GITHUB REPOSITORY          │
                    └─────────────────────────────────────────┘
                                        │
         ┌──────────────────────────────┼────────────────────────────┐
         │                              │                            │
         ▼                              ▼                            ▼
  ┌─────────────┐               ┌─────────────┐               ┌─────────────┐
  │  PR opened  │               │ Push to     │               │  Tag push   │
  │             │               │ main        │               │             │
  └──────┬──────┘               └──────┬──────┘               └──────┬──────┘
         │                             │                             │
         ▼                             ▼                             ▼
  ┌─────────────┐               ┌─────────────┐               ┌─────────────┐
  │ PR CI       │               │ Main CI     │               │ Deploy      │
  │ Lint • Test │               │ Build •     │               │ Storybook   │
  │ Build       │               │ Changesets  │               │ → GH Pages  │
  └─────────────┘               └──────┬──────┘               └─────────────┘
         │                             │
         │                             │  (merge release PR)
         │                             │
         │                             ▼
         │                      ┌─────────────┐
         │                      │ release.ts  │  ◄── Manual
         │                      │ (local)     │
         │                      └──────┬──────┘
         │                             │
         │                             │  (push tag)
         │                             │
         │                             └──────────────────────────► Deploy
         │
         ▼
  ┌─────────────┐     PR closed
  │ Storybook   │ ─────────────────► Cleanup Preview
  │ Preview     │
  └─────────────┘
```

---

*Last updated: February 2025*
