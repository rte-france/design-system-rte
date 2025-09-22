import { CommonModule } from "@angular/common";
import {
  Component,
  inject,
  input,
  output,
  ViewContainerRef,
  AfterViewInit,
  OnDestroy,
  viewChild,
  ElementRef,
} from "@angular/core";
import { ARROW_DOWN_KEY, ARROW_UP_KEY, TAB_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";

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
  readonly dropdownRef = viewChild<ElementRef>("menu");
  private pendingItems: ReadonlyArray<DropdownItemComponent> | null = null;
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
      this.pendingItems = null;
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

  private focusNextElement = (dropdown: HTMLElement) => {
    const menuItems = this.getDropdownMenuItems(dropdown);
    const activeElementIndex = menuItems.findIndex((el) => el === document.activeElement);

    if (activeElementIndex < menuItems.length - 1) {
      const nextElement = menuItems[activeElementIndex + 1];
      nextElement.focus();
    } else {
      menuItems[0]?.focus();
    }
  };

  private focusPreviousElement = (dropdown: HTMLElement) => {
    const menuItems = this.getDropdownMenuItems(dropdown);
    const activeElementIndex = menuItems.findIndex((el) => el === document.activeElement);

    if (activeElementIndex > 0) {
      const previousElement = menuItems[activeElementIndex - 1];
      previousElement.focus();
    } else {
      menuItems[menuItems.length - 1]?.focus();
    }
  };

  private getDropdownMenuItems = (dropdown: HTMLElement) => {
    const allDropdownElement = dropdown?.querySelectorAll<HTMLElement>('li[role="menuitem"]');
    return allDropdownElement ? Array.from(allDropdownElement) : [];
  };

  handleKeydown(event: KeyboardEvent) {
    if (event.key === TAB_KEY) {
      if (this.isOpen()) {
        event.preventDefault();
      }
    } else if (event.key === ARROW_DOWN_KEY || event.key === ARROW_UP_KEY) {
      event.preventDefault();
    }
  }

  handleKeyup(event: KeyboardEvent) {
    if (event.key === ARROW_DOWN_KEY) {
      this.focusNextElement(this.dropdownRef()?.nativeElement);
    } else if (event.key === ARROW_UP_KEY) {
      this.focusPreviousElement(this.dropdownRef()?.nativeElement);
    } else if (event.key === "Escape") {
      this.close.emit(event);
    }
  }
}
