import { LinkProps as CoreLinkProps } from "@design-system-rte/core/components/link/link.interface";
import { forwardRef } from "react";

import Icon from "../icon/Icon";
import { concatClassNames } from "../utils";

import style from "./Link.module.scss";

interface LinkProps extends CoreLinkProps, React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ label, href, subtle = false, externalLink = false, className = "", reverse, ...props }, ref) => {
    return (
      <a
        ref={ref}
        href={href}
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
      </a>
    );
  },
);

export default Link;
