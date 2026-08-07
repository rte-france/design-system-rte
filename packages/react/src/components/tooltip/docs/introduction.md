# Tooltip

The Tooltip is used as a **wrapper component**. Wrap the trigger element (or content) as `children` of `<Tooltip>`. The component renders a focusable trigger container, applies the tooltip configuration from its props, and shows the overlay when the trigger is hovered or focused.

```tsx
import Tooltip from "@design-system-rte/react/components/tooltip/Tooltip";

<Tooltip label="Save changes" position="top">
  <button>Save</button>
</Tooltip>
```

The trigger is the wrapped child content; tooltip props (`label`, `position`, `alignment`, etc.) configure the projected overlay, not the child itself.
