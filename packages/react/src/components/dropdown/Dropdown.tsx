import { forwardRef } from "react";

import { BaseDropdown, BaseDropdownProps } from "./BaseDropdown";

export const Dropdown = forwardRef<HTMLDivElement, Omit<BaseDropdownProps, "isList">>(({ ...props }, ref) => {
  return <BaseDropdown {...props} ref={ref} />;
});
