function isConsoleAvailable(): boolean {
  return typeof console !== "undefined" && typeof console.warn === "function";
}

function isConsoleErrorAvailable(): boolean {
  return typeof console !== "undefined" && typeof console.error === "function";
}

export function logWarn(context: string, message: string): void {
  if (isConsoleAvailable()) {
    console.warn(`[${context}] ${message}`);
  }
}

export function logError(context: string, message: string, error?: unknown): void {
  if (isConsoleErrorAvailable()) {
    if (error !== undefined) {
      console.error(`[${context}] ${message}`, error);
    } else {
      console.error(`[${context}] ${message}`);
    }
  }
}
