declare const useDisplayTabItemElement: ({ tabItem, isActive, hasBadgeContent, iconName, isClosable, }: {
    tabItem: React.RefObject<HTMLLIElement>;
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
