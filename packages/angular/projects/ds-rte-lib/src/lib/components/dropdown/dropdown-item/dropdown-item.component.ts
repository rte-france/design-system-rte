import { Component } from "@angular/core";

@Component({
    selector: 'rte-dropdown-item',
    standalone: true,
    template: '<ng-content></ng-content>',
    host: {
        '[class.dropdown-item]': 'true',
    }
})
export class DropdownItemComponent {
    constructor() {
        console.log('DropdownItemComponent');
    }
}