The Toast is not used as a standalone component in templates. Consumers interact only with `ToastService`.

Inject the service in your component, build a `ToastConfig`, and call `addToQueue()`. Store the returned id to dismiss the toast later with `removeFromQueue()`.

```typescript
import { Component, inject, signal } from "@angular/core";
import { ToastConfig, ToastService } from "@design-system-rte/angular";

@Component({
  selector: "app-example",
  template: `<button rteButton (click)="toggleToast()">Toggle toast</button>`,
})
export class ExampleComponent {
  private toastService = inject(ToastService);
  private toastId = signal<string | null>(null);

  toggleToast(): void {
    if (this.toastId() && this.toastService.isInQueue(this.toastId()!)) {
      this.toastService.removeFromQueue(this.toastId()!);
      this.toastId.set(null);
      return;
    }

    const config: ToastConfig = {
      message: "An update is available",
      type: "info",
      placement: "bottom-right",
      autoDismiss: false,
      closable: true,
      actionButtonLabel: "Update",
      onActionButtonClick: () => {
        // handle update
      },
    };

    this.toastId.set(this.toastService.addToQueue(config));
  }
}
```

Do not use `<rte-toast>` directly in application templates — that selector is reserved for the component instance managed by `ToastService`.

### Examples

#### Multiple

```typescript
// Queue several toasts — only one is visible at a time, ordered by priority
this.toastService.addToQueue({
  message: "An error occurred while saving",
  type: "error",
  placement: "bottom-center",
  autoDismiss: true,
  duration: "medium",
  closable: true,
  showActionButton: false,
});

this.toastService.addToQueue({
  message: "An update is available",
  type: "info",
  placement: "bottom-center",
  autoDismiss: true,
  duration: "medium",
  closable: true,
  actionButtonLabel: "Update",
  onActionButtonClick: () => {
    // handle update
  },
});
```

Trigger multiple toasts to demonstrate queue behaviour across types (`"info"`, `"success"`, `"warning"`, `"error"`, `"neutral"`). Only the highest-priority toast is shown until it closes.
