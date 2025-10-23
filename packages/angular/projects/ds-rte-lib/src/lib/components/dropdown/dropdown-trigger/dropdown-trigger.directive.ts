import { Directive, ElementRef, HostListener, inject, input, output } from "@angular/core";

@Directive({
  selector: "[rteDropdownTrigger]",
  standalone: true,
})
export class DropdownTriggerDirective {
  readonly elementRef = inject(ElementRef);

  readonly rteDropdownTriggerActivateWithArrowDown = input<boolean>(false);

  readonly dropdownKeyDown = output<KeyboardEvent>();

  readonly dropdownTriggered = output<Event>();

  readonly dropdownTriggerFocus = output<Event>();

  @HostListener("click", ["$event"])
  onDropdownTriggered(event: Event): void {
    this.dropdownTriggered.emit(event);
  }

  @HostListener("focus", ["$event"])
  onDropdownTriggerFocus(event: Event): void {
    this.dropdownTriggerFocus.emit(event);
  }

  @HostListener("keydown", ["$event"])
  onKeyDown(event: KeyboardEvent): void {
    this.dropdownKeyDown.emit(event);
  }
}
