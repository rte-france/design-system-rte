### Step count

The stepper requires between 2 and 7 steps. When `steps.length` is outside this range, the component logs a console warning and renders nothing.

### Step name length

Step labels render on a single line. Long names are truncated with an ellipsis (`text-overflow: ellipsis`, `white-space: nowrap`). Keep step names short.

### Clickable steps

A step is clickable only when it defines `onClick`. Completed steps are not clickable unless `clickableCompleteStep` is `true`. The active step cannot be activated again via click.

### Focus and keyboard navigation

Only the active step and clickable steps receive focus. Arrow keys move between focusable steps (left/right in horizontal orientation, up/down in vertical). Tab moves focus out of the stepper to the next or previous focusable element on the page.
