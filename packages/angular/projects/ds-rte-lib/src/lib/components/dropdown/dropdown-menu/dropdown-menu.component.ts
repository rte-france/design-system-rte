import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: 'rte-dropdown-menu',
    templateUrl: './dropdown-menu.component.html',
    styleUrl: './dropdown-menu.component.scss',
    standalone: true,
    imports: [CommonModule]
})
export class DropdownMenuComponent {
    constructor() {
        console.log('DropdownMenuComponent');
    }
}