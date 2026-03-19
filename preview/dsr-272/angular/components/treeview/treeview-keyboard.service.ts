import { Injectable } from "@angular/core";
import {
  ARROW_DOWN_KEY,
  ARROW_KEYS,
  ARROW_LEFT_KEY,
  ARROW_RIGHT_KEY,
  ARROW_UP_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard.constants";

const FOCUSABLE_ORDER = ["checkbox", "chevron", "content", "action"];

const FOCUSABLE_ATTRIBUTE = "data-treeview-focusable";

export interface VisibleRow {
  rowElement: HTMLElement;
  focusables: HTMLElement[];
}

@Injectable()
export class TreeviewKeyboardService {
  handleKeyDown(event: KeyboardEvent, treeElement: HTMLElement): void {
    if (event.altKey || event.ctrlKey || event.metaKey) {
      return;
    }

    if (ARROW_KEYS.includes(event.key)) {
      this.handleArrowKey(treeElement, event);
    }
  }

  private handleArrowKey(treeElement: HTMLElement, event: KeyboardEvent): void {
    const target = event.target as HTMLElement;
    if (!treeElement.contains(target)) {
      return;
    }

    if (!this.isTreeviewFocusable(target)) {
      return;
    }

    const rows = this.getVisibleFocusableRows(treeElement);
    if (rows.length === 0) {
      return;
    }

    const { rowIndex, focusableIndex } = this.findFocusedPosition(rows, target);
    if (rowIndex === -1 || focusableIndex === -1) {
      return;
    }

    if ([ARROW_UP_KEY, ARROW_DOWN_KEY].includes(event.key)) {
      this.handleVerticalNavigation(rows, rowIndex, event);
    }

    if ([ARROW_LEFT_KEY, ARROW_RIGHT_KEY].includes(event.key)) {
      this.handleHorizontalNavigation(rows[rowIndex], focusableIndex, event);
    }
  }

  private handleVerticalNavigation(rows: VisibleRow[], rowIndex: number, event: KeyboardEvent): void {
    const direction = event.key === ARROW_UP_KEY ? -1 : 1;
    let targetRowIndex = rowIndex + direction;

    if (targetRowIndex < 0 || targetRowIndex >= rows.length) {
      event.preventDefault();
      return;
    }

    if (targetRowIndex >= 0 && targetRowIndex < rows.length) {
      const targetRow = rows[targetRowIndex];
      const isTargetDisabled = targetRow.rowElement.classList.contains("disabled");

      if (isTargetDisabled) {
        targetRowIndex += direction;
      } else {
        const targetRow = rows[targetRowIndex];
        const contentOrFirst = this.getContentOrFirstFocusable(targetRow);
        if (contentOrFirst) {
          event.preventDefault();
          const treeElement = targetRow.rowElement.closest("ul.treeview") as HTMLElement;
          if (treeElement) {
            this.setMovingTabindex(treeElement, contentOrFirst);
          }
          contentOrFirst.focus();
        }
      }
    }
    event.preventDefault();
  }

  private handleHorizontalNavigation(row: VisibleRow, focusableIndex: number, event: KeyboardEvent): void {
    const direction = event.key === ARROW_LEFT_KEY ? -1 : 1;
    let targetIndex = focusableIndex + direction;

    if (targetIndex >= 0 && targetIndex < row.focusables.length) {
      const candidate = row.focusables[targetIndex];

      if (this.isTreeitemDisabled(candidate)) {
        targetIndex += direction;
      } else {
        event.preventDefault();
        const treeElement = row.rowElement.closest("ul.treeview") as HTMLElement;
        if (treeElement) {
          this.setMovingTabindex(treeElement, candidate);
        }
        candidate.focus();
      }
    }
    event.preventDefault();
  }

  private getContentOrFirstFocusable(row: VisibleRow): HTMLElement | null {
    const content = row.focusables.find((element) => element.getAttribute(FOCUSABLE_ATTRIBUTE) === "content");
    if (content && !this.isTreeitemDisabled(content)) {
      return content;
    }
    const firstEnabled = row.focusables.find((element) => !this.isTreeitemDisabled(element));
    return firstEnabled ?? null;
  }

  private getVisibleFocusableRows(treeElement: HTMLElement): VisibleRow[] {
    const treeitems = Array.from(treeElement.querySelectorAll<HTMLElement>("li.treeview-item[role='treeitem']"));

    return treeitems
      .filter(this.isTreeitemVisible)
      .map((treeitem) => ({ rowElement: treeitem, focusables: this.getFocusablesForRow(treeitem) }));
  }

  private isTreeitemVisible(treeitem: HTMLElement): boolean {
    let current: HTMLElement | null = treeitem;

    while (current) {
      const parentElement = current.parentElement as HTMLElement | null;
      if (!parentElement) {
        break;
      }

      if (
        parentElement.classList.contains("treeview-item-children") &&
        !parentElement.classList.contains("treeview-item-children-open")
      ) {
        return false;
      }

      current = parentElement;
    }

    return true;
  }

  private getFocusablesForRow(treeitem: HTMLElement): HTMLElement[] {
    return FOCUSABLE_ORDER.map((type) =>
      treeitem.querySelector<HTMLElement>(`[${FOCUSABLE_ATTRIBUTE}="${type}"]`),
    ).filter((element): element is HTMLElement => element !== null);
  }

  private isTreeviewFocusable(element: HTMLElement): boolean {
    return element.hasAttribute(FOCUSABLE_ATTRIBUTE);
  }

  private isTreeitemDisabled(element: HTMLElement): boolean {
    const treeitem = element.closest("li.treeview-item");
    return !!treeitem?.classList.contains("disabled");
  }

  private findFocusedPosition(rows: VisibleRow[], target: HTMLElement): { rowIndex: number; focusableIndex: number } {
    const DEFAULT_POSITION = { rowIndex: -1, focusableIndex: -1 };
    const found = rows
      .map((row, rowIndex) => ({
        rowIndex,
        focusableIndex: row.focusables.indexOf(target),
      }))
      .find((result) => result.focusableIndex !== -1);

    return found ?? DEFAULT_POSITION;
  }

  private setMovingTabindex(treeElement: HTMLElement, focusedElement: HTMLElement): void {
    this.getFocusableElementsFromTreeview(treeElement).forEach((element) =>
      element.setAttribute("tabindex", element === focusedElement ? "0" : "-1"),
    );
  }

  private getFocusableElementsFromTreeview(treeElement: HTMLElement): HTMLElement[] {
    return Array.from(treeElement.querySelectorAll<HTMLElement>(`[${FOCUSABLE_ATTRIBUTE}]`));
  }

  onFocusIn(treeElement: HTMLElement, event: FocusEvent): void {
    const target = event.target as HTMLElement;
    if (treeElement.contains(target) && this.isTreeviewFocusable(target)) {
      this.setMovingTabindex(treeElement, target);
    }
  }

  onFocusOut(treeElement: HTMLElement, event: FocusEvent): void {
    const relatedTarget = event.relatedTarget as HTMLElement | null;
    if (relatedTarget && treeElement.contains(relatedTarget)) {
      return;
    }

    this.resetMovingTabIndex(treeElement);
  }

  private resetMovingTabIndex(treeElement: HTMLElement): void {
    this.getFocusableElementsFromTreeview(treeElement).forEach((element) => element.setAttribute("tabindex", "-1"));

    const rows = this.getVisibleFocusableRows(treeElement);
    if (rows.length) {
      const firstContent = this.getContentOrFirstFocusable(rows[0]);
      if (firstContent) {
        firstContent.setAttribute("tabindex", "0");
      }
    }
  }

  initialize(treeElement: HTMLElement): void {
    this.resetMovingTabIndex(treeElement);
  }
}
