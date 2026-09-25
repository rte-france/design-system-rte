import { Injectable, ComponentRef, Type, ViewContainerRef } from "@angular/core";
import {
  cancelBackdropLayerSchedule,
  OVERLAY_ROOT_ID,
  restoreNonOverlaySiblingsFromAssistiveTechnology,
  scheduleBackdropLayerForOverlayRoot,
  type BackdropLayerScheduleControl,
} from "@design-system-rte/core";

export type OverlayCreateOptions = {
  backdropLayer?: boolean;
};

type BackdropLayerLifecycle = {
  cancelled: boolean;
  applied: boolean;
  schedule: BackdropLayerScheduleControl;
};

@Injectable({ providedIn: "root" })
export class OverlayService {
  private overlayRoot?: HTMLElement;
  private activeOverlays = new Set<ComponentRef<unknown>>();
  private backdropLayerLifecycle = new WeakMap<ComponentRef<unknown>, BackdropLayerLifecycle>();

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

  private scheduleBackdropLayer(componentRef: ComponentRef<unknown>, overlayRoot: HTMLElement): void {
    const lifecycle = this.backdropLayerLifecycle.get(componentRef);
    if (!lifecycle || lifecycle.cancelled) {
      return;
    }

    scheduleBackdropLayerForOverlayRoot(overlayRoot, lifecycle.schedule, {
      onApplied: () => {
        const current = this.backdropLayerLifecycle.get(componentRef);
        if (current && !current.cancelled) {
          current.applied = true;
        }
      },
    });
  }

  releaseBackdropLayer(componentRef: ComponentRef<unknown>): void {
    const lifecycle = this.backdropLayerLifecycle.get(componentRef);
    if (!lifecycle) {
      return;
    }

    cancelBackdropLayerSchedule(lifecycle.schedule);

    if (!lifecycle.applied) {
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
    const backdropLayer = options?.backdropLayer ?? false;

    const componentRef = viewContainer.createComponent(component);

    root.appendChild(componentRef.location.nativeElement);
    this.activeOverlays.add(componentRef);

    if (backdropLayer) {
      const lifecycle: BackdropLayerLifecycle = {
        cancelled: false,
        applied: false,
        schedule: { cancelled: false, generation: 0 },
      };
      this.backdropLayerLifecycle.set(componentRef, lifecycle);
      this.scheduleBackdropLayer(componentRef, root);
    }

    const originalDestroy = componentRef.destroy.bind(componentRef);
    componentRef.destroy = () => {
      this.activeOverlays.delete(componentRef);

      if (backdropLayer) {
        const lifecycle = this.backdropLayerLifecycle.get(componentRef);
        if (lifecycle) {
          lifecycle.cancelled = true;
          cancelBackdropLayerSchedule(lifecycle.schedule);
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
