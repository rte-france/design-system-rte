import { Directive, TemplateRef, inject } from "@angular/core";

@Directive({
  selector: "[rteDropdownMenuFooter]",
  standalone: true,
})
export class DropdownMenuFooterDirective {
  readonly templateRef = inject(TemplateRef<HTMLElement>, { optional: true });
}
