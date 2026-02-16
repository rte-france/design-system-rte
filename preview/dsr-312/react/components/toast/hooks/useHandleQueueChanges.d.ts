declare const useHandleQueueChanges: (id: string, isOpen: boolean) => {
    isInternalOpen: boolean;
    hideToast: () => void;
    showToast: () => void;
};
export default useHandleQueueChanges;
