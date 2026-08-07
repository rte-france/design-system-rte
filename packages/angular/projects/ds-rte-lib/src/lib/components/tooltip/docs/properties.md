# Directive properties

The `rteTooltip` directive is the public API. Its inputs are projected onto the tooltip component when it is shown.

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `rteTooltip` | `string` | — (required) | Label displayed inside the tooltip. |
| `rteTooltipPosition` | `"auto"` \| `"top"` \| `"bottom"` \| `"left"` \| `"right"` | `"auto"` | Placement relative to the host. `"auto"` picks the best side based on available space. |
| `rteTooltipAlignment` | `"start"` \| `"center"` \| `"end"` | `"center"` | Alignment of the tooltip along the chosen position axis. |
| `rteTooltipArrow` | `boolean` | `true` | Whether the tooltip arrow is visible. |
| `rteTooltipShouldFocusTrigger` | `boolean` | `true` | When `true`, the host gets `tabindex="0"` so it can receive focus. When `false`, focus listeners are attached to the first focusable child instead. |
| `rteTooltipGap` | `number` | `4` | Gap in pixels between the host and the tooltip (adjusted when an arrow is shown). |

```html
<span
  [rteTooltip]="label"
  [rteTooltipPosition]="position"
  [rteTooltipAlignment]="alignment"
  [rteTooltipArrow]="showArrow"
>
  Hover me
</span>
```
