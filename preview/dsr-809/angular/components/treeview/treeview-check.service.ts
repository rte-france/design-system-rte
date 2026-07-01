import { Injectable, signal } from "@angular/core";
import type { TreeviewItemProps } from "@design-system-rte/core/components/treeview/treeview-item.interface";
import { computeCheckedIdsAfterToggle } from "@design-system-rte/core/components/treeview/treeview.utils";

@Injectable()
export class TreeviewCheckService {
  readonly checkedIds = signal<Set<string>>(new Set());
  private readonly rootItems = signal<TreeviewItemProps[]>([]);

  setRootItems(items: TreeviewItemProps[]): void {
    this.rootItems.set(items);
  }

  toggleChecked(node: TreeviewItemProps, rootItemsOverride?: TreeviewItemProps[]): void {
    const current = this.checkedIds();
    const rootItems = rootItemsOverride ?? this.rootItems();
    const next = computeCheckedIdsAfterToggle(current, node, rootItems);
    this.checkedIds.set(next);
  }
}
