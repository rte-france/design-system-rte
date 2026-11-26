import { Directive, TemplateRef, inject } from "@angular/core";

@Directive({
  selector: "[rteSideNavFooter]",
})
export class SideNavFooterDirective {
  readonly templateRef = inject(TemplateRef<unknown>, { optional: true });
}
