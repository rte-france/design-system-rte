import { Directive, TemplateRef, inject } from "@angular/core";

@Directive({
  selector: "[rteSideNavHeader]",
})
export class SideNavHeaderDirective {
  readonly templateRef = inject(TemplateRef<unknown>, { optional: true });
}
