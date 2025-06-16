export function isValidIconName(
  name: string,
  regularIcons: Record<string, unknown>,
  togglableIcons: Record<string, unknown>,
): boolean {
  return name in regularIcons || name in togglableIcons;
}
