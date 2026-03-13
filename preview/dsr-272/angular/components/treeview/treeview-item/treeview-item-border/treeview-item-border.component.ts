import { ChangeDetectionStrategy, Component, computed, input } from "@angular/core";
import { SvgConfig } from "@design-system-rte/core/common/svg";
import { TREEVIEW_BORDER_SVG_MAP, TreeviewBorderType } from "@design-system-rte/core/components/treeview";

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

  readonly svgConfig = computed<SvgConfig>(() => TREEVIEW_BORDER_SVG_MAP[this.borderType()]);
}
