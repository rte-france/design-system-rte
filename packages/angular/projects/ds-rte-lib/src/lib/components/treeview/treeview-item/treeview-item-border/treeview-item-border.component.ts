import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { TreeviewBorderType } from "@design-system-rte/core/components/treeview/treeview-item.interface";

@Component({
  selector: "rte-treeview-item-border",
  standalone: true,
  templateUrl: "./treeview-item-border.component.html",
  styleUrl: "./treeview-item-border.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeviewItemBorderComponent {
  readonly borderType = input.required<TreeviewBorderType>();
  readonly dottedLine = input<boolean>(false);
}
