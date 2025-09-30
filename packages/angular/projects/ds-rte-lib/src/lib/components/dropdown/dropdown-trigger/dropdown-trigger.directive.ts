import { Directive, HostListener, inject, output, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[rteDropdownTrigger]",
  standalone: true,
})
export class DropdownTriggerDirective {
  readonly viewContainerRef = inject(ViewContainerRef);

  constructor() {
    console.log("DropdownTriggerDirective");
  }

  readonly dropdownTriggered = output<Event>();

  @HostListener("click", ["$event"])
  onDropdownTriggered(event: Event): void {
    this.dropdownTriggered.emit(event);
  }
}
