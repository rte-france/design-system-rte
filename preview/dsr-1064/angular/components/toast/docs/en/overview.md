```typescript
this.toastService.addToQueue({
  message: "An update is available",
  type: "info",
  actionButtonLabel: "Update",
  onActionButtonClick: () => {
    // handle action
  },
});
```
