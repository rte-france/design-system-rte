# Component properties

`<Tooltip>` is the public API. Its props configure the projected tooltip overlay shown around the trigger `children`.

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `React.ReactNode` | — (required) | Trigger content wrapped by the tooltip. |
| `label` | `string` | — | Text displayed inside the tooltip. |
| `position` | `"auto"` \| `"top"` \| `"bottom"` \| `"left"` \| `"right"` | `"top"` | Placement relative to the trigger. `"auto"` picks the best side based on available space. |
| `alignment` | `"start"` \| `"center"` \| `"end"` | `"center"` | Alignment of the tooltip along the chosen position axis. |
| `arrow` | `boolean` | `true` | Whether the tooltip arrow is visible. |
| `shouldFocusTrigger` | `boolean` | `true` | When `true`, the trigger wrapper gets `tabIndex={0}` so it can receive focus. When `false`, focus is captured from a focusable child instead. |
| `gap` | `number` | `4` | Gap in pixels between the trigger and the tooltip (adjusted when an arrow is shown). |
| `triggerStyles` | `React.CSSProperties` | — | Optional inline styles applied to the trigger wrapper. |
| `className` | `string` | `""` | Extra class name(s) applied to the tooltip overlay element. |

```tsx
<Tooltip
  label={label}
  position={position}
  alignment={alignment}
  arrow={showArrow}
>
  <span>Hover me</span>
</Tooltip>
```
