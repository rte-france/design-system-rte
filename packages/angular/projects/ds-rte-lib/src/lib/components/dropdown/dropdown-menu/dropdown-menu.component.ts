import { CommonModule } from "@angular/common";
import { Component, DestroyRef, ElementRef, forwardRef, HostListener, inject, input } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

import { DropdownService } from "../../../services/dropdown.service";
import { DropdownItemComponent, DropdownItemConfig } from "../dropdown-item/dropdown-item.component";
import { DropdownTriggerDirective } from "../dropdown-trigger/dropdown-trigger.directive";
import { DropdownDirective } from "../dropdown.directive";

@Component({
  selector: "rte-dropdown-menu",
  imports: [CommonModule, DropdownItemComponent, DropdownTriggerDirective, forwardRef(() => DropdownDirective)],
  standalone: true,
  templateUrl: "./dropdown-menu.component.html",
  styleUrl: "./dropdown-menu.component.scss",
  host: {
    "[attr.data-menu-id]": "menuId()",
    "[attr.data-parent-menu-id]": "parentMenuId()",
    "[class.active]": "isActive()",
    "[class.visible]": "isVisible()",
  },
})
export class DropdownMenuComponent {
  private readonly elementRef = inject(ElementRef);
  private readonly dropdownService = inject(DropdownService);
  private readonly destroyRef = inject(DestroyRef);

  readonly items = input<DropdownItemConfig[]>([]);
  readonly menuId = input<string>();
  readonly parentMenuId = input<string>();

  getChildMenuId(itemIndex: number): string {
    return `${this.menuId()}:${itemIndex + 1}`;
  }

  isActive(): boolean {
    let active = false;
    this.dropdownService
      .isMenuActive(this.menuId() ?? "")
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((isActive) => (active = isActive));
    return active;
  }

  isVisible(): boolean {
    let visible = false;
    this.dropdownService
      .isMenuVisible(this.menuId() ?? "")
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((isVisible) => (visible = isVisible));
    return visible;
  }

  @HostListener("keydown", ["$event"])
  onKeyDown(event: KeyboardEvent): void {
    if (!event.target || !this.menuId() || !this.isActive()) {
      return;
    }

    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) {
      event.preventDefault();
    }

    const target = event.target as HTMLElement;
    const menuId = this.menuId() as string;
    const hasSubmenu = target.hasAttribute("data-has-submenu");
    const itemIndex = hasSubmenu ? parseInt(target.getAttribute("data-item-index") ?? "-1") : undefined;
    const isSubmenu = this.parentMenuId() !== undefined;

    event.stopPropagation();
    event.stopImmediatePropagation();

    this.dropdownService.handleKeyboardInput(event.key, {
      menuElement: this.elementRef,
      menuId,
      hasSubmenu,
      itemIndex,
      isSubmenu,
    });
  }
}
