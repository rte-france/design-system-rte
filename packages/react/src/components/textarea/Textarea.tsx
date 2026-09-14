import type { TextareaProps as CoreTextareaProps } from "@design-system-rte/core/components/textarea/textarea.interface";
import { ChangeEvent, FocusEvent, forwardRef, MutableRefObject, TextareaHTMLAttributes, useRef, useState } from "react";

import AssistiveText from "../assistivetext/AssistiveText";
import Label from "../label/Label";
import { concatClassNames, deleteFromProps } from "../utils";

import styles from "./Textarea.module.scss";

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
      errorMessage,
      assistiveTextAppearance = "description",
      ["aria-labelledby"]: ariaLabelledby,
      assistiveTextLink,
      showLabelRequirement = false,
      resizeable = "true",
      maxLength,
      defaultValue,
      showCounter,
      value,
      width = "350px",
      disabled = false,
      readOnly = false,
      ...props
    },
    ref,
  ) => {
    const [characterCount, setCharacterCount] = useState(value?.length || defaultValue?.length || 0);

    const textareaRef: MutableRefObject<HTMLTextAreaElement | null> = useRef<HTMLTextAreaElement>(null);

    const displayCounter = showCounter && maxLength;
    const assistiveTextId = `${id}-assistive-text`;
    const effectiveAssistiveTextLabel = props["aria-invalid"] ? errorMessage || assistiveTextLabel : assistiveTextLabel;
    const describedBy = effectiveAssistiveTextLabel ? assistiveTextId : undefined;

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
      <div style={{ width }}>
        <div className={styles["container"]} data-label-position={labelPosition}>
          {label && labelPosition === "side" && (
            <Label
              id={labelId}
              htmlFor={id}
              required={required}
              label={label}
              showLabelRequirement={showLabelRequirement}
            />
          )}
          <div className={styles["top-position-container"]} data-label-position={labelPosition}>
            <div className={styles["header-container"]} data-label-position={labelPosition}>
              {label && labelPosition === "top" && (
                <Label
                  id={labelId}
                  htmlFor={id}
                  required={required}
                  label={label}
                  showLabelRequirement={showLabelRequirement}
                />
              )}
              {displayCounter && (
                <span className={styles["character-counter"]}>
                  {characterCount}/{maxLength}
                </span>
              )}
            </div>
            <div className={styles["textarea-container"]} data-label-position={labelPosition}>
              <textarea
                ref={(node) => {
                  textareaRef.current = node;
                  if (typeof ref === "function") ref(node);
                  else if (ref) ref.current = node;
                }}
                id={id}
                name={name}
                className={concatClassNames(styles["textarea"], className)}
                data-resizeable={resizeable}
                data-assistive-text-appearance={assistiveTextAppearance}
                onChange={handleChange}
                aria-labelledby={labelId || ariaLabelledby}
                aria-describedby={describedBy}
                maxLength={maxLength}
                onBlur={handleBlur}
                defaultValue={defaultValue}
                value={value}
                disabled={disabled}
                readOnly={readOnly}
                {...deleteFromProps(props, "placeholder")}
              />
              {effectiveAssistiveTextLabel && (
                <AssistiveText
                  id={assistiveTextId}
                  label={effectiveAssistiveTextLabel}
                  appearance={props["aria-invalid"] ? "error" : assistiveTextAppearance}
                  showIcon={true}
                  href={assistiveTextLink}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  },
);

export default Textarea;
