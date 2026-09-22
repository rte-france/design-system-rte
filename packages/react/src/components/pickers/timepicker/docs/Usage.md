### Utilisation de base

```tsx
import { useState } from "react";
import { TimePicker } from "@design-system-rte/react";

const Example = () => {
  const [time, setTime] = useState({ hh: "", mm: "", ss: "" });

  return (
    <TimePicker
      id="time-picker"
      label="Label"
      labelId="time-picker-label"
      value={time}
      onChange={setTime}
      required
      showLabelRequirement
      assistiveTextLabel="Assistive text"
    />
  );
};
```

### Mode non contrôlé

```tsx
<TimePicker
  id="uncontrolled-time-picker"
  label="Label"
  defaultValue={{ hh: "08", mm: "15", ss: "00" }}
  onChange={() => {}}
/>
```

### Mode contrôlé

```tsx
const [time, setTime] = useState({ hh: "12", mm: "30", ss: "45" });

return (
  <>
    <button type="button" onClick={() => setTime({ hh: "09", mm: "00", ss: "00" })}>
      Set to 09:00:00
    </button>
    <button type="button" onClick={() => setTime({ hh: "", mm: "", ss: "" })}>
      Clear
    </button>
    <TimePicker id="controlled-time-picker" label="Label" value={time} onChange={setTime} />
  </>
);
```

### Variantes d'état

```tsx
<TimePicker id="disabled-time-picker" label="Label" disabled />
<TimePicker id="read-only-time-picker" label="Label" readOnly value={{ hh: "12", mm: "30", ss: "45" }} />
<TimePicker
  id="error-time-picker"
  label="Label"
  isError
  assistiveTextLabel="Assistive text"
  errorMessage="Error message"
  assistiveAppearance="error"
/>
```

### Segments non modifiables

```tsx
<TimePicker id="hour-read-only" label="Label" isHourReadOnly value={{ hh: "12", mm: "10", ss: "15" }} />
<TimePicker id="minute-read-only" label="Label" isMinuteReadOnly value={{ hh: "12", mm: "30", ss: "15" }} />
<TimePicker id="second-read-only" label="Label" isSecondReadOnly value={{ hh: "12", mm: "30", ss: "45" }} />
```

### Incrément

```tsx
<TimePicker id="increment-time-picker" label="Label" minuteIncrement={15} />
```

Les flèches haut et bas incrémentent le segment actif selon le pas configuré.
