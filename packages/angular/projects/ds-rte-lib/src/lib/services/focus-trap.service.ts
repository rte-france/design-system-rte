import { inject, Injectable, Renderer2, RendererFactory2 } from "@angular/core";
import { FOCUSABLE_ELEMENTS_QUERY } from "@design-system-rte/core/constants/dom/dom.constants";

export type FocusTrapOptions = {
  getOrderedFocusables?: () => HTMLElement[];
  initialFocusIndex?: number;
  restoreFocusTo?: HTMLElement | null;
};

@Injectable({ providedIn: "root" })
export class FocusTrapService {
  private keyUnlisten?: () => void;
  private tabKeydownCaptureUnlisten?: () => void;
  private renderer: Renderer2;
  private activeTrapElement: HTMLElement | null = null;
  private restoreFocusToElement: HTMLElement | null = null;
  private getOrderedFocusables: (() => HTMLElement[]) | null = null;
  private initialFocusIndex = 0;

  private readonly rendererFactory = inject(RendererFactory2);

  constructor() {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  activate(element: HTMLElement, options: FocusTrapOptions = {}): void {
    this.teardown({ shouldRestoreFocus: false });

    this.restoreFocusToElement = options.restoreFocusTo ?? (document.activeElement as HTMLElement | null);

    this.activeTrapElement = element;
    this.getOrderedFocusables = options.getOrderedFocusables ?? null;
    this.initialFocusIndex = options.initialFocusIndex ?? 0;

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
    this.teardown({ shouldRestoreFocus: true });
  }

  private teardown(parameters: { shouldRestoreFocus: boolean }): void {
    const { shouldRestoreFocus } = parameters;

    if (this.keyUnlisten) {
      this.keyUnlisten();
    }
    this.keyUnlisten = undefined;

    if (this.tabKeydownCaptureUnlisten) {
      this.tabKeydownCaptureUnlisten();
    }
    this.tabKeydownCaptureUnlisten = undefined;

    if (shouldRestoreFocus && this.activeTrapElement && this.restoreFocusToElement) {
      this.restoreFocusToElement.focus();
    }

    this.activeTrapElement = null;
    this.restoreFocusToElement = null;
    this.getOrderedFocusables = null;
    this.initialFocusIndex = 0;
  }

  private focusInitialElement(): void {
    const focusable = this.getFocusableList();
    if (focusable.length === 0) {
      return;
    }

    const initialIndex = Math.min(Math.max(this.initialFocusIndex, 0), focusable.length - 1);
    focusable[initialIndex]?.focus();
  }

  private handleTab(event: KeyboardEvent): void {
    const focusable = this.getFocusableList();
    if (!this.activeTrapElement || focusable.length === 0) {
      return;
    }

    const current = document.activeElement as HTMLElement | null;
    const currentIndex = current ? focusable.indexOf(current) : -1;

    if (currentIndex === -1) {
      const fallbackTarget = event.shiftKey ? focusable[focusable.length - 1] : focusable[0];
      fallbackTarget?.focus();
      event.preventDefault();
      return;
    }

    const nextIndex = this.getNextIndexInOrderedCycle({
      currentIndex,
      focusableLength: focusable.length,
      shiftKey: event.shiftKey,
    });
    focusable[nextIndex]?.focus();
    event.preventDefault();
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
