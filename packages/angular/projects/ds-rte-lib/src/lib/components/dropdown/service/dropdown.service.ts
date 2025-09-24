import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class DropdownService {
  private globalDropdownState: { [id: string]: boolean } = {};
  private globalListeners: { [id: string]: (() => void)[] } = {};

  generateId(): string {
    return `dropdown-${Math.random().toString(36).substring(2, 9)}`;
  }

  open(id: string): void {
    this.globalDropdownState[id] = true;
    this.notifyListeners(id);
  }

  close(id: string): void {
    delete this.globalDropdownState[id];
    this.notifyListeners(id);
  }

  closeAll(): void {
    this.globalDropdownState = {};
    Object.values(this.globalListeners)
      .flat()
      .forEach((listener) => listener());
  }

  getOpenedDropdowns(): string[] {
    return Object.keys(this.globalDropdownState);
  }

  closeSubMenus(parentId: string): void {
    const dropdownsCurrentlyOpened = Object.keys(this.globalDropdownState);
    const dropdownsToClose = dropdownsCurrentlyOpened.filter((id) => id.startsWith(parentId) && id !== parentId);
    dropdownsToClose.forEach((dropdown) => this.close(dropdown));
  }

  subscribe(id: string, callback: () => void): () => void {
    if (!this.globalListeners[id]) this.globalListeners[id] = [];
    this.globalListeners[id].push(callback);

    return () => {
      this.globalListeners[id] = this.globalListeners[id].filter((cb) => cb !== callback);
    };
  }

  private notifyListeners(id: string): void {
    this.globalListeners[id]?.forEach((listener) => listener());
  }
}
