import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import {
  BreadcrumbProps,
  BreadcrumbsTruncatedItems,
} from "@design-system-rte/core/components/breadcrumbs/breadcrumbs.interface";
import {
  getBreadcrumbsTruncatedItems,
  shouldTruncateBreadcrumbs,
} from "@design-system-rte/core/components/breadcrumbs/breadcrumbs.utils";

import { LinkComponent } from "../link/link.component";

@Component({
  selector: "rte-breadcrumbs",
  imports: [CommonModule, LinkComponent],
  standalone: true,
  templateUrl: "./breadcrumbs.component.html",
  styleUrl: "./breadcrumbs.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent {
  items: BreadcrumbProps[] = [];

  get truncatedItems(): BreadcrumbsTruncatedItems | null {
    if (shouldTruncateBreadcrumbs(this.items)) {
      return getBreadcrumbsTruncatedItems(this.items);
    }
    return null;
  }
}
