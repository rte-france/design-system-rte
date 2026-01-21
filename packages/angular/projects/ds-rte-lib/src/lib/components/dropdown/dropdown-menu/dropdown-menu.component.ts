import { CommonModule } from "@angular/common";
import {
  Component,
  computed,
  contentChild,
  ElementRef,
  HostListener,
  inject,
  input,
  output,
  TemplateRef,
  viewChild,
} from "@angular/core";
import {
  ARROW_DOWN_KEY,
  ARROW_LEFT_KEY,
  ARROW_RIGHT_KEY,
  ARROW_UP_KEY,
  ESCAPE_KEY,
  TAB_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard.constants";

import { DropdownService } from "../../../services/dropdown.service";
import { DividerComponent } from "../../divider/divider.component";
import { DropdownItemComponent, DropdownItemConfig } from "../dropdown-item/dropdown-item.component";

import { DropdownMenuFooterDirective } from "./dropdown-menu-footer.directive";
import { DropdownMenuHeaderDirective } from "./dropdown-menu-header.directive";

@Component({
  selector: "rte-dropdown-menu",
  imports: [CommonModule, DropdownItemComponent, DividerComponent],
  standalone: true,
  templateUrl: "./dropdown-menu.component.html",
  styleUrl: "./dropdown-menu.component.scss",
  host: { "[attr.data-menu-id]": "menuId()" },
})
export class DropdownMenuComponent {
  private readonly elementRef = inject(ElementRef);
  private readonly dropdownService = inject(DropdownService);

  readonly items = input<DropdownItemConfig[]>([]);
  readonly menuId = input<string>();

  readonly itemEvent = output<{ event: Event; id: string }>();

  readonly widthStyle = computed(() => (this.width() !== undefined ? `${this.width()}px` : undefined));
  readonly isOpen = input<boolean>(false);
  readonly width = input<string | null>(null);
  readonly closingMenu = output<void>();

  readonly menuStyle = computed(() => {
    return this.width() ? { width: this.width() + "px", "max-width": this.width() + "px" } : {};
  });

  readonly headerDirective = contentChild(DropdownMenuHeaderDirective);
  readonly footerDirective = contentChild(DropdownMenuFooterDirective);

  readonly headerTemplate = input<TemplateRef<HTMLElement> | undefined>(undefined);
  readonly footerTemplate = input<TemplateRef<HTMLElement> | undefined>(undefined);

  readonly headerContentRef = viewChild<ElementRef<HTMLElement>>("headerContent");
  readonly footerContentRef = viewChild<ElementRef<HTMLElement>>("footerContent");

  readonly hasHeaderContent = computed(() => {
    const hasTemplate = !!this.headerTemplate();
    const hasProjectedContent = !!this.headerContentRef()?.nativeElement?.children.length;
    return hasTemplate || hasProjectedContent;
  });

  readonly hasFooterContent = computed(() => {
    const hasTemplate = !!this.footerTemplate();
    const hasProjectedContent = !!this.footerContentRef()?.nativeElement?.children.length;
    return hasTemplate || hasProjectedContent;
  });

  getChildMenuId(itemIndex: number): string {
    return `${this.menuId()}:${itemIndex + 1}`;
  }

  handleItemEvent(itemEvent: { event: Event; id: string }): void {
    this.itemEvent.emit(itemEvent);
  }

  @HostListener("keydown", ["$event"])
  onKeyDown(event: KeyboardEvent): void {
    if (!event.target || !this.menuId()) {
      return;
    }

    if ([ARROW_UP_KEY, ARROW_DOWN_KEY, ARROW_LEFT_KEY, ARROW_RIGHT_KEY, TAB_KEY].includes(event.key)) {
      event.preventDefault();
    }

    if (event.key === ESCAPE_KEY) {
      this.closingMenu.emit();
    }

    const menuId = this.menuId() as string;
    this.dropdownService.handleKeyboardInput(event.key, {
      menuElement: this.elementRef,
      menuId,
    });
  }
}
