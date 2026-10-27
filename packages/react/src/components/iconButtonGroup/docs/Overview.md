```tsx
import { IconButtonGroup } from "@design-system-rte/react";

const App = () => (
  <IconButtonGroup
    iconButtons={[
      { name: "visibility-show", label: "Read only" },
      { name: "edit", label: "Edit" },
    ]}
    selectionMode="single"
    defaultSelectedId="visibility-show"
    aria-label="Icon selection"
  />
);
```
