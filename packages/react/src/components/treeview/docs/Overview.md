```tsx
import { Treeview } from "@design-system-rte/react";

const App = () => {
  const items = {
    id: "documents",
    labelText: "Documents",
    icon: "folder",
    hasIcon: true,
    isOpen: true,
    items: [
      {
        id: "work",
        labelText: "Work",
        icon: "folder",
        hasIcon: true,
        items: [
          { id: "project-a", labelText: "Project A" },
          { id: "project-b", labelText: "Project B" },
        ],
      },
      { id: "personal", labelText: "Personal", icon: "folder", hasIcon: true },
    ],
  };
  return <Treeview items={items} />;
};
```
