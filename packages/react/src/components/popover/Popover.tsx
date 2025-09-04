import { PopoverProps as CorePopoverProps } from "@design-system-rte/core/components/popover/popover.interface";
// import { getAutoPlacement, getCoordinates } from "@design-system-rte/core/components/utils/auto-placement";
// import { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import { forwardRef } from "react";
// import useAnimatedMount from "../../hooks/useAnimatedMount";
// import { Overlay } from "../overlay/Overlay";
import { concatClassNames } from "../utils";

import style from "./Popover.module.scss"

interface PopoverProps extends CorePopoverProps, Omit<React.HTMLAttributes<HTMLDivElement>,"children">{
    children:React.ReactNode;
    triggerStyles?: React.CSSProperties;
}

const Popover = forwardRef<HTMLDivElement,PopoverProps>(
    (
        {children, position="auto", alignment="start", content, arrow=true, title, showTitle=false, button2=false},
        //ref,
    ) => {
        return (
            <div
            className={concatClassNames(style.popover)} data-position={position} data-alignement={alignment} data-showTitle={showTitle} data-arrow={arrow} data-button2={button2}>
                {title}
                {content}
                {children}
            </div>
        )
    }
)
export default Popover 