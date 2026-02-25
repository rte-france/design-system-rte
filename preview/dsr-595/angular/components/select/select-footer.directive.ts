import { Directive, TemplateRef, inject } from "@angular/core";

@Directive({
  selector: "[rteSelectFooter]",
  standalone: true,
})
export class SelectFooterDirective {
  readonly templateRef = inject(TemplateRef<HTMLElement>, { optional: true });
}
