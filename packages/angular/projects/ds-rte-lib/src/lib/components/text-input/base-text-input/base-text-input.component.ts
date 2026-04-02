import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, effect, input, signal } from "@angular/core";

import { IconComponent } from "../../icon/icon.component";
import { RegularIconIdKey, TogglableIconIdKey } from "../../icon/icon.service";
import { IconButtonComponent } from "../../icon-button/icon-button.component";
import { BaseInputComponent } from "../../input/base-input/base-input.component";
import { LinkComponent } from "../../link/link.component";

@Component({
  selector: "rte-base-text-input",
  imports: [CommonModule, IconComponent, IconButtonComponent, LinkComponent],
  standalone: true,
  templateUrl: "../../input/base-input/base-input.component.html",
  styleUrl: "./base-text-input.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseTextInputComponent extends BaseInputComponent {
  readonly rightIconAction = input<"clean" | "visibilityOn" | "visibilityOff">("clean");
  readonly isHiddenInput = signal<boolean>(false);
  readonly visibilityIcons = computed(() => ["visibilityOn", "visibilityOff"].includes(this.rightIconAction()));

  constructor() {
    super();

    effect(
      () => {
        if (this.visibilityIcons()) {
          this.isHiddenInput.set(this.rightIconAction() === "visibilityOn");
        } else {
          this.isHiddenInput.set(false);
        }
      },
      { allowSignalWrites: true },
    );
  }

  protected override computeInputType(): "text" | "password" {
    return this.isHiddenInput() ? "password" : "text";
  }

  protected override computeRightIconName(): RegularIconIdKey | TogglableIconIdKey | null {
    if (this.visibilityIcons()) {
      return this.isHiddenInput() ? "visibility-show" : "visibility-hide";
    }
    if (this.rightIconAction() === "clean") {
      return "cancel";
    }
    return null;
  }

  protected override computeRightIconAriaLabel(): string {
    if (this.visibilityIcons()) {
      return this.isHiddenInput() ? "show text" : "hide text";
    }
    if (this.rightIconAction() === "clean") {
      return "clear";
    }
    return "";
  }

  protected override computeShouldShowRightIcon(): boolean {
    if (this.readOnly() || this.disabled()) {
      return false;
    }
    if (!this.showRightIcon()) {
      return false;
    }
    if (this.rightIconAction() === "clean") {
      return !!this.internalValue()?.length;
    }
    return this.visibilityIcons();
  }

  protected override handleRightIconClick(): void {
    if (this.rightIconAction() === "clean") {
      this.internalValue.set("");
      this.valueChange.emit("");
      this.characterCount.set(0);
    }
    if (this.visibilityIcons()) {
      this.isHiddenInput.set(!this.isHiddenInput());
    }
  }
}
