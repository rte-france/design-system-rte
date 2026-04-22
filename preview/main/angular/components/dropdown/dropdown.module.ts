import { NgModule } from "@angular/core";

import { DropdownItemComponent } from "./dropdown-item/dropdown-item.component";
import { DropdownMenuBodyDirective } from "./dropdown-menu/dropdown-menu-body.directive";
import { DropdownMenuFooterDirective } from "./dropdown-menu/dropdown-menu-footer.directive";
import { DropdownMenuHeaderDirective } from "./dropdown-menu/dropdown-menu-header.directive";
import { DropdownMenuComponent } from "./dropdown-menu/dropdown-menu.component";
import { DropdownTriggerDirective } from "./dropdown-trigger/dropdown-trigger.directive";
import { DropdownDirective } from "./dropdown.directive";

@NgModule({
  imports: [
    DropdownDirective,
    DropdownTriggerDirective,
    DropdownMenuComponent,
    DropdownItemComponent,
    DropdownMenuBodyDirective,
    DropdownMenuHeaderDirective,
    DropdownMenuFooterDirective,
  ],
  exports: [
    DropdownDirective,
    DropdownTriggerDirective,
    DropdownMenuComponent,
    DropdownItemComponent,
    DropdownMenuBodyDirective,
    DropdownMenuHeaderDirective,
    DropdownMenuFooterDirective,
  ],
})
export class DropdownModule {}
