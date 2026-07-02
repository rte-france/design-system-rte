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
} from "@angular/core";
import { IconSize, IconTypeMap } from "@design-system-rte/core/components/icon/icon.constants";
import { ToastDurationMap } from "@design-system-rte/core/components/toast/toast.constants";
import { ToastProps, ToastType } from "@design-system-rte/core/components/toast/toast.interface";

import { ButtonComponent } from "../button/button.component";
import { IconComponent } from "../icon/icon.component";
import { IconButtonComponent } from "../icon-button/icon-button.component";

@Component({
  selector: "rte-toast",
  imports: [CommonModule, IconComponent, IconButtonComponent, ButtonComponent],
  standalone: true,
  templateUrl: "./toast.component.html",
  styleUrl: "./toast.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastComponent implements OnChanges {
  readonly id = input<string>("");
  readonly message = input<string>("");
  readonly type = input<ToastType>("info");
  readonly duration = input<ToastProps["duration"]>("medium");
  readonly isOpen = input<boolean>(false);
  readonly placement = input<ToastProps["placement"]>("bottom-right");
  readonly closable = input<ToastProps["closable"]>(true);
  readonly autoDismiss = input<ToastProps["autoDismiss"]>(true);
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
    return this.isOpen() && this.autoDismiss() && (!this.actionButtonLabel() || !this.showActionButton());
  });

  readonly timer = signal<ReturnType<typeof setTimeout> | null>(null);

  ngOnChanges(changes: SimpleChanges) {
    if (changes["isOpen"]) {
      if (this.shouldAutoDismiss()) {
        this.startTimer();
      }
    }
  }

  onClickActionButton(): void {
    const action = this.onActionButtonClick();
    if (action) {
      action();
    }
  }

  handleMouseEnter(): void {
    if (this.timer()) {
      this.stopTimer();
    }
  }

  handleMouseLeave(): void {
    if (this.shouldAutoDismiss()) {
      this.startTimer();
    }
  }

  clickCloseButton(): void {
    this.close.emit();
  }

  startTimer(): void {
    this.stopTimer();
    const duration = this.duration();
    if (duration) {
      const timerId = setTimeout(() => {
        this.close.emit();
        this.stopTimer();
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
}
