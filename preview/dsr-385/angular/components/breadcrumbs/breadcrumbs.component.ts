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

import { DropdownModule } from "../dropdown";
import { IconButtonComponent } from "../icon-button/icon-button.component";

import { BreadcrumbItemComponent } from "./breadcrumb-item/breadcrumb-item.component";

@Component({
  selector: "rte-breadcrumbs",
  imports: [CommonModule, DropdownModule, IconButtonComponent, BreadcrumbItemComponent],
  standalone: true,
  templateUrl: "./breadcrumbs.component.html",
  styleUrl: "./breadcrumbs.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent {
  readonly items = input<BreadcrumbProps[]>([]);
  readonly ariaLabel = input<string>(BREADCRUMBS_DEFAULT_ARIA_LABEL);
  readonly breadcrumbItemMaxWidth = input<number>(150);

  readonly truncatedItems = computed<BreadcrumbsTruncatedItems | null>(() => {
    if (shouldTruncateBreadcrumbs(this.items())) {
      return getBreadcrumbsTruncatedItems(this.items());
    }
    return null;
  });
}
