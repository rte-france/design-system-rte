The `rte-stepper` component is the public API. Bind the step list, the active step, and optional orientation; handle navigation through each step's `onClick` callback and the `clickStep` output.

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| steps | `Step[]` | `[]` | Ordered list of steps to display. |
| activeStepId | `string` | — | Id of the currently active step. Sets `aria-current="step"` on the matching step. |
| orientation | `"horizontal" \| "vertical"` | `"horizontal"` | Layout direction of the stepper. |

| Output | Type | Description |
|--------|------|-------------|
| clickStep | `Step` | Emitted when a clickable step is activated. Fires after the step's `onClick` handler runs. |

Each entry in `steps` follows the `Step` interface:

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| id | `string` | — (required) | Unique identifier for the step. Used to match `activeStepId`. |
| name | `string` | — (required) | Label displayed below the step indicator. |
| completionState | `"unvisited" \| "incomplete" \| "complete"` | — (required) | Visual state of the step. Completed steps show a check icon when not active. |
| clickableCompleteStep | `boolean` | `false` | When `true`, completed steps remain clickable if they define `onClick`. |
| onClick | `() => void` | — | Callback invoked when the step is clicked. Required for a step to be clickable. |
