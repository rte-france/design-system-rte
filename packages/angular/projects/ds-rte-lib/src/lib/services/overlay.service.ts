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

  attach<T>(component: ComponentRef<T>, viewContainer: ViewContainerRef): ComponentRef<T> {
    const root = this.getOverlayRoot();
    root.appendChild(component?.location.nativeElement);
    return component;
  }

  destroy() {
    if (this.activeOverlays.size === 0) {
      this.overlayRoot?.remove();
      this.overlayRoot = undefined;
    }
  }
}
