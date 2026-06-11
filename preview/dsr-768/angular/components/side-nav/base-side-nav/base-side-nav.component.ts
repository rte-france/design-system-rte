import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, input } from "@angular/core";
import { sideNavCollapsedSize, sideNavPanelSize } from "@design-system-rte/core/components/side-nav/side-nav.constants";
import { SideNavAppearance, SideNavContrast } from "@design-system-rte/core/components/side-nav/side-nav.interface";

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
  readonly contrast = input<SideNavContrast>("high");
  readonly isCollapsed = input<boolean>(false);
  readonly showHeader = input<boolean>(true);
  readonly showFooter = input<boolean>(true);

  readonly minWidth = computed<string>(() => {
    return this.isCollapsed() ? `${this.collapsedSize}px` : `${this.panelSize[this.size()]}px`;
  });
}
