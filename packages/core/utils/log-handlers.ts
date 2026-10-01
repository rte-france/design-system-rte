function isConsoleAvailable(): boolean {
  return typeof console !== "undefined" && typeof console.warn === "function";
}

function isConsoleErrorAvailable(): boolean {
  return typeof console !== "undefined" && typeof console.error === "function";
}

export function formatContextMessage(context: string, message: string): string {
  return `[${context}] ${message}`;
}

export function logWarn(context: string, message: string): void {
  if (isConsoleAvailable()) {
    console.warn(formatContextMessage(context, message));
  }
}

export function logError(context: string, message: string, error?: unknown): void {
  if (isConsoleErrorAvailable()) {
    if (error !== undefined) {
      console.error(formatContextMessage(context, message), error);
    } else {
      console.error(formatContextMessage(context, message));
    }
  }
}

export function assertConfiguration(context: string, issue: string | undefined): void {
  if (issue) {
    throw new Error(formatContextMessage(context, issue));
  }
}
