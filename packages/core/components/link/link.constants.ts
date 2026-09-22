export const EXTERNAL_LINK_HINT = "ouvre dans un nouvel onglet";

export function appendExternalLinkHint(accessibleName: string): string {
  const trimmedAccessibleName = accessibleName.trim();
  if (!trimmedAccessibleName) {
    return EXTERNAL_LINK_HINT;
  }
  return `${trimmedAccessibleName}, ${EXTERNAL_LINK_HINT}`;
}
