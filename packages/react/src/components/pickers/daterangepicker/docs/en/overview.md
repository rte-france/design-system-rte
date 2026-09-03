```tsx
import { DateRangePicker } from "@design-system-rte/react";
import { useState } from "react";

const [range, setRange] = useState<[Date | null, Date | null] | null>([
  new Date(2026, 4, 1),
  new Date(2026, 4, 10),
]);

<DateRangePicker
  id="date-range-picker"
  label="Période"
  value={range}
  onChange={setRange}
  hasAction
  assistiveTextLabel="Assistive text"
  showAssistiveIcon
/>
```
