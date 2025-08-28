// overlay.service.ts
import { Injectable, ComponentRef, Type, ViewContainerRef } from "@angular/core";

@Injectable({ providedIn: "root" })
export class OverlayService {
  private overlayRoot?: HTMLElement;
  private activeOverlays = new Set<ComponentRef<unknown>>();

  constructor() {}

  private getOverlayRoot(): HTMLElement {
    if (!this.overlayRoot) {
      this.overlayRoot = document.getElementById("overlay-root") as HTMLElement;

      if (!this.overlayRoot) {
        this.overlayRoot = document.createElement("div");
        this.overlayRoot.id = "overlay-root";
        this.overlayRoot.style.position = "fixed";
        this.overlayRoot.style.top = "0";
        this.overlayRoot.style.left = "0";
        this.overlayRoot.style.width = "100%";
        this.overlayRoot.style.height = "100%";
        this.overlayRoot.style.pointerEvents = "none";
        this.overlayRoot.style.zIndex = "1000";
        document.body.appendChild(this.overlayRoot);
      }
    }
    return this.overlayRoot;
  }

  create<T>(component: Type<T>, viewContainer: ViewContainerRef): ComponentRef<T> {
    const root = this.getOverlayRoot();

    const componentRef = viewContainer.createComponent(component);

    root.appendChild(componentRef.location.nativeElement);
    this.activeOverlays.add(componentRef);

    const originalDestroy = componentRef.destroy.bind(componentRef);
    componentRef.destroy = () => {
      this.activeOverlays.delete(componentRef);
      originalDestroy();
    };

    return componentRef;
  }

  destroy() {
    if (this.activeOverlays.size === 0) {
      this.overlayRoot?.remove();
      this.overlayRoot = undefined;
    }
  }
}
