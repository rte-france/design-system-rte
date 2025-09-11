let globalDropdownState: { [id: string]: boolean } = {};
const globalListeners: { [id: string]: (() => void)[] } = {};

export class DropdownManager {
  static generateId() {
    return `dropdown-${Math.random().toString(36).substring(2, 9)}`;
  }

  static isOpen(id: string) {
    return globalDropdownState[id] || false;
  }

  static open(id: string) {
    globalDropdownState[id] = true;
    this.notifyListeners(id);
  }

  static close(id: string) {
    delete globalDropdownState[id];
    this.notifyListeners(id);
  }

  static closeAll() {
    globalDropdownState = {};
    Object.values(globalListeners)
      .flat()
      .forEach((listener) => listener());
  }

  static getOpenedDropdowns() {
    return Object.keys(globalDropdownState);
  }

  static getParentDropdownId(id: string) {
    const parts = id.split("-");
    if (parts.length <= 2) return null;
    parts.pop();
    return parts.join("-");
  }

  static closeSubMenus(parentId: string) {
    const dropdownsCurrentlyOpened = Object.keys(globalDropdownState);
    const dropdownsToClose = dropdownsCurrentlyOpened.filter((id) => id.startsWith(parentId) && id !== parentId);
    dropdownsToClose.forEach((dropdown) => DropdownManager.close(dropdown));
  }

  static subscribe(id: string, callback: () => void) {
    if (!globalListeners[id]) globalListeners[id] = [];
    globalListeners[id].push(callback);

    return () => {
      globalListeners[id] = globalListeners[id].filter((cb) => cb !== callback);
    };
  }

  private static notifyListeners(id: string) {
    globalListeners[id]?.forEach((listener) => listener());
  }
}
