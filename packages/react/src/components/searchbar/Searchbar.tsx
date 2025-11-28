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
import { CSSProperties, InputHTMLAttributes, KeyboardEvent, forwardRef, useCallback, useMemo } from "react";

import IconButton from "../iconButton/IconButton";
import TextInput from "../textInput/TextInput";

import styles from "./Searchbar.module.scss";

interface SearchbarProps
  extends CoreSearchBarProps,
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

    const handleChange = useCallback(
      (newValue: string) => {
        onChange?.(newValue);
      },
      [onChange],
    );

    const handleSearch = useCallback(() => {
      onSearch?.(value);
    }, [onSearch, value]);

    const handleEnter = useCallback(
      (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === ENTER_KEY) {
          handleSearch();
        }
      },
      [handleSearch],
    );

    const handleClear = useCallback(() => {
      onChange?.("");
      onClear?.();
    }, [onChange, onClear]);

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
        placeholder: label,
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
        label,
        appearanceConfig.showLeftIcon,
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
        <div className={styles.textInputWrapper} data-disabled={disabled}>
          <TextInput id={id ?? ""} {...textInputProps} style={textInputStyles} ref={ref} />
          {appearanceConfig.showSearchButton && (
            <IconButton
              name="search"
              size="m"
              variant="primary"
              appearance="filled"
              onClick={handleSearch}
              disabled={disabled}
              aria-label={label}
              className={styles.searchButton}
              compactSpacing={compactSpacing}
              style={searchButtonStyles}
            />
          )}
        </div>
      </div>
    );
  },
);

export default Searchbar;
