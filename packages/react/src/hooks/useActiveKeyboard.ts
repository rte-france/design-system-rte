import { ENTER_KEY, SPACE_KEY } from "@design-system-rte/core/constants/keyboard.constants";
import { KeyboardEvent, useRef, useState } from "react";

type OptionsActiveKeyboard = {
  id?: string;
  interactiveKeyCodes?: string[];
};

const noop = () => {};

export const useActiveKeyboard = <T extends HTMLElement>(
  handlerKeyup: (e: KeyboardEvent<T>) => void = noop,
  options: OptionsActiveKeyboard = {},
) => {
  const { id, interactiveKeyCodes } = options;
  const [isActiveKeyboard, setIsActiveKeyboard] = useState<boolean>(false);
  const interactiveKeysRef = useRef<string[]>(interactiveKeyCodes ?? [SPACE_KEY, ENTER_KEY]);

  const onKeyDown = (e: KeyboardEvent<T>) => {
    if (interactiveKeysRef.current?.includes(e.key) && (!id || (e.target as T).id === id)) {
      e.preventDefault();
      setIsActiveKeyboard(true);
    }
  };

  const onKeyUp = (e: KeyboardEvent<T>) => {
    if (interactiveKeysRef.current?.includes(e.key) && (!id || (e.target as T).id === id)) {
      handlerKeyup(e);
      setIsActiveKeyboard(false);
    }
  };

  const onBlur = () => {
    setIsActiveKeyboard(false);
  };

  return { onKeyDown, onKeyUp, onBlur, isActiveKeyboard };
};
