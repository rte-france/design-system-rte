import {
  AfterContentInit,
  ComponentRef,
  contentChild,
  Directive,
  ElementRef,
  inject,
  input,
  OnDestroy,
  ViewContainerRef,
} from "@angular/core";
import { Size } from "@design-system-rte/core/components/common/common-types";
import { ESCAPE_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";

import { OverlayService } from "../../services/overlay.service";
import { ButtonComponent } from "../button/button.component";

import { ModalTriggerDirective } from "./modal-trigger/modal-trigger.directive";
import { ModalComponent } from "./modal.component";

@Directive({
  selector: "[rteModal]",
  standalone: true,
})
export class ModalDirective implements AfterContentInit, OnDestroy {
  private modalCompRef: ComponentRef<ModalComponent> | null = null;
  private hostElement: HTMLElement;
  private overlayService: OverlayService;

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

  readonly primaryButton = contentChild.required<ButtonComponent>("primaryButton");
  readonly secondaryButton = contentChild<ButtonComponent>("secondaryButton");
  readonly customContent = contentChild<unknown>("customContent");

  private modalElement: HTMLElement | null = null;

  private onMouseDown = (e: MouseEvent) => this.handleClickAway(e);
  private onKeyDown = (e: KeyboardEvent) => this.handleKeydown(e);

  constructor() {
    this.overlayService = inject(OverlayService);
    this.hostElement = this.elementRef.nativeElement;
  }

  onTrigger(): void {
    this.showModal();
  }

  ngAfterContentInit() {
    document.addEventListener("mousedown", this.onMouseDown);
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
      this.modalCompRef.destroy();
    }

    if (!this.primaryButton()) {
      console.warn("Primary button required, add it as child to the modal directive.");
      return;
    }

    this.modalCompRef = this.overlayService.create(ModalComponent, this.viewContainerRef, true);

    this.modalCompRef?.instance.closeModal.subscribe(() => {
      this.closeModal();
    });

    this.modalElement = this.modalCompRef?.location.nativeElement.children[0].children[1];

    this.assignInputsValues();
  }

  private handleKeydown(event: KeyboardEvent) {
    if (event.key === ESCAPE_KEY && this.rteModalCloseOnClickOutside()) {
      event.preventDefault();
      this.closeModal();
    }
  }

  private assignInputsValues(): void {
    if (this.modalCompRef) {
      this.modalCompRef.setInput("id", this.rteModalId());
      this.modalCompRef.setInput("icon", this.rteModalIcon());
      this.modalCompRef.setInput("iconAppearance", this.rteModalIconAppearance());
      this.modalCompRef.setInput("title", this.rteModalTitle());
      this.modalCompRef.setInput("description", this.rteModalDescription());
      this.modalCompRef.setInput("size", this.rteModalSize());
      this.modalCompRef.setInput("ariaDescribedby", this.rteModalAriaDescribedby());
      this.modalCompRef.setInput("primaryButton", this.primaryButton());
      this.modalCompRef.setInput("secondaryButton", this.secondaryButton());
      this.modalCompRef.setInput("customContent", this.customContent());
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          this.modalCompRef?.setInput("isOpen", true);
        });
      });
    }
  }

  private handleClickAway(event: MouseEvent) {
    const elements = [this.hostElement, this.modalElement] as HTMLElement[];
    if (elements.some((element) => !element)) return;
    const shouldIgnore = elements.some((element) => element.contains(event.target as Node));
    if (!shouldIgnore && this.rteModalCloseOnClickOutside()) {
      this.closeModal();
    }
  }

  private closeModal(): void {
    if (this.modalCompRef) {
      this.modalCompRef.setInput("isOpen", false);

      setTimeout(() => this.destroyModal(), 200);
    }
  }

  private destroyModal(): void {
    if (this.modalCompRef) {
      this.modalCompRef.destroy();
      this.modalCompRef = null;
      this.overlayService.destroy();
    }
  }
}
