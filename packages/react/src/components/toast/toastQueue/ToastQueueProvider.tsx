import { getToastPriority } from "@design-system-rte/core/components/toast/toast.utils";
import { useCallback, useState } from "react";

import { InputToast, ToastQueueContext, ToastQueueItem } from "./ToastQueueContext";

const ToastQueueProvider = ({ children }: { children: React.ReactNode }) => {
  const [queue, setQueue] = useState<ToastQueueItem[]>([]);

  const addToQueue = useCallback((toast: InputToast) => {
    const priority = getToastPriority(toast);

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

  return (
    <ToastQueueContext.Provider value={{ addToQueue, removeFromQueue, isFirstInQueue, isInQueue, queue }}>
      {children}
    </ToastQueueContext.Provider>
  );
};

export default ToastQueueProvider;
