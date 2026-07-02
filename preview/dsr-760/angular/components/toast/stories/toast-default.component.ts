import { Component, inject, input, signal } from "@angular/core";
import { ToastProps, ToastType } from "@design-system-rte/core/components/toast/toast.interface";

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
  readonly id = input<string>("");
  readonly message = input<string>("");
  readonly type = input<ToastType>("info");
  readonly duration = input<ToastProps["duration"]>("medium");
  readonly isOpen = input<boolean>(false);
  readonly placement = input<ToastProps["placement"]>("bottom-right");
  readonly closable = input<ToastProps["closable"]>(true);
  readonly autoDismiss = input<ToastProps["autoDismiss"]>(true);
  readonly showActionButton = input<ToastProps["showActionButton"]>(true);

  readonly actionButtonLabel = input<ToastProps["actionButtonLabel"]>("");
  readonly onActionButtonClick = input<ToastProps["onActionButtonClick"]>(() => {});

  toggleToast(): void {
    if (this.toastService.isInQueue(this.myInfoNotificationId()!)) {
      this.toastService.removeFromQueue(this.myInfoNotificationId()!);
      return;
    }
    const config: ToastConfig = {
      message: this.message(),
      type: this.type(),
      placement: this.placement(),
      autoDismiss: this.autoDismiss(),
      duration: this.duration(),
      closable: this.closable(),
      showActionButton: this.showActionButton(),
      actionButtonLabel: this.actionButtonLabel(),
      onActionButtonClick: () => {
        console.log("Mise à jour en cours...");
      },
    };
    const infoNotificationId = this.toastService.addToQueue(config);
    this.myInfoNotificationId.set(infoNotificationId);
  }
}
