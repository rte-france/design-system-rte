Apply `rteButton` to a native `<button>` and project the visible label as child content. Set visual style with `rteButtonAppearance` and `rteButtonHierarchy`. Use the host `disabled` attribute for inactive buttons.

```html
<button
  rteButton
  rteButtonAppearance="brand"
  rteButtonHierarchy="primary"
  rteButtonSize="m"
  (click)="onSubmit()"
>
  Submit
</button>
```

Do not use the internal `ButtonComponent` selector in application templates; use `button[rteButton]` only.

#### Sizing

```html
<div style="display: flex; gap: 8px;">
  <button rteButton rteButtonSize="s" rteButtonAppearance="brand" rteButtonHierarchy="primary">Small</button>
  <button rteButton rteButtonSize="m" rteButtonAppearance="brand" rteButtonHierarchy="primary">Medium</button>
  <button rteButton rteButtonSize="l" rteButtonAppearance="brand" rteButtonHierarchy="primary">Large</button>
</div>
```

Shows the three supported heights (`s`, `m`, `l`).

#### With badge

```html
<button
  rteButton
  rteBadge
  rteButtonAppearance="brand"
  rteButtonHierarchy="primary"
  [rteBadgeContent]="'number'"
  [rteBadgeCount]="5"
  rteBadgeType="indicator"
>
  Button with Badge
</button>
```

Composes `BadgeDirective` on the button host.

#### With icon

```html
<button
  rteButton
  rteButtonAppearance="brand"
  rteButtonHierarchy="primary"
  rteButtonIcon="add-circle"
  rteButtonIconPosition="left"
  rteButtonIconAppearance="outlined"
>
  Button with Icon
</button>
```

One icon per button; position with `rteButtonIconPosition`.

#### Brand hierarchies

```html
<button rteButton rteButtonAppearance="brand" rteButtonHierarchy="primary">Primary</button>
<button rteButton rteButtonAppearance="brand" rteButtonHierarchy="secondary">Secondary</button>
<button rteButton rteButtonAppearance="brand" rteButtonHierarchy="text">Text</button>
<button rteButton rteButtonAppearance="brand" rteButtonHierarchy="transparent">Transparent</button>
```

Brand appearance with each hierarchy (`primary`, `secondary`, `text`, `transparent`).

#### Neutral hierarchies

```html
<button rteButton rteButtonAppearance="neutral" rteButtonHierarchy="primary">Neutral primary</button>
<button rteButton rteButtonAppearance="neutral" rteButtonHierarchy="secondary">Neutral secondary</button>
<button rteButton rteButtonAppearance="neutral" rteButtonHierarchy="outlined">Neutral outlined</button>
<button rteButton rteButtonAppearance="neutral" rteButtonHierarchy="text">Neutral text</button>
```

Neutral appearance including the new `outlined` hierarchy.

#### Critical and reversed

```html
<button rteButton rteButtonAppearance="brand" rteButtonHierarchy="primary" [rteButtonIsCritical]="true">
  Critical
</button>
```

Use `rteButtonIsReversed` on dark backgrounds for inverse text colors.

#### Legacy variants

```html
<button rteButton rteButtonVariant="danger">Danger</button>
```

Deprecated `rteButtonVariant` values still resolve to the same visuals; migrate to appearance, hierarchy, and flags when updating code.
