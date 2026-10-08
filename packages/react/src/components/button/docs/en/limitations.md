### Label prop

React `Button` uses a `label` string prop today. Angular uses projected content instead; aligning on a single content model may be addressed in a future change.

### Native interaction states

Hover, pressed, focus, and disabled states come from native `<button>` behavior and CSS. They are not configurable props (Figma `interactionState` is for design previews only).

### Single icon

Only one `icon` is supported per button. Left/right placement is exclusive via `iconPosition`.

### Badge

When badge-related props are provided, the button is wrapped in the `Badge` component. Badge display is composition, not a separate boolean on the style API.
