import { IconButtonGroupProps as CoreIconButtonGroupProps } from '../../../../core';
type IconButtonGroupProps = CoreIconButtonGroupProps & Omit<React.HTMLAttributes<HTMLDivElement>, "onChange" | "className">;
declare const IconButtonGroup: import('../../../../../node_modules/react').ForwardRefExoticComponent<IconButtonGroupProps & import('../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export default IconButtonGroup;
