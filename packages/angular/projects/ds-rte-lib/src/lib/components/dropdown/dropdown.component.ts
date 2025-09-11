import {
  ChangeDetectionStrategy,
  Component,
  contentChildren,
  ElementRef,
  inject,
  input,
  output,
  viewChild,
  ViewContainerRef,
} from "@angular/core";
import { ComponentRef, AfterViewInit, OnDestroy } from "@angular/core";
import { getCoordinates } from "@design-system-rte/core/components/utils/auto-placement";
import { TAB_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";

import { OverlayService } from "../../services/overlay.service";

import { DropdownItemComponent } from "./dropdownItem/dropdown-item.component";
import { DropdownMenuComponent } from "./dropdownMenu/dropdown-menu.component";

@Component({
  selector: "rte-dropdown",
  standalone: true,
  templateUrl: "./dropdown.component.html",
  styleUrl: "./dropdown.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: "rteDropdown",
})
export class DropdownComponent implements AfterViewInit, OnDestroy {
  readonly autoclose = input<boolean>(true);
  readonly offset = input<number>(0);

  readonly triggerRef = viewChild<ElementRef>("trigger");
  readonly items = contentChildren<DropdownItemComponent>(DropdownItemComponent);

  private menuRef?: ComponentRef<DropdownMenuComponent> | null = null;
  private overlayService: OverlayService;
  private viewContainerRef = inject(ViewContainerRef);
  constructor() {
    this.overlayService = inject(OverlayService);
  }

  ngAfterViewInit() {
    document.addEventListener("click", this.handleClickOutside.bind(this));
  }

  ngOnDestroy() {
    document.removeEventListener("click", this.handleClickOutside.bind(this));
  }

  open() {
    if (this.menuRef) return;

    this.menuRef = this.overlayService.create(DropdownMenuComponent, this.viewContainerRef);
    this.positionDropdown();
    this.menuRef.setInput("isOpen", true);

    this.menuRef.instance.setItems(this.items());

    this.menuRef.instance.close.subscribe(() => this.close());
  }

  private positionDropdown(): void {
    if (this.menuRef) {
      const dropdownElement = this.menuRef.location.nativeElement;
      const positions = getCoordinates(
        "bottom",
        this.triggerRef()?.nativeElement.children[0],
        dropdownElement,
        this.offset(),
        "start",
      );

      this.menuRef.setInput("positionX", positions.left);
      this.menuRef.setInput("positionY", positions.top);
    }
  }

  toggle() {
    if (this.menuRef) {
      this.close();
    } else {
      this.open();
    }
  }

  readonly click = output<Event>();

  close(): void {
    if (this.menuRef) {
      setTimeout(() => {
        if (this.menuRef) {
          this.menuRef.destroy();
          this.menuRef = null;
          this.overlayService.destroy();
        }
      }, 200);
    }
  }

  handleClick() {
    if (this.autoclose()) {
      this.close();
    }
  }

  handleKeydown(event: KeyboardEvent) {
    if (event.key === TAB_KEY) {
      if (this.menuRef?.instance.isOpen()) {
        event.preventDefault();
        this.focusDropdownFirstElement(this.menuRef.instance.dropdownId);
      }
    }
  }

  private handleClickOutside = (event: MouseEvent) => {
    const target = event.target as Element;
    const allDropdowns = document.querySelectorAll("[data-dropdown-id]");
    const clickedInside =
      Array.from(allDropdowns).some((dropdown) => dropdown.contains(target)) ||
      this.triggerRef()?.nativeElement.contains(target);

    if (!clickedInside) {
      this.close();
    }
  };

  private focusDropdownFirstElement = (dropdownId: string) => {
    const dropdown = document.querySelector(`[data-dropdown-id='${dropdownId}']`);
    if (dropdown) {
      const allDropdownElement = dropdown?.querySelectorAll<HTMLElement>('li[role="menuitem"]');
      allDropdownElement[0]?.focus();
    }
  };
}
