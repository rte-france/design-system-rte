import { CommonModule } from "@angular/common";
import {
  Component,
  ElementRef,
  input,
  TemplateRef,
  OnDestroy,
  viewChild,
  AfterViewInit,
  output,
  inject,
} from "@angular/core";

import { FocusTrapService } from "../../services/focus-trap.service";
import { ButtonComponent } from "../button/button.component";
import { DividerComponent } from "../divider/divider.component";
import { IconComponent } from "../icon/icon.component";
import { IconButtonComponent } from "../icon-button/icon-button.component";

@Component({
  selector: "rte-modal",
  imports: [CommonModule, IconButtonComponent, IconComponent, DividerComponent],
  standalone: true,
  templateUrl: "./modal.component.html",
  styleUrl: "./modal.component.scss",
})
export class ModalComponent implements AfterViewInit, OnDestroy {
  readonly id = input<string | undefined>();
  readonly icon = input<string | undefined>();
  readonly title = input<string>();
  readonly description = input<string>();
  readonly secondaryButtonLabel = input<string>();
  readonly isOpen = input<boolean>(false);
  readonly size = input<"xs" | "s" | "m" | "l" | "xl">("m");
  readonly ariaDescribedby = input<string | undefined>(undefined);

  readonly primaryButton = input<TemplateRef<ButtonComponent> | null>(null);
  readonly secondaryButton = input<TemplateRef<ButtonComponent> | null>(null);
  readonly customContent = input<TemplateRef<unknown> | null>(null);

  private readonly elementRef = viewChild<ElementRef<HTMLDivElement>>("modal");

  private focusTrap = inject(FocusTrapService);

  constructor() {}

  readonly close = output<void>();

  ngAfterViewInit() {
    const native = this.elementRef()?.nativeElement;
    if (native) {
      this.focusTrap.activate(native);
    }
  }

  ngOnDestroy() {
    this.focusTrap.deactivate();
  }

  onClose() {
    this.close.emit();
  }
}
