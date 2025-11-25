import { NgModule } from "@angular/core";

import { DropdownItemComponent } from "./dropdown-item/dropdown-item.component";
import { DropdownMenuComponent } from "./dropdown-menu/dropdown-menu.component";
import { DropdownTriggerDirective } from "./dropdown-trigger/dropdown-trigger.directive";
import { DropdownDirective } from "./dropdown.directive";

@NgModule({
  imports: [DropdownDirective, DropdownTriggerDirective, DropdownMenuComponent, DropdownItemComponent],
  exports: [DropdownDirective, DropdownTriggerDirective, DropdownMenuComponent, DropdownItemComponent],
})
export class DropdownModule {}
