import { NgModule } from "@angular/core";

import { DrawerTriggerDirective } from "./drawer-trigger/drawer-trigger.directive";
import { DrawerDirective } from "./drawer.directive";

@NgModule({
  imports: [DrawerDirective, DrawerTriggerDirective],
  exports: [DrawerDirective, DrawerTriggerDirective],
})
export class DrawerModule {}
