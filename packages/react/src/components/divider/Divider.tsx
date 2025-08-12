import { DividerProps } from "@design-system-rte/core/components/divider/divider.interface";
import { forwardRef } from "react";

import style from "./Divider.module.scss";

const Divider = forwardRef<HTMLDivElement, DividerProps>(
  ({ orientation = "horizontal", thickness = "light", color = "default", ...props }, ref) => {
    return orientation === "horizontal" ? (
      <hr
        ref={ref as React.Ref<HTMLHRElement>}
        className={style.horizontal}
        data-thickness={thickness}
        data-color={color}
        {...props}
      />
    ) : (
      <div
        ref={ref as React.Ref<HTMLDivElement>}
        role="separator"
        className={style.vertical}
        data-thickness={thickness}
        data-color={color}
        {...props}
      />
    );
  },
);

export default Divider;
