import { Directive, TemplateRef, inject } from "@angular/core";

@Directive({
  selector: "[rteSideNavHeader]",
})
export class SideNavHeaderDirective {
  readonly templateRef = inject(TemplateRef<HTMLElement>, { optional: true });
}
