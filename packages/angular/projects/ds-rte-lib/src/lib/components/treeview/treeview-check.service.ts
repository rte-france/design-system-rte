import { Injectable, signal } from "@angular/core";
import type { TreeviewItemProps } from "@design-system-rte/core/components/treeview/treeview-item.interface";
import { computeCheckedIdsAfterToggle } from "@design-system-rte/core/components/treeview/treeview.utils";

@Injectable()
export class TreeviewCheckService {
  readonly checkedIds = signal<Set<string>>(new Set());

  toggleChecked(node: TreeviewItemProps): void {
    const next = computeCheckedIdsAfterToggle(this.checkedIds(), node);
    this.checkedIds.set(next);
  }
}
