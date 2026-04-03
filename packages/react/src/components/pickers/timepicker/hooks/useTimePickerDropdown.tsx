import { useEffect, useRef, useState } from "react";

const useTimePickerDropdown = (isOpen: boolean) => {
  const [timePickerDrodownElement, setTimePickerDropdownElement] = useState<HTMLDivElement | null>(null);
  const timePickerDropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTimePickerDropdownElement(timePickerDropdownRef.current);
        });
      });
    } else {
      setTimePickerDropdownElement(null);
    }
  }, [isOpen]);

  return { timePickerDrodownElement, timePickerDropdownRef };
};

export default useTimePickerDropdown;
