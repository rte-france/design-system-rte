import { DynamicTabItemProps as DynamicTabItemBaseProps } from '../../../../../core';
import { HTMLAttributes } from '../../../../../../node_modules/react';
interface DynamicTabItemProps extends DynamicTabItemBaseProps, Omit<HTMLAttributes<HTMLLIElement>, keyof DynamicTabItemBaseProps> {
}
declare const DynamicTabItem: ({ id, index, title, parentId, appearance, isActive, onClick, onClickClose, onChangeTabTitle, compactSpacing, isEditable, badgeContent, badgeCount, badgeIcon, badgeType, iconName, isClosable, updateIndicator, isHidden, setIsMoving: setIsMovingExternal, isMoving: isMovingExternal, }: DynamicTabItemProps) => import("react").JSX.Element;
export default DynamicTabItem;
