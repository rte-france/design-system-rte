import { Injectable, signal } from "@angular/core";
import { DynamicTabItemOption } from "@design-system-rte/core/components/dynamic-tab/dynamic-tab.interface";
import {
  ARROW_LEFT_KEY,
  ARROW_RIGHT_KEY,
  ENTER_KEY,
  ESCAPE_KEY,
  SPACE_KEY,
  TAB_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard.constants";

export interface DynamicTabKeyboardContext {
  listElement: HTMLElement;
  visibleTabIds: string[];
  selectedTabId: string | undefined;
  isMoving: boolean;
  selectTab: (tabId: string) => void;
  reorderTabs: (fromIndex: number, toIndex: number) => void;
  getTabIndex: (tabId: string) => number;
  onExitMoveMode: () => void;
}

@Injectable()
export class DynamicTabKeyboardService {
  readonly lastKey = signal<string | null>(null);

  private suppressSpaceMoveEnter = false;

  trackDocumentKeydown(event: KeyboardEvent): void {
    this.lastKey.set(event.key);
  }

  shouldEnterMoveModeOnSpaceKeyup(): boolean {
    if (this.suppressSpaceMoveEnter) {
      this.suppressSpaceMoveEnter = false;
      return false;
    }

    return true;
  }

  handleContainerFocusCapture(
    event: FocusEvent,
    container: HTMLElement,
    selectedTabId: string | undefined,
    selectTab: (tabId: string) => void,
  ): void {
    if (this.lastKey() !== TAB_KEY) {
      return;
    }

    const relatedTarget = event.relatedTarget as Node | null;
    const isEnteringFromOutside = !relatedTarget || !container.contains(relatedTarget);

    if (!isEnteringFromOutside) {
      return;
    }

    const selectedTab = selectedTabId
      ? (container.querySelector(`[data-tab-id="${selectedTabId}"]`) as HTMLElement | null)
      : null;
    const firstTab = (container.querySelector('[role="tab"]') as HTMLElement | null) ?? selectedTab;

    if (!firstTab) {
      return;
    }

    const firstTabId = firstTab.getAttribute("data-tab-id");

    if (firstTabId && firstTabId !== selectedTabId) {
      selectTab(firstTabId);
    }

    if (event.target !== firstTab) {
      requestAnimationFrame(() => firstTab.focus());
    }
  }

  handleTabKeydown(event: KeyboardEvent, context: DynamicTabKeyboardContext): boolean {
    const { listElement, visibleTabIds, selectedTabId, isMoving, selectTab, reorderTabs, getTabIndex, onExitMoveMode } =
      context;

    if (isMoving && event.key === SPACE_KEY) {
      event.preventDefault();
      this.suppressSpaceMoveEnter = true;
      onExitMoveMode();
      return true;
    }

    if (isMoving && (event.key === ARROW_LEFT_KEY || event.key === ARROW_RIGHT_KEY)) {
      event.preventDefault();
      if (!selectedTabId) {
        return true;
      }

      const currentIndex = getTabIndex(selectedTabId);
      const nextIndex = currentIndex + (event.key === ARROW_RIGHT_KEY ? 1 : -1);

      if (nextIndex < 0 || nextIndex >= visibleTabIds.length) {
        return true;
      }

      reorderTabs(currentIndex, nextIndex);
      return true;
    }

    if (event.key === ARROW_LEFT_KEY || event.key === ARROW_RIGHT_KEY) {
      event.preventDefault();
      this.focusAdjacentTab(listElement, event.key === ARROW_RIGHT_KEY ? "next" : "previous", selectTab);
      return true;
    }

    if (event.key === ENTER_KEY || event.key === SPACE_KEY) {
      event.preventDefault();
      const tabElement = event.currentTarget as HTMLElement;
      const tabId = tabElement.getAttribute("data-tab-id");

      if (tabId) {
        selectTab(tabId);
      }

      return true;
    }

    if (event.key === ESCAPE_KEY && isMoving) {
      event.preventDefault();
      return true;
    }

    return false;
  }

  handleTabKeyup(event: KeyboardEvent, isActive: boolean, isEditing: boolean, onEnterMoveMode: () => void): void {
    if (event.key !== SPACE_KEY || !isActive || isEditing) {
      return;
    }

    onEnterMoveMode();
  }

  handleGlobalKeydownWhileMoving(event: KeyboardEvent, isMoving: boolean, onExitMoveMode: () => void): void {
    if (!isMoving || event.key !== SPACE_KEY) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    this.suppressSpaceMoveEnter = true;
    onExitMoveMode();
  }

  private focusAdjacentTab(
    listElement: HTMLElement,
    direction: "next" | "previous",
    selectTab: (tabId: string) => void,
  ): void {
    const tabElements = Array.from(listElement.querySelectorAll('[role="tab"]')) as HTMLElement[];

    if (tabElements.length === 0) {
      return;
    }

    const currentIndex = tabElements.findIndex((tab) => tab === document.activeElement);
    const startIndex = currentIndex === -1 ? 0 : currentIndex;
    const nextIndex =
      direction === "next"
        ? (startIndex + 1) % tabElements.length
        : (startIndex - 1 + tabElements.length) % tabElements.length;

    const nextTab = tabElements[nextIndex];
    const tabId = nextTab.getAttribute("data-tab-id");

    if (tabId) {
      selectTab(tabId);
    }

    nextTab.focus();
  }

  swapTabOrder(options: DynamicTabItemOption[], fromIndex: number, toIndex: number): DynamicTabItemOption[] {
    const updated = [...options];
    const [moved] = updated.splice(fromIndex, 1);
    updated.splice(toIndex, 0, moved);
    return updated;
  }
}
