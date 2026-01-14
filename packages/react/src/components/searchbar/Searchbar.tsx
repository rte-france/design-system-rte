import {
  APPEARANCE_CONFIG,
  SEARCHBAR_BORDER_RADIUS,
  SEARCHBAR_BUTTON_HEIGHT_COMPACT,
  SEARCHBAR_BUTTON_WIDTH,
  SEARCHBAR_PADDING_LEFT,
} from "@design-system-rte/core/components/searchbar/searchbar.constants";
import {
  SearchBarProps as CoreSearchBarProps,
  SearchBarAppearance,
} from "@design-system-rte/core/components/searchbar/searchbar.interface";
import { ENTER_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";
import {
  CSSProperties,
  InputHTMLAttributes,
  KeyboardEvent,
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import IconButton from "../iconButton/IconButton";
import BaseTextInput from "../textInput/baseTextuInput/BaseTextInput";

import styles from "./Searchbar.module.scss";

interface SearchbarProps
  extends
    CoreSearchBarProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "onChange" | "value" | "defaultValue" | "placeholder"> {
  onSearch?: (input: string | undefined) => void;
  onChange?: (input: string | undefined) => void;
  onClear?: () => void;
}

function getTextInputStyles(appearance: SearchBarAppearance, hasLeftIcon: boolean): CSSProperties {
  const baseStyles: CSSProperties = {};

  if (appearance === "primary") {
    baseStyles.borderRight = "none";
    baseStyles.borderRadius = `${SEARCHBAR_BORDER_RADIUS} 0 0 ${SEARCHBAR_BORDER_RADIUS}`;
    if (!hasLeftIcon) {
      baseStyles.paddingLeft = SEARCHBAR_PADDING_LEFT;
    }
  } else if (appearance === "secondary") {
    baseStyles.borderRadius = SEARCHBAR_BORDER_RADIUS;
  }

  return baseStyles;
}

function getSearchButtonStyles(hasCompactSpacing?: boolean): CSSProperties {
  return {
    width: SEARCHBAR_BUTTON_WIDTH,
    borderRadius: `0 ${SEARCHBAR_BORDER_RADIUS} ${SEARCHBAR_BORDER_RADIUS} 0`,
    height: hasCompactSpacing ? SEARCHBAR_BUTTON_HEIGHT_COMPACT : undefined,
  };
}

const Searchbar = forwardRef<HTMLInputElement, SearchbarProps>(
  (
    {
      onSearch,
      onChange,
      onClear,
      id,
      label = "Rechercher",
      disabled = false,
      showResetButton = true,
      appearance = "primary",
      compactSpacing,
      value,
      assistiveText,
      style: customInputStyle,
      ...props
    }: SearchbarProps,
    ref,
  ) => {
    const appearanceConfig = APPEARANCE_CONFIG[appearance];

    const [hasFocusWithin, setHasFocusWithin] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const handleFocusIn = () => {
        setHasFocusWithin(true);
      };

      const handleFocusOut = (event: FocusEvent) => {
        const next = event.relatedTarget as Node | null;
        if (next && wrapper.contains(next)) {
          return;
        }
        setHasFocusWithin(false);
      };

      wrapper.addEventListener("focusin", handleFocusIn);
      wrapper.addEventListener("focusout", handleFocusOut);

      return () => {
        wrapper.removeEventListener("focusin", handleFocusIn);
        wrapper.removeEventListener("focusout", handleFocusOut);
      };
    }, []);

    const handleChange = useCallback(
      (newValue: string) => {
        onChange?.(newValue);
      },
      [onChange],
    );

    const handleClick = useCallback(() => {
      onSearch?.(value);
    }, [onSearch, value]);

    const handleEnter = useCallback(
      (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === ENTER_KEY) {
          onSearch?.(value);
        }
      },
      [onSearch, value],
    );

    const handleClear = useCallback(() => {
      onChange?.("");
      onClear?.();
    }, [onChange, onClear]);

    const placeholder = useMemo(() => (disabled ? "Recherche indisponible" : label), [disabled, label]);

    const textInputProps = useMemo(
      () => ({
        disabled,
        value,
        onChange: handleChange,
        onKeyUp: onSearch ? handleEnter : undefined,
        showRightIcon: showResetButton,
        rightIconAction: "clean" as const,
        onRightIconClick: handleClear,
        assistiveTextLabel: assistiveText,
        compactSpacing,
        placeholder,
        leftIcon: appearanceConfig.showLeftIcon ? "search" : undefined,
        ...props,
      }),
      [
        disabled,
        value,
        handleChange,
        onSearch,
        handleEnter,
        showResetButton,
        handleClear,
        assistiveText,
        compactSpacing,
        placeholder,
        appearanceConfig.showLeftIcon,
        props,
      ],
    );

    const textInputStyles = useMemo(
      () => ({
        ...getTextInputStyles(appearance, appearanceConfig.showLeftIcon),
        ...(customInputStyle ?? {}),
      }),
      [appearance, appearanceConfig.showLeftIcon, customInputStyle],
    );

    const searchButtonStyles = useMemo(() => getSearchButtonStyles(compactSpacing), [compactSpacing]);

    return (
      <div className={styles.searchbarContainer} role="search" data-appearance={appearance}>
        <div ref={wrapperRef} className={styles.textInputWrapper} data-disabled={disabled}>
          <BaseTextInput
            id={id ?? ""}
            {...textInputProps}
            style={textInputStyles}
            highlighted={hasFocusWithin}
            ref={ref}
            rightSlot={
              appearanceConfig.showSearchButton && (
                <IconButton
                  name="search"
                  size="m"
                  variant="primary"
                  appearance="filled"
                  onClick={handleClick}
                  disabled={disabled}
                  aria-label={label}
                  className={styles.searchButton}
                  compactSpacing={compactSpacing}
                  style={searchButtonStyles}
                />
              )
            }
          />
        </div>
      </div>
    );
  },
);

export default Searchbar;
