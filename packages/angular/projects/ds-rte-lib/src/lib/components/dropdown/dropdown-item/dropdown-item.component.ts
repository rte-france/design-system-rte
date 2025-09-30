import { CommonModule } from "@angular/common";
import { Component, input, contentChildren, ElementRef, output, TemplateRef, viewChild, EventEmitter } from "@angular/core";
import { IconComponent } from "../../icon/icon.component";
import { DividerComponent } from "../../divider/divider.component";

export interface DropdownItemConfig {
    label: string;
    leftIcon?: string;
    trailingText?: string;
    disabled?: boolean;
    hasSeparator?: boolean;
    hasIndent?: boolean;
    subMenuItems?: DropdownItemConfig[];
    click?: EventEmitter<Event>;
}

@Component({
    selector: 'rte-dropdown-item',
    standalone: true,
    templateUrl: './dropdown-item.component.html',
    styleUrl: './dropdown-item.component.scss',
    imports: [CommonModule, IconComponent, DividerComponent],
})
export class DropdownItemComponent {
    readonly label = input.required<string>();
    readonly leftIcon = input<string>();
    readonly trailingText = input<string>();
    readonly disabled = input<boolean>(false);
    readonly hasSeparator = input<boolean>(false);
    readonly hasIndent = input<boolean>(false);

    // readonly template = viewChild<TemplateRef<string>>("tpl");
    // readonly itemRef = viewChild<ElementRef>("itemRef");

    readonly subMenuItems = input<DropdownItemConfig[]>([]);

    readonly click = output<Event>();

    handleClick(event: Event) {
        this.click.emit(event);
    }
}