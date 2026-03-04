import { Injectable, ComponentRef, Type, ViewContainerRef } from "@angular/core";

@Injectable({ providedIn: "root" })
export class OverlayService {
  private overlayRoot?: HTMLElement;
  private activeOverlays = new Set<ComponentRef<unknown>>();
  private isNavigationFrozen = false;

  constructor() {}

  private getOverlayRoot(freezeNavigation: boolean): HTMLElement {
    if (!this.overlayRoot) {
      this.overlayRoot = document.getElementById("overlay-root") as HTMLElement;

      if (!this.overlayRoot) {
        this.overlayRoot = document.createElement("div");
        this.overlayRoot.id = "overlay-root";
        this.overlayRoot.tabIndex = -1;
        if (freezeNavigation) {
          this.isNavigationFrozen = true;
          this.overlayRoot.style.position = "fixed";
          this.overlayRoot.style.width = "100%";
          this.overlayRoot.style.height = "100%";
          this.overlayRoot.style.top = "0";
          this.overlayRoot.style.left = "0";
          this.overlayRoot.style.zIndex = "999";
          document.body.style.overflow = "hidden";
        }
        document.body.appendChild(this.overlayRoot);
      }
    }
    return this.overlayRoot;
  }

  createWithoutAppend<T>(component: Type<T>, viewContainer: ViewContainerRef): ComponentRef<T> {
    return viewContainer.createComponent(component);
  }

  create<T>(component: Type<T>, viewContainer: ViewContainerRef, freezeNavigation: boolean = false): ComponentRef<T> {
    const root = this.getOverlayRoot(freezeNavigation);

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

  addToOverlay<T>(componentRef: ComponentRef<T>): void {
    const root = this.getOverlayRoot(this.isNavigationFrozen);
    root.appendChild(componentRef.location.nativeElement);
    this.activeOverlays.add(componentRef);
  }

  destroy() {
    if (this.activeOverlays.size === 0) {
      if (this.isNavigationFrozen) {
        document.body.style.overflow = "unset";
      }
      this.overlayRoot?.remove();
      this.overlayRoot = undefined;
    }
  }
}
