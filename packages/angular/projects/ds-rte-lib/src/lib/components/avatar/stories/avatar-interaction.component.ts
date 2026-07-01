import { Component, inject, signal } from "@angular/core";

import { ButtonComponent } from "../../button/button.component";
import { ToastConfig, ToastService } from "../../toast/toast.service";
import { AvatarComponent } from "../avatar.component";

import user from "./user.png";

@Component({
  selector: "avatar-interaction",
  imports: [AvatarComponent, ButtonComponent],
  template: `
    <div style="display: flex; gap: 16px; align-items: center;">
      <rte-avatar
        [imgSrc]="imgSrc"
        [layout]="'image'"
        [colorType]="colorType"
        (avatarClick)="toggleAvailableToast()"
        [isInteractive]="true"
        [size]="120"
        status="available"
      />
      <rte-avatar
        [imgSrc]="imgSrc"
        [layout]="'icon'"
        type="entity"
        [colorType]="colorType"
        (avatarClick)="toggleBusyToast()"
        [isInteractive]="true"
        [size]="120"
        status="busy"
      />
    </div>
  `,
})
export class AvatarInteractionComponent {
  private toastService = inject(ToastService);
  readonly mySuccessNotificationId = signal<string | null>(null);
  readonly myErrorNotificationId = signal<string | null>(null);
  readonly imgSrc = user;
  readonly colorType = "neutral";

  toggleAvailableToast(): void {
    if (this.toastService.isInQueue(this.mySuccessNotificationId()!)) {
      this.toastService.removeFromQueue(this.mySuccessNotificationId()!);
      return;
    }
    const config: ToastConfig = {
      message: "Clicked on the available avatar !",
      type: "success",
      autoDismiss: true,
    };
    const infoNotificationId = this.toastService.addToQueue(config);
    this.mySuccessNotificationId.set(infoNotificationId);
  }

  toggleBusyToast(): void {
    if (this.toastService.isInQueue(this.myErrorNotificationId()!)) {
      this.toastService.removeFromQueue(this.myErrorNotificationId()!);
      return;
    }
    const config: ToastConfig = {
      message: "Clicked on the busy avatar !",
      type: "error",
      autoDismiss: true,
    };
    const errorNotificationId = this.toastService.addToQueue(config);
    this.myErrorNotificationId.set(errorNotificationId);
  }
}
