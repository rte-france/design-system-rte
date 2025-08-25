import { BreadcrumbsProps as BreadcrumbsPropsCore } from "@design-system-rte/core/components/breadcrumbs/breadcrumbs.interface";
import {
  getBreadcrumbsTruncatedItems,
  shouldTruncateBreadcrumbs,
} from "@design-system-rte/core/components/breadcrumbs/breadcrumbs.utils";
import { forwardRef } from "react";

import Icon from "../icon/Icon";
import Link from "../link/Link";
import Tooltip from "../tooltip/Tooltip";

import style from "./Breadcrumbs.module.scss";

export interface BreadcrumbsProps extends BreadcrumbsPropsCore, React.HTMLAttributes<HTMLDivElement> {}

const Breadcrumbs = forwardRef<HTMLDivElement, BreadcrumbsProps>(({ items, ...props }, ref) => {
  if (shouldTruncateBreadcrumbs(items)) {
    const { root, truncated, remaining } = getBreadcrumbsTruncatedItems(items);

    return (
      <nav ref={ref} className={style.breadcrumbsBadge} {...props} role="navigation" aria-label="Fil d'Ariane">
        <div className={style.breadcrumbsTruncated}>
          <Link
            subtle
            href={root.link}
            label={root.label}
            style={{ color: "var(--content-tertiary)" }}
            className={style.breadcrumbItem}
          />
          <span aria-hidden="true" className={style.separator}>
            /
          </span>

          <span className={style.breadcrumbItem}>
            <Tooltip
              position="bottom"
              aria-label="More items"
              label={truncated.map((item) => item.label).join(", ")}
              role="menu"
            >
              <Icon name="more-horiz" size={12} data-testid="show-more" />
            </Tooltip>
          </span>
          <span aria-hidden="true" className={style.separator}>
            /
          </span>
          {remaining.map((item, index) => (
            <div key={item.link} className={style.breadcrumbItem}>
              {index === remaining.length - 1 ? (
                <a role="link" aria-label={item.label} aria-current="page" tabIndex={0}>
                  {item.label}
                </a>
              ) : (
                <Link href={item.link} label={item.label} subtle style={{ color: "var(--content-tertiary)" }} />
              )}
              {index < remaining.length - 1 && (
                <span aria-hidden="true" className={style.separator}>
                  /
                </span>
              )}
            </div>
          ))}
        </div>
      </nav>
    );
  } else {
    return (
      <nav ref={ref} className={style.breadcrumbsBadge} {...props} role="navigation" aria-label="Fil d'Ariane">
        {items.map((item, index) => (
          <div key={item.link} className={style.breadcrumbItem}>
            {index === items.length - 1 ? (
              <a role="link" aria-label={item.label} aria-current="page" tabIndex={0}>
                {item.label}
              </a>
            ) : (
              <Link href={item.link} label={item.label} subtle style={{ color: "var(--content-tertiary)" }} />
            )}
            {index < items.length - 1 && (
              <span aria-hidden="true" className={style.separator}>
                /
              </span>
            )}
          </div>
        ))}
      </nav>
    );
  }
});

export default Breadcrumbs;
