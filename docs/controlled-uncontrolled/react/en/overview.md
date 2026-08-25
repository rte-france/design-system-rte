```tsx
import { useState } from "react";
import { Select } from "@design-system-rte/react";

function Example() {
  const [value, setValue] = useState("option-1");

  return (
    <Select
      id="my-select"
      label="Label"
      options={[
        { value: "option-1", label: "Option 1" },
        { value: "option-2", label: "Option 2" },
      ]}
      value={value}
      onChange={setValue}
    />
  );
}
```
