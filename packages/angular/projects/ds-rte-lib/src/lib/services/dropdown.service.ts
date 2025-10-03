import { ElementRef, Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";

export interface KeyboardHandlingOptions {
  menuElement: ElementRef | null;
  menuId: string;
  hasSubmenu?: boolean;
  itemIndex?: number;
  isSubmenu?: boolean;
}

export interface DropdownState {
  activeMenuId: string;      // Currently focused menu
  visibleMenuIds: string[];  // All menus that should be shown
  activePath: string[];      // Full path from root to active menu
}

@Injectable({
  providedIn: 'root'  // Makes the service a singleton
})
export class DropdownService {
  private initialState: DropdownState = {
    activeMenuId: '',
    visibleMenuIds: [],
    activePath: []
  };

  state$ = new BehaviorSubject<DropdownState | null>(this.initialState);

  // Public observables for components to subscribe to
  readonly activeMenuId$ = this.state$.pipe(
    map(state => state?.activeMenuId)
  );

  readonly visibleMenuIds$ = this.state$.pipe(
    map(state => state?.visibleMenuIds)
  );

  readonly activePath$ = this.state$.pipe(
    map(state => state?.activePath)
  );

  // Helper to get current state snapshot
  private get currentState(): DropdownState | null {
    return this.state$.value;
  }

  // Basic state update methods
  activateMenu(menuId: string): void {
    // Build the path from root to this menu
    const path = menuId.split(':');
    
    // Update state
    this.state$.next({
      activeMenuId: menuId,
      activePath: path,
      // All menus in the path should be visible
      visibleMenuIds: path.map((_, index) => path.slice(0, index + 1).join(':'))
    });

    console.log('🔵 Dropdown Service - Menu Activated:', {
      menuId,
      newState: this.currentState
    });
  }

  deactivateMenu(menuId: string): void {
    const currentState = this.currentState;
    
    // Remove this menu and all its children from visible menus
    const newVisibleMenuIds = currentState?.visibleMenuIds
      .filter(id => !id.startsWith(menuId));

    // If this was the active menu, activate its parent
    let newActiveMenuId = currentState?.activeMenuId;
    let newActivePath = currentState?.activePath;

    if (currentState?.activeMenuId === menuId) {
      const parentId = menuId.split(':').slice(0, -1).join(':');
      newActiveMenuId = parentId;
      newActivePath = parentId ? parentId.split(':') : [];
    }

    this.state$.next({
      activeMenuId: newActiveMenuId ?? '',
      visibleMenuIds: newVisibleMenuIds ?? [],
      activePath: newActivePath ?? []
    });

    console.log('🔵 Dropdown Service - Menu Deactivated:', {
      menuId,
      newState: this.currentState
    });
  }

  closeMenu(): void {
    this.state$.next(null);
  }

  // Helper methods
  isMenuVisible(menuId: string): Observable<boolean> {
    return this.visibleMenuIds$.pipe(
      map(ids => !!ids?.includes(menuId))
    );
  }

  isMenuActive(menuId: string): Observable<boolean> {
    return this.activeMenuId$.pipe(
      map(activeId => activeId === menuId)
    );
  }

  reset(): void {
    this.state$.next(this.initialState);
    console.log('🔵 Dropdown Service - State Reset');
  }

  handleKeyboardInput(key: string, options: KeyboardHandlingOptions): void {
    if (['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight'].includes(key)) {
      this.handleKeyboardNavigation(key, options);
    }

    if (key === 'Escape') {
      this.closeMenu();
    }
  }

  // Keyboard Navigation Methods
  handleKeyboardNavigation(key: string, options: KeyboardHandlingOptions): void {
    const { menuElement } = options;
    const nativeElement = menuElement?.nativeElement as HTMLElement;

    switch (key) {
      case 'ArrowDown':
        this.focusNextElement(nativeElement);
        break;

      case 'ArrowUp':
        this.focusPreviousElement(nativeElement);
        break;
/* 
      case 'ArrowRight':
        if (hasSubmenu && itemIndex !== undefined) {
          const submenuId = `${menuId}:${itemIndex + 1}`;
          this.activateMenu(submenuId);
        }
        break;

      case 'ArrowLeft':
        if (isSubmenu) {
          const parentId = menuId.split(':').slice(0, -1).join(':');
          if (parentId) {
            this.deactivateMenu(menuId);
            this.activateMenu(parentId);
          }
        }
        break; */
/* 
      case 'Space':
        this.focusNextElement(nativeElement);
        break; */

      // Escape handling moved to directive
    }
  }

  private focusNextElement(element: HTMLElement | null): void {
    if (!element) return;

    const focusableElements = this.getFocusableElements(element);
    const currentIndex = focusableElements.findIndex(el => el === document.activeElement);
    const nextIndex = currentIndex + 1 < focusableElements.length ? currentIndex + 1 : 0;
    
    focusableElements[nextIndex]?.focus();
  }

  private focusPreviousElement(element: HTMLElement | null): void {
    if (!element) return;

    const focusableElements = this.getFocusableElements(element);
    const currentIndex = focusableElements.findIndex(el => el === document.activeElement);
    const previousIndex = currentIndex ? currentIndex - 1 : focusableElements.length - 1;
    
    focusableElements[previousIndex]?.focus();
  }

  private getFocusableElements(element: HTMLElement): HTMLElement[] {
    const menuId = element.getAttribute('data-menu-id');
    return Array.from(
      element.querySelectorAll(
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled])'
      )
    ).filter(el => {
      // Get the closest menu container for this element
      const closestMenu = el.closest('[data-menu-id]');
      // Only keep elements that belong to the current menu
      return closestMenu?.getAttribute('data-menu-id') === menuId;
    }) as HTMLElement[];
  }
}
