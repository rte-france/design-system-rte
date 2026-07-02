import { Injectable, signal } from "@angular/core";
import { getNodeAtPath, parsePathString, TreeviewItemProps } from "@design-system-rte/core/components/treeview";

@Injectable()
export class TreeviewSelectionService {
  readonly selectedId = signal<string | undefined>(undefined);

  select(id?: string): void {
    this.selectedId.set(id);
  }

  selectByNodePath(pathString: string, items: TreeviewItemProps[]): void {
    const pathIndices = parsePathString(pathString);
    const node = getNodeAtPath(items, pathIndices);
    const id = node?.id ?? node?.labelText;
    this.select(id);
  }
}
