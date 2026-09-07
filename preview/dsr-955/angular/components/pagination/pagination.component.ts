import { ChangeDetectionStrategy, Component, computed, input, output } from "@angular/core";
import {
  getPaginationPageLabel,
  PAGINATION_DEFAULT_ARIA_LABEL,
  PAGINATION_GO_TO_FIRST_LABEL,
  PAGINATION_GO_TO_LAST_LABEL,
  PAGINATION_GO_TO_NEXT_LABEL,
  PAGINATION_GO_TO_PREV_LABEL,
} from "@design-system-rte/core/components/pagination/pagination.constants";
import { PaginationAppearance } from "@design-system-rte/core/components/pagination/pagination.interface";
import { getPaginationItems } from "@design-system-rte/core/components/pagination/pagination.utils";

import { IconComponent } from "../icon/icon.component";

@Component({
  selector: "rte-pagination",
  imports: [IconComponent],
  templateUrl: "./pagination.component.html",
  styleUrl: "./pagination.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
  readonly activePage = input<number>(1);
  readonly totalPages = input.required<number>();
  readonly appearance = input<PaginationAppearance>("neutral");
  readonly hasGoToFirst = input<boolean>(true);
  readonly hasGoToPrev = input<boolean>(true);
  readonly hasGoToNext = input<boolean>(true);
  readonly hasGoToLast = input<boolean>(true);
  readonly ariaLabel = input<string>(PAGINATION_DEFAULT_ARIA_LABEL);

  readonly pageChange = output<number>();

  readonly goToFirstLabel = PAGINATION_GO_TO_FIRST_LABEL;
  readonly goToPrevLabel = PAGINATION_GO_TO_PREV_LABEL;
  readonly goToNextLabel = PAGINATION_GO_TO_NEXT_LABEL;
  readonly goToLastLabel = PAGINATION_GO_TO_LAST_LABEL;

  readonly items = computed(() => getPaginationItems(this.activePage(), this.totalPages()));

  readonly isFirstPage = computed(() => this.activePage() <= 1);

  readonly isLastPage = computed(() => this.activePage() >= this.totalPages());

  getPageLabel(pageNumber: number): string {
    return getPaginationPageLabel(pageNumber);
  }

  isPageActive(pageNumber: number): boolean {
    return pageNumber === this.activePage();
  }

  onPageClick(targetPage: number): void {
    if (this.isPageActive(targetPage)) {
      return;
    }
    this.goToPage(targetPage);
  }

  onFirstNavClick(event: Event): void {
    this.onNavControlClick(event, this.isFirstPage(), () => this.goToFirst());
  }

  onPrevNavClick(event: Event): void {
    this.onNavControlClick(event, this.isFirstPage(), () => this.goToPrev());
  }

  onNextNavClick(event: Event): void {
    this.onNavControlClick(event, this.isLastPage(), () => this.goToNext());
  }

  onLastNavClick(event: Event): void {
    this.onNavControlClick(event, this.isLastPage(), () => this.goToLast());
  }

  private onNavControlClick(event: Event, isDisabled: boolean, navigate: () => void): void {
    if (isDisabled) {
      event.preventDefault();
      return;
    }
    navigate();
  }

  goToPage(targetPage: number): void {
    if (targetPage < 1 || targetPage > this.totalPages() || targetPage === this.activePage()) {
      return;
    }
    this.pageChange.emit(targetPage);
  }

  goToFirst(): void {
    this.goToPage(1);
  }

  goToPrev(): void {
    this.goToPage(this.activePage() - 1);
  }

  goToNext(): void {
    this.goToPage(this.activePage() + 1);
  }

  goToLast(): void {
    this.goToPage(this.totalPages());
  }
}
