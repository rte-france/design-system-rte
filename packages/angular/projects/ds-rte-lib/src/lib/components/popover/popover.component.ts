import { CommonModule } from "@angular/common";
import { Component, ElementRef, inject, input, output, AfterViewInit, OnDestroy } from "@angular/core";
import { PopoverAlignment, PopoverPosition } from "@design-system-rte/core/components/popover/popover.interface";

import { FocusTrapService } from "../../services/focus-trap.service";
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: "rte-popover",
  imports: [CommonModule, ButtonComponent],
  standalone: true,
  templateUrl: "./popover.component.html",
  styleUrl: "./popover.component.scss",
})
export class PopoverComponent implements AfterViewInit, OnDestroy {
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

  private elementRef = inject(ElementRef);

  private focusTrap = inject(FocusTrapService);

  constructor() {}

  ngAfterViewInit() {
    const native = this.elementRef?.nativeElement;
    if (native) {
      this.focusTrap.activate(native);
    }
  }

  ngOnDestroy() {
    this.focusTrap.deactivate();
  }

  handleClickPrimaryButton() {
    this.clickPrimaryButton.emit();
  }
  handleClickSecondaryButton() {
    this.clickSecondaryButton.emit();
  }
}
