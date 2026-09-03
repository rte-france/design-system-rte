Import `DatePicker` from `@design-system-rte/react` and manage the selected date in component state. Pass `value` and `onChange` for controlled usage.

```tsx
import { useState } from "react";
import { DatePicker } from "@design-system-rte/react";

function Example() {
  const [date, setDate] = useState<Date | null>(null);

  return (
    <DatePicker
      id="default-datepicker"
      label="Date"
      value={date}
      onChange={setDate}
      hasAction
    />
  );
}
```

The calendar overlay is portaled to `#overlay-root`. Ensure the overlay root exists in the application shell.

#### Disabled

```tsx
<DatePicker
  id="disabled-datepicker"
  label="Date"
  value={date}
  onChange={setDate}
  disabled
/>
```

Disables the segmented field and calendar trigger.

#### Error

```tsx
<DatePicker
  id="error-datepicker"
  label="Date"
  value={date}
  onChange={setDate}
  isError
/>
```

Applies the error visual state to the field.

#### Uncontrolled default value

```tsx
<DatePicker
  id="uncontrolled-datepicker"
  label="Date"
  defaultValue={new Date(2026, 5, 15)}
/>
```

Initialises the picker with a date without controlling `value` from parent state.

#### Controlled prop update

```tsx
const [date, setDate] = useState<Date | null>(new Date(2026, 5, 10));

return (
  <>
    <button type="button" onClick={() => setDate(new Date(2026, 5, 22))}>
      Set to 22/06/2026
    </button>
    <button type="button" onClick={() => setDate(null)}>
      Clear
    </button>
    <DatePicker
      id="controlled-datepicker"
      label="Date"
      value={date}
      onChange={setDate}
    />
  </>
);
```

The displayed date follows external `value` updates from parent state.
