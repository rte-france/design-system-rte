import {
  ARROW_DOWN_KEY,
  ARROW_UP_KEY,
  ENTER_KEY,
  ESCAPE_KEY,
  SPACE_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard.constants";
import { KeyboardEvent, useCallback } from "react";

import { useActiveKeyboard } from "../../../hooks/useActiveKeyboard";

interface UseNavKeyboardOptions {
  onEnterOrSpace?: () => void;
  onEscape?: () => void;
  includeArrowKeys?: boolean;
  includeEscape?: boolean;
}

function useNavKeyboard<T extends HTMLElement = HTMLElement>({
  onEnterOrSpace,
  onEscape,
  includeArrowKeys = false,
  includeEscape = false,
}: UseNavKeyboardOptions = {}) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent<T>) => {
      if ([SPACE_KEY, ENTER_KEY].includes(e.key)) {
        e.preventDefault();
        onEnterOrSpace?.();
      }
      if (e.key === ESCAPE_KEY && includeEscape) {
        e.preventDefault();
        onEscape?.();
      }
    },
    [onEnterOrSpace, onEscape, includeEscape],
  );

  const interactiveKeyCodes = [
    SPACE_KEY,
    ENTER_KEY,
    ...(includeEscape ? [ESCAPE_KEY] : []),
    ...(includeArrowKeys ? [ARROW_DOWN_KEY, ARROW_UP_KEY] : []),
  ];

  const { onKeyDown } = useActiveKeyboard<T>({ onKeyDown: handleKeyDown }, { interactiveKeyCodes });

  return { onKeyDown };
}

export default useNavKeyboard;
