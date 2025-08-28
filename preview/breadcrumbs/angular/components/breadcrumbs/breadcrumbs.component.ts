import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, input } from "@angular/core";
import { BREADCRUMBS_DEFAULT_ARIA_LABEL } from "@design-system-rte/core/components/breadcrumbs/breadcrumbs.constants";
import {
  BreadcrumbProps,
  BreadcrumbsTruncatedItems,
} from "@design-system-rte/core/components/breadcrumbs/breadcrumbs.interface";
import {
  getBreadcrumbsTruncatedItems,
  shouldTruncateBreadcrumbs,
} from "@design-system-rte/core/components/breadcrumbs/breadcrumbs.utils";

import { IconComponent } from "../icon/icon.component";
import { LinkComponent } from "../link/link.component";
import { TooltipDirective } from "../tooltip/tooltip.directive";

@Component({
  selector: "rte-breadcrumbs",
  imports: [CommonModule, LinkComponent, TooltipDirective, IconComponent],
  standalone: true,
  templateUrl: "./breadcrumbs.component.html",
  styleUrl: "./breadcrumbs.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent {
  readonly items = input<BreadcrumbProps[]>([]);
  readonly ariaLabel = input<string>(BREADCRUMBS_DEFAULT_ARIA_LABEL);

  readonly truncatedItems = computed<BreadcrumbsTruncatedItems | null>(() => {
    if (shouldTruncateBreadcrumbs(this.items())) {
      return getBreadcrumbsTruncatedItems(this.items());
    }
    return null;
  });

  // TODO: replace this placeholder functionality for the Dropdown component
  readonly truncatedItemsText = computed(() => {
    return (
      this.truncatedItems()
        ?.truncated.map((item) => item.label)
        .join(", ") || ""
    );
  });
}
