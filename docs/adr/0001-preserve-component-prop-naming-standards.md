# ADR 0001 — Preserve component public API naming standards

| | |
| --- | --- |
| **Status** | Accepted |
| **Date** | 2025-11-26 |
| **Deciders** | Design System RTE engineering |
| **Related** | [DSR-1118](https://gopro-tickets.rte-france.com/browse/DSR-1118) (Checkbox — label typography and API tweaks) |

## Context

Luciole (`@design-system-rte/angular`, `@design-system-rte/react`, `@design-system-rte/core`) exposes dozens of components consumed by multiple RTE applications. Each public prop name is a long-term contract: documentation, Storybook, Figma–code mapping, and consumer code all depend on stable, predictable naming.

Ticket DSR-1118 proposed several renames for Checkbox, including:

| Proposed name | Previously used in Checkbox |
| --- | --- |
| `isReadOnly` | `readOnly` |
| `descriptionText` | `description` |
| `hasDescription` | *(not used — description optional by content)* |
| `errorText` | `errorMessage` |
| `labelText` | `label` |
| `hasErrorMessage` (new) | *(not used — visibility inferred from `errorMessage`)* |

DSR-1118 also proposed **`hasErrorMessage`** so a standalone Checkbox could show error styling without an inline message when validation copy lives on a parent **Checkbox group**. That flag duplicates information already carried by `errorMessage` and `isError`.

Those proposals are consistent with a “typed suffix” style (`*Text`, `has*`, `is*`). That style is not wrong in isolation, but it conflicts with decisions already applied across the design system and with how web platform APIs name similar concepts.

Today the catalogue is already mixed in a few places — for example `RadioButtonGroup` exposes `isReadOnly` and `errorText` while Checkbox, Text Input, Number Input, and File Upload use `readOnly` and `errorMessage`. Accepting the DSR-1118 renames on Checkbox would widen that gap instead of converging the library.

## Decision

We **keep** the following public naming standards for form and selection components. New components and evolutions should follow them. **Do not** rename existing props to the DSR-1118 alternatives unless an explicit, catalogue-wide migration is planned (semver major, changelog, codemod, or deprecation period).

### Canonical props

| Role | Standard name | Do not introduce |
| --- | --- | --- |
| Primary visible caption | `label` | `labelText` (for standard field labels) |
| Whether the label is shown | `hasLabel` | `showLabel` (deprecated alias only) |
| Secondary help under the control | `description` | `descriptionText`, `hasDescription` |
| Validation / error state (boolean) | `isError` | `error` (deprecated alias only) |
| User-facing validation message (string) | `errorMessage` | `errorText`, `hasErrorMessage` |
| Non-editable display state | `readOnly` | `isReadOnly` |
| Native non-interactive state | `disabled` | `isDisabled` (where aligned with HTML) |

Boolean props use an **`is*`** or **`has*`** prefix when they describe component state or optional UI that is **not** named after a native HTML attribute. Props that mirror HTML attributes keep the **platform spelling** (`readOnly`, `disabled`) so consumers and implementers can map mentally to the DOM.

### Rationale (summary)

1. **`readOnly` instead of `isReadOnly`**  
   HTML defines a [`readonly`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/readonly) attribute. We already mirror `disabled` without an `isDisabled` prefix for the same reason. Using `isReadOnly` on some components and `readOnly` on others forces consumers to remember two names for one behaviour and complicates cross-component reviews and accessibility audits.

2. **`description` instead of `descriptionText` / `hasDescription`**  
   The rest of the catalogue exposes optional copy as `description` (string). Presence is implied: empty or omitted means no description. Splitting into `descriptionText` plus `hasDescription` adds API surface without behaviour that `description` cannot express.

3. **`errorMessage` instead of `errorText`**  
   Most inputs and upload components already use `errorMessage`. In JavaScript an [`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) is a structured object (`message`, `name`, `stack`, `cause`, …). A prop named `errorText` is ambiguous (which “text”?). `errorMessage` matches common form-library vocabulary and our existing types in `@design-system-rte/core`.

4. **`label` instead of `labelText` for field labels**  
   Form controls overwhelmingly use `label` for the main caption. Reserving `*Text` suffixes for group-level titles (`groupTitleText`, `groupHelpText` on Radio Button Group) is acceptable where Figma or information architecture distinguishes group copy from item `label`; it should not become the default for every control.

5. **`isError` instead of `error`**  
   `error` as a boolean reads like an object or slot name. `isError` is already the standard; legacy `error` may remain as a deprecated alias during transition (as on Checkbox today).

6. **No `hasErrorMessage` — infer visibility from `errorMessage`**  
   The error line under the control is shown when **`isError` is true and `errorMessage` is non-empty** (see Checkbox implementations). That is enough for every case DSR-1118 describes:

   - **With inline copy:** set `isError` and a non-empty `errorMessage`.
   - **Error styling only** (typical when the item sits in a group and the group owns the message): set `isError` and leave `errorMessage` empty or omit it — the field still looks invalid; no redundant boolean is required.
   - **No error UI:** `isError` false (default); `errorMessage` is ignored.

   A separate `hasErrorMessage` would force consumers to keep two props in sync (`errorMessage` and `hasErrorMessage`) and repeats the same mistake as `hasDescription`: optional UI should be driven by **content presence**, not a parallel `has*` switch.

### Known inconsistencies (technical debt)

These are exceptions to the standard above. **New work must not copy them**; align them when the component is next changed in a breaking or coordinated release:

| Component | Non-standard prop | Target standard |
| --- | --- | --- |
| Radio Button Group | `isReadOnly` | `readOnly` |
| Radio Button Group | `errorText` | `errorMessage` |

Other outliers (`labelText` on Treeview items, Segmented Control, etc.) reflect domain-specific data shapes, not the default pattern for labelled form fields.

## Consequences

### Positive

- Stable public API for Checkbox and sibling components; DSR-1118 visual changes (typography, padding) can ship without forced renames.
- Clear rule for designers and PMs when writing specs: use the canonical names in Figma properties and tickets.
- Easier parity between Angular and React implementations (shared `*.interface.d.ts` in core).

### Negative

- Figma or internal specs that use `labelText` / `errorText` / `isReadOnly` / `hasErrorMessage` must be translated to canonical names at implementation time.
- Radio Button Group remains inconsistent until a dedicated alignment ticket is done.

### Process

- When a ticket proposes prop renames, check this ADR and `packages/core/components/**/*.interface.d.ts` before merging.
- Prefer **deprecation** (`@deprecated` JSDoc + alias in the component) over silent dual names, when a rename is truly required.
- Catalogue-wide renames require a **major** version bump and migration notes in component docs and CHANGELOG.

## References

- DSR-1118 — Checkbox label size and related adjustments (proposed renames discussed in ticket comments, 2025-11-25).
- Core types: `packages/core/components/checkbox/checkbox.interface.d.ts`, `packages/core/components/common/input/input.interface.d.ts`.
- MDN: [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/readonly), [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error).