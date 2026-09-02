import { Directive, TemplateRef, inject } from "@angular/core";

@Directive({
  selector: "[rteSelectHeader]",
})
export class SelectHeaderDirective {
  readonly templateRef = inject(TemplateRef<HTMLElement>, { optional: true });
}
