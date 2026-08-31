export type InputToast = {
    id: string;
    hasActionButton: boolean;
    type: "info" | "success" | "warning" | "error" | "neutral";
};
export type ToastQueueItem = {
    id: string;
    priority: number;
    isOpen?: boolean;
};
export declare const ToastQueueContext: import('../../../../../../node_modules/react').Context<{
    addToQueue: (toast: InputToast) => void;
    removeFromQueue: (id: string) => void;
    isFirstInQueue: (id: string) => boolean;
    isInQueue: (id: string) => boolean;
    queue: ToastQueueItem[];
} | null>;
