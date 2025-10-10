import { CommonModule } from "@angular/common";
import { Component, ElementRef, inject, input, output, AfterViewInit } from "@angular/core";
import { PopoverAlignment, PopoverPosition } from "@design-system-rte/core/components/popover/popover.interface";
import { FOCUSABLE_ELEMENTS_QUERY } from "@design-system-rte/core/constants/dom/dom.constants";
import { TAB_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";

import { ButtonComponent } from "../button/button.component";

@Component({
  selector: "rte-popover",
  imports: [CommonModule, ButtonComponent],
  standalone: true,
  templateUrl: "./popover.component.html",
  styleUrl: "./popover.component.scss",
})
export class PopoverComponent implements AfterViewInit {
  readonly primaryButtonLabel = input.required<string>();
  readonly position = input.required<Exclude<PopoverPosition, "auto">>();
  readonly alignment = input<PopoverAlignment>();
  readonly content = input<string>();
  readonly arrow = input<boolean>();
  readonly title = input<string>();
  readonly secondaryButtonLabel = input<string>();
  readonly isOpen = input<boolean>(false);
  readonly coordinates = input<{ top: number; left: number }>({ top: 0, left: 0 });

  readonly clickPrimaryButton = output<void>();
  readonly clickSecondaryButton = output<void>();

  private element: HTMLElement;

  private elementRef = inject(ElementRef);

  constructor() {
    this.element = this.elementRef.nativeElement;
  }

  ngAfterViewInit() {
    this.focusFirstElement();
  }

  handleKeydown(event: KeyboardEvent) {
    if (event.key === TAB_KEY) {
      if (this.isOpen()) {
        const focusable = this.element.querySelectorAll(FOCUSABLE_ELEMENTS_QUERY);
        const first = focusable[0] as HTMLElement;
        const last = focusable[focusable.length - 1] as HTMLElement;
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }
  }

  handleClickPrimaryButton() {
    this.clickPrimaryButton.emit();
  }
  handleClickSecondaryButton() {
    this.clickSecondaryButton.emit();
  }

  private focusFirstElement() {
    const focusable = this.element.querySelectorAll(FOCUSABLE_ELEMENTS_QUERY);
    if (focusable.length > 0) (focusable[0] as HTMLElement).focus();
  }
}
