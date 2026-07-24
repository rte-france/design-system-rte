import { PAGINATION_MAX_VISIBLE_PAGES } from "./pagination.constants";
import { PaginationItem } from "./pagination.interface";

function createPageItems(from: number, to: number): PaginationItem[] {
  return Array.from({ length: to - from + 1 }, (_, index) => ({
    type: "page" as const,
    page: from + index,
  }));
}

export function getPaginationItems(
  page: number,
  totalPages: number,
  maxVisiblePages = PAGINATION_MAX_VISIBLE_PAGES,
): PaginationItem[] {
  if (!totalPages) {
    return [];
  }

  if (totalPages <= maxVisiblePages) {
    return createPageItems(1, totalPages);
  }

  const edgePageCount = maxVisiblePages - 2;
  const startZoneLastPage = edgePageCount - 1;
  const endZoneFirstPage = totalPages - (edgePageCount - 2);

  if (page <= startZoneLastPage) {
    return [...createPageItems(1, edgePageCount), { type: "ellipsis" }, { type: "page", page: totalPages }];
  }

  if (page >= endZoneFirstPage) {
    return [
      { type: "page", page: 1 },
      { type: "ellipsis" },
      ...createPageItems(totalPages - edgePageCount + 1, totalPages),
    ];
  }

  const siblingCount = Math.floor((maxVisiblePages - 5) / 2);

  return [
    { type: "page", page: 1 },
    { type: "ellipsis" },
    ...createPageItems(page - siblingCount, page + siblingCount),
    { type: "ellipsis" },
    { type: "page", page: totalPages },
  ];
}
