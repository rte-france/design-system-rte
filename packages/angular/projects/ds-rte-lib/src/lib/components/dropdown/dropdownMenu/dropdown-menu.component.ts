import { CommonModule } from "@angular/common";
import { Component, inject, input, output, ViewContainerRef, AfterViewInit, OnDestroy, viewChild } from "@angular/core";

import { DropdownItemComponent } from "../dropdownItem/dropdown-item.component";
import { DropdownService } from "../service/dropdown.service";

@Component({
  selector: "rte-dropdown-menu",
  imports: [CommonModule],
  standalone: true,
  templateUrl: "./dropdown-menu.component.html",
  styleUrl: "./dropdown-menu.component.scss",
})
export class DropdownMenuComponent implements AfterViewInit, OnDestroy {
  readonly positionX = input<number>(0);
  readonly positionY = input<number>(0);

  readonly vcr = viewChild("container", { read: ViewContainerRef });
  private pendingItems?: ReadonlyArray<DropdownItemComponent>;
  private dropdownService: DropdownService;
  readonly childrenDropdownId = input<string>("");

  readonly dropdownId: string;

  readonly autoclose = input<boolean>(true);

  constructor() {
    this.dropdownService = inject(DropdownService);
    this.dropdownId = this.dropdownService.generateId();
  }

  setItems(items: ReadonlyArray<DropdownItemComponent>) {
    if (!this.vcr) {
      this.pendingItems = items;
      return;
    }
    this.renderItems(items);
  }

  ngAfterViewInit() {
    if (this.pendingItems) {
      this.renderItems(this.pendingItems);
      this.pendingItems = undefined;
      this.dropdownService.open(this.dropdownId);
    }
  }

  ngOnDestroy() {
    this.dropdownService.close(this.dropdownId);
  }

  private renderItems(items: ReadonlyArray<DropdownItemComponent>) {
    const v = this.vcr();
    if (!v) return;
    v.clear();
    items.forEach((item) => {
      const templateRef = item.template();
      if (templateRef) {
        v.createEmbeddedView(templateRef);
      }
    });
  }

  readonly isOpen = input<boolean>(false);

  readonly close = output<Event>();

  handleClick(event: MouseEvent) {
    this.close.emit(event);
  }
}
