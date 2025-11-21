import { Component, inject, signal } from "@angular/core";

import { ButtonComponent } from "../../button/button.component";
import { ToastConfig, ToastService } from "../toast.service";

@Component({
  selector: "toast-default",
  imports: [ButtonComponent],
  standalone: true,
  template: ` <button rteButton (click)="toggleToast()">Toggle toast</button> `,
})
export class ToastDefaultComponent {
  private toastService = inject(ToastService);
  readonly myInfoNotificationId = signal<string | null>(null);

  toggleToast(): void {
    if (this.toastService.isInQueue(this.myInfoNotificationId()!)) {
      this.toastService.removeFromQueue(this.myInfoNotificationId()!);
      return;
    }
    const config: ToastConfig = {
      message: "Une mise à jour est disponible",
      type: "info",
      placement: "bottom-center",
      autoDismiss: true,
      duration: "medium",
      closable: true,
      showActionButton: true,
      actionButtonLabel: "Mettre à jour",
      onActionButtonClick: () => {
        console.log("Mise à jour en cours...");
      },
    };
    const infoNotificationId = this.toastService.addToQueue(config);
    this.myInfoNotificationId.set(infoNotificationId);
  }
}
