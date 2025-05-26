import React, { ForwardedRef } from "react";
import { SplitButtonProps as CoreSplitButtonProps } from "@design-system-rte/core/components/split-button/split-button.interface";
import Icon from "../icon/Icon";
import { concatClassNames } from "../utils";
import style from "./splitButton.module.scss";

interface SplitButtonProps
    extends CoreSplitButtonProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'children'> {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    children?: React.ReactNode;
}

// const SplitButton = (
//     {
//         appearance = "primary",
//         size = "s",
//         label = "",
//         compactSpacing = false,
//         selected = false,
//         position = "bottom-start",
//         className,
//         icon,
//         onClick,
//         children,
//         ...props
//     }: SplitButtonProps,
//     ref: ForwardedRef<HTMLButtonElement>
// ) => {
//     return (
//         <div
//             className={concatClassNames(style.splitButtonContainer, className)}
//             data-size={size}
//             data-compact-spacing={compactSpacing}
//         >
//             <button
//                 type="button"
//                 className={style.splitButtonLeft}
//                 data-appearance={appearance}
//                 data-size={size}
//                 onClick={onClick}
//                 {...props}
//             >
//                 {icon && <Icon name={icon} />}
//                 <p
//                     data-size={size}
//                     className={style.splitButtonLabel}
//                 >
//                     {label}
//                 </p>

//             </button>
//             <div
//                 className={style.splitButtonRightContainer}>
//                 <button
//                     type="button"
//                     className={style.splitButtonRight}
//                     data-appearance={appearance}
//                     data-size={size}
//                     data-selected={selected}
//                     onClick={onClick}
//                     {...props}
//                 >
//                     <Icon name="fleche en bas" />
//                 </button>
//                 <div
//                     className={style.splitButtonDropdown}
//                     data-position={position}
//                 >
//                     {children}
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default SplitButton;