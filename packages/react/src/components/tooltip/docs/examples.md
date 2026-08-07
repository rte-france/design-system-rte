# Examples

## Default

Wrap trigger content with `<Tooltip>`. It opens on hover and focus.

```tsx
<Tooltip label="Tooltip" position="top" alignment="center" arrow>
  <span>Hover Me!</span>
</Tooltip>
```

## Position

Place the tooltip on each side of the trigger with `position`.

```tsx
<Tooltip label="Tooltip" position="top">
  <span>Hover Me!</span>
</Tooltip>
<Tooltip label="Tooltip" position="bottom">
  <span>Hover Me!</span>
</Tooltip>
<Tooltip label="Tooltip" position="left">
  <span>Hover Me!</span>
</Tooltip>
<Tooltip label="Tooltip" position="right">
  <span>Hover Me!</span>
</Tooltip>
```

## Alignment

Align the tooltip along the position axis with `alignment`.

```tsx
<Tooltip label="Tooltip" alignment="start">
  <span>Hover Me!</span>
</Tooltip>
<Tooltip label="Tooltip" alignment="center">
  <span>Hover Me!</span>
</Tooltip>
<Tooltip label="Tooltip" alignment="end">
  <span>Hover Me!</span>
</Tooltip>
```

## Arrow

Show or hide the arrow with `arrow`.

```tsx
<Tooltip label="Tooltip" arrow={true}>
  <span>Hover Me!</span>
</Tooltip>
<Tooltip label="Tooltip" arrow={false}>
  <span>Hover Me!</span>
</Tooltip>
```

## Auto placement

Use `position="auto"` so the tooltip picks the best side based on available space (useful near viewport or container edges).

```tsx
<Tooltip label="Tooltip" position="auto">
  <span>Hover Me!</span>
</Tooltip>
```

## Keyboard interaction

By default, the trigger wrapper is focusable (`tabIndex={0}`). Tab to the trigger to open the tooltip; blur closes it.

```tsx
<Tooltip label="Tooltip">
  <span>Hover Me!</span>
</Tooltip>
```
