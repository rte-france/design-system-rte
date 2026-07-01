import { Directive, ElementRef, HostListener, inject, output } from "@angular/core";

@Directive({
  selector: "[rteModalTrigger]",
  standalone: true,
})
export class ModalTriggerDirective {
  readonly elementRef = inject(ElementRef);

  readonly modalTriggerKeyDown = output<KeyboardEvent>();

  readonly modalTriggerClicked = output<Event>();

  @HostListener("click", ["$event"])
  onModalTriggerClicked(event: Event): void {
    this.modalTriggerClicked.emit(event);
  }

  @HostListener("keydown", ["$event"])
  onKeyDown(event: KeyboardEvent): void {
    this.modalTriggerKeyDown.emit(event);
  }
}
