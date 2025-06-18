export function isValidIconName(name: string, ...iconSets: Record<string, unknown>[]): boolean {
  return iconSets.some((iconSet) => name in iconSet);
}
