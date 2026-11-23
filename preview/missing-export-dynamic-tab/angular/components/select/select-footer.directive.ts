import { Directive, TemplateRef, inject } from "@angular/core";

@Directive({
  selector: "[rteSelectFooter]",
})
export class SelectFooterDirective {
  readonly templateRef = inject(TemplateRef<HTMLElement>, { optional: true });
}
