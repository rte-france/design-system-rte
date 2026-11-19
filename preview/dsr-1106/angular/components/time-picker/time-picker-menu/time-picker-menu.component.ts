import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, input, output } from "@angular/core";

import { IconComponent } from "../../icon/icon.component";

@Component({
  selector: "rte-time-picker-menu",
  imports: [CommonModule, IconComponent],
  templateUrl: "./time-picker-menu.component.html",
  styleUrl: "./time-picker-menu.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimePickerMenuComponent {
  readonly hours = input<string>("");
  readonly minutes = input<string>("");
  readonly seconds = input<string>("");
  readonly isHourReadOnly = input<boolean>(false);
  readonly isMinuteReadOnly = input<boolean>(false);
  readonly isSecondReadOnly = input<boolean>(false);

  readonly hoursValueChange = output<string>();
  readonly minutesValueChange = output<string>();
  readonly secondsValueChange = output<string>();
  readonly hoursKeydown = output<KeyboardEvent>();
  readonly minutesKeydown = output<KeyboardEvent>();
  readonly secondsKeydown = output<KeyboardEvent>();
  readonly hoursIncrement = output<void>();
  readonly hoursDecrement = output<void>();
  readonly minutesIncrement = output<void>();
  readonly minutesDecrement = output<void>();
  readonly secondsIncrement = output<void>();
  readonly secondsDecrement = output<void>();

  onHoursInput(event: Event): void {
    this.hoursValueChange.emit((event.target as HTMLInputElement).value);
  }

  onMinutesInput(event: Event): void {
    this.minutesValueChange.emit((event.target as HTMLInputElement).value);
  }

  onSecondsInput(event: Event): void {
    this.secondsValueChange.emit((event.target as HTMLInputElement).value);
  }

  onHoursKeydown(event: KeyboardEvent): void {
    if (this.isHourReadOnly()) {
      return;
    }
    this.hoursKeydown.emit(event);
  }

  onMinutesKeydown(event: KeyboardEvent): void {
    if (this.isMinuteReadOnly()) {
      return;
    }
    this.minutesKeydown.emit(event);
  }

  onSecondsKeydown(event: KeyboardEvent): void {
    if (this.isSecondReadOnly()) {
      return;
    }
    this.secondsKeydown.emit(event);
  }

  onHoursIncrementClick(): void {
    if (this.isHourReadOnly()) {
      return;
    }
    this.hoursIncrement.emit();
  }

  onHoursDecrementClick(): void {
    if (this.isHourReadOnly()) {
      return;
    }
    this.hoursDecrement.emit();
  }

  onMinutesIncrementClick(): void {
    if (this.isMinuteReadOnly()) {
      return;
    }
    this.minutesIncrement.emit();
  }

  onMinutesDecrementClick(): void {
    if (this.isMinuteReadOnly()) {
      return;
    }
    this.minutesDecrement.emit();
  }

  onSecondsIncrementClick(): void {
    if (this.isSecondReadOnly()) {
      return;
    }
    this.secondsIncrement.emit();
  }

  onSecondsDecrementClick(): void {
    if (this.isSecondReadOnly()) {
      return;
    }
    this.secondsDecrement.emit();
  }
}
