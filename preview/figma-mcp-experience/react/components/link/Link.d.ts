import { LinkProps as CoreLinkProps } from '../../../../core/components/link/link.interface';
interface LinkProps extends CoreLinkProps, React.AnchorHTMLAttributes<HTMLAnchorElement> {
}
declare const Link: import('../../../../../node_modules/react').ForwardRefExoticComponent<LinkProps & import('../../../../../node_modules/react').RefAttributes<HTMLAnchorElement>>;
export default Link;
