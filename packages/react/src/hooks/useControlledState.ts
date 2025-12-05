import { useState, useCallback } from "react";

export function useControlledState<T>(controlledValue: T | undefined, defaultValue: T) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;

  const setValue = useCallback(
    (newValue: T) => {
      if (!isControlled) {
        setInternalValue(newValue);
      }
    },
    [isControlled],
  );

  return [value, setValue, isControlled] as const;
}
