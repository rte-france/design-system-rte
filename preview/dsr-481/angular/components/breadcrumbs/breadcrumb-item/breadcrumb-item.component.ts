import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  input,
  signal,
  AfterViewInit,
} from "@angular/core";
import { BreadcrumbProps } from "@design-system-rte/core/components/breadcrumbs/breadcrumbs.interface";

import { LinkComponent } from "../../link/link.component";
import { TooltipDirective } from "../../tooltip/tooltip.directive";

@Component({
  selector: "rte-breadcrumb-item",
  imports: [CommonModule, LinkComponent, TooltipDirective],
  standalone: true,
  templateUrl: "./breadcrumb-item.component.html",
  styleUrl: "./breadcrumb-item.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbItemComponent implements AfterViewInit {
  readonly item = input<BreadcrumbProps>();
  readonly isLast = input<boolean>(false);
  readonly breadcrumbItemMaxWidth = input<number>();
  readonly initialScrollWidth = signal<number>(Number.MAX_VALUE);

  private elementRef = inject(ElementRef);

  readonly isEllipsisActive = computed((): boolean => {
    const maxValue = this.breadcrumbItemMaxWidth();
    if (maxValue) {
      return this.initialScrollWidth() >= maxValue;
    }
    return false;
  });

  readonly tooltipTriggerStyle = computed(() => {
    return `overflow: hidden; text-overflow: ellipsis; white-space: nowrap; ${this.breadcrumbItemMaxWidth() ? "max-width:" + this.breadcrumbItemMaxWidth() + "px" : ""}`;
  });

  readonly linkStyle = computed(() => {
    return `${this.breadcrumbItemMaxWidth() ? "max-width:" + this.breadcrumbItemMaxWidth() + "px" : ""}`;
  });

  ngAfterViewInit() {
    const el = this.elementRef.nativeElement.querySelector(".rte-breadcrumb-item");
    this.initialScrollWidth.set(el.scrollWidth);
  }
}
