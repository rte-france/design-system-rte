import { TabItemProps as CoreTabItemProps } from '../../../../../core/components/tab/tab.interface';
import { HTMLAttributes, MouseEvent, KeyboardEvent } from '../../../../../../node_modules/react';
interface TabItemProps extends CoreTabItemProps, Omit<HTMLAttributes<HTMLButtonElement>, "id" | "onClick"> {
    onClick: (event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => void;
}
declare const TabItem: import('../../../../../../node_modules/react').ForwardRefExoticComponent<TabItemProps & import('../../../../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
export default TabItem;
