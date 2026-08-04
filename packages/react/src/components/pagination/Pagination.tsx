import {
  PaginationProps as CorePaginationProps,
  getPaginationItems,
  PAGINATION_GO_TO_FIRST_LABEL,
  PAGINATION_GO_TO_PREV_LABEL,
  PAGINATION_GO_TO_NEXT_LABEL,
  PAGINATION_GO_TO_LAST_LABEL,
  getPaginationPageLabel,
} from "@design-system-rte/core";
import { useEffect, useState } from "react";

import Icon from "../icon/Icon";

import styles from "./Pagination.module.scss";

interface PaginationProps extends CorePaginationProps, React.HTMLAttributes<HTMLElement> {
  onPageChange?: (page: number) => void;
}

const Pagination = ({
  appearance = "neutral",
  activePage,
  totalPages,
  onPageChange,
  hasGoToFirst = true,
  hasGoToPrev = true,
  hasGoToNext = true,
  hasGoToLast = true,
}: PaginationProps) => {
  const [internalActivePage, setInternalActivePage] = useState(activePage);

  const navActionIconSize = 16;

  const items = getPaginationItems(internalActivePage, totalPages);

  const isLastPage = () => internalActivePage >= totalPages;
  const isFirstPage = () => internalActivePage <= 1;

  const handleOnPageClick = (targetPage: number) => {
    if (targetPage === internalActivePage) {
      return;
    }
    navigateToPage(targetPage);
  };

  const handleOnGoToFirstClick = () => {
    if (isFirstPage()) {
      return;
    }
    navigateToPage(1);
  };

  const handleOnGoToPrevClick = () => {
    if (isFirstPage()) {
      return;
    }
    navigateToPage(internalActivePage - 1);
  };

  const handleOnGoToNextClick = () => {
    if (isLastPage()) {
      return;
    }
    navigateToPage(internalActivePage + 1);
  };

  const handleOnGoToLastClick = () => {
    if (isLastPage()) {
      return;
    }
    navigateToPage(totalPages);
  };

  const navigateToPage = (targetPage: number) => {
    if (targetPage < 1 || targetPage > totalPages || targetPage === internalActivePage) {
      return;
    }
    setInternalActivePage(targetPage);
    onPageChange?.(targetPage);
  };

  useEffect(() => {
    setInternalActivePage(activePage);
  }, [activePage]);

  return (
    <nav className={styles["rte-pagination"]} data-testid="pagination" data-appearance={appearance}>
      {hasGoToFirst && (
        <button
          type="button"
          className={styles["rte-pagination-nav-control"]}
          data-testid="pagination-go-to-first"
          aria-disabled={isFirstPage() ? "true" : undefined}
          data-disabled={isFirstPage() ? "true" : undefined}
          aria-label={PAGINATION_GO_TO_FIRST_LABEL}
          onClick={handleOnGoToFirstClick}
        >
          <Icon name="first-page" appearance="filled" size={navActionIconSize} />
        </button>
      )}
      {hasGoToPrev && (
        <button
          type="button"
          className={styles["rte-pagination-nav-control"]}
          data-testid="pagination-go-to-prev"
          aria-disabled={isFirstPage() ? "true" : undefined}
          data-disabled={isFirstPage() ? "true" : undefined}
          aria-label={PAGINATION_GO_TO_PREV_LABEL}
          onClick={handleOnGoToPrevClick}
        >
          <Icon name="arrow-chevron-left" appearance="filled" size={navActionIconSize} />
        </button>
      )}

      <div className={styles["rte-pagination-pages"]}>
        {items.map((item, index) => {
          if (item.type === "ellipsis") {
            return (
              <span key={`ellipsis-${index}`} className={styles["rte-pagination-ellipsis"]} aria-hidden="true">
                ...
              </span>
            );
          } else {
            return (
              <button
                key={`page-${item.page}`}
                type="button"
                className={styles["rte-pagination-page"]}
                aria-current={item.page === internalActivePage ? "page" : undefined}
                data-active={item.page === internalActivePage ? "true" : undefined}
                aria-label={getPaginationPageLabel(item.page)}
                data-testid={`pagination-page-${item.page}`}
                onClick={() => handleOnPageClick(item.page)}
              >
                {item.page}
              </button>
            );
          }
        })}
      </div>

      {hasGoToNext && (
        <button
          type="button"
          className={styles["rte-pagination-nav-control"]}
          data-testid="pagination-go-to-next"
          aria-disabled={isLastPage() ? "true" : undefined}
          data-disabled={isLastPage() ? "true" : undefined}
          aria-label={PAGINATION_GO_TO_NEXT_LABEL}
          onClick={handleOnGoToNextClick}
        >
          <Icon name="arrow-chevron-right" appearance="filled" size={navActionIconSize} />
        </button>
      )}
      {hasGoToLast && (
        <button
          type="button"
          className={styles["rte-pagination-nav-control"]}
          data-testid="pagination-go-to-last"
          aria-disabled={isLastPage() ? "true" : undefined}
          data-disabled={isLastPage() ? "true" : undefined}
          aria-label={PAGINATION_GO_TO_LAST_LABEL}
          onClick={handleOnGoToLastClick}
        >
          <Icon name="last-page" appearance="filled" size={navActionIconSize} />
        </button>
      )}
    </nav>
  );
};

export default Pagination;
