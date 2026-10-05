import { Injectable, ComponentRef, Type, ViewContainerRef } from "@angular/core";
import { hideBelowElements, OVERLAY_ROOT_ID, restoreBelowElements } from "@design-system-rte/core";

export type OverlayCreateOptions = {
  hasBackdrop?: boolean;
};

type BackdropLifecycle = {
  cancelled: boolean;
  applied: boolean;
  scheduledApplyGeneration: number;
};

@Injectable({ providedIn: "root" })
export class OverlayService {
  private overlayRoot?: HTMLElement;
  private activeOverlays = new Set<ComponentRef<unknown>>();
  private backdropLifecycle = new WeakMap<ComponentRef<unknown>, BackdropLifecycle>();

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

  private invalidatePendingBackdropApply(lifecycle: BackdropLifecycle): void {
    lifecycle.scheduledApplyGeneration += 1;
  }

  private scheduleBackdropApply(componentRef: ComponentRef<unknown>, overlayRoot: HTMLElement): void {
    const state = this.backdropLifecycle.get(componentRef);
    if (!state || state.cancelled) {
      return;
    }

    const generation = state.scheduledApplyGeneration + 1;
    state.scheduledApplyGeneration = generation;

    queueMicrotask(() => {
      const current = this.backdropLifecycle.get(componentRef);
      if (!current || current.cancelled || current.applied || current.scheduledApplyGeneration !== generation) {
        return;
      }

      hideBelowElements(overlayRoot);
      current.applied = true;
    });
  }

  applyBackdrop(componentRef: ComponentRef<unknown>): void {
    const lifecycle = this.backdropLifecycle.get(componentRef);
    if (!lifecycle || lifecycle.cancelled || lifecycle.applied) {
      return;
    }

    this.scheduleBackdropApply(componentRef, this.getOverlayRoot());
  }

  releaseBackdrop(componentRef: ComponentRef<unknown>): void {
    const lifecycle = this.backdropLifecycle.get(componentRef);
    if (!lifecycle) {
      return;
    }

    this.invalidatePendingBackdropApply(lifecycle);

    if (!lifecycle.applied) {
      return;
    }

    restoreBelowElements();
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
    const hasBackdrop = options?.hasBackdrop ?? false;

    const componentRef = viewContainer.createComponent(component);

    root.appendChild(componentRef.location.nativeElement);
    this.activeOverlays.add(componentRef);

    if (hasBackdrop) {
      const lifecycle: BackdropLifecycle = {
        cancelled: false,
        applied: false,
        scheduledApplyGeneration: 0,
      };
      this.backdropLifecycle.set(componentRef, lifecycle);
    }

    const originalDestroy = componentRef.destroy.bind(componentRef);
    componentRef.destroy = () => {
      this.activeOverlays.delete(componentRef);

      if (hasBackdrop) {
        const lifecycle = this.backdropLifecycle.get(componentRef);
        if (lifecycle) {
          lifecycle.cancelled = true;
          this.invalidatePendingBackdropApply(lifecycle);
          if (lifecycle.applied) {
            restoreBelowElements();
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
