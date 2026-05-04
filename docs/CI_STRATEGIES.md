# CI strategies: affected packages, hotfix, and changeset-release

This repo is a multi-package design system:
- `packages/core` is the shared foundation.
- `packages/react` and `packages/angular` build on top of `core`.

The CI is designed to be **safe by default** while avoiding wasted time by running only what is relevant to a change.

## Core principle: detect affected packages

Every CI run starts by deciding which package(s) are affected by the diff.

### Rules

- **If `packages/core/**` changes** → affected: `core`, `react`, `angular`
- **If `packages/react/**` changes** → affected: `core`, `react`
- **If `packages/angular/**` (or `packages/angular/projects/ds-rte-lib/**`) changes** → affected: `core`, `angular`
- **Otherwise** (docs, markdown, etc.) → affected: `core` only (minimal lane)

Why `core` is always included: it is the shared dependency and must keep building.

## Default CI behavior (non-hotfix PRs)

For a normal PR targeting `main`:
- Install dependencies (`npm ci`)
- Generate icons **only if React or Angular is affected** (icon generation touches both frameworks)
- Build `core` (always)
- Run package checks only for affected packages
  - React jobs only when React is affected
  - Angular jobs only when Angular is affected
- Heavy jobs (example: Sonar) run only outside of hotfix / changeset-release modes

## Hotfix mode (`hotfix/*`)

Create a branch named `hotfix/<short-description>` when you need a fast turnaround.

Examples:
- `hotfix/missing-comma-react`
- `hotfix/button-style-fix`

In hotfix mode the CI keeps a minimal safety baseline:
- Install dependencies
- Generate icons if needed
- Build `core` (always)

And **skips the heavy/slow package quality lanes**:
- Skip `quality-react`
- Skip `quality-angular`
- Skip Sonar/deep scans

The goal is to validate that the repo still builds coherently (especially `core`) while reducing turnaround time.

## Changesets release PR mode (`changeset-release/*`)

The Changesets automation creates PRs with a branch name like `changeset-release/main`.

These PRs typically:
- modify `.md` files (changelog/changeset files)
- bump versions in `package.json` (and sometimes update lockfiles)

### Pull request CI (GitHub knows the branch name)

For PRs whose **head branch** starts with `changeset-release/`, CI runs a **minimal lane**:
- Install dependencies
- Build `core` (or a core smoke build)
- Skip React/Angular build/test/quality jobs
- Skip heavy scanning jobs (Sonar, etc.)

This keeps the PR mergeable without spending full CI time on changes that do not affect runtime code.

### Main CI after merging the release PR (GitHub does not expose the merged branch name)

On `push` to `main`, GitHub Actions does not provide `github.head_ref`, so we detect merges from `changeset-release/*` by inspecting the **latest commit message** for `changeset-release/` (typical GitHub merge commits include the branch name).

Notes:
- If your repository uses **squash merges** for these PRs, the default squash message may **not** include `changeset-release/`, and `main` CI may run the full lane for that push. If that happens, adjust the squash merge title/body to include `changeset-release/` or prefer a regular merge commit for release PRs.

## Changesets policy (important)

CI **does not enforce** that every PR includes a changeset.

Developers decide:
- Add a changeset when the change should ship as a version bump and appear in changelogs.
- Skip changesets for trivial/minor patches when you intentionally do not want to introduce changelog noise.

## Quick decision guide

- **Need a fast hotfix** → branch `hotfix/*`
- **Working on React-only change** → normal branch; CI runs React lane only
- **Working on Angular-only change** → normal branch; CI runs Angular lane only
- **Changing `core`** → CI runs both React + Angular lanes (because both depend on core)
- **Reviewing a changeset release PR** → `changeset-release/*` minimal lane

