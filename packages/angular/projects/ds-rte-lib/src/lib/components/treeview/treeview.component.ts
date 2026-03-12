import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, effect, inject, input, output } from "@angular/core";
import {
  TreeviewItemProps,
  TreeviewOpenChangeEvent,
  TreeviewSelectionChangeEvent,
} from "@design-system-rte/core/components/treeview/treeview-item.interface";

import { TreeviewItemComponent } from "./treeview-item/treeview-item.component";
import { TreeviewSelectionService } from "./treeview-selection.service";

@Component({
  selector: "rte-treeview",
  imports: [CommonModule, TreeviewItemComponent],
  standalone: true,
  templateUrl: "./treeview.component.html",
  styleUrl: "./treeview.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TreeviewSelectionService],
})
export class TreeviewComponent {
  readonly isCompact = input<boolean>(false);
  readonly dottedLine = input<boolean>(false);
  readonly items = input<TreeviewItemProps[]>([]);
  readonly selectedId = input<string | undefined>(undefined);
  readonly selectedPath = input<string | undefined>(undefined);
  readonly id = input<string>("treeview");
  readonly itemClick = output<string | undefined>();
  readonly openChange = output<TreeviewOpenChangeEvent>();
  readonly selectionChange = output<TreeviewSelectionChangeEvent>();

  readonly selectionService = inject(TreeviewSelectionService);

  constructor() {
    effect(
      () => {
        const id = this.selectedId();
        this.selectionService.select(id);
      },
      { allowSignalWrites: true },
    );
    effect(
      () => {
        const pathString = this.selectedPath();
        const currentItems = this.items();
        if (pathString != null && pathString !== "" && currentItems.length > 0) {
          this.selectionService.selectByNodePath(pathString, currentItems);
        }
      },
      { allowSignalWrites: true },
    );
  }

  itemTrack(item: TreeviewItemProps): string {
    return item.id ?? item.labelText;
  }
}
