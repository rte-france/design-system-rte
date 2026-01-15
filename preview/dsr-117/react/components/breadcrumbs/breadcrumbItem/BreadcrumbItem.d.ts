type BreadcrumbItemProps = {
    item: {
        label: string;
        link: string;
    };
    isLast: boolean;
    breadcrumbItemMaxWidth?: number;
};
declare const BreadcrumbItem: ({ item, isLast, breadcrumbItemMaxWidth }: BreadcrumbItemProps) => import("react/jsx-runtime").JSX.Element;
export default BreadcrumbItem;
