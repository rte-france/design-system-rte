import { Directive, TemplateRef, inject } from "@angular/core";

@Directive({
  selector: "[rteDropdownMenuHeader]",
  standalone: true,
})
export class DropdownMenuHeaderDirective {
  readonly templateRef = inject(TemplateRef<HTMLElement>, { optional: true });
}
