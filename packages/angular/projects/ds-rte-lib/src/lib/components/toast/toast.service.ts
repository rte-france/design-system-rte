import { Injectable, ComponentRef, ViewContainerRef, inject, signal, effect } from "@angular/core";
import { ToastDuration, ToastPlacement, ToastType } from "@design-system-rte/core/components/toast/toast.interface";
import { v4 as uuidv4 } from "uuid";

import { OverlayService } from "../../services/overlay.service";

import { ToastComponent } from "./toast.component";

export interface ToastConfig {
  message: string;
  type: ToastType;
  closable?: boolean;
  autoDismiss?: boolean;
  duration?: ToastDuration;
  placement?: ToastPlacement;
  showActionButton?: boolean;
  actionButtonLabel?: string;
  onActionButtonClick?: () => void;
}

@Injectable({ providedIn: "root" })
export class ToastService {
  private viewContainerRef = inject(ViewContainerRef);
  private overlayService: OverlayService;
  private currentOpenedToastRef: ComponentRef<ToastComponent> | null = null;

  readonly toastQueue = signal<ComponentRef<ToastComponent>[]>([]);

  constructor() {
    this.overlayService = inject(OverlayService);

    effect(() => {
      const toastToOpen = this.toastQueue()[0];
      if (!toastToOpen) {
        this.currentOpenedToastRef = null;
        return;
      }
      if (this.currentOpenedToastRef?.instance.id() === toastToOpen.instance.id()) {
        return;
      } else {
        if (this.currentOpenedToastRef) {
          this.currentOpenedToastRef.setInput("isOpen", false);
        }
      }
      this.overlayService.addToOverlay(toastToOpen);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          toastToOpen.setInput("isOpen", true);
          this.currentOpenedToastRef = toastToOpen;
        });
      });
    });
  }

  getAllToasts(): ComponentRef<ToastComponent>[] {
    return this.toastQueue();
  }

  getCurrentOpenedToast(): ComponentRef<ToastComponent> | null {
    return this.currentOpenedToastRef;
  }

  isInQueue(toastId: string): boolean {
    return this.toastQueue().some((toast) => toast.instance.id() === toastId);
  }

  addToQueue(config: ToastConfig): string {
    const toast = this.build(config);
    toast.instance.close.subscribe(() => {
      this.removeFromQueue(toast.instance.id());
    });

    this.toastQueue.update((list) =>
      [...list, toast].sort((a, b) => {
        const priorityA = this.getPriority({
          hasButtonAction: a.instance.showActionButton()!,
          type: a.instance.type(),
          isAutoDismiss: a.instance.autoDismiss()!,
        });
        const priorityB = this.getPriority({
          hasButtonAction: b.instance.showActionButton()!,
          type: b.instance.type(),
          isAutoDismiss: b.instance.autoDismiss()!,
        });
        return priorityA - priorityB;
      }),
    );
    return toast.instance.id();
  }

  removeFromQueue(toastId: string): void {
    if (this.toastQueue().length === 0) return;
    if (this.toastQueue().length === 1 && this.toastQueue()[0].instance.id() === toastId) {
      const onlyToast = this.toastQueue()[0];
      this.toastQueue.set([]);
      onlyToast.setInput("isOpen", false);
      this.waitExitAnimation(onlyToast, () => {
        onlyToast.destroy();
      });
      return;
    }
    const toastToHide = this.toastQueue().find((toast) => toast.instance.id() === toastId);
    if (!toastToHide) return;
    this.toastQueue.update((list) => list.filter((c) => c.instance.id() !== toastId));
    toastToHide.setInput("isOpen", false);
    this.waitExitAnimation(toastToHide, () => {
      toastToHide.destroy();
    });
  }

  private build(config: ToastConfig): ComponentRef<ToastComponent> {
    const toast = this.overlayService.createWithoutAppend(ToastComponent, this.viewContainerRef);
    this.assignInputsValues(toast, config);
    return toast;
  }

  private assignInputsValues(toast: ComponentRef<ToastComponent>, config: ToastConfig): void {
    const {
      message,
      type = "info",
      closable = true,
      autoDismiss = false,
      duration = "medium",
      placement = "bottom-right",
      showActionButton = true,
      actionButtonLabel,
      onActionButtonClick,
    } = config;
    toast.setInput("message", message);
    toast.setInput("id", uuidv4());
    toast.setInput("type", type);
    toast.setInput("closable", closable);
    toast.setInput("autoDismiss", autoDismiss);
    toast.setInput("duration", duration);
    toast.setInput("placement", placement);
    toast.setInput("showActionButton", showActionButton);
    toast.setInput("actionButtonLabel", actionButtonLabel);
    toast.setInput("onActionButtonClick", onActionButtonClick);
  }

  private getPriority = (toast: {
    hasButtonAction: boolean;
    type: "info" | "success" | "warning" | "error" | "neutral";
    isAutoDismiss: boolean;
  }) => {
    const { hasButtonAction, type } = toast;
    if (hasButtonAction) {
      if (type === "error") {
        return 1;
      } else if (type === "warning") {
        return 3;
      } else if (type === "success") {
        return 5;
      } else if (type === "info") {
        return 6;
      } else {
        return 7;
      }
    } else {
      if (type === "error") {
        return 2;
      } else if (type === "warning") {
        return 4;
      } else if (type === "success") {
        return 8;
      } else if (type === "info") {
        return 9;
      } else {
        return 10;
      }
    }
  };

  private waitExitAnimation(ref: ComponentRef<ToastComponent>, done: () => void): void {
    setTimeout(done, 300);
  }
}
