import { Size } from "../common/common-types";

export const IconSize: Record<Exclude<Size, "xs">, number> = {
  s: 16,
  m: 20,
  l: 24,
  xl: 32,
};

export const IconTypeMap: Record<string, string> = {
  info: "info",
  error: "dangerous",
  success: "check-circle",
  warning: "warning",
};
