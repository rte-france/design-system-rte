import { IconButtonToggleProps as CoreIconButtonToggleProps } from "@design-system-rte/core/components/button/icon-button/icon-button.interface";
import { forwardRef, useState } from "react";

import { TogglableIconIdKey } from "../icon/Icon";
import IconButton from "../iconButton/IconButton";

interface IconButtonToggleProps
  extends Omit<CoreIconButtonToggleProps, "icon">, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  name: TogglableIconIdKey;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  defaultSelected?: boolean;
}

const IconButtonToggle = forwardRef<HTMLButtonElement, IconButtonToggleProps>(
  ({ selected, onClick, defaultSelected, ...props }, ref) => {
    const isControlled = selected !== undefined;
    const [internalSelected, setInternalSelected] = useState(defaultSelected ?? false);
    const isSelected = isControlled ? selected : internalSelected;

    const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (!isControlled) {
        setInternalSelected(!isSelected);
      }
      if (onClick) {
        onClick(e);
      }
    };
    return <IconButton ref={ref} appearance={isSelected ? "filled" : "outlined"} onClick={handleOnClick} {...props} />;
  },
);

export default IconButtonToggle;
