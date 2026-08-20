The Tooltip is used as a **wrapper component**. Wrap the trigger element (or content) as `children` of `<Tooltip>`. The component renders a focusable trigger container, applies the tooltip configuration from its props, and shows the overlay when the trigger is hovered or focused.

```tsx
import Tooltip from "@design-system-rte/react/components/tooltip/Tooltip";

<Tooltip label="Save changes" position="top">
  <button>Save</button>
</Tooltip>
```

The trigger is the wrapped child content; tooltip props (`label`, `position`, `alignment`, etc.) configure the projected overlay, not the child itself.

### Examples

#### Position

```tsx
<Tooltip label="Tooltip" position={tooltipPosition}>
  <span>Hover Me!</span>
</Tooltip>
```

Place the tooltip on each side of the trigger with `position`.

(`"auto" | "top" | "bottom" | "left" | "right"`)

#### Alignment

```tsx
<Tooltip label="Tooltip" alignment={tooltipAlignment}>
  <span>Hover Me!</span>
</Tooltip>
```

Align the tooltip along the position axis with `alignment`.

(`"start" | "center" | "end"`)

#### Arrow

```tsx
<Tooltip label="Tooltip" arrow={tooltipArrow}>
  <span>Hover Me!</span>
</Tooltip>
```

Show or hide the arrow with `arrow`.

#### Auto placement

```tsx
<Tooltip label="Tooltip" position="auto">
  <span>Hover Me!</span>
</Tooltip>
```

Use `position="auto"` so the tooltip picks the best side based on available space (useful near viewport or container edges).
