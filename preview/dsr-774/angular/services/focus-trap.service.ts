import { inject, Injectable, Renderer2, RendererFactory2 } from "@angular/core";
import { FOCUSABLE_ELEMENTS_QUERY } from "@design-system-rte/core/constants/dom/dom.constants";

export interface FocusTrapActivateOptions {
  restoreFocusTo?: HTMLElement | null;
  getOrderedFocusables?: () => HTMLElement[];
  initialFocusIndex?: number;
}

@Injectable({ providedIn: "root" })
export class FocusTrapService {
  private keyUnlisten?: () => void;
  private tabKeydownCaptureUnlisten?: () => void;
  private renderer: Renderer2;
  private activeTrapElement: HTMLElement | null = null;
  private previouslyFocusedElement: HTMLElement | null = null;
  private getOrderedFocusables: (() => HTMLElement[]) | null = null;
  private initialFocusIndex = 0;

  private readonly rendererFactory = inject(RendererFactory2);

  constructor() {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  activate(element: HTMLElement, options?: FocusTrapActivateOptions): void {
    this.detachKeyListeners();

    this.previouslyFocusedElement =
      options?.restoreFocusTo !== undefined && options.restoreFocusTo !== null
        ? options.restoreFocusTo
        : (document.activeElement as HTMLElement);

    this.activeTrapElement = element;
    this.getOrderedFocusables = options?.getOrderedFocusables ?? null;
    this.initialFocusIndex = options?.initialFocusIndex ?? 0;

    this.focusInitialElement();

    if (this.getOrderedFocusables) {
      const tabCaptureHandler = (event: KeyboardEvent): void => {
        if (event.key === "Tab") {
          this.handleTab(event);
        }
      };
      element.addEventListener("keydown", tabCaptureHandler, true);
      this.tabKeydownCaptureUnlisten = () => {
        element.removeEventListener("keydown", tabCaptureHandler, true);
      };
    }

    this.keyUnlisten = this.renderer.listen(element, "keydown", (event: KeyboardEvent) => {
      if (event.key === "Tab" && !this.getOrderedFocusables) {
        this.handleTab(event);
      }
    });
  }

  deactivate(): void {
    this.detachKeyListeners();

    this.getOrderedFocusables = null;

    if (this.previouslyFocusedElement) {
      this.previouslyFocusedElement.focus({ preventScroll: true });
    }

    this.activeTrapElement = null;
    this.previouslyFocusedElement = null;
  }

  private detachKeyListeners(): void {
    if (this.keyUnlisten) {
      this.keyUnlisten();
      this.keyUnlisten = undefined;
    }

    if (this.tabKeydownCaptureUnlisten) {
      this.tabKeydownCaptureUnlisten();
      this.tabKeydownCaptureUnlisten = undefined;
    }
  }

  private focusInitialElement(): void {
    const focusable = this.getFocusableList();
    if (focusable.length === 0) {
      return;
    }
    const index = Math.min(Math.max(this.initialFocusIndex, 0), focusable.length - 1);
    focusable[index]?.focus({ preventScroll: true });
  }

  private handleTab(event: KeyboardEvent): void {
    const focusable = this.getFocusableList();
    if (!this.activeTrapElement || focusable.length === 0) {
      return;
    }

    const current = document.activeElement as HTMLElement;

    if (this.getOrderedFocusables) {
      const currentIndex = focusable.indexOf(current);
      if (currentIndex === -1) {
        event.preventDefault();
        focusable[0]?.focus({ preventScroll: true });
        return;
      }
      event.preventDefault();
      const nextIndex = this.getNextIndexInOrderedCycle({
        currentIndex,
        focusableLength: focusable.length,
        shiftKey: event.shiftKey,
      });
      focusable[nextIndex].focus({ preventScroll: true });
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && current === first) {
      last.focus({ preventScroll: true });
      event.preventDefault();
    } else if (!event.shiftKey && current === last) {
      first.focus({ preventScroll: true });
      event.preventDefault();
    }
  }

  private getNextIndexInOrderedCycle(parameters: {
    currentIndex: number;
    focusableLength: number;
    shiftKey: boolean;
  }): number {
    const { currentIndex, focusableLength, shiftKey } = parameters;
    if (shiftKey) {
      if (currentIndex === 0) {
        return focusableLength - 1;
      }
      return currentIndex - 1;
    }
    if (currentIndex === focusableLength - 1) {
      return 0;
    }
    return currentIndex + 1;
  }

  private getFocusableList(): HTMLElement[] {
    if (this.getOrderedFocusables && this.activeTrapElement) {
      return this.getOrderedFocusables().filter((element) => element.isConnected);
    }
    if (!this.activeTrapElement) {
      return [];
    }
    return this.getFocusableElements(this.activeTrapElement);
  }

  private getFocusableElements(container: HTMLElement): HTMLElement[] {
    return Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_ELEMENTS_QUERY));
  }
}
