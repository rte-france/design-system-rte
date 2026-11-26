import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, effect, input, output, signal } from "@angular/core";

import { IconComponent } from "../icon/icon.component";

@Component({
  selector: "rte-checkbox",
  imports: [CommonModule, IconComponent],
  templateUrl: "./checkbox.component.html",
  styleUrl: "./checkbox.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent {
  readonly id = input.required<string>();
  readonly label = input.required<string>();
  readonly value = input("");
  readonly indeterminate = input(false);
  readonly description = input("");
  readonly hasLabel = input(true);
  /** @deprecated Use `hasLabel` instead. */
  readonly showLabel = input(true);
  readonly disabled = input(false);
  readonly isError = input(false);
  /** @deprecated Use `isError` instead. */
  readonly error = input(false);
  readonly errorMessage = input("");
  readonly readOnly = input(false);
  readonly checked = input(false);
  readonly tabindex = input<string | number | undefined>(undefined);
  readonly ariaLabel = input<string | undefined>(undefined);

  readonly checkedChange = output<boolean>();

  readonly effectiveHasLabel = computed(() => this.hasLabel() && this.showLabel());
  readonly effectiveIsError = computed(() => this.isError() || this.error());

  readonly internalChecked = signal<boolean>(false);

  constructor() {
    effect(() => {
      this.internalChecked.set(this.checked());
    });
  }

  onClick(event: MouseEvent) {
    if (this.readOnly()) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  onChange(event: Event) {
    if (this.readOnly() || this.disabled()) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    const inputElement = event.target as HTMLInputElement | null;
    const isChecked = !!inputElement?.checked;
    this.internalChecked.set(isChecked);
    this.checkedChange.emit(isChecked);
  }

  onKeydown(event: KeyboardEvent) {
    if (event.code === "Space") {
      if (this.readOnly()) {
        event.preventDefault();
      }
    }
  }
}
