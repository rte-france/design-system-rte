import { CommonModule } from "@angular/common";
import { Component, input, computed, effect, output, signal, ElementRef, viewChild } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { TEXTAREA_ICON_SIZE } from "@design-system-rte/core/components/textarea/textarea.constants";
import type {
  TextareaAssistiveTextAppearance,
  TextareaLabelPosition,
} from "@design-system-rte/core/components/textarea/textarea.interface";

import { IconComponent } from "../icon/icon.component";
import { BaseValueAccessor } from "../input/base-value-accessor";
import { RequiredIndicatorComponent } from "../input/required-indicator/required-indicator.component";
import { LinkComponent } from "../link/link.component";

@Component({
  selector: "rte-textarea",
  imports: [CommonModule, IconComponent, LinkComponent, RequiredIndicatorComponent],
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
export class TextareaComponent extends BaseValueAccessor<string> {
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
  readonly showLabelRequirement = input<boolean>(false);
  readonly resizeable = input<boolean | string>(true);
  readonly maxLength = input<number | undefined>(undefined);
  readonly disabled = input<boolean>(false);
  readonly readOnly = input<boolean>(false);
  readonly value = input<string | undefined>(undefined);
  readonly rows = input<number>(3);
  readonly defaultValue = input<string | undefined>(undefined);
  readonly showCounter = input<boolean>(false);
  readonly width = input<string | number>("350px");

  readonly computedWidth = computed(() => {
    const width = this.width().toString();
    if (width.includes("px") || width.includes("%") || width.includes("em") || width.includes("rem")) {
      return width;
    }
    return `${this.width()}px`;
  });

  readonly assistiveTextIconSize = TEXTAREA_ICON_SIZE;

  readonly change = output<Event>();
  readonly blur = output<FocusEvent>();

  readonly textareaRef = viewChild<ElementRef<HTMLTextAreaElement>>("textarea");

  readonly internalValue = signal<string>(this.value() ?? this.defaultValue() ?? "");

  readonly isDisabled = computed(() => this.disabled() || this.formDisabled());

  readonly isAssistiveTextLinkVisible = computed(
    () => this.assistiveTextAppearance() === "link" && this.assistiveTextLink() !== undefined,
  );

  characterCount = (this.value() ?? this.defaultValue() ?? "").length;

  readonly isCounterVisible = computed(() => {
    return this.showCounter() && this.maxLength();
  });

  private lastParentValue = this.value();

  constructor() {
    super();
    effect(
      () => {
        const parentValue = this.value();
        if (parentValue !== undefined && parentValue !== this.lastParentValue) {
          this.lastParentValue = parentValue;
          this.internalValue.set(parentValue);
          this.characterCount = parentValue.length;
        }
      },
      { allowSignalWrites: true },
    );
  }

  writeValue(value: string): void {
    const next = value ?? "";
    this.internalValue.set(next);
    this.characterCount = next.length;
  }

  onInput(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    this.internalValue.set(target.value);
    this.characterCount = target.value.length;
    this.onChange(target.value);
    this.change.emit(event);
  }

  onBlur(event: FocusEvent) {
    this.textareaRef()?.nativeElement?.scrollTo({ top: 0 });
    this.onTouched();
    this.blur.emit(event);
  }
}
