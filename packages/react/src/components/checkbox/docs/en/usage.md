Import `Checkbox` from the design system library and render it with a unique `id` and a `label`. Standard native checkbox input attributes (such as `checked`, `onChange`, `disabled`, or `aria-label`) are forwarded to the underlying `<input type="checkbox">`.

```tsx
import { useState } from "react";
import { Checkbox } from "@design-system-rte/react";

function Preferences() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Checkbox
      id="my-checkbox"
      label="Label"
      description="Description"
      checked={isChecked}
      onChange={(event) => setIsChecked(event.target.checked)}
    />
  );
}
```

For multiple related options, prefer `CheckboxGroup` instead of composing several standalone checkboxes manually.

#### Indeterminate

```tsx
<Checkbox
  id="my-checkbox"
  label="Label"
  description="Description"
  indeterminate
/>
```

Use `indeterminate` to reflect a partially selected group or tree node.

#### Error

```tsx
<Checkbox
  id="my-checkbox"
  label="Label"
  description="Description"
  error
  errorMessage="Error message"
/>
```

Set both `error` and `errorMessage` to display validation feedback.
