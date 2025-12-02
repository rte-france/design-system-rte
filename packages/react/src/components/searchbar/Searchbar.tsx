import {
  APPEARANCE_CONFIG,
  DROPDOWN_OFFSET,
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
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";

import { Dropdown } from "../dropdown/Dropdown";
import { DropdownItem } from "../dropdown/dropdownItem/DropdownItem";
import IconButton from "../iconButton/IconButton";
import TextInput from "../textInput/TextInput";

import styles from "./Searchbar.module.scss";

export interface SearchbarRef {
  open: () => void;
  close: () => void;
}

interface SearchbarProps
  extends CoreSearchBarProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "onChange" | "value" | "defaultValue" | "placeholder"> {
  onSearch?: (input: string | undefined) => void;
  onChange?: (input: string | undefined) => void;
  onOptionSelect?: (option: string) => void;
  placeholder?: string;
  onOpenChange?: (isOpen: boolean) => void;
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

const Searchbar = forwardRef<SearchbarRef, SearchbarProps>(
  (
    {
      onSearch,
      onChange,
      onOptionSelect,
      id,
      placeholder = "Rechercher",
      disabled = false,
      showResetButton = true,
      appearance = "primary",
      compactSpacing,
      value,
      assistiveText,
      style: customInputStyle,
      options = [],
      onOpenChange,
      ...props
    }: SearchbarProps,
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [textInputWidth, setTextInputWidth] = useState<number | undefined>(undefined);
    const textInputRef = useRef<HTMLInputElement | null>(null);
    const dropdownId = `${id ?? "searchbar"}-dropdown`;
    const appearanceConfig = APPEARANCE_CONFIG[appearance];

    const setDropdownOpen = useCallback(
      (open: boolean) => {
        setIsDropdownOpen(open);
        onOpenChange?.(open);
      },
      [onOpenChange],
    );

    useImperativeHandle(ref, () => ({
      open: () => {
        setDropdownOpen(true);
      },
      close: () => {
        setDropdownOpen(false);
      },
    }));

    useEffect(() => {
      if (options.length > 0) {
        setDropdownOpen(true);
      } else {
        setDropdownOpen(false);
      }
    }, [options.length, setDropdownOpen]);

    useEffect(() => {
      if (isDropdownOpen && textInputRef.current) {
        const updateWidth = () => {
          if (textInputRef.current) {
            const width = textInputRef.current.getBoundingClientRect().width;
            setTextInputWidth(width);
          }
        };
        updateWidth();
        const timeoutId = setTimeout(updateWidth, 0);
        return () => clearTimeout(timeoutId);
      } else {
        setTextInputWidth(undefined);
      }
    }, [isDropdownOpen, compactSpacing]);

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
      onSearch?.("");
    }, [onChange, onSearch]);

    const handleFocus = useCallback(() => {
      if (!disabled) {
        setIsFocused(true);
      }
    }, [disabled]);

    const handleBlur = useCallback(() => {
      setIsFocused(false);
    }, []);

    const handleDropdownClose = useCallback(() => {
      setDropdownOpen(false);
    }, [setDropdownOpen]);

    const handleDropdownSelect = useCallback(
      (option: string) => {
        setDropdownOpen(false);
        onOptionSelect?.(option);
      },
      [setDropdownOpen, onOptionSelect],
    );

    const textInputRefCallback = useCallback((node: HTMLInputElement | null) => {
      textInputRef.current = node;
    }, []);

    const textInputProps = useMemo(
      () => ({
        ref: textInputRefCallback,
        disabled,
        value,
        onChange: handleChange,
        onKeyUp: onSearch ? handleEnter : undefined,
        onFocus: handleFocus,
        onBlur: handleBlur,
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
        textInputRefCallback,
        disabled,
        value,
        handleChange,
        onSearch,
        handleEnter,
        handleFocus,
        handleBlur,
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
        <div className={styles.searchbarWrapper}>
          <div className={`${styles.textInputWrapper} ${isFocused ? styles.focused : ""}`} data-disabled={disabled}>
            <Dropdown
              dropdownId={dropdownId}
              isOpen={isDropdownOpen}
              onClose={handleDropdownClose}
              autofocus={false}
              offset={DROPDOWN_OFFSET}
              style={textInputWidth !== undefined ? { width: `${textInputWidth}px` } : undefined}
              trigger={
                <div className={styles.dropdownTrigger}>
                  <TextInput id={id ?? ""} {...textInputProps} style={textInputStyles} />
                  {appearanceConfig.showSearchButton && (
                    <IconButton
                      name="search"
                      size="m"
                      variant="primary"
                      appearance="filled"
                      onClick={handleSearch}
                      disabled={disabled}
                      aria-label="Search"
                      className={styles.searchButton}
                      compactSpacing={compactSpacing}
                      style={searchButtonStyles}
                    />
                  )}
                </div>
              }
            >
              {options.map((option) => (
                <DropdownItem key={option} label={option} onClick={() => handleDropdownSelect(option)} />
              ))}
            </Dropdown>
          </div>
        </div>
      </div>
    );
  },
);

export default Searchbar;
