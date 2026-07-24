import { LinkProps as CoreLinkProps } from "@design-system-rte/core/components/link/link.interface";
import { forwardRef } from "react";

import type { RoutingComponentProps } from "../../abstract/routing/routing.interface";
import { useNavigationLinkComponent } from "../../provider/NavigationContext";
import Icon from "../icon/Icon";
import { concatClassNames } from "../utils";

import style from "./Link.module.scss";

interface LinkProps extends CoreLinkProps, RoutingComponentProps, React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to?: string;
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    { label, href, subtle = false, externalLink = false, className = "", reverse, customLinkComponent, ...props },
    ref,
  ) => {
    const contextLinkComponent = useNavigationLinkComponent();
    const Component = customLinkComponent ?? contextLinkComponent;

    return (
      <Component
        ref={ref}
        href={href}
        to={href}
        role="link"
        aria-label={label}
        className={concatClassNames(style.link, className)}
        data-subtle={subtle}
        target={externalLink ? "_blank" : undefined}
        rel={externalLink ? "noopener noreferrer" : undefined}
        data-reverse={reverse}
        {...props}
      >
        <span className={style.label}>{label}</span>
        {externalLink && <Icon name="external-link" size={12} className={style["external-link-icon"]} />}
      </Component>
    );
  },
);

export default Link;
