declare const useHeaderScrollBehavior: ({ isSticky, showAtScrollUp }: {
    isSticky: boolean;
    showAtScrollUp: boolean;
}) => {
    isVisible: boolean;
};
export default useHeaderScrollBehavior;
