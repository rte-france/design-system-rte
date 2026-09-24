import { Injectable, ComponentRef, Type, ViewContainerRef } from "@angular/core";
import {
  hideNonOverlaySiblingsFromAssistiveTechnology,
  moveFocusIntoOverlayRootBeforeBackgroundHide,
  OVERLAY_ROOT_ID,
  restoreNonOverlaySiblingsFromAssistiveTechnology,
} from "@design-system-rte/core";

export type OverlayCreateOptions = {
  hideBackgroundFromAssistiveTechnology?: boolean;
};

@Injectable({ providedIn: "root" })
export class OverlayService {
  private overlayRoot?: HTMLElement;
  private activeOverlays = new Set<ComponentRef<unknown>>();

  private getOverlayRoot(): HTMLElement {
    if (!this.overlayRoot) {
      this.overlayRoot = document.getElementById(OVERLAY_ROOT_ID) as HTMLElement;

      if (!this.overlayRoot) {
        this.overlayRoot = document.createElement("div");
        this.overlayRoot.id = OVERLAY_ROOT_ID;
        this.overlayRoot.tabIndex = -1;
        this.overlayRoot.style.position = "absolute";
        this.overlayRoot.style.inset = "0";
        this.overlayRoot.style.pointerEvents = "none";
        document.body.appendChild(this.overlayRoot);
      }
    }
    return this.overlayRoot;
  }

  private applyBackgroundHideIfNeeded(overlayRoot: HTMLElement): void {
    moveFocusIntoOverlayRootBeforeBackgroundHide(overlayRoot);
    hideNonOverlaySiblingsFromAssistiveTechnology(overlayRoot);
  }

  createWithoutAppend<T>(component: Type<T>, viewContainer: ViewContainerRef): ComponentRef<T> {
    const componentRef = viewContainer.createComponent(component);
    const originalDestroy = componentRef.destroy.bind(componentRef);
    componentRef.destroy = () => {
      this.activeOverlays.delete(componentRef);
      originalDestroy();
    };
    return componentRef;
  }

  create<T>(component: Type<T>, viewContainer: ViewContainerRef, options?: OverlayCreateOptions): ComponentRef<T> {
    const root = this.getOverlayRoot();
    const hideBackground = options?.hideBackgroundFromAssistiveTechnology ?? false;

    const componentRef = viewContainer.createComponent(component);

    root.appendChild(componentRef.location.nativeElement);
    this.activeOverlays.add(componentRef);

    if (hideBackground) {
      queueMicrotask(() => this.applyBackgroundHideIfNeeded(root));
    }

    const originalDestroy = componentRef.destroy.bind(componentRef);
    componentRef.destroy = () => {
      this.activeOverlays.delete(componentRef);
      if (hideBackground) {
        restoreNonOverlaySiblingsFromAssistiveTechnology();
      }
      originalDestroy();
    };

    return componentRef;
  }

  addToOverlay<T>(componentRef: ComponentRef<T>): void {
    const root = this.getOverlayRoot();
    root.appendChild(componentRef.location.nativeElement);
    this.activeOverlays.add(componentRef);
  }

  destroy() {
    if (this.activeOverlays.size === 0) {
      this.overlayRoot?.remove();
      this.overlayRoot = undefined;
    }
  }
}
