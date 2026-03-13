import { Injectable, signal } from "@angular/core";
import type { TreeviewItemProps } from "@design-system-rte/core/components/treeview/treeview-item.interface";
import { getNodeAtPath, parsePathString } from "@design-system-rte/core/components/treeview/treeview.utils";

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
