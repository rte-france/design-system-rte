import { GridProps as CoreGridProps, ColProps as CoreColProps } from '../../../../core/components/grid/grid.interface';
interface GridProps extends CoreGridProps, Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
    children: React.ReactNode[];
}
interface ColProps extends CoreColProps, Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
    children?: React.ReactNode;
}
declare const Grid: {
    ({ gridType, className, children }: GridProps): import("react/jsx-runtime").JSX.Element;
    Col: ({ children, className, xxs, xs, s, m, l, xl, ...props }: ColProps) => import("react/jsx-runtime").JSX.Element;
};
export default Grid;
