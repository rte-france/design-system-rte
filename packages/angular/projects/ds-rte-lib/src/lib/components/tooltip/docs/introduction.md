# Tooltip

The Tooltip is **not** used as a standalone component in templates. Consumers only interact with the `rteTooltip` directive.

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
