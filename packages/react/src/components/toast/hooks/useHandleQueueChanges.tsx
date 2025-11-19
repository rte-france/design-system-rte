import { useCallback, useEffect, useState } from "react";

import useToastQueueContext from "../toastQueue/useToastQueueContext";

const useHandleQueueChanges = (id: string, isOpen: boolean) => {
  const [isInternalOpen, setIsInternalOpen] = useState(isOpen);

  const { isFirstInQueue, isInQueue, queue } = useToastQueueContext();

  const hideToast = useCallback(() => {
    setIsInternalOpen(false);
  }, []);

  const showToast = () => {
    setIsInternalOpen(true);
  };

  useEffect(() => {
    if (queue.length > 0) {
      if (isFirstInQueue(id)) {
        showToast();
      } else {
        if (isInQueue(id)) {
          hideToast();
        }
      }
    }
  }, [queue.length, isFirstInQueue, isInQueue, hideToast, id]);

  return { isInternalOpen, hideToast, showToast };
};

export default useHandleQueueChanges;
