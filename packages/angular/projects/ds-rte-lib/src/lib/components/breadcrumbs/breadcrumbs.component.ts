import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, input } from "@angular/core";
import {
  BreadcrumbProps,
  BreadcrumbsTruncatedItems,
} from "@design-system-rte/core/components/breadcrumbs/breadcrumbs.interface";
import {
  getBreadcrumbsTruncatedItems,
  shouldTruncateBreadcrumbs,
} from "@design-system-rte/core/components/breadcrumbs/breadcrumbs.utils";

import { LinkComponent } from "../link/link.component";
import { IconComponent } from "../icon/icon.component";

@Component({
  selector: "rte-breadcrumbs",
  imports: [CommonModule, LinkComponent, IconComponent],
  standalone: true,
  templateUrl: "./breadcrumbs.component.html",
  styleUrl: "./breadcrumbs.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent {
  readonly items = input<BreadcrumbProps[]>([]);

  truncatedItems = computed<BreadcrumbsTruncatedItems | null>(() => {
    if (shouldTruncateBreadcrumbs(this.items())) {
      return getBreadcrumbsTruncatedItems(this.items());
    }
    return null;
  });

  // TODO: replace this placeholder functionality for the Dropdown component
  truncatedItemsText = computed(() => {
    return this.truncatedItems()?.truncated.map((item) => item.label).join(", ");
  });
}
