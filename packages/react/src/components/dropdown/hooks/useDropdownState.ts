import { DropdownManager } from "@design-system-rte/core/components/dropdown/DropdownManager";
import { useState, useEffect, useRef } from "react";

export const useDropdownState = (dropdownId?: string) => {
  const idRef = useRef(dropdownId || DropdownManager.generateId());
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = DropdownManager.subscribe(idRef.current, () => {
      setIsOpen(DropdownManager.isOpen(idRef.current));
    });

    return unsubscribe;
  }, []);

  const open = () => {
    DropdownManager.open(idRef.current);
  };

  const close = () => {
    DropdownManager.close(idRef.current);
  };

  const toggle = () => {
    if (isOpen) close();
    else open();
  };

  return {
    dropdownId: idRef.current,
    isOpen,
    open,
    close,
    toggle,
  };
};
