import { Component, inject, signal } from "@angular/core";

import { ButtonComponent } from "../../button/button.component";
import { ToastConfig, ToastService } from "../toast.service";

@Component({
  selector: "toast-demo-wrapper",
  imports: [ButtonComponent],
  standalone: true,
  template: `
    <button rteButton rteButtonVariant="danger" (click)="toggleToast('error-toast')">Toggle Error Toast</button>
    <button rteButton rteButtonVariant="secondary" (click)="toggleToast('warning-toast')">Toggle Warning Toast</button>
    <button rteButton (click)="toggleToast('success-toast')">Toggle Success Toast</button>
    <button rteButton (click)="toggleToast('info-toast')">Toggle Info Toast</button>
    <button rteButton (click)="toggleToast('neutral-toast')">Toggle Neutral Toast</button>
  `,
})
export class ToastDemoWrapperComponent {
  private toastService = inject(ToastService);
  readonly myInfoNotificationId = signal<string | null>(null);
  readonly myErrorNotificationId = signal<string | null>(null);
  readonly myWarningNotificationId = signal<string | null>(null);
  readonly mySuccessNotificationId = signal<string | null>(null);
  readonly myNeutralNotificationId = signal<string | null>(null);

  readonly currentOpenedToast = signal<string | null>(null);

  toggleToast(toastId: string): void {
    switch (toastId) {
      case "error-toast":
        {
          console.log("error-toast clicked");
          if (this.toastService.isInQueue(this.myErrorNotificationId()!)) {
            this.toastService.removeFromQueue(this.myErrorNotificationId()!);
            return;
          }

          const configError: ToastConfig = {
            message: "Erreur lors de la sauvegarde des modifications",
            type: "error",
            placement: "bottom-center",
            autoDismiss: true,
            duration: "medium",
            closable: true,
            showActionButton: false,
          };
          const errorNotificationId = this.toastService.addToQueue(configError);
          this.myErrorNotificationId.set(errorNotificationId);
        }
        break;

      case "info-toast":
        {
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
        break;
      case "warning-toast":
        {
          if (this.toastService.isInQueue(this.myWarningNotificationId()!)) {
            this.toastService.removeFromQueue(this.myWarningNotificationId()!);
            return;
          }
          const config: ToastConfig = {
            message: "Une mise à jour est disponible",
            type: "warning",
            placement: "bottom-center",
            autoDismiss: true,
            duration: "medium",
            closable: true,
            showActionButton: false,
            actionButtonLabel: "Mettre à jour",
            onActionButtonClick: () => {
              console.log("Mise à jour en cours...");
            },
          };
          const warningNotificationId = this.toastService.addToQueue(config);
          this.myWarningNotificationId.set(warningNotificationId);
        }
        break;
      case "success-toast":
        {
          if (this.toastService.isInQueue(this.mySuccessNotificationId()!)) {
            this.toastService.removeFromQueue(this.mySuccessNotificationId()!);
            return;
          }
          const config: ToastConfig = {
            message: "Une mise à jour est disponible",
            type: "success",
            placement: "bottom-center",
            autoDismiss: true,
            duration: "medium",
            closable: true,
            showActionButton: false,
            actionButtonLabel: "Mettre à jour",
            onActionButtonClick: () => {
              console.log("Mise à jour en cours...");
            },
          };
          const successNotificationId = this.toastService.addToQueue(config);
          this.mySuccessNotificationId.set(successNotificationId);
        }
        break;
      case "neutral-toast":
        {
          if (this.toastService.isInQueue(this.myNeutralNotificationId()!)) {
            this.toastService.removeFromQueue(this.myNeutralNotificationId()!);
            return;
          }
          const config: ToastConfig = {
            message: "Une mise à jour est disponible",
            type: "neutral",
            placement: "bottom-center",
            autoDismiss: true,
            duration: "medium",
            closable: true,
            showActionButton: false,
            actionButtonLabel: "Mettre à jour",
            iconName: "settings",
            showLeftIcon: true,
            onActionButtonClick: () => {
              console.log("Mise à jour en cours...");
            },
          };
          const neutralNotificationId = this.toastService.addToQueue(config);
          this.myNeutralNotificationId.set(neutralNotificationId);
        }
        break;

      default:
        break;
    }
  }
}
