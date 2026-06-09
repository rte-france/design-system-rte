import { Directive, TemplateRef, inject } from "@angular/core";

@Directive({
  selector: "[rteSelectHeader]",
  standalone: true,
})
export class SelectHeaderDirective {
  readonly templateRef = inject(TemplateRef<HTMLElement>, { optional: true });
}
