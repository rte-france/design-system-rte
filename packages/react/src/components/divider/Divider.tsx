import { DividerProps } from "@design-system-rte/core/components/divider/divider.interface";
import { forwardRef } from "react";

import style from "./Divider.module.scss";

const Divider = forwardRef<HTMLDivElement, DividerProps>(
  ({ orientation = "horizontal", thickness = "light", appearance = "default", endPoint = "round", ...props }, ref) => {
    return orientation === "horizontal" ? (
      <hr
        ref={ref as React.Ref<HTMLHRElement>}
        className={style.horizontal}
        data-thickness={thickness}
        data-appearance={appearance}
        data-end-point={endPoint}
        {...props}
      />
    ) : (
      <div
        ref={ref as React.Ref<HTMLDivElement>}
        role="separator"
        className={style.vertical}
        data-thickness={thickness}
        data-appearance={appearance}
        data-end-point={endPoint}
        {...props}
      />
    );
  },
);

export default Divider;
