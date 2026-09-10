import { NgModule } from "@angular/core";

import { SideNavFooterDirective } from "./side-nav-footer.directive";
import { SideNavHeaderDirective } from "./side-nav-header.directive";
import { SideNavComponent } from "./side-nav.component";

@NgModule({
  imports: [SideNavComponent, SideNavHeaderDirective, SideNavFooterDirective],
  exports: [SideNavComponent, SideNavHeaderDirective, SideNavFooterDirective],
})
export class SideNavModule {}
