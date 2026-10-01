import { Directive, TemplateRef, inject } from "@angular/core";

@Directive({
  selector: "[rteDropdownMenuFooter]",
})
export class DropdownMenuFooterDirective {
  readonly templateRef = inject(TemplateRef<HTMLElement>, { optional: true });
}
