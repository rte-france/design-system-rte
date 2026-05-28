import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, input } from "@angular/core";
import { sideNavCollapsedSize, sideNavPanelSize } from "@design-system-rte/core/components/side-nav/side-nav.constants";
import { SideNavAppearance } from "@design-system-rte/core/components/side-nav/side-nav.interface";

type SideNavSize = "s" | "m" | "l";

@Component({
  selector: "rte-base-side-nav",
  imports: [CommonModule],
  standalone: true,
  templateUrl: "./base-side-nav.component.html",
  styleUrl: "./base-side-nav.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseSideNavComponent {
  private readonly collapsedSize = sideNavCollapsedSize;
  private readonly panelSize = sideNavPanelSize;

  readonly size = input<SideNavSize>("m");
  readonly appearance = input<SideNavAppearance>("brand");
  readonly collapsed = input<boolean>(false);
  readonly showHeader = input<boolean>(true);
  readonly showFooter = input<boolean>(true);

  readonly minWidth = computed<string>(() => {
    return this.collapsed() ? `${this.collapsedSize}px` : `${this.panelSize[this.size()]}px`;
  });
}
