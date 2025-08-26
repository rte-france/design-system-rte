let globalDropdownState: { [id: string]: boolean } = {};
const globalListeners: { [id: string]: (() => void)[] } = {};

export class DropdownManager {
  static generateId() {
    return `dropdown-${Math.random().toString(36).substr(2, 9)}`;
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
