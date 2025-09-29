import { Directive, HostListener, inject, output, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[rteDropdownTrigger]",
  standalone: true,
})
export class DropdownTriggerDirective {
  readonly viewContainerRef = inject(ViewContainerRef);

  readonly dropdownKeyDown = output<KeyboardEvent>();

  readonly dropdownTriggered = output<Event>();

  constructor() {}

  @HostListener("click", ["$event"])
  onDropdownTriggered(event: Event): void {
    this.dropdownTriggered.emit(event);
  }

  @HostListener("keydown", ["$event"])
  onKeyDown(event: KeyboardEvent): void {
    this.dropdownKeyDown.emit(event);
  }
}
