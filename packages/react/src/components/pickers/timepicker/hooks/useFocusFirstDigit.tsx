import { useEffect, useRef } from "react";

const useFocusFirstDigit = (isOpen: boolean) => {
  const firstDigitRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          firstDigitRef.current?.focus();
        });
      });
    }
  }, [isOpen]);

  return firstDigitRef;
};

export default useFocusFirstDigit;
