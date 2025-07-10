import { CommonModule } from "@angular/common";
import { Component, input, computed, output, ElementRef, viewChild } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import {
  TEXTAREA_ICON_SIZE,
  TEXTAREA_REQUIRED_LABEL,
} from "@design-system-rte/core/components/textarea/textarea.constants";
import type {
  TextareaAssistiveTextAppearance,
  TextareaLabelPosition,
  TextareaRequiredAppearance,
} from "@design-system-rte/core/components/textarea/textarea.interface";

import { IconComponent } from "../icon/icon.component";
import { LinkComponent } from "../link/link.component";

@Component({
  selector: "rte-textarea",
  imports: [CommonModule, IconComponent, LinkComponent],
  standalone: true,
  templateUrl: "./textarea.component.html",
  styleUrl: "./textarea.component.scss",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TextareaComponent,
      multi: true,
    },
  ],
})
export class TextareaComponent {
  readonly id = input<string | undefined>(undefined);
  readonly name = input<string | undefined>(undefined);
  readonly ariaLabelledby = input<string | undefined>(undefined);
  readonly label = input<string | undefined>(undefined);
  readonly labelId = input<string | undefined>(undefined);
  readonly labelPosition = input<TextareaLabelPosition>("top");
  readonly assistiveTextLabel = input<string | undefined>(undefined);
  readonly assistiveTextAppearance = input<TextareaAssistiveTextAppearance>("description");
  readonly assistiveTextLink = input<string | undefined>(undefined);
  readonly required = input<boolean>(false);
  readonly requiredAppearance = input<TextareaRequiredAppearance>("icon");
  readonly resizeable = input<boolean | string>(true);
  readonly maxLength = input<number | undefined>(undefined);
  readonly disabled = input<boolean>(false);
  readonly readOnly = input<boolean>(false);
  readonly value = input<string | undefined>(undefined);
  readonly rows = input<number>(3);
  readonly defaultValue = input<string | undefined>(undefined);

  readonly assistiveTextIconSize = TEXTAREA_ICON_SIZE;
  readonly requiredIndicator = computed(() => {
    return TEXTAREA_REQUIRED_LABEL[this.requiredAppearance()];
  });

  readonly change = output<Event>();
  readonly blur = output<FocusEvent>();

  readonly textareaRef = viewChild<ElementRef<HTMLTextAreaElement>>("textarea");

  readonly isAssistiveTextLinkVisible = computed(
    () => this.assistiveTextAppearance() === "link" && this.assistiveTextLink() !== undefined,
  );

  characterCount = 0;

  onInput(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    this.characterCount = target.value.length;
    this.change.emit(event);
  }

  onBlur(event: FocusEvent) {
    this.textareaRef()?.nativeElement?.scrollTo({ top: 0 });
    this.blur.emit(event);
  }
}
