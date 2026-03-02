import { CommonModule } from "@angular/common";
import {
  Component,
  computed,
  contentChild,
  ElementRef,
  HostListener,
  inject,
  input,
  OnDestroy,
  output,
  TemplateRef,
  ViewContainerRef,
  viewChild,
  viewChildren,
} from "@angular/core";
import { DropdownManager } from "@design-system-rte/core/components/dropdown/DropdownManager";
import {
  getAutoAlignment,
  getAutoPlacementDropdown,
  getCoordinates,
} from "@design-system-rte/core/components/utils/auto-placement";
import {
  ARROW_DOWN_KEY,
  ARROW_UP_KEY,
  ESCAPE_KEY,
  TAB_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard.constants";

import { DropdownService } from "../../../services/dropdown.service";
import { OverlayService } from "../../../services/overlay.service";
import { DividerComponent } from "../../divider/divider.component";
import { DropdownItemComponent } from "../dropdown-item/dropdown-item.component";
import { DropdownItemConfig, SubmenuRequestEvent } from "../dropdown.types";
import { focusParentDropdownFirstElement } from "../dropdown.utils";

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
export class DropdownMenuComponent implements OnDestroy {
  private static readonly SUB_MENU_OFFSET = 4;
  private readonly elementRef = inject(ElementRef);
  private pendingPositioningFrameId: number | null = null;
  private readonly dropdownService = inject(DropdownService);
  private readonly overlayService = inject(OverlayService);
  private readonly viewContainerRef = inject(ViewContainerRef);

  readonly items = input<DropdownItemConfig[]>([]);
  readonly menuId = input<string>();

  readonly itemEvent = output<{ event: Event; id: string; item?: DropdownItemConfig }>();

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
  readonly itemComponents = viewChildren(DropdownItemComponent);

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

  handleItemEvent(itemEvent: { event: Event; id: string; item?: DropdownItemConfig }): void {
    this.itemEvent.emit(itemEvent);
  }

  handleSubmenuRequest(event: SubmenuRequestEvent): void {
    const { children, childId, triggerElement, onCreated } = event;

    const componentRef = this.overlayService.create(DropdownMenuComponent, this.viewContainerRef);
    componentRef.setInput("items", children);
    componentRef.setInput("menuId", childId);
    componentRef.setInput("isOpen", true);

    const hostElement = componentRef.location.nativeElement as HTMLElement;

    this.cancelPendingPositioningFrame();
    this.pendingPositioningFrameId = requestAnimationFrame(() => {
      this.pendingPositioningFrameId = null;
      try {
        const subMenuHost = componentRef.location?.nativeElement as HTMLElement | null;
        const menuElement = subMenuHost?.querySelector(".rte-dropdown-menu") as HTMLElement | null;

        if (!triggerElement || !menuElement) {
          if (typeof console !== "undefined" && typeof console.warn === "function") {
            console.warn("[DropdownMenuComponent] Unable to position submenu: required DOM elements not found.");
          }
          return;
        }

        const position = getAutoPlacementDropdown(
          triggerElement,
          menuElement,
          "right",
          DropdownMenuComponent.SUB_MENU_OFFSET,
          true,
        );
        const alignment = getAutoAlignment(triggerElement, menuElement, position);
        const coords = getCoordinates(
          position,
          triggerElement,
          menuElement,
          DropdownMenuComponent.SUB_MENU_OFFSET,
          alignment,
        );

        hostElement.style.display = "block";
        hostElement.style.position = "absolute";
        hostElement.style.top = `${coords.top}px`;
        hostElement.style.left = `${coords.left}px`;
        hostElement.style.opacity = "1";
      } catch (error) {
        if (typeof console !== "undefined" && typeof console.error === "function") {
          console.error("[DropdownMenuComponent] Error while positioning submenu:", error);
        }
      }
    });

    onCreated({ componentRef, hostElement });
  }

  ngOnDestroy(): void {
    this.cancelPendingPositioningFrame();
  }

  private cancelPendingPositioningFrame(): void {
    if (this.pendingPositioningFrameId !== null) {
      cancelAnimationFrame(this.pendingPositioningFrameId);
      this.pendingPositioningFrameId = null;
    }
  }

  @HostListener("keydown", ["$event"])
  onKeyDown(event: KeyboardEvent): void {
    if (!event.target || !this.menuId()) {
      return;
    }

    if ([ARROW_UP_KEY, ARROW_DOWN_KEY, TAB_KEY].includes(event.key)) {
      event.preventDefault();
    }

    if (event.key === ESCAPE_KEY) {
      this.closingMenu.emit();
    }

    const menuId = this.menuId() as string;

    if (event.key === TAB_KEY && event.shiftKey) {
      const parentMenuId = DropdownManager.getParentDropdownId(menuId);
      if (parentMenuId) {
        focusParentDropdownFirstElement(menuId);
        this.closingMenu.emit();
        return;
      }
    }

    this.dropdownService.handleKeyboardInput(event.key, {
      menuElement: this.elementRef,
      menuId,
    });
  }
}
