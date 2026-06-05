import { TextInputProps as CoreTextInputProps } from "@design-system-rte/core/components/text-input/text-input.interface";
import { forwardRef, InputHTMLAttributes } from "react";

import BaseTextInput from "./baseTextInput/BaseTextInput";

interface TextInputProps
  extends
    CoreTextInputProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "onChange" | "value" | "defaultValue" | "placeholder"> {
  onChange?: (value: string) => void;
  onEnterKeyDown?: (value: string) => void;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ id, onEnterKeyDown, ...props }: TextInputProps, ref) => {
    return <BaseTextInput id={id} {...props} ref={ref} placeholder={undefined} onEnterKeyDown={onEnterKeyDown} />;
  },
);

export default TextInput;
