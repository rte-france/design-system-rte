# Support policy

Luciole (`@design-system-rte/*`) is RTE France's design system, published as npm packages for use in Angular and React applications.

For installation and version compatibility, see [docs/COMPATIBILITY.md](docs/COMPATIBILITY.md).

## Semantic versioning

Each published package follows [Semantic Versioning](https://semver.org/) independently:


| Package                      | Example line | Notes                                   |
| ---------------------------- | ------------ | --------------------------------------- |
| `@design-system-rte/core`    | `1.x`        | Shared tokens, themes, icons, utilities |
| `@design-system-rte/react`   | `1.x`        | React components                        |
| `@design-system-rte/angular` | `3.x`        | Angular components                      |


**Angular, React, and Core do not share the same version number.** A release of `@design-system-rte/angular@3.1.0` may require `@design-system-rte/core@1.14.0`. Always check the [compatibility matrix](docs/COMPATIBILITY.md) rather than assuming matching semver.

- **Patch** — bug fixes, no API changes
- **Minor** — new features, backward compatible
- **Major** — breaking changes (documented in the package CHANGELOG)

Version bumps are managed with [Changesets](https://github.com/changesets/changesets) and recorded in each package's `CHANGELOG.md`.

## Core compatibility

Framework packages declare a compatible `@design-system-rte/core` range using the `**~` (tilde) operator**, which allows patch updates within the same minor line only (for example `~1.14.0` accepts `1.14.x` but not `1.15.0`).


| Consumer | Core relationship                                                                                               |
| -------- | --------------------------------------------------------------------------------------------------------------- |
| Angular  | `@design-system-rte/core` is a **peer dependency** — you must install it alongside `@design-system-rte/angular` |
| React    | `@design-system-rte/core` is a **dependency** — installed automatically with `@design-system-rte/react`         |


When core receives a **minor** bump, framework packages are released in the same batch so their manifests and changelogs stay aligned.

## Getting help

- **Documentation (Storybook):** [opensource.rte-france.com/design-system-rte](https://opensource.rte-france.com/design-system-rte/)
- **Package changelogs:** [packages/core/CHANGELOG.md](packages/core/CHANGELOG.md), [packages/react/CHANGELOG.md](packages/react/CHANGELOG.md), [packages/angular/projects/ds-rte-lib/CHANGELOG.md](packages/angular/projects/ds-rte-lib/CHANGELOG.md)
- **GitHub Issues:** [rte-france/design-system-rte/issues](https://github.com/rte-france/design-system-rte/issues)

## Out of scope

The following are intentionally not part of the consumer support surface:

- **Date-based git tags** (`DD-MM-YYYY.N`) — internal Storybook deploy markers only; consumers should rely on npm package versions

