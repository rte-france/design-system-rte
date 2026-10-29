import {
  AfterContentInit,
  ComponentRef,
  contentChild,
  Directive,
  ElementRef,
  inject,
  input,
  OnDestroy,
  output,
  TemplateRef,
  ViewContainerRef,
} from "@angular/core";
import { waitForNextFrame } from "@design-system-rte/core";
import { Size } from "@design-system-rte/core/components/common/common-types";
import type { ModalPrimaryActionType } from "@design-system-rte/core/components/modal/modal.interface";
import {
  shouldUseModalConfiguredFooter,
  validateModalBeforeOpen,
  warnModalLegacyAndConfiguredFooter,
} from "@design-system-rte/core/components/modal/modal.utils";
import type { SplitButtonItemProps } from "@design-system-rte/core/components/split-button/split-button.interface";
import { ESCAPE_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";

import { OverlayService } from "../../services/overlay.service";

import { ModalTriggerDirective } from "./modal-trigger/modal-trigger.directive";
import { ModalComponent } from "./modal.component";

@Directive({
  selector: "[rteModal]",
  exportAs: "rteModal",
})
export class ModalDirective implements AfterContentInit, OnDestroy {
  private modalCompRef: ComponentRef<ModalComponent> | null = null;
  private hostElement: HTMLElement;
  private overlayService: OverlayService;

  private subPrimaryAction?: { unsubscribe(): void };
  private subPrimaryActionOption?: { unsubscribe(): void };
  private subSecondaryAction?: { unsubscribe(): void };

  private elementRef = inject(ElementRef);
  private viewContainerRef = inject(ViewContainerRef);

  readonly trigger = contentChild(ModalTriggerDirective);

  readonly rteModalId = input<string | undefined>();
  readonly rteModalIcon = input<string | undefined>();
  readonly rteModalIconAppearance = input<"outlined" | "filled">("outlined");
  readonly rteModalTitle = input<string>();
  readonly rteModalDescription = input<string>();
  readonly rteModalIsOpen = input<boolean>(false);
  readonly rteModalSize = input<Size>("m");
  readonly rteModalAriaDescribedby = input<string | undefined>();
  readonly rteModalCloseOnClickOutside = input<boolean>(true);

  readonly rteModalPrimaryActionLabel = input<string>();
  readonly rteModalSecondaryActionLabel = input<string>();
  readonly rteModalPrimaryActionType = input<ModalPrimaryActionType>("button");
  readonly rteModalPrimarySplitButtonOptions = input<SplitButtonItemProps[]>([]);
  readonly rteModalPrimarySplitButtonAriaLabelRight = input<string>();
  readonly rteModalPrimaryActionIsCritical = input<boolean>(false);

  readonly rteModalPrimaryActionClick = output<void>();
  readonly rteModalPrimaryActionOptionClick = output<string>();
  readonly rteModalSecondaryActionClick = output<void>();

  /** @deprecated Prefer `rteModalPrimaryActionLabel`, related primary action inputs, and `rteModalPrimaryActionClick`. */
  readonly primaryButton = contentChild<TemplateRef<unknown>>("primaryButton");

  /** @deprecated Prefer `rteModalSecondaryActionLabel` and `rteModalSecondaryActionClick`. */
  readonly secondaryButton = contentChild<TemplateRef<unknown>>("secondaryButton");

  readonly customContent = contentChild<TemplateRef<unknown>>("customContent");

  private modalElement: HTMLElement | null = null;
  private modalRestoreFocusTo: HTMLElement | null = null;

  private onKeyDown = (event: KeyboardEvent) => this.handleKeydown(event);

  constructor() {
    this.overlayService = inject(OverlayService);
    this.hostElement = this.elementRef.nativeElement;
  }

  onTrigger(): void {
    this.showModal();
  }

  ngAfterContentInit() {
    document.addEventListener("keydown", this.onKeyDown);
    if (this.trigger()) {
      this.trigger()?.modalTriggerClicked.subscribe(() => {
        this.onTrigger();
      });
    }
  }

  ngOnDestroy() {
    this.destroyModal();
  }

  showModal(): void {
    if (this.modalCompRef) {
      this.destroyModal();
    }

    warnModalLegacyAndConfiguredFooter(this.primaryButton(), this.rteModalPrimaryActionLabel());

    if (
      !validateModalBeforeOpen({
        hasLegacyPrimaryTemplate: !!this.primaryButton(),
        hasPrimaryActionLabel: !!this.rteModalPrimaryActionLabel()?.trim(),
        primaryActionType: this.rteModalPrimaryActionType(),
        splitButtonOptionsCount: this.rteModalPrimarySplitButtonOptions().length,
        hasSplitButtonAriaLabelRight: !!this.rteModalPrimarySplitButtonAriaLabelRight()?.trim(),
      })
    ) {
      return;
    }

    this.modalRestoreFocusTo = document.activeElement instanceof HTMLElement ? document.activeElement : null;

    this.modalCompRef = this.overlayService.create(ModalComponent, this.viewContainerRef, {
      hasBackdrop: true,
    });
    this.modalCompRef.instance.backdropOwnerRef = this.modalCompRef;

    this.subPrimaryAction?.unsubscribe();
    this.subPrimaryActionOption?.unsubscribe();
    this.subSecondaryAction?.unsubscribe();
    this.subPrimaryAction = this.modalCompRef.instance.primaryActionClick.subscribe(() => {
      this.rteModalPrimaryActionClick.emit();
    });
    this.subPrimaryActionOption = this.modalCompRef.instance.primaryActionOptionClick.subscribe((optionId) => {
      this.rteModalPrimaryActionOptionClick.emit(optionId);
    });
    this.subSecondaryAction = this.modalCompRef.instance.secondaryActionClick.subscribe(() => {
      this.rteModalSecondaryActionClick.emit();
    });

    this.modalCompRef.instance.closeModal.subscribe(() => {
      this.close();
    });

    this.modalElement = this.modalCompRef?.location.nativeElement.children[0].children[1];

    this.assignInputsValues();
    document.body.style.overflow = "hidden";
  }

  close(): void {
    if (this.modalCompRef) {
      this.modalCompRef.setInput("isOpen", false);

      setTimeout(() => this.destroyModal(), 200);
    }
  }

  private handleKeydown(event: KeyboardEvent) {
    if (event.key === ESCAPE_KEY && this.rteModalCloseOnClickOutside()) {
      event.preventDefault();
      this.close();
    }
  }

  private assignInputsValues(): void {
    if (this.modalCompRef) {
      const useConfiguredFooter = shouldUseModalConfiguredFooter(this.rteModalPrimaryActionLabel());

      this.modalCompRef.setInput("id", this.rteModalId());
      this.modalCompRef.setInput("icon", this.rteModalIcon());
      this.modalCompRef.setInput("iconAppearance", this.rteModalIconAppearance());
      this.modalCompRef.setInput("title", this.rteModalTitle());
      this.modalCompRef.setInput("description", this.rteModalDescription());
      this.modalCompRef.setInput("size", this.rteModalSize());
      this.modalCompRef.setInput("ariaDescribedby", this.rteModalAriaDescribedby());
      this.modalCompRef.setInput("useConfiguredFooter", useConfiguredFooter);
      this.modalCompRef.setInput("primaryActionLabel", this.rteModalPrimaryActionLabel());
      this.modalCompRef.setInput("secondaryActionLabel", this.rteModalSecondaryActionLabel());
      this.modalCompRef.setInput("primaryActionType", this.rteModalPrimaryActionType());
      this.modalCompRef.setInput("primaryActionIsCritical", this.rteModalPrimaryActionIsCritical());
      this.modalCompRef.setInput("primarySplitButtonOptions", this.rteModalPrimarySplitButtonOptions());
      this.modalCompRef.setInput("primarySplitButtonAriaLabelRight", this.rteModalPrimarySplitButtonAriaLabelRight());
      this.modalCompRef.setInput("primaryButton", useConfiguredFooter ? null : this.primaryButton());
      this.modalCompRef.setInput("secondaryButton", useConfiguredFooter ? null : this.secondaryButton());
      this.modalCompRef.setInput("customContent", this.customContent());
      this.modalCompRef.setInput("closeOnClickOutside", this.rteModalCloseOnClickOutside());
      this.modalCompRef.setInput("restoreFocusTo", this.modalRestoreFocusTo);
      waitForNextFrame(() => this.modalCompRef?.setInput("isOpen", true));
    }
  }

  private destroyModal(): void {
    this.subPrimaryAction?.unsubscribe();
    this.subPrimaryActionOption?.unsubscribe();
    this.subSecondaryAction?.unsubscribe();
    this.subPrimaryAction = undefined;
    this.subPrimaryActionOption = undefined;
    this.subSecondaryAction = undefined;
    if (this.modalCompRef) {
      this.modalCompRef.destroy();
      this.modalCompRef = null;
      this.overlayService.destroy();
      document.body.style.overflow = "unset";
    }
  }
}
