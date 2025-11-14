import { ReactNode } from "react";

import Tooltip from "../../tooltip/Tooltip";

interface NavTooltipWrapperProps {
  label: string;
  collapsed?: boolean;
  children: ReactNode;
}

function NavTooltipWrapper({ label, collapsed, children }: NavTooltipWrapperProps): ReactNode {
  if (collapsed && label) {
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
