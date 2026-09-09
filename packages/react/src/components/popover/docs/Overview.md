```tsx
import { Popover } from "@design-system-rte/react";

const App = () => {
  return (
    <Popover
      content="Informations complémentaires."
      primaryButtonLabel="Fermer"
    >
      <button type="button">Afficher les informations</button>
    </Popover>
  );
};
```
