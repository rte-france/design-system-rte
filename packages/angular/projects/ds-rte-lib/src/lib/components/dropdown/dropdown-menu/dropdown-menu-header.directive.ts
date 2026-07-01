import { Directive, TemplateRef, inject } from "@angular/core";

@Directive({
  selector: "[rteDropdownMenuHeader]",
})
export class DropdownMenuHeaderDirective {
  readonly templateRef = inject(TemplateRef<HTMLElement>, { optional: true });
}
