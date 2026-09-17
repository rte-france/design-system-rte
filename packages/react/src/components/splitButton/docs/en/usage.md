Import `SplitButton` from `@design-system-rte/react`. Handle the primary action with `onClick` and wire each menu entry through `options` with its own `onClick` handler.

```tsx
import { SplitButton } from "@design-system-rte/react";

const options = [
  { id: "option-1", label: "Option 1", onClick: () => console.log("Option 1") },
  { id: "option-2", label: "Option 2", onClick: () => console.log("Option 2") },
  { id: "option-3", label: "Option 3", onClick: () => console.log("Option 3") },
];

<SplitButton
  label="Button Label"
  ariaLabelRight="Open menu"
  onClick={() => console.log("Primary action")}
  options={options}
/>
```

Provide `ariaLabelRight` so the menu trigger has an accessible name. Native button attributes (for example `type` or `data-*` attributes) can be passed as props and are applied to both button segments.

#### Appearance

```tsx
<SplitButton {...sharedProps} appearance="primary" />
<SplitButton {...sharedProps} appearance="secondary" />
```

Switch between primary and secondary styling with `appearance`.

(`"primary" | "secondary"`)

#### Size

```tsx
<SplitButton {...sharedProps} size="s" />
<SplitButton {...sharedProps} size="m" />
<SplitButton {...sharedProps} size="l" />
```

Scale the control with `size`.

(`"s" | "m" | "l"`)

#### Compact spacing

```tsx
<SplitButton {...sharedProps} size="s" compactSpacing />
<SplitButton {...sharedProps} size="m" compactSpacing />
<SplitButton {...sharedProps} size="l" compactSpacing />
```

Reduce vertical height at each size tier with `compactSpacing`.

#### Position

```tsx
<SplitButton {...sharedProps} position="top-end" />
<SplitButton {...sharedProps} position="top-start" />
<SplitButton {...sharedProps} position="bottom-end" />
<SplitButton {...sharedProps} position="bottom-start" />
```

Control where the menu panel opens relative to the trigger with `position`.

(`"bottom-start" | "bottom-end" | "top-start" | "top-end"`)
