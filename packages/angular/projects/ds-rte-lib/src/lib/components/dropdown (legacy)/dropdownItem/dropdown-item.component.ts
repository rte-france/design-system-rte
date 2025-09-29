import { CommonModule } from "@angular/common";
import { Component, contentChildren, ElementRef, input, output, TemplateRef, viewChild } from "@angular/core";

import { DividerComponent } from "../../divider/divider.component";
import { IconComponent } from "../../icon/icon.component";

@Component({
  selector: "rte-dropdown-item",
  imports: [CommonModule, IconComponent, DividerComponent],
  standalone: true,
  templateUrl: "./dropdown-item.component.html",
  styleUrl: "./dropdown-item.component.scss",
})
export class DropdownItemComponent {
  readonly label = input.required<string>();
  readonly leftIcon = input<string>();
  readonly trailingText = input<string>();
  readonly disabled = input<boolean>(false);
  readonly hasSeparator = input<boolean>(false);
  readonly hasIndent = input<boolean>(false);

  readonly template = viewChild<TemplateRef<string>>("tpl");
  readonly itemRef = viewChild<ElementRef>("itemRef");

  readonly subMenuItems = contentChildren<DropdownItemComponent>(DropdownItemComponent);

  readonly click = output<Event>();

  handleClick(event: MouseEvent) {
    if (!this.subMenuItems().length) {
      this.click.emit(event);
    }
  }
}
