Control `Modal` with `isOpen` and `onClose`. Set `isOpen` to `true` from any event handler or async callback, and wire footer actions through `primaryButton` and `secondaryButton`.

The modal is portaled through `Overlay`. No additional provider wrapper is required.

### Opening from a button

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

### Opening programmatically

You do not need a dedicated "Open modal" button. Call `setIsOpen(true)` from component logic — for example after validation fails or when a background task completes.

```tsx
import { useState } from "react";
import { Button, Modal } from "@design-system-rte/react";

function SaveForm() {
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  const handleSave = async () => {
    const isValid = await validateForm();
    if (!isValid) {
      setIsErrorModalOpen(true);
      return;
    }
    await save();
  };

  return (
    <>
      <Button variant="primary" label="Save" onClick={handleSave} />
      <Modal
        id="validation-error"
        title="Missing information"
        description="Complete all required fields before saving."
        size="xs"
        isOpen={isErrorModalOpen}
        onClose={() => setIsErrorModalOpen(false)}
        primaryButton={<Button variant="primary" label="OK" onClick={() => setIsErrorModalOpen(false)} />}
      />
    </>
  );
}
```

Because `isOpen`, `size`, and `children` are JSX props, Storybook snippets tend to surface variant differences more clearly than Angular template-only snippets.

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

Only the `size` prop changes between modal instances. Shared props (`title`, `description`, `icon`, buttons, etc.) stay the same.

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

Compared to the default setup, this example sets `size="m"` and passes form fields as `children`.

Pass form fields or other components as `children` when the default description paragraph is not enough.
