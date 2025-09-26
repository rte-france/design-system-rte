import { BadgeAppearance, BadgeType } from '../../../../../core/components/badge/badge.interface';
interface TabItemProps extends React.HTMLAttributes<HTMLButtonElement> {
    id: string;
    panelId: string;
    label?: string;
    isSelected?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => void;
    icon?: string;
    badgeCount?: number;
    badgeAppearance?: BadgeAppearance;
    badgeIcon?: string;
    badgeType?: BadgeType;
    compactSpacing?: boolean;
    direction?: "horizontal" | "vertical";
}
declare const TabItem: ({ id, panelId, label, isSelected, badgeCount, badgeAppearance, badgeIcon, onClick, icon, badgeType, compactSpacing, direction, ...props }: TabItemProps) => import("react/jsx-runtime").JSX.Element;
export default TabItem;
