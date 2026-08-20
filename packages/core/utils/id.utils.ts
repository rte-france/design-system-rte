let nextFallbackId = 0;

export function generateId(): string {
  if (typeof globalThis.crypto !== "undefined" && "randomUUID" in globalThis.crypto) {
    return globalThis.crypto.randomUUID();
  }
  nextFallbackId += 1;
  return `id-${nextFallbackId}`;
}
