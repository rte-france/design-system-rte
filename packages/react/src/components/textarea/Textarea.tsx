import {
  TEXTAREA_ICON_SIZE,
  TEXTAREA_REQUIRED_LABEL,
} from "@design-system-rte/core/components/textarea/textarea.constants";
import type { TextareaProps as CoreTextareaProps } from "@design-system-rte/core/components/textarea/textarea.interface";
import { ChangeEvent, forwardRef, TextareaHTMLAttributes, useState } from "react";

import Icon from "../icon/Icon";
import Link from "../link/Link";
import { concatClassNames } from "../utils";

import style from "./Textarea.module.scss";

interface TextareaProps
  extends CoreTextareaProps,
    Omit<
      TextareaHTMLAttributes<HTMLTextAreaElement>,
      "onChange" | "value" | "defaultValue" | "onChange" | "placeholder"
    > {
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
      label,
      labelId,
      labelPosition = "top",
      assistiveTextLabel,
      assistiveTextAppearance = "description",
      ["aria-labelledby"]: ariaLabelledby,
      assistiveTextLink,
      requiredAppearance = "icon",
      resizeable = "true",
      maxLength,
      value,
      ...props
    },
    ref,
  ) => {
    const [characterCount, setCharacterCount] = useState(value?.length || 0);

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
      if (onChange) {
        onChange(event);
      }
      if (maxLength) {
        setCharacterCount(event.target.value.length);
      }
    };

    const requiredIndicator = TEXTAREA_REQUIRED_LABEL[requiredAppearance];

    return (
      <div className={style.container} data-label-position={labelPosition}>
        <div className={style["header-container"]} data-label-position={labelPosition}>
          {label && (
            <label id={labelId} className={style.label} htmlFor={id}>
              {label}
              {required && (
                <span
                  className={style["required-indicator"]}
                  data-required-appearance={requiredAppearance}
                  aria-hidden="true"
                >
                  {requiredIndicator}
                </span>
              )}
            </label>
          )}
          {maxLength && (
            <span className={style["character-counter"]}>
              {characterCount}/{maxLength}
            </span>
          )}
        </div>
        <div className={style["textarea-container"]} data-label-position={labelPosition}>
          <textarea
            ref={ref}
            id={id}
            name={name}
            className={concatClassNames(style.textarea, className)}
            data-resizeable={resizeable}
            data-assistive-text-appearance={assistiveTextAppearance}
            onChange={handleChange}
            aria-labelledby={labelId || ariaLabelledby}
            maxLength={maxLength}
            {...props}
          />
          {assistiveTextLabel && (
            <>
              {assistiveTextAppearance === "link" ? (
                <Link
                  label={assistiveTextLabel}
                  href={assistiveTextLink}
                  externalLink
                  className={style["assistive-text-link"]}
                ></Link>
              ) : (
                <div className={style["assistive-text"]} data-assistive-text-appearance={assistiveTextAppearance}>
                  {assistiveTextAppearance === "error" ? (
                    <Icon name="error" size={TEXTAREA_ICON_SIZE} />
                  ) : assistiveTextAppearance === "success" ? (
                    <Icon name={"check-circle"} size={TEXTAREA_ICON_SIZE} />
                  ) : null}

                  <span>{assistiveTextLabel}</span>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    );
  },
);

export default Textarea;
