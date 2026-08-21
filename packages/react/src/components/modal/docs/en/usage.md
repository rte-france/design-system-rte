Control `Modal` with `isOpen` and `onClose`. Render a trigger (for example a `Button`) that sets `isOpen` to `true`, and wire footer actions through `primaryButton` and `secondaryButton`.

```tsx
import { useState } from "react";
import { Button, Modal } from "@design-system-rte/react";

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button variant="primary" label="Open Modal" onClick={() => setIsOpen(true)} />
      <Modal
        id="modal-1"
        title="Connect to Wi-Fi"
        description="Please connect to wifi to synchronise your projects or go to Settings to change your preferences."
        icon="wifi"
        iconAppearance="outlined"
        size="xs"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        closeOnOverlayClick
        primaryButton={<Button variant="primary" label="Continue" onClick={() => setIsOpen(false)} />}
        secondaryButton={<Button variant="neutral" label="Cancel" onClick={() => setIsOpen(false)} />}
      />
    </>
  );
}
```

The modal is portaled through `Overlay`. No additional provider wrapper is required.

### Examples

#### Sizes

```tsx
const [openState, setOpenState] = useState<Record<string, boolean>>({});

<>
  <Button variant="primary" label="Open modal xs" onClick={() => setOpenState({ ...openState, "modal-1": true })} />
  <Button variant="primary" label="Open modal s" onClick={() => setOpenState({ ...openState, "modal-2": true })} />
  {/* Additional triggers for m, l, xl */}

  <Modal {...sharedProps} id="modal-1" size="xs" isOpen={openState["modal-1"]} onClose={() => setOpenState({ ...openState, "modal-1": false })} />
  <Modal {...sharedProps} id="modal-2" size="s" isOpen={openState["modal-2"]} onClose={() => setOpenState({ ...openState, "modal-2": false })} />
  {/* Additional modals for m, l, xl */}
</>
```

Use the `size` prop to pick a width preset: `xs` (496px), `s` (656px), `m` (936px), `l` (1168px), `xl` (1328px).

(`"xs" | "s" | "m" | "l" | "xl"`)

#### With custom content

```tsx
<Modal
  id="modal-2"
  title="Préciser le motif du refus"
  description="En motivant votre refus, vous aidez votre collaborateur à mieux identifier comment corriger sa demande."
  size="m"
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  primaryButton={<Button variant="primary" label="Envoyer" onClick={() => setIsOpen(false)} />}
  secondaryButton={<Button variant="neutral" label="Annuler" onClick={() => setIsOpen(false)} />}
>
  <Textarea resizeable />
  <Select id="select-1" label="Select an option" options={selectOptions} value={selectedOption} onChange={setSelectedOption} />
</Modal>
```

Pass form fields or other components as `children` when the default description paragraph is not enough.
