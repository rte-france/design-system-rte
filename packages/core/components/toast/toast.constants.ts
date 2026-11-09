import { ToastType } from "./toast.interface";

export const ToastCloseButtonAriaLabel = "Fermer le toast";

const TOAST_DURATION_SMALL = 3000;
const TOAST_DURATION_MEDIUM = 5000;
const TOAST_DURATION_LARGE = 8000;

export const ToastDurationMap = {
  short: TOAST_DURATION_SMALL,
  medium: TOAST_DURATION_MEDIUM,
  long: TOAST_DURATION_LARGE,
};

export const ToastStatusMessageMap: Record<ToastType, string> = {
  info: "Information :",
  error: "Erreur :",
  success: "Succès :",
  neutral: "Notification :",
  warning: "Avertissement :",
};
