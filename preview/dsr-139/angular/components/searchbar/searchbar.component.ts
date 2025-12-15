import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, input, output, signal } from "@angular/core";
import {
  APPEARANCE_CONFIG,
  SEARCHBAR_BORDER_RADIUS,
  SEARCHBAR_BUTTON_HEIGHT_COMPACT,
  SEARCHBAR_BUTTON_WIDTH,
  SEARCHBAR_PADDING_LEFT,
} from "@design-system-rte/core/components/searchbar/searchbar.constants";
import { SearchBarAppearance } from "@design-system-rte/core/components/searchbar/searchbar.interface";
import { ENTER_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";

import { IconButtonComponent } from "../icon-button/icon-button.component";
import { BaseTextInputComponent } from "../text-input/base-text-input/base-text-input.component";

@Component({
  selector: "rte-searchbar",
  imports: [CommonModule, BaseTextInputComponent, IconButtonComponent],
  standalone: true,
  templateUrl: "./searchbar.component.html",
  styleUrl: "./searchbar.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchbarComponent {
  readonly id = input<string>();
  readonly label = input<string>("Rechercher");
  readonly disabled = input<boolean>(false);
  readonly showResetButton = input<boolean>(true);
  readonly appearance = input<SearchBarAppearance>("primary");
  readonly compactSpacing = input<boolean>(false);
  readonly value = input<string>("");
  readonly assistiveText = input<string>("");

  readonly valueChange = output<string>();
  readonly searchEvent = output<string | undefined>();
  readonly clear = output<void>();

  readonly hasFocusWithin = signal<boolean>(false);

  readonly appearanceConfig = computed(() => APPEARANCE_CONFIG[this.appearance()]);

  readonly placeholder = computed(() => (this.disabled() ? "Recherche indisponible" : this.label()));

  readonly textInputStyles = computed(() => {
    const styles: Record<string, string> = {};
    const hasLeftIcon = this.appearanceConfig().showLeftIcon;

    if (this.appearance() === "primary") {
      styles["border-right"] = "none";
      styles["border-radius"] = `${SEARCHBAR_BORDER_RADIUS} 0 0 ${SEARCHBAR_BORDER_RADIUS}`;
      if (!hasLeftIcon) {
        styles["padding-left"] = SEARCHBAR_PADDING_LEFT;
      }
    } else if (this.appearance() === "secondary") {
      styles["border-radius"] = SEARCHBAR_BORDER_RADIUS;
    }

    return styles;
  });

  readonly searchButtonStyles = computed(() => {
    const styles: Record<string, string> = {
      width: SEARCHBAR_BUTTON_WIDTH,
      "border-radius": `0 ${SEARCHBAR_BORDER_RADIUS} ${SEARCHBAR_BORDER_RADIUS} 0`,
      display: "flex",
      "justify-content": "center",
    };
    if (this.compactSpacing()) {
      styles["height"] = SEARCHBAR_BUTTON_HEIGHT_COMPACT;
    }
    return styles;
  });

  handleChange(value: string): void {
    this.valueChange.emit(value);
  }

  handleSearch(): void {
    this.searchEvent.emit(this.value());
  }

  handleEnter(event: KeyboardEvent): void {
    if (event.key === ENTER_KEY) {
      this.handleSearch();
    }
  }

  handleClear(): void {
    this.valueChange.emit("");
    this.clear.emit();
  }

  handleFocusIn(): void {
    this.hasFocusWithin.set(true);
  }

  handleFocusOut(event: FocusEvent): void {
    const next = event.relatedTarget as Node | null;
    const currentTarget = event.currentTarget as Node;
    if (next && currentTarget.contains(next)) {
      return;
    }
    this.hasFocusWithin.set(false);
  }
}
