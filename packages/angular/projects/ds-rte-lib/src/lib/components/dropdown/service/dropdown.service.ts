import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class DropdownService {
  private globalDropdownState: { [id: string]: boolean } = {};
  private globalListeners: { [id: string]: (() => void)[] } = {};

  generateId() {
    return `dropdown-${Math.random().toString(36).substring(2, 9)}`;
  }

  open(id: string) {
    this.globalDropdownState[id] = true;
    this.notifyListeners(id);
  }

  close(id: string) {
    delete this.globalDropdownState[id];
    this.notifyListeners(id);
  }

  closeAll() {
    this.globalDropdownState = {};
    Object.values(this.globalListeners)
      .flat()
      .forEach((listener) => listener());
  }

  getOpenedDropdowns() {
    return Object.keys(this.globalDropdownState);
  }

  closeSubMenus(parentId: string) {
    const dropdownsCurrentlyOpened = Object.keys(this.globalDropdownState);
    const dropdownsToClose = dropdownsCurrentlyOpened.filter((id) => id.startsWith(parentId) && id !== parentId);
    dropdownsToClose.forEach((dropdown) => this.close(dropdown));
  }

  subscribe(id: string, callback: () => void) {
    if (!this.globalListeners[id]) this.globalListeners[id] = [];
    this.globalListeners[id].push(callback);

    return () => {
      this.globalListeners[id] = this.globalListeners[id].filter((cb) => cb !== callback);
    };
  }

  private notifyListeners(id: string) {
    this.globalListeners[id]?.forEach((listener) => listener());
  }
}
