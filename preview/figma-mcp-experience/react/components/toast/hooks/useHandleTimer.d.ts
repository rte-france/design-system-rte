import { ToastDuration } from '../../../../../core/components/toast/toast.interface';
type TimeoutProperties = {
    shouldStartTimer: boolean;
    duration: ToastDuration;
};
declare const useHandleTimer: ({ shouldStartTimer, duration }: TimeoutProperties, callback: () => void) => {
    initializeTimer: () => void;
    removeTimer: () => void;
};
export default useHandleTimer;
