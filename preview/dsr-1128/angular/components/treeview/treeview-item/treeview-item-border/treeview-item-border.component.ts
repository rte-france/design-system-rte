import { ChangeDetectionStrategy, Component, computed, input } from "@angular/core";
import type { SvgConfig } from "@design-system-rte/core/common/svg";
import { TREEVIEW_BORDER_SVG_MAP, TREEVIEW_BORDER_SVG_MAP_COMPACT } from "@design-system-rte/core/components/treeview";
import type { TreeviewBorderType } from "@design-system-rte/core/components/treeview/treeview-item.interface";

@Component({
  selector: "rte-treeview-item-border",
  templateUrl: "./treeview-item-border.component.html",
  styleUrl: "./treeview-item-border.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeviewItemBorderComponent {
  readonly borderType = input.required<TreeviewBorderType>();
  readonly isCompact = input<boolean>(false);

  readonly svgConfig = computed<SvgConfig>(() => {
    const map = this.isCompact() ? TREEVIEW_BORDER_SVG_MAP_COMPACT : TREEVIEW_BORDER_SVG_MAP;
    return map[this.borderType()];
  });
}
