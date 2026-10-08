### Projected content

Button labels are plain projected content (`ng-content`), not a component input. Rich text (bold, italic, underline) inside the button follows normal HTML/CSS in the projected nodes.

### Native interaction states

Hover, pressed, focus, and disabled states are handled by the native `<button>` and component styles. They are not configurable through component inputs (Figma `interactionState` is for design previews only).

### Single icon

Only one icon input (`rteButtonIcon`) is supported per button. Left/right placement is exclusive via `rteButtonIconPosition`.

### Badge

Badge behavior is provided by `BadgeDirective` when `rteBadge` is present; it is not a property of the button style API.
