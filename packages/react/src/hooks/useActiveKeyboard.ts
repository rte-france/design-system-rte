import { KeyboardEvent, useRef, useState } from "react";

export const SPACEBAR_INPUT = "Space";
export const ENTER_INPUT = "Enter";

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
  const interactiveKeysRef = useRef<string[]>(interactiveKeyCodes ?? [SPACEBAR_INPUT, ENTER_INPUT]);

  const onKeyDown = (e: KeyboardEvent<T>) => {
    if (interactiveKeysRef.current?.includes(e.code) && (!id || (e.target as T).id === id)) {
      e.preventDefault();
      setIsActiveKeyboard(true);
    }
  };

  const onKeyUp = (e: KeyboardEvent<T>) => {
    if (interactiveKeysRef.current?.includes(e.code) && (!id || (e.target as T).id === id)) {
      handlerKeyup(e);
      setIsActiveKeyboard(false);
    }
  };

  const onBlur = () => {
    setIsActiveKeyboard(false);
  };

  return { onKeyDown, onKeyUp, onBlur, isActiveKeyboard };
};
