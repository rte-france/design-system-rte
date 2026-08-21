```tsx
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
    primaryButton={<Button variant="primary" label="Continue" />}
    secondaryButton={<Button variant="neutral" label="Cancel" />}
  />
</>
```
