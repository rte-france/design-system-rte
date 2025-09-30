import { CommonModule } from "@angular/common";
import { Component, input, forwardRef } from "@angular/core";
import { DropdownItemComponent, DropdownItemConfig } from "../dropdown-item/dropdown-item.component";
import { DropdownTriggerDirective } from "../dropdown-trigger/dropdown-trigger.directive";
import { DropdownDirective } from "../dropdown.directive";

@Component({
    selector: 'rte-dropdown-menu',
    templateUrl: './dropdown-menu.component.html',
    styleUrl: './dropdown-menu.component.scss',
    standalone: true,
    imports: [
        CommonModule, 
        DropdownItemComponent, 
        DropdownTriggerDirective, 
        forwardRef(() => DropdownDirective),
    ]
})
export class DropdownMenuComponent {
    constructor() {
        console.log('DropdownMenuComponent');
    }

    readonly items = input<DropdownItemConfig[]>([]);
}