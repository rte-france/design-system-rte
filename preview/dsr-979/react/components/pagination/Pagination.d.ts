import { PaginationProps as CorePaginationProps } from '../../../../core';
interface PaginationProps extends CorePaginationProps, React.HTMLAttributes<HTMLElement> {
    onPageChange?: (page: number) => void;
}
declare const Pagination: ({ appearance, activePage, totalPages, onPageChange, hasGoToFirst, hasGoToPrev, hasGoToNext, hasGoToLast, }: PaginationProps) => import("react").JSX.Element;
export default Pagination;
