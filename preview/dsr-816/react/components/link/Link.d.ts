import { LinkProps as CoreLinkProps } from '../../../../core/components/link/link.interface';
import { RoutingComponentProps } from '../../abstract/routing/routing.interface';
interface LinkProps extends CoreLinkProps, RoutingComponentProps, React.AnchorHTMLAttributes<HTMLAnchorElement> {
}
declare const Link: import('../../../../../node_modules/react').ForwardRefExoticComponent<LinkProps & import('../../../../../node_modules/react').RefAttributes<HTMLAnchorElement>>;
export default Link;
