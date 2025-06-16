import { IconButtonToggleProps as CoreIconButtonToggleProps } from "@design-system-rte/core/components/button/icon-button/icon-button.interface";
import { forwardRef } from "react";

import { TogglableIconIdKey } from "../icon/Icon";
import IconButton from "../iconButton/IconButton";

interface IconButtonToggleProps
  extends Omit<CoreIconButtonToggleProps, "icon">,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  name: TogglableIconIdKey;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const IconButtonToggle = forwardRef<HTMLButtonElement, IconButtonToggleProps>(({ selected, ...props }, ref) => {
  return <IconButton ref={ref} appearance={selected ? "filled" : "outlined"} {...props} />;
});

export default IconButtonToggle;
