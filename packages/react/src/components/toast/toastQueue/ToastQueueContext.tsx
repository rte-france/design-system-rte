import { createContext } from "react";

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

export const ToastQueueContext = createContext<{
  addToQueue: (toast: InputToast) => void;
  removeFromQueue: (id: string) => void;
  isFirstInQueue: (id: string) => boolean;
  isInQueue: (id: string) => boolean;
  queue: ToastQueueItem[];
} | null>(null);
