# Examples

## Default

Attach a tooltip to a trigger element. It opens on hover and focus.

```html
<span
  rteTooltip="Tooltip"
  rteTooltipPosition="top"
  rteTooltipAlignment="center"
  [rteTooltipArrow]="true"
>
  Hover Me!
</span>
```

## Position

Place the tooltip on each side of the trigger with `rteTooltipPosition`.

```html
<span rteTooltip="Tooltip" rteTooltipPosition="top">Hover Me!</span>
<span rteTooltip="Tooltip" rteTooltipPosition="bottom">Hover Me!</span>
<span rteTooltip="Tooltip" rteTooltipPosition="left">Hover Me!</span>
<span rteTooltip="Tooltip" rteTooltipPosition="right">Hover Me!</span>
```

## Alignment

Align the tooltip along the position axis with `rteTooltipAlignment`.

```html
<span rteTooltip="Tooltip" rteTooltipAlignment="start">Hover Me!</span>
<span rteTooltip="Tooltip" rteTooltipAlignment="center">Hover Me!</span>
<span rteTooltip="Tooltip" rteTooltipAlignment="end">Hover Me!</span>
```

## Arrow

Show or hide the arrow with `rteTooltipArrow`.

```html
<span rteTooltip="Tooltip" [rteTooltipArrow]="true">Hover Me!</span>
<span rteTooltip="Tooltip" [rteTooltipArrow]="false">Hover Me!</span>
```

## Auto placement

Use `rteTooltipPosition="auto"` so the tooltip picks the best side based on available space (useful near viewport or container edges).

```html
<span rteTooltip="Tooltip" rteTooltipPosition="auto">Hover Me!</span>
```

## Keyboard interaction

By default, the host is focusable (`tabindex="0"`). Tab to the trigger to open the tooltip; blur closes it.

```html
<span rteTooltip="Tooltip">Hover Me!</span>
```
