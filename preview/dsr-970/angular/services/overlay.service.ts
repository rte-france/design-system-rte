import { Injectable, ComponentRef, Type, ViewContainerRef } from "@angular/core";
import {
  hideNonOverlaySiblingsFromAssistiveTechnology,
  OVERLAY_ROOT_ID,
  restoreNonOverlaySiblingsFromAssistiveTechnology,
} from "@design-system-rte/core";

export type OverlayCreateOptions = {
  hideBackgroundFromAssistiveTechnology?: boolean;
  deferBackgroundHide?: boolean;
};

type BackgroundHideLifecycle = {
  cancelled: boolean;
  applied: boolean;
  deferBackgroundHide: boolean;
};

@Injectable({ providedIn: "root" })
export class OverlayService {
  private overlayRoot?: HTMLElement;
  private activeOverlays = new Set<ComponentRef<unknown>>();
  private backgroundHideLifecycle = new WeakMap<ComponentRef<unknown>, BackgroundHideLifecycle>();

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

  private scheduleBackgroundHide(componentRef: ComponentRef<unknown>, overlayRoot: HTMLElement): void {
    queueMicrotask(() => {
      const state = this.backgroundHideLifecycle.get(componentRef);
      if (!state || state.cancelled || state.applied) {
        return;
      }

      hideNonOverlaySiblingsFromAssistiveTechnology(overlayRoot);
      state.applied = true;
    });
  }

  applyDeferredBackgroundHide(componentRef: ComponentRef<unknown>): void {
    const lifecycle = this.backgroundHideLifecycle.get(componentRef);
    if (!lifecycle || lifecycle.cancelled || lifecycle.applied || !lifecycle.deferBackgroundHide) {
      return;
    }

    this.scheduleBackgroundHide(componentRef, this.getOverlayRoot());
  }

  releaseBackgroundHide(componentRef: ComponentRef<unknown>): void {
    const lifecycle = this.backgroundHideLifecycle.get(componentRef);
    if (!lifecycle?.applied) {
      return;
    }

    restoreNonOverlaySiblingsFromAssistiveTechnology();
    lifecycle.applied = false;
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
    const deferBackgroundHide = options?.deferBackgroundHide ?? false;

    const componentRef = viewContainer.createComponent(component);

    root.appendChild(componentRef.location.nativeElement);
    this.activeOverlays.add(componentRef);

    if (hideBackground) {
      const lifecycle: BackgroundHideLifecycle = {
        cancelled: false,
        applied: false,
        deferBackgroundHide,
      };
      this.backgroundHideLifecycle.set(componentRef, lifecycle);

      if (!deferBackgroundHide) {
        this.scheduleBackgroundHide(componentRef, root);
      }
    }

    const originalDestroy = componentRef.destroy.bind(componentRef);
    componentRef.destroy = () => {
      this.activeOverlays.delete(componentRef);

      if (hideBackground) {
        const lifecycle = this.backgroundHideLifecycle.get(componentRef);
        if (lifecycle) {
          lifecycle.cancelled = true;
          if (lifecycle.applied) {
            restoreNonOverlaySiblingsFromAssistiveTechnology();
          }
        }
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
