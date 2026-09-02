import { DynamicTabItemProps as CoreDynamicTabItemProps } from '../../../../../core';
import { HTMLAttributes } from '../../../../../../node_modules/react';
interface DynamicTabItemProps extends CoreDynamicTabItemProps, Omit<HTMLAttributes<HTMLLIElement>, keyof CoreDynamicTabItemProps> {
}
declare const DynamicTabItem: ({ id, index, title, parentId, appearance, isActive, onClick, onClickClose, onChangeTabTitle, compactSpacing, isEditable, badgeContent, badgeCount, badgeIcon, badgeType, iconName, isClosable, updateIndicator, isHidden, setIsMoving: setIsMovingExternal, isMoving: isMovingExternal, }: DynamicTabItemProps) => import("react").JSX.Element;
export default DynamicTabItem;
