export const PAGINATION_DEFAULT_ARIA_LABEL = "Pagination";

export const PAGINATION_GO_TO_FIRST_LABEL = "Première page";
export const PAGINATION_GO_TO_PREV_LABEL = "Page précédente";
export const PAGINATION_GO_TO_NEXT_LABEL = "Page suivante";
export const PAGINATION_GO_TO_LAST_LABEL = "Dernière page";

export const PAGINATION_MAX_VISIBLE_PAGES = 7;

export function getPaginationPageLabel(page: number): string {
  return `Page ${page}`;
}
