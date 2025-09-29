import { NgModule } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';
import { DropdownTriggerDirective } from './dropdown-trigger/dropdown-trigger.directive';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { DropdownItemComponent } from './dropdown-item/dropdown-item.component';

@NgModule({
  imports: [
    DropdownDirective,
    DropdownTriggerDirective,
    DropdownMenuComponent,
    DropdownItemComponent
  ],
  exports: [
    DropdownDirective,
    DropdownTriggerDirective,
    DropdownMenuComponent,
    DropdownItemComponent
  ]
})
export class DropdownModule { }
