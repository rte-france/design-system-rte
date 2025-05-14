import { forwardRef } from "react";

import { TooltipProps as CoreTooltipProps } from "@design-system-rte/core/components/tooltip/tooltip.interface";
import style from "./Tooltip.module.scss";
import { concatClassNames } from "../utils";

interface TooltipProps
    extends CoreTooltipProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
    children: React.ReactNode;
}

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
    (
        {
            children,
            position = "top",
            alignment = "center",
            label,
            arrow = true,
            className = "",
            ...props
        },
        ref,
    ) => {
        return (
            <div
                ref={ref}
                className={concatClassNames(style.tooltip, className)}
                data-position={position}
                data-alignment={alignment}
                data-arrow={arrow}
                {...props}
            >
                {label && <span className={style.tooltipLabel}>{label}</span>}
                {children}
            </div>
        );
    }
);

export default Tooltip;