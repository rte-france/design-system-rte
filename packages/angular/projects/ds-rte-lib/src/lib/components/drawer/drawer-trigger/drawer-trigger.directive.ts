import { Directive, HostListener, output } from "@angular/core";

@Directive({
  selector: "[rteDrawerTrigger]",
  host: {
    "[attr.data-rte-drawer-trigger]": "true",
  },
})
export class DrawerTriggerDirective {
  readonly drawerTriggerKeyDown = output<KeyboardEvent>();

  readonly drawerTriggerClicked = output<Event>();

  @HostListener("click", ["$event"])
  onDrawerTriggerClicked(clickEvent: Event): void {
    this.drawerTriggerClicked.emit(clickEvent);
  }

  @HostListener("keydown", ["$event"])
  onKeyDown(keyboardEvent: KeyboardEvent): void {
    this.drawerTriggerKeyDown.emit(keyboardEvent);
  }
}
