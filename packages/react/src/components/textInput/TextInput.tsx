import { TextInputProps as CoreTextInputProps } from "@design-system-rte/core/components/text-input/text-input.interface";
import { forwardRef, InputHTMLAttributes } from "react";

import BaseTextInput from "./baseTextInput/BaseTextInput";

interface TextInputProps
  extends
    CoreTextInputProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "onChange" | "value" | "defaultValue"> {
  onChange?: (value: string) => void;
  onEnterKeyDown?: (value: string) => void;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      id,
      onEnterKeyDown,
      width = "300px",
      placeholder,
      compactSpacing = false,
      disabled,
      readOnly,
      ...props
    }: TextInputProps,
    ref,
  ) => {
    const shouldDisplayPlaceholder = !(disabled || readOnly);

    const computedPlaceholder = shouldDisplayPlaceholder ? placeholder : undefined;

    return (
      <BaseTextInput
        id={id}
        {...props}
        disabled={disabled}
        readOnly={readOnly}
        ref={ref}
        placeholder={computedPlaceholder}
        onEnterKeyDown={onEnterKeyDown}
        width={width}
        compactSpacing={compactSpacing}
      />
    );
  },
);

export default TextInput;
