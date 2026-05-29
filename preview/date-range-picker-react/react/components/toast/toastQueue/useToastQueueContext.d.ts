export declare const useToastQueueContext: () => {
    addToQueue: (toast: import('./ToastQueueContext').InputToast) => void;
    removeFromQueue: (id: string) => void;
    isFirstInQueue: (id: string) => boolean;
    isInQueue: (id: string) => boolean;
    queue: import('./ToastQueueContext').ToastQueueItem[];
};
export default useToastQueueContext;
