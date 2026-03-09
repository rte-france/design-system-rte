import { LoaderProps as CoreLoaderProps } from '../../../../core/components/loader/loader.interface';
interface LoaderProps extends CoreLoaderProps, React.HTMLAttributes<HTMLDivElement> {
}
declare const Loader: import('../../../../../node_modules/react').ForwardRefExoticComponent<LoaderProps & import('../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export default Loader;
