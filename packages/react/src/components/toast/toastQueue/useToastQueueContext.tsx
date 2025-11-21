import { useContext } from "react";

import { ToastQueueContext } from "./ToastQueueContext";

export const useToastQueueContext = () => {
  const context = useContext(ToastQueueContext);

  if (!context) {
    throw new Error("Toast component must be used within a ToastQueueProvider");
  }
  return context;
};

export default useToastQueueContext;
