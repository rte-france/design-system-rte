import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  input,
  computed,
  signal,
  output,
  SimpleChanges,
  OnChanges,
  OnDestroy,
} from "@angular/core";
import { ESCAPE_KEY } from "@design-system-rte/core";
import { IconSize, IconTypeMap } from "@design-system-rte/core/components/icon/icon.constants";
import { ToastCloseButtonAriaLabel, ToastDurationMap } from "@design-system-rte/core/components/toast/toast.constants";
import { ToastProps, ToastType } from "@design-system-rte/core/components/toast/toast.interface";

import { ButtonComponent } from "../button/button.component";
import { IconComponent } from "../icon/icon.component";
import { IconButtonComponent } from "../icon-button/icon-button.component";

@Component({
  selector: "rte-toast",
  imports: [CommonModule, IconComponent, IconButtonComponent, ButtonComponent],
  templateUrl: "./toast.component.html",
  styleUrl: "./toast.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastComponent implements OnChanges, OnDestroy {
  readonly id = input<string>("");
  readonly message = input<string>("");
  readonly type = input<ToastType>("neutral");
  readonly duration = input<ToastProps["duration"]>("medium");
  readonly isOpen = input<boolean>(false);
  readonly placement = input<ToastProps["placement"]>("bottom-right");
  readonly closable = input<ToastProps["closable"]>(true);
  readonly autoDismiss = input<ToastProps["autoDismiss"]>(false);
  readonly showActionButton = input<ToastProps["showActionButton"]>(true);
  readonly iconName = input<ToastProps["iconName"]>("");
  readonly showLeftIcon = input<ToastProps["showLeftIcon"]>(true);

  readonly actionButtonLabel = input<ToastProps["actionButtonLabel"]>("");
  readonly onActionButtonClick = input<ToastProps["onActionButtonClick"]>(() => {});

  readonly close = output<void>();

  readonly displayCustomIcon = computed(() => {
    return this.showLeftIcon() && !!this.iconName();
  });

  readonly displayLeftIcon = computed(() => {
    return this.showLeftIcon() && IconTypeMap[this.type()];
  });

  readonly displayActionButton = computed(() => {
    return this.showActionButton() && this.actionButtonLabel() && !!this.onActionButtonClick();
  });

  readonly shouldAutoDismiss = computed(() => {
    return this.isOpen() && this.autoDismiss() && !this.displayActionButton();
  });

  readonly timer = signal<ReturnType<typeof setTimeout> | null>(null);
  readonly isHovered = signal(false);
  readonly isFocused = signal(false);
  readonly computedClosable = computed(() => {
    return this.closable() || !!this.displayActionButton() || !this.autoDismiss();
  });

  private previousFocusedElement: EventTarget | null = null;

  ngOnChanges(changes: SimpleChanges) {
    const timerInputs = [
      "isOpen",
      "autoDismiss",
      "duration",
      "showActionButton",
      "actionButtonLabel",
      "onActionButtonClick",
    ];
    if (timerInputs.some((inputName) => changes[inputName])) {
      if (changes["isOpen"]) {
        if (this.shouldAutoDismiss()) {
          this.startTimer();
        }
        if (!this.isOpen()) {
          this.stopTimer();
          this.restorePreviousFocus();
        }
      } else {
        this.stopTimer();
        this.resumeTimer();
      }
    }
  }

  ngOnDestroy(): void {
    this.stopTimer();
  }

  onClickActionButton(): void {
    const action = this.onActionButtonClick();
    if (action) {
      action();
    }
  }

  handleMouseEnter(): void {
    this.isHovered.set(true);
    this.pauseTimer();
  }

  handleMouseLeave(): void {
    this.isHovered.set(false);
    this.resumeTimer();
  }

  handleFocusIn(event: FocusEvent): void {
    if (this.previousFocusedElement === null) {
      this.previousFocusedElement = event.relatedTarget;
    }
    this.isFocused.set(true);
    this.pauseTimer();
  }

  handleFocusOut(event: FocusEvent): void {
    const toastElement = event.currentTarget as HTMLElement;
    const nextFocused = event.relatedTarget as Node | null;
    if (nextFocused && toastElement.contains(nextFocused)) {
      return;
    }
    this.isFocused.set(false);
    this.previousFocusedElement = null;
    this.resumeTimer();
  }

  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === ESCAPE_KEY && this.closable()) {
      event.stopPropagation();
      this.close.emit();
    }
  }

  private pauseTimer(): void {
    if (this.timer()) {
      this.stopTimer();
    }
  }

  private resumeTimer(): void {
    if (this.shouldAutoDismiss() && !this.isHovered() && !this.isFocused()) {
      this.startTimer();
    }
  }

  clickCloseButton(): void {
    this.handleClose();
  }

  private restorePreviousFocus(): void {
    const previousFocusedElement = this.previousFocusedElement;
    this.previousFocusedElement = null;
    if (previousFocusedElement instanceof HTMLElement && previousFocusedElement.isConnected) {
      previousFocusedElement.focus();
    }
  }

  private handleClose(): void {
    this.stopTimer();
    this.close.emit();
    this.restorePreviousFocus();
  }

  startTimer(): void {
    this.stopTimer();
    const duration = this.duration();
    if (duration) {
      const timerId = setTimeout(() => {
        this.handleClose();
      }, ToastDurationMap[duration]);
      this.timer.set(timerId);
    }
  }

  stopTimer(): void {
    const timer = this.timer();
    if (timer) {
      clearTimeout(timer);
      this.timer.set(null);
    }
  }

  readonly position = computed(() => this.placement()?.split("-")[0]);
  readonly alignment = computed(() => this.placement()?.split("-")[1]);

  readonly visible = signal(false);

  readonly defaultIconName = computed(() => IconTypeMap[this.type()]);
  readonly iconSize = IconSize["xl"];
  readonly closeButtonAriaLabel = ToastCloseButtonAriaLabel;
}
