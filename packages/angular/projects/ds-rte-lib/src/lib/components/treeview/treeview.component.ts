import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, input, output } from "@angular/core";
import { TreeviewItemProps } from "@design-system-rte/core/components/treeview/treeview-item.interface";

import type { TreeviewOpenChangeEvent, TreeviewSelectionChangeEvent } from "./treeview-item/treeview-item.component";
import { TreeviewItemComponent } from "./treeview-item/treeview-item.component";

@Component({
  selector: "rte-treeview",
  imports: [CommonModule, TreeviewItemComponent],
  standalone: true,
  templateUrl: "./treeview.component.html",
  styleUrl: "./treeview.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeviewComponent {
  readonly isCompact = input<boolean>(false);
  readonly dottedLine = input<boolean>(false);
  readonly items = input<TreeviewItemProps[]>([]);
  readonly itemClick = output<string | undefined>();
  readonly openChange = output<TreeviewOpenChangeEvent>();
  readonly selectionChange = output<TreeviewSelectionChangeEvent>();

  itemTrack(item: TreeviewItemProps): string {
    return item.id ?? item.labelText;
  }
}
