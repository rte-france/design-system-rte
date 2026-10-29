import { CommonModule } from "@angular/common";
import {
  afterNextRender,
  Component,
  ComponentRef,
  ElementRef,
  inject,
  Injector,
  input,
  OnDestroy,
  output,
  signal,
  TemplateRef,
  viewChild,
} from "@angular/core";
import { Size } from "@design-system-rte/core/components/common/common-types";
import { IconSize } from "@design-system-rte/core/components/icon/icon.constants";
import type { ModalPrimaryActionType } from "@design-system-rte/core/components/modal/modal.interface";
import type { SplitButtonItemProps } from "@design-system-rte/core/components/split-button/split-button.interface";

import { FocusTrapService } from "../../services/focus-trap.service";
import { OverlayService } from "../../services/overlay.service";
import { ButtonComponent } from "../button/button.component";
import { DividerComponent } from "../divider/divider.component";
import { IconComponent } from "../icon/icon.component";
import { IconButtonComponent } from "../icon-button/icon-button.component";
import { SplitButtonComponent } from "../split-button/split-button.component";

@Component({
  selector: "rte-modal",
  imports: [CommonModule, IconButtonComponent, IconComponent, DividerComponent, ButtonComponent, SplitButtonComponent],
  templateUrl: "./modal.component.html",
  styleUrl: "./modal.component.scss",
})
export class ModalComponent implements OnDestroy {
  readonly id = input<string | undefined>();
  readonly icon = input<string | undefined>();
  readonly iconAppearance = input<"outlined" | "filled">("outlined");
  readonly title = input<string>();
  readonly description = input<string>();
  readonly isOpen = input<boolean>(false);
  readonly size = input<Size>("m");
  readonly ariaDescribedby = input<string | undefined>(undefined);
  readonly closeOnClickOutside = input<boolean>(true);
  readonly restoreFocusTo = input<HTMLElement | null>(null);

  readonly useConfiguredFooter = input<boolean>(false);
  readonly primaryActionLabel = input<string>();
  readonly secondaryActionLabel = input<string>();
  readonly primaryActionType = input<ModalPrimaryActionType>("button");
  readonly primaryActionIsCritical = input<boolean>(false);
  readonly primarySplitButtonOptions = input<SplitButtonItemProps[]>([]);
  readonly primarySplitButtonAriaLabelRight = input<string>();

  readonly primaryButton = input<TemplateRef<unknown> | null>(null);
  readonly secondaryButton = input<TemplateRef<unknown> | null>(null);
  readonly customContent = input<TemplateRef<unknown> | null>(null);

  private readonly elementRef = viewChild<ElementRef<HTMLDivElement>>("modal");

  backdropOwnerRef: ComponentRef<unknown> | null = null;

  private focusTrap = inject(FocusTrapService);
  private overlayService = inject(OverlayService);
  private injector = inject(Injector);
  private focusTrapActive = false;

  constructor() {
    afterNextRender(
      () => {
        const native = this.elementRef()?.nativeElement;
        if (native && !this.focusTrapActive) {
          this.focusTrap.activate(native, {
            restoreFocusTo: this.restoreFocusTo() ?? undefined,
          });
          this.focusTrapActive = true;
          if (this.backdropOwnerRef) {
            this.overlayService.applyBackdrop(this.backdropOwnerRef);
          }
        }
      },
      { injector: this.injector },
    );
  }

  readonly closeModal = output<void>();
  readonly primaryActionClick = output<void>();
  readonly secondaryActionClick = output<void>();

  readonly iconSize = signal(IconSize["xl"]);

  ngOnDestroy() {
    if (this.focusTrapActive) {
      this.focusTrap.deactivate();
      this.focusTrapActive = false;
    }
  }

  onClose() {
    this.closeModal.emit();
  }

  handleClickBackdrop = () => {
    if (this.closeOnClickOutside()) {
      this.closeModal.emit();
    }
  };
}
