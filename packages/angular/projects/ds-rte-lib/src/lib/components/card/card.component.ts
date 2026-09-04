import { CommonModule } from "@angular/common";
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  input,
  output,
  signal,
  viewChild,
} from "@angular/core";
import {
  CARD_MISSING_ACCESSIBLE_NAME_ERROR,
  DEFAULT_CARD_WIDTH,
} from "@design-system-rte/core/components/card/card.constants";
import { CardType } from "@design-system-rte/core/components/card/card.interface";
import { ENTER_KEY, SPACE_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";
import { logError } from "@design-system-rte/core/utils/log-handlers";

@Component({
  selector: "rte-card",
  imports: [CommonModule],
  templateUrl: "./card.component.html",
  styleUrl: "./card.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements AfterViewInit {
  private readonly cardElement = viewChild<ElementRef<HTMLDivElement>>("cardElement");
  readonly shouldRender = signal(true);
  readonly width = input<string>(DEFAULT_CARD_WIDTH);
  readonly height = input<string>("auto");
  readonly cardType = input<CardType>("default");
  readonly clickable = input<boolean>(false);
  readonly disabled = input<boolean>(false);

  readonly ariaLabel = input<string | undefined>(undefined);
  readonly ariaLabelledby = input<string | undefined>(undefined);
  readonly ariaRole = input<string | undefined>(undefined);

  readonly cardClicked = output<void>();

  readonly tabIndex = computed(() => (this.clickable() ? 0 : -1));

  ngAfterViewInit(): void {
    const hasAccessibleName =
      !!this.ariaLabel() || !!this.ariaLabelledby() || !!this.cardElement()?.nativeElement.textContent?.trim();

    if (this.clickable() && !hasAccessibleName) {
      logError("Card", CARD_MISSING_ACCESSIBLE_NAME_ERROR);
      this.shouldRender.set(false);
    }
  }

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
