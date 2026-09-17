```tsx
import Select from "@design-system-rte/react";

const App = () => {
  return (
    <Select
      id="select1"
      label="Choisir une option"
      options={[
        { value: "option-1", label: "Option 1" },
        { value: "option-2", label: "Option 2" },
      ]}
      placeholder="Select an option"
    />
  );
};
```
