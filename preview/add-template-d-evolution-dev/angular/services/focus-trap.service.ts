import { inject, Injectable, Renderer2, RendererFactory2 } from "@angular/core";
import { FOCUSABLE_ELEMENTS_QUERY } from "@design-system-rte/core/constants/dom/dom.constants";

@Injectable({ providedIn: "root" })
export class FocusTrapService {
  private keyUnlisten?: () => void;
  private renderer: Renderer2;
  private activeTrapElement: HTMLElement | null = null;
  private previouslyFocusedElement: HTMLElement | null = null;
  private focusable: HTMLElement[] = [];

  private rendererFactory = inject(RendererFactory2);

  constructor() {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  activate(element: HTMLElement) {
    this.previouslyFocusedElement = document.activeElement as HTMLElement;

    this.activeTrapElement = element;

    this.focusable = this.getFocusableElements(element);

    this.focusFirstElement();

    this.keyUnlisten = this.renderer.listen(element, "keydown", (event: KeyboardEvent) => {
      if (event.key === "Tab") {
        this.handleTab(event, this.focusable);
      }
    });
  }

  deactivate() {
    if (this.keyUnlisten) this.keyUnlisten();
    this.keyUnlisten = undefined;

    if (this.previouslyFocusedElement) {
      this.previouslyFocusedElement.focus();
    }

    this.activeTrapElement = null;
  }

  private focusFirstElement() {
    if (!this.activeTrapElement) return;

    const focusable = this.activeTrapElement.querySelectorAll(FOCUSABLE_ELEMENTS_QUERY);
    if (focusable.length > 0) (focusable[0] as HTMLElement).focus();
  }

  private handleTab(event: KeyboardEvent, focusable: HTMLElement[]) {
    if (!this.activeTrapElement || focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const current = document.activeElement as HTMLElement;

    if (event.shiftKey && current === first) {
      last.focus();
      event.preventDefault();
    } else if (!event.shiftKey && current === last) {
      first.focus();
      event.preventDefault();
    }
  }

  private getFocusableElements(container: HTMLElement): HTMLElement[] {
    return Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_ELEMENTS_QUERY));
  }
}
