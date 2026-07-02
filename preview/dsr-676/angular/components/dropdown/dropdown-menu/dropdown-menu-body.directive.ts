import { Directive, TemplateRef, inject } from "@angular/core";

@Directive({
  selector: "[rteDropdownMenuBody]",
  standalone: true,
})
export class DropdownMenuBodyDirective {
  readonly templateRef = inject(TemplateRef<HTMLElement>, { optional: true });
}
