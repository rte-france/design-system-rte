export type PaginationAppearance = "brand" | "neutral";

export type PaginationItem = { type: "page"; page: number } | { type: "ellipsis" };

export interface PaginationProps {
  activePage: number;
  totalPages: number;
  appearance?: PaginationAppearance;
  hasGoToFirst?: boolean;
  hasGoToPrev?: boolean;
  hasGoToNext?: boolean;
  hasGoToLast?: boolean;
  ariaLabel?: string;
}
