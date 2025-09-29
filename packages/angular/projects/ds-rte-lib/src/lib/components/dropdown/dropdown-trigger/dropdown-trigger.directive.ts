import { Directive, HostListener, output, Output } from "@angular/core";

@Directive({
    selector: '[rteDropdownTrigger]',
    standalone: true,
})
export class DropdownTriggerDirective {
    constructor() {
        console.log('DropdownTriggerDirective');
    }

    readonly dropdownTriggered = output<Event>();

    @HostListener('click', ['$event'])
    onDropdownTriggered(event: Event): void {
        this.dropdownTriggered.emit(event);
    }
}