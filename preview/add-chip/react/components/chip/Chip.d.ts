import { ChipProps as CoreChipProps } from '../../../../core/components/chip/chip.interface';
import { default as React } from '../../../../../node_modules/react';
interface ChipProps extends Omit<CoreChipProps, "onClick" | "onClose">, Omit<React.HTMLAttributes<HTMLSpanElement>, "id"> {
    onClick?: (event: React.MouseEvent<HTMLSpanElement> | React.KeyboardEvent<HTMLSpanElement>) => void;
    onClose?: (event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => void;
}
export declare const Chip: React.ForwardRefExoticComponent<ChipProps & React.RefAttributes<HTMLSpanElement>>;
export default Chip;
