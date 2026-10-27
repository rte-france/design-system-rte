import { IconButtonItem, Orientation } from '../../../../../core';
import { Position } from '../../../../../core/components/common/common-types';
interface IconButtonGroupItemProps {
    button: IconButtonItem;
    buttonId: string;
    isDisabled?: boolean;
    computedTooltipPosition: Position;
    isCompact?: boolean;
    index: number;
    isLast: boolean;
    orientation: Orientation;
    appearance?: "brand" | "neutral";
    isIconActive: boolean;
    isNextIconActive: boolean;
    dividerAppearance?: "brand" | "neutral" | "inverse";
    onClick: (id: string) => void;
}
declare const IconButtonGroupItem: ({ button, buttonId, isDisabled, computedTooltipPosition, isCompact, index, isLast, orientation, appearance, isIconActive, isNextIconActive, dividerAppearance, onClick, }: IconButtonGroupItemProps) => import("react").JSX.Element;
export default IconButtonGroupItem;
