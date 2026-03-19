import { Injectable } from "@angular/core";
import {
  ARROW_DOWN_KEY,
  ARROW_LEFT_KEY,
  ARROW_RIGHT_KEY,
  ARROW_UP_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard.constants";

const FOCUSABLE_ORDER = ["checkbox", "chevron", "content", "action"] as const;

export interface VisibleRow {
  rowElement: HTMLElement;
  focusables: HTMLElement[];
}

@Injectable()
export class TreeviewKeyboardService {
  handleKeyDown(event: KeyboardEvent, treeElement: HTMLElement): boolean {
    if (event.altKey || event.ctrlKey || event.metaKey) {
      return false;
    }

    const key = event.key;

    if ([ARROW_UP_KEY, ARROW_DOWN_KEY, ARROW_LEFT_KEY, ARROW_RIGHT_KEY].includes(key)) {
      return this.handleArrowKey(treeElement, event);
    }

    return false;
  }

  private handleArrowKey(treeElement: HTMLElement, event: KeyboardEvent): boolean {
    const target = event.target as HTMLElement;
    if (!treeElement.contains(target)) {
      return false;
    }

    if (!this.isTreeviewFocusable(target)) {
      return false;
    }

    const rows = this.getVisibleFocusableRows(treeElement);
    if (rows.length === 0) {
      return false;
    }

    const { rowIndex, focusableIndex } = this.findFocusedPosition(rows, target);
    if (rowIndex === -1 || focusableIndex === -1) {
      return false;
    }

    const key = event.key;

    if (key === ARROW_UP_KEY || key === ARROW_DOWN_KEY) {
      return this.handleVerticalNavigation(rows, rowIndex, key, event);
    }

    if (key === ARROW_LEFT_KEY || key === ARROW_RIGHT_KEY) {
      return this.handleHorizontalNavigation(rows[rowIndex], focusableIndex, key, event);
    }

    return false;
  }

  private handleVerticalNavigation(rows: VisibleRow[], rowIndex: number, key: string, event: KeyboardEvent): boolean {
    const direction = key === ARROW_UP_KEY ? -1 : 1;
    let targetRowIndex = rowIndex + direction;

    while (targetRowIndex >= 0 && targetRowIndex < rows.length) {
      const targetRow = rows[targetRowIndex];
      const isTargetDisabled = targetRow.rowElement.classList.contains("disabled");
      if (!isTargetDisabled) {
        break;
      }
      targetRowIndex += direction;
    }

    if (targetRowIndex < 0 || targetRowIndex >= rows.length) {
      event.preventDefault();
      return true;
    }

    const targetRow = rows[targetRowIndex];
    const contentOrFirst = this.getContentOrFirstFocusable(targetRow);
    if (contentOrFirst) {
      event.preventDefault();
      const treeElement = targetRow.rowElement.closest("ul.treeview") as HTMLElement;
      if (treeElement) {
        this.setRovingTabindex(treeElement, contentOrFirst);
      }
      contentOrFirst.focus();
      return true;
    }

    event.preventDefault();
    return true;
  }

  private handleHorizontalNavigation(
    row: VisibleRow,
    focusableIndex: number,
    key: string,
    event: KeyboardEvent,
  ): boolean {
    const direction = key === ARROW_LEFT_KEY ? -1 : 1;
    let targetIndex = focusableIndex + direction;

    while (targetIndex >= 0 && targetIndex < row.focusables.length) {
      const candidate = row.focusables[targetIndex];
      if (!this.isDisabled(candidate)) {
        event.preventDefault();
        const treeElement = row.rowElement.closest("ul.treeview") as HTMLElement;
        if (treeElement) {
          this.setRovingTabindex(treeElement, candidate);
        }
        candidate.focus();
        return true;
      }
      targetIndex += direction;
    }

    event.preventDefault();
    return true;
  }

  private getContentOrFirstFocusable(row: VisibleRow): HTMLElement | null {
    const content = row.focusables.find((element) => element.getAttribute("data-treeview-focusable") === "content");
    if (content && !this.isDisabled(content)) {
      return content;
    }
    const firstEnabled = row.focusables.find((element) => !this.isDisabled(element));
    return firstEnabled ?? null;
  }

  getVisibleFocusableRows(treeElement: HTMLElement): VisibleRow[] {
    const treeitems = Array.from(treeElement.querySelectorAll<HTMLElement>("li.treeview-item[role='treeitem']"));
    const rows: VisibleRow[] = [];

    for (const treeitem of treeitems) {
      if (!this.isTreeitemVisible(treeitem)) {
        continue;
      }

      const focusables = this.getFocusablesForRow(treeitem);
      if (focusables.length > 0) {
        rows.push({ rowElement: treeitem, focusables });
      }
    }

    return rows;
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
    const focusableElements = Array.from(treeitem.querySelectorAll<HTMLElement>("[data-treeview-focusable]"));
    const ordered: HTMLElement[] = [];

    for (const type of FOCUSABLE_ORDER) {
      for (const element of focusableElements) {
        if (element.getAttribute("data-treeview-focusable") === type) {
          ordered.push(element);
          break;
        }
      }
    }

    return ordered;
  }

  private isTreeviewFocusable(element: HTMLElement): boolean {
    return element.hasAttribute("data-treeview-focusable");
  }

  private isDisabled(element: HTMLElement): boolean {
    const treeitem = element.closest("li.treeview-item");
    return treeitem?.classList.contains("disabled") ?? false;
  }

  private findFocusedPosition(rows: VisibleRow[], target: HTMLElement): { rowIndex: number; focusableIndex: number } {
    for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
      const focusableIndex = rows[rowIndex].focusables.indexOf(target);
      if (focusableIndex !== -1) {
        return { rowIndex, focusableIndex };
      }
    }
    return { rowIndex: -1, focusableIndex: -1 };
  }

  private setRovingTabindex(treeElement: HTMLElement, focusedElement: HTMLElement): void {
    const allFocusables = Array.from(treeElement.querySelectorAll<HTMLElement>("[data-treeview-focusable]"));
    for (const element of allFocusables) {
      element.setAttribute("tabindex", element === focusedElement ? "0" : "-1");
    }
  }

  onFocusIn(treeElement: HTMLElement, event: FocusEvent): void {
    const target = event.target as HTMLElement;
    if (!treeElement.contains(target)) {
      return;
    }

    if (this.isTreeviewFocusable(target)) {
      this.setRovingTabindex(treeElement, target);
    }
  }

  onFocusOut(treeElement: HTMLElement, event: FocusEvent): void {
    const relatedTarget = event.relatedTarget as HTMLElement | null;
    if (relatedTarget && treeElement.contains(relatedTarget)) {
      return;
    }

    this.resetRovingTabindex(treeElement);
  }

  private resetRovingTabindex(treeElement: HTMLElement): void {
    const focusables = Array.from(treeElement.querySelectorAll<HTMLElement>("[data-treeview-focusable]"));
    for (const element of focusables) {
      element.setAttribute("tabindex", "-1");
    }

    const rows = this.getVisibleFocusableRows(treeElement);
    if (rows.length > 0) {
      const firstContent = this.getContentOrFirstFocusable(rows[0]);
      if (firstContent) {
        firstContent.setAttribute("tabindex", "0");
      }
    }
  }

  initialize(treeElement: HTMLElement): void {
    this.resetRovingTabindex(treeElement);
  }

  focusFirst(treeElement: HTMLElement): void {
    const rows = this.getVisibleFocusableRows(treeElement);
    if (rows.length === 0) {
      return;
    }

    const firstContent = this.getContentOrFirstFocusable(rows[0]);
    if (firstContent) {
      this.setRovingTabindex(treeElement, firstContent);
      firstContent.focus();
    }
  }
}
