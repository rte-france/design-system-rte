### Disabled state blocks all pointer events

When `disabled` is `true`, the card applies `pointer-events: none`. Nested interactive elements such as buttons or links cannot receive clicks while the card is disabled.

### Clickable cards and nested interactives

When `clickable` is `true`, click events on nested interactive elements bubble to the card and trigger `cardClicked`. Call `stopPropagation()` on nested handlers when the inner control should not activate the card.
