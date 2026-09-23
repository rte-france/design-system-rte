import { appendExternalLinkHint, EXTERNAL_LINK_HINT } from "@design-system-rte/core/components/link";
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
    {
      label,
      href,
      subtle = false,
      externalLink = false,
      className = "",
      reverse,
      customLinkComponent,
      style: styleProp,
      ...props
    },
    ref,
  ) => {
    const contextLinkComponent = useNavigationLinkComponent();
    const Component = customLinkComponent ?? contextLinkComponent;
    const truncate = styleProp?.maxWidth != null && styleProp.maxWidth !== "";
    const { "aria-label": ariaLabel, ...restProps } = props;

    const hasExplicitAriaLabel = ariaLabel !== undefined && ariaLabel !== null;
    let resolvedAriaLabel: string | undefined;
    if (externalLink && hasExplicitAriaLabel) {
      resolvedAriaLabel = appendExternalLinkHint(String(ariaLabel));
    } else if (hasExplicitAriaLabel) {
      resolvedAriaLabel = String(ariaLabel);
    }
    const showExternalLinkHintInContent = externalLink && !hasExplicitAriaLabel;

    return (
      <Component
        ref={ref}
        href={href}
        to={href}
        role="link"
        className={concatClassNames(style.link, truncate && style.truncate, className)}
        data-subtle={subtle}
        target={externalLink ? "_blank" : undefined}
        rel={externalLink ? "noopener noreferrer" : undefined}
        data-reverse={reverse}
        style={styleProp}
        aria-label={resolvedAriaLabel}
        {...restProps}
      >
        <span
          className={concatClassNames(style.label, truncate && style.labelTruncate)}
          style={truncate ? { maxWidth: styleProp?.maxWidth } : undefined}
        >
          {label}
        </span>
        {showExternalLinkHintInContent && <span className={style["sr-only"]}>, {EXTERNAL_LINK_HINT}</span>}
        {externalLink && <Icon name="external-link" size={12} className={style["external-link-icon"]} />}
      </Component>
    );
  },
);

export default Link;
