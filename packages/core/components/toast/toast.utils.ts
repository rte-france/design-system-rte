export const getToastPriority = (toast: {
  hasActionButton: boolean;
  type: "info" | "success" | "warning" | "error" | "neutral";
}) => {
  const { hasActionButton: hasButtonAction, type } = toast;
  if (hasButtonAction) {
    switch (type) {
      case "error":
        return 1;
      case "warning":
        return 3;
      case "success":
        return 5;
      case "info":
        return 6;
      default:
        return 7;
    }
  } else {
    switch (type) {
      case "error":
        return 2;
      case "warning":
        return 4;
      case "success":
        return 8;
      case "info":
        return 9;
      default:
        return 10;
    }
  }
};
