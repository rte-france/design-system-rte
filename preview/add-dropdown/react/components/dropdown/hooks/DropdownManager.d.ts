export declare class DropdownManager {
    static generateId(): string;
    static isOpen(id: string): boolean;
    static open(id: string): void;
    static close(id: string): void;
    static closeAll(): void;
    static getOpenedDropdowns(): string[];
    static closeSubMenus(parentId: string): void;
    static subscribe(id: string, callback: () => void): () => void;
    private static notifyListeners;
}
