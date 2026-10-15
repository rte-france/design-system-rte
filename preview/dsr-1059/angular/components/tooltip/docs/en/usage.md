The Tooltip is not used as a standalone component in templates. Consumers only interact with the `rteTooltip` directive.

Apply the directive to a target (host) element. The directive creates and projects the underlying `TooltipComponent`, forwards its configuration from the directive inputs, and shows the tooltip when the host is hovered or focused.

```html
<button
  rteButton
  rteTooltip="Save changes"
  rteTooltipPosition="top"
>
  Save
</button>
```

Do not use `<rte-tooltip>` directly in application templates — that selector is reserved for the projected component managed by the directive.

### Examples

#### Position

```html
<span
  rteTooltip="Tooltip"
  [rteTooltipPosition]="tooltipPosition"
>
  Hover Me!
</span>
```

Place the tooltip on each side of the trigger with `rteTooltipPosition`.

(`"auto" | "top" | "bottom" | "left" | "right"`)

#### Alignment

```html
<span
  rteTooltip="Tooltip"
  [rteTooltipAlignment]="tooltipAlignment"
>
  Hover Me!
</span>
```

Align the tooltip along the position axis with `rteTooltipAlignment`.

(`"start" | "center" | "end"`)

#### Arrow

```html
<span
  rteTooltip="Tooltip"
  [rteTooltipArrow]="tooltipArrow"
>
  Hover Me!
</span>
```

Show or hide the arrow with `rteTooltipArrow`.

#### Auto placement

```html
<span
  rteTooltip="Tooltip"
  rteTooltipPosition="auto"
>
  Hover Me!
</span>
```

Use `rteTooltipPosition="auto"` so the tooltip picks the best side based on available space (useful near viewport or container edges).
