import { ToastDurationMap } from "@design-system-rte/core/components/toast/toast.constants";
import { ToastDuration } from "@design-system-rte/core/components/toast/toast.interface";
import { useCallback, useEffect, useRef } from "react";

type TimeoutProperties = {
  shouldStartTimer: boolean;
  duration: ToastDuration;
};

const useHandleTimer = ({ shouldStartTimer, duration }: TimeoutProperties, callback: () => void) => {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const initializeTimer = useCallback(() => {
    timerRef.current = setTimeout(() => {
      callback();
    }, ToastDurationMap[duration]);
  }, [duration, callback]);

  const removeTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);

      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (shouldStartTimer) {
      removeTimer();
      initializeTimer();
    }
    return () => {
      removeTimer();
    };
  }, [initializeTimer, removeTimer, shouldStartTimer]);

  return { initializeTimer, removeTimer };
};

export default useHandleTimer;
