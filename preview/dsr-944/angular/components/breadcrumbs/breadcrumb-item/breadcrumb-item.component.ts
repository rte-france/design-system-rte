import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, input } from "@angular/core";
import { shouldDisplayBadge as coreShouldDisplayBadge } from "@design-system-rte/core/components/badge/badge.utils";
import { BreadcrumbItemProps } from "@design-system-rte/core/components/breadcrumbs/breadcrumbs.interface";

import {
  NavigationElement,
  resolveNavigationHref,
  resolveNavigationRouterLink,
} from "../../../utils/navigation/navigation-element";
import { BadgeComponent } from "../../badge/badge.component";
import { LinkComponent } from "../../link/link.component";
import { TooltipDirective } from "../../tooltip/tooltip.directive";

export type BreadcrumbItem = BreadcrumbItemProps & NavigationElement;

@Component({
  selector: "rte-breadcrumb-item",
  imports: [CommonModule, LinkComponent, TooltipDirective, BadgeComponent],
  templateUrl: "./breadcrumb-item.component.html",
  styleUrl: "./breadcrumb-item.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbItemComponent {
  readonly item = input<BreadcrumbItem>();
  readonly isLast = input<boolean>(false);
  readonly breadcrumbItemMaxWidth = input<number>();

  readonly shouldDisplayBadge = computed((): boolean => {
    const item = this.item();
    if (!item) return false;
    const { showBadge, badgeContent, badgeCount, badgeIcon } = item;
    return coreShouldDisplayBadge({
      showBadge: !!showBadge,
      badgeContent,
      badgeCount,
      badgeIcon,
    });
  });

  readonly linkStyle = computed(() => {
    return `${this.breadcrumbItemMaxWidth() ? "max-width:" + this.breadcrumbItemMaxWidth() + "px" : ""}`;
  });

  readonly tooltipTriggerStyle = computed(() => {
    return `overflow: hidden; text-overflow: ellipsis; white-space: nowrap; ${this.breadcrumbItemMaxWidth() ? "max-width:" + this.breadcrumbItemMaxWidth() + "px" : ""}`;
  });

  readonly navigationHref = computed(() => this.item() && resolveNavigationHref(this.item()!));
  readonly navigationRouterLink = computed(() => this.item() && resolveNavigationRouterLink(this.item()!));
}
