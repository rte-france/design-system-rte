import { Directive, TemplateRef, inject } from "@angular/core";

@Directive({
  selector: "[rteDropdownMenuBody]",
})
export class DropdownMenuBodyDirective {
  readonly templateRef = inject(TemplateRef<HTMLElement>, { optional: true });
}
