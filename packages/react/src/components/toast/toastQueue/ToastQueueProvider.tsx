import { useCallback, useState } from "react";

import { InputToast, ToastQueueContext, ToastQueueItem } from "./ToastQueueContext";

const ToastQueueProvider = ({ children }: { children: React.ReactNode }) => {
  const [queue, setQueue] = useState<ToastQueueItem[]>([]);

  const addToQueue = useCallback((toast: InputToast) => {
    const priority = getPriority(toast);

    setQueue((prevQueue) => {
      return [...prevQueue, { id: toast.id, priority, isOpen: false }].sort((a, b) => a.priority - b.priority);
    });
  }, []);

  const removeFromQueue = useCallback((id: string) => {
    setQueue((prevQueue) => prevQueue.filter((toast) => toast.id !== id));
  }, []);

  const isFirstInQueue = (id: string) => {
    return queue.length > 0 && queue[0].id === id;
  };

  const isInQueue = (id: string) => {
    return queue.findIndex((toast) => toast.id === id) !== -1;
  };

  const getPriority = (toast: {
    hasButtonAction: boolean;
    type: "info" | "success" | "warning" | "error" | "neutral";
    isAutoDismiss: boolean;
  }) => {
    const { hasButtonAction, type } = toast;
    if (hasButtonAction) {
      if (type === "error") {
        return 1;
      } else if (type === "success") {
        return 3;
      } else if (type === "info") {
        return 4;
      } else if (type === "neutral") {
        return 5;
      } else {
        return 9;
      }
    } else {
      if (type === "error") {
        return 2;
      } else if (type === "success") {
        return 6;
      } else if (type === "info") {
        return 7;
      } else if (type === "neutral") {
        return 8;
      } else {
        return 10;
      }
    }
  };

  return (
    <ToastQueueContext.Provider value={{ addToQueue, removeFromQueue, isFirstInQueue, isInQueue, queue }}>
      {children}
    </ToastQueueContext.Provider>
  );
};

export default ToastQueueProvider;
