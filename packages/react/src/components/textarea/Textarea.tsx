import type { TextareaProps as CoreTextareaProps } from "@design-system-rte/core/components/textarea/textarea.interface";
import { ChangeEvent, FocusEvent, forwardRef, MutableRefObject, TextareaHTMLAttributes, useRef, useState } from "react";

import AssistiveText from "../assistivetext/AssistiveText";
import RequiredIndicator from "../requiredindicator/RequiredIndicator";
import { concatClassNames } from "../utils";

import style from "./Textarea.module.scss";

interface TextareaProps
  extends
    CoreTextareaProps,
    Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange" | "value" | "defaultValue" | "placeholder"> {
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className = "",
      id,
      name,
      required = false,
      onChange,
      onBlur,
      label,
      labelId,
      labelPosition = "top",
      assistiveTextLabel,
      assistiveTextAppearance = "description",
      ["aria-labelledby"]: ariaLabelledby,
      assistiveTextLink,
      showLabelRequirement = false,
      resizeable = "true",
      maxLength,
      defaultValue,
      showCounter,
      value,
      ...props
    },
    ref,
  ) => {
    const [characterCount, setCharacterCount] = useState(value?.length || defaultValue?.length || 0);

    const textareaRef: MutableRefObject<HTMLTextAreaElement | null> = useRef<HTMLTextAreaElement>(null);

    const displayCounter = showCounter && maxLength;

    const handleBlur = (event: FocusEvent<HTMLTextAreaElement, Element>) => {
      if (onBlur) {
        onBlur(event);
      }
      textareaRef.current?.scrollTo({ top: 0 });
    };

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
      if (onChange) {
        onChange(event);
      }
      if (maxLength) {
        setCharacterCount(event.target.value.length);
      }
    };

    return (
      <div className={style.container} data-label-position={labelPosition}>
        {label && labelPosition === "side" && (
          <label id={labelId} className={style.label} htmlFor={id} data-label-position={labelPosition}>
            {label}
            <RequiredIndicator required={required} showLabelRequirement={showLabelRequirement} />
          </label>
        )}
        <div className={style["top-position-container"]} data-label-position={labelPosition}>
          <div className={style["header-container"]} data-label-position={labelPosition}>
            {label && labelPosition === "top" && (
              <label id={labelId} className={style.label} htmlFor={id} data-label-position={labelPosition}>
                {label}
                <RequiredIndicator required={required} showLabelRequirement={showLabelRequirement} />
              </label>
            )}
            {displayCounter && (
              <span className={style["character-counter"]}>
                {characterCount}/{maxLength}
              </span>
            )}
          </div>
          <div className={style["textarea-container"]} data-label-position={labelPosition}>
            <textarea
              ref={(node) => {
                textareaRef.current = node;
                if (typeof ref === "function") ref(node);
                else if (ref) ref.current = node;
              }}
              id={id}
              name={name}
              className={concatClassNames(style.textarea, className)}
              data-resizeable={resizeable}
              data-assistive-text-appearance={assistiveTextAppearance}
              onChange={handleChange}
              aria-labelledby={labelId || ariaLabelledby}
              maxLength={maxLength}
              onBlur={handleBlur}
              defaultValue={defaultValue}
              value={value}
              {...props}
            />
            {assistiveTextLabel && (
              <AssistiveText
                label={assistiveTextLabel}
                appearance={assistiveTextAppearance}
                showIcon={true}
                href={assistiveTextLink}
              />
            )}
          </div>
        </div>
      </div>
    );
  },
);

export default Textarea;
