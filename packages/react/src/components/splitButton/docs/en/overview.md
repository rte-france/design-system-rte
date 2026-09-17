```tsx
<SplitButton
  label="Button Label"
  ariaLabelRight="Open menu"
  onClick={() => console.log("Primary action")}
  options={[
    { id: "option-1", label: "Option 1", onClick: () => console.log("Option 1") },
    { id: "option-2", label: "Option 2", onClick: () => console.log("Option 2") },
    { id: "option-3", label: "Option 3", onClick: () => console.log("Option 3") },
  ]}
/>
```
