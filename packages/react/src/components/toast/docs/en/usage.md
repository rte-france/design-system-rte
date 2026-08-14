Use `Toast` as a declarative component controlled by `isOpen`. Wrap your application (or the relevant subtree) with `ToastQueueProvider` before rendering any `Toast`.

```tsx
import { useState } from "react";
import { Button, Toast, ToastQueueProvider } from "@design-system-rte/react";

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button label="Toggle toast" onClick={() => setIsOpen(!isOpen)} />
      <ToastQueueProvider>
        <Toast
          message="An update is available"
          type="info"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          actionButtonLabel="Update"
        />
      </ToastQueueProvider>
    </>
  );
}
```

`ToastQueueProvider` is required for queue management. Without it, multiple toasts cannot be prioritized correctly.

### Examples

#### Multiple

```tsx
<ToastQueueProvider>
  <Toast
    message="Error toast"
    type="error"
    isOpen={isErrorOpen}
    onClose={() => setIsErrorOpen(false)}
    actionButtonLabel="Update"
    placement="bottom-center"
    autoDismiss
    duration="short"
    closable
  />
  <Toast
    message="Info toast"
    type="info"
    isOpen={isInfoOpen}
    onClose={() => setIsInfoOpen(false)}
    actionButtonLabel="Update"
    placement="bottom-center"
    autoDismiss
    duration="short"
    closable
  />
  <Toast
    message="Neutral toast"
    type="neutral"
    isOpen={isNeutralOpen}
    onClose={() => setIsNeutralOpen(false)}
    iconName="settings"
    placement="bottom-center"
    autoDismiss
    duration="short"
    closable
  />
</ToastQueueProvider>
```

Render multiple `Toast` instances to demonstrate queue behaviour across types. Only the highest-priority toast is visible until it closes.

(`"info" | "success" | "warning" | "error" | "neutral"`)
