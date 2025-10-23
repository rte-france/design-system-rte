import { ElementRef, Injectable } from "@angular/core";
import {
  ARROW_DOWN_KEY,
  ARROW_LEFT_KEY,
  ARROW_RIGHT_KEY,
  ARROW_UP_KEY,
  ESCAPE_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard.constants";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";

export interface KeyboardHandlingOptions {
  menuElement: ElementRef | null;
  menuId: string;
  itemIndex?: number;
}

export interface DropdownState {
  activeMenuId: string;
}

@Injectable({
  providedIn: "root", // Makes the service a singleton
})
export class DropdownService {
  private readonly initialState: DropdownState = {
    activeMenuId: "",
  };

  state$ = new BehaviorSubject<DropdownState | null>(this.initialState);

  readonly activeMenuId$ = this.state$.pipe(map((state) => state?.activeMenuId));

  openMenu(menuId: string): void {
    this.state$.next({
      activeMenuId: menuId,
    });
  }

  closeAllMenus(): void {
    this.state$.next(null);
  }

  isMenuActive(menuId: string): Observable<boolean> {
    return this.activeMenuId$.pipe(map((activeId) => activeId === menuId));
  }

  reset(): void {
    this.state$.next(this.initialState);
    console.log("🔵 Dropdown Service - State Reset");
  }

  handleKeyboardInput(key: string, options: KeyboardHandlingOptions): void {
    if ([ARROW_DOWN_KEY, ARROW_UP_KEY, ARROW_LEFT_KEY, ARROW_RIGHT_KEY].includes(key)) {
      this.handleKeyboardNavigation(key, options);
    }

    if (key === ESCAPE_KEY) {
      this.closeAllMenus();
    }
  }

  handleKeyboardNavigation(key: string, options: KeyboardHandlingOptions): void {
    const { menuElement } = options;
    const nativeElement = menuElement?.nativeElement as HTMLElement;

    switch (key) {
      case ARROW_DOWN_KEY:
        this.focusNextElement(nativeElement);
        break;

      case ARROW_UP_KEY:
        this.focusPreviousElement(nativeElement);
        break;
    }
  }

  private focusNextElement(element: HTMLElement | null): void {
    if (!element) return;

    const focusableElements = this.getFocusableElements(element);
    const currentIndex = focusableElements.indexOf(document.activeElement as HTMLElement);
    const nextIndex = currentIndex + 1 < focusableElements.length ? currentIndex + 1 : 0;

    focusableElements[nextIndex]?.focus();
  }

  private focusPreviousElement(element: HTMLElement | null): void {
    if (!element) return;

    const focusableElements = this.getFocusableElements(element);
    const currentIndex = focusableElements.indexOf(document.activeElement as HTMLElement);
    const previousIndex = currentIndex ? currentIndex - 1 : focusableElements.length - 1;

    focusableElements[previousIndex]?.focus();
  }

  private getFocusableElements(element: HTMLElement): HTMLElement[] {
    const menuId = element.dataset["menuId"];
    return Array.from(element.querySelectorAll("li")).filter((el) => {
      const closestMenu = el.closest("[data-menu-id]") as HTMLElement;
      return closestMenu?.dataset["menuId"] === menuId;
    }) as HTMLElement[];
  }
}
