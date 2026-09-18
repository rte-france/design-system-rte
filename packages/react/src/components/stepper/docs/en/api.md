The `Stepper` component is the public API. Pass the step list and the active step id; handle navigation through each step's `onClick` callback.

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| steps | `Step[]` | — (required) | Ordered list of steps to display. Must contain 2 to 7 entries. |
| activeStepId | `string \| null` | — (required) | Id of the currently active step. Sets `aria-current="step"` on the matching step. Pass `null` when no step is active. |
| orientation | `"horizontal" \| "vertical"` | `"horizontal"` | Layout direction of the stepper. |

Each entry in `steps` follows the `Step` interface:

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| id | `string` | — (required) | Unique identifier for the step. Used to match `activeStepId`. |
| name | `string` | — (required) | Label displayed below the step indicator. |
| completionState | `"unvisited" \| "incomplete" \| "complete"` | — (required) | Visual state of the step. Completed steps show a check icon when not active. |
| clickableCompleteStep | `boolean` | `false` | When `true`, completed steps remain clickable if they define `onClick`. |
| onClick | `() => void` | — | Callback invoked when the step is clicked. Required for a step to be clickable. |

Native HTML attributes (`className`, `style`, `aria-*`, and others) can be passed through to the root `<nav>` element.
