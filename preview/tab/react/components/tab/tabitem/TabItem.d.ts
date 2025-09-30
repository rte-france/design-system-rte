import { TabItemProps as CoreTabItemProps } from '../../../../../core/components/tab/tab.interface';
import { HTMLAttributes, MouseEvent, KeyboardEvent } from '../../../../../../node_modules/react';
interface TabItemProps extends CoreTabItemProps, Omit<HTMLAttributes<HTMLButtonElement>, "id" | "onClick"> {
    onClick: (event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => void;
}
declare const TabItem: ({ id, panelId, label, isSelected, showBadge, badgeCount, badgeAppearance, badgeIcon, onClick, icon, badgeType, compactSpacing, direction, ...props }: TabItemProps) => import("react/jsx-runtime").JSX.Element;
export default TabItem;
