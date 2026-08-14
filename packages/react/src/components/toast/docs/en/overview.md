```tsx
<ToastQueueProvider>
  <Toast
    message="An update is available"
    type="info"
    isOpen={isOpen}
    onClose={() => setIsOpen(false)}
    actionButtonLabel="Update"
  />
</ToastQueueProvider>
```
