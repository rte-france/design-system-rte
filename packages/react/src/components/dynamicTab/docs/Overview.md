```tsx
import { useState } from "react";
import type { DynamicTabItemOption } from "@design-system-rte/core";
import { DynamicTab } from "@design-system-rte/react";

const App = () => {
  const [options, setOptions] = useState<DynamicTabItemOption[]>([
    { id: "tab1", title: "Tab 1" },
    { id: "tab2", title: "Tab 2" },
  ]);
  const [selectedTabId, setSelectedTabId] = useState("tab1");

  return (
    <DynamicTab
      options={options}
      selectedTabId={selectedTabId}
      onChangeActiveTab={setSelectedTabId}
      onUpdateTabs={setOptions}
    />
  );
};
```
