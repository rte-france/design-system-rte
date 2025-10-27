import { Directive, ElementRef, HostListener, inject, output } from "@angular/core";

@Directive({
  selector: "[rteDropdownTrigger]",
  standalone: true,
})
export class DropdownTriggerDirective {
  readonly elementRef = inject(ElementRef);

  readonly dropdownKeyDown = output<KeyboardEvent>();

  readonly dropdownTriggered = output<Event>();

  @HostListener("click", ["$event"])
  onDropdownTriggered(event: Event): void {
    this.dropdownTriggered.emit(event);
  }

  @HostListener("keydown", ["$event"])
  onKeyDown(event: KeyboardEvent): void {
    this.dropdownKeyDown.emit(event);
  }
}
