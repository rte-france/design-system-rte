import { waitForNextFrame } from "@design-system-rte/core";
import { useEffect, useRef, useState } from "react";

const useTimePickerDropdown = (isOpen: boolean) => {
  const [timePickerDropdownElement, setTimePickerDropdownElement] = useState<HTMLDivElement | null>(null);
  const timePickerDropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      waitForNextFrame(() => {
        setTimePickerDropdownElement(timePickerDropdownRef.current);
      });
    } else {
      setTimePickerDropdownElement(null);
    }
  }, [isOpen]);

  return { timePickerDropdownElement, timePickerDropdownRef };
};

export default useTimePickerDropdown;
