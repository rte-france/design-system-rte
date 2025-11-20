import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, input, output } from "@angular/core";
import { cardSize } from "@design-system-rte/core/components/card/card.constats";
import { CardType } from "@design-system-rte/core/components/card/card.interface";
import { Size } from "@design-system-rte/core/components/common/common-types";
import { ENTER_KEY, SPACE_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";

@Component({
  selector: "rte-card",
  imports: [CommonModule],
  standalone: true,
  templateUrl: "./card.component.html",
  styleUrl: "./card.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  readonly size = input<Size>("m");
  readonly cardType = input<CardType>("default");
  readonly clickable = input<boolean>(false);
  readonly disabled = input<boolean>(false);

  readonly ariaLabel = input<string | undefined>(undefined);
  readonly ariaLabelledby = input<string | undefined>(undefined);
  readonly ariaRole = input<string | undefined>(undefined);

  readonly cardClicked = output<void>();

  readonly cardWidth = computed(() => `${cardSize[this.size()]}px`);

  readonly tabIndex = computed(() => (this.clickable() ? 0 : -1));

  onClick(): void {
    if (!this.disabled() && this.clickable()) {
      this.cardClicked.emit();
    }
  }

  onKeyDown(event: KeyboardEvent): void {
    if (!this.disabled() && this.clickable()) {
      if ([ENTER_KEY, SPACE_KEY].includes(event.key)) {
        event.preventDefault();
        this.cardClicked.emit();
      }
    }
  }
}
