import { CommonModule } from "@angular/common";
import { Component, input, computed, ChangeDetectionStrategy } from "@angular/core";
import { REQUIREMENT_INDICATOR_VALUE } from "@design-system-rte/core";

@Component({
  selector: "rte-required-indicator",
  imports: [CommonModule],
  standalone: true,
  templateUrl: "./required-indicator.component.html",
  styleUrl: "./required-indicator.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequiredIndicatorComponent {
  readonly required = input<boolean>(false);
  readonly showLabelRequirement = input<boolean>(false);

  readonly requirementIndicatorValue = computed(() =>
    this.required()
      ? this.showLabelRequirement()
        ? REQUIREMENT_INDICATOR_VALUE.required
        : REQUIREMENT_INDICATOR_VALUE.requiredIcon
      : REQUIREMENT_INDICATOR_VALUE.optional,
  );
}
