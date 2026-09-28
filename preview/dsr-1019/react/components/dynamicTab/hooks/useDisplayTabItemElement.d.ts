import { RefObject } from '../../../../../../node_modules/react';
declare const useDisplayTabItemElement: ({ tabItem, isActive, hasBadgeContent, iconName, isClosable, }: {
    tabItem: RefObject<HTMLLIElement>;
    isActive: boolean;
    hasBadgeContent: boolean;
    iconName?: string;
    isClosable?: boolean;
}) => {
    shouldDisplayBadge: boolean;
    shouldDisplayIcon: boolean;
    shouldDisplayText: boolean;
    shouldDisplayCloseButton: boolean;
    isZeroToXS: boolean | null;
};
export default useDisplayTabItemElement;
