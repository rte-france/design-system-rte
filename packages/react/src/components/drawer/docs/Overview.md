```tsx
import { Drawer, Button } from "@design-system-rte/react";
import { useState } from "react";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button label="Open drawer" onClick={() => setIsOpen(true)} />
      <Drawer
        id="example-drawer"
        title="Example Drawer"
        icon="settings"
        iconAppearance="outlined"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onClickToggle={() => setIsOpen((prev) => !prev)}
        position="modal"
        width="400px"
        fixedHeader
        primaryButtonLabel="Confirm"
        secondaryButtonLabel="Cancel"
        content={<span style={{ fontFamily: "arial", fontSize: "14px", lineHeight: "20px" }}>Body content.</span>}
      />
    </>
  );
};
```
