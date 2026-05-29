import { ReactNode } from "react";

import Tooltip from "../../tooltip/Tooltip";

interface NavTooltipWrapperProps {
  label: string;
  isCollapsed?: boolean;
  children: ReactNode;
}

function NavTooltipWrapper({ label, isCollapsed, children }: NavTooltipWrapperProps): ReactNode {
  if (isCollapsed && label) {
    return (
      <Tooltip
        label={label}
        position="right"
        alignment="center"
        arrow={false}
        shouldFocusTrigger={false}
        triggerStyles={{ outline: "none" }}
        gap={12}
      >
        {children}
      </Tooltip>
    );
  }

  return children;
}

export default NavTooltipWrapper;
