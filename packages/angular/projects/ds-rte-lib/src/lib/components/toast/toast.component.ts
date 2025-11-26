import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, input, computed, signal, output } from "@angular/core";
import { IconSize, IconTypeMap } from "@design-system-rte/core/components/icon/icon.constants";
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
export class ToastComponent {
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
    console.log("iconName", this.iconName());
    return this.showLeftIcon() && !!this.iconName();
  });

  readonly displayLeftIcon = computed(() => {
    return this.showLeftIcon() && IconTypeMap[this.type()];
  });

  readonly displayActionButton = computed(() => {
    return this.showActionButton() && this.actionButtonLabel() && !!this.onActionButtonClick();
  });

  onClickActionButton(): void {
    const action = this.onActionButtonClick();
    if (action) {
      action();
    }
  }

  clickCloseButton(): void {
    this.close.emit();
  }

  readonly position = computed(() => this.placement()?.split("-")[0]);
  readonly alignment = computed(() => this.placement()?.split("-")[1]);

  readonly visible = signal(false);

  readonly defaultIconName = computed(() => IconTypeMap[this.type()]);
  readonly iconSize = IconSize["xl"];
}
