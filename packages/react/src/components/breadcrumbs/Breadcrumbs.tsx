import {
  BreadcrumbProps,
  BreadcrumbsProps as BreadcrumbsPropsCore,
} from "@design-system-rte/core/components/breadcrumbs/breadcrumbs.interface";
import {
  getBreadcrumbsTruncatedItems,
  shouldTruncateBreadcrumbs,
} from "@design-system-rte/core/components/breadcrumbs/breadcrumbs.utils";
import { forwardRef } from "react";

import { Icon } from "../..";
import Link from "../link/Link";

import style from "./Breadcrumbs.module.scss";

export interface BreadcrumbsProps extends BreadcrumbsPropsCore, React.HTMLAttributes<HTMLDivElement> {}

const Breadcrumbs = forwardRef<HTMLDivElement, BreadcrumbsProps>(({ items, ...props }, ref) => {
  if (shouldTruncateBreadcrumbs(items)) {
    const { root, truncated, remaining } = getBreadcrumbsTruncatedItems(items);

    return (
      <div ref={ref} className={style.breadcrumbsBadge} {...props} role="navigation" aria-label="Fil d'Ariane">
        <div className={style.breadcrumbsTruncated}>
          <Link
            subtle
            href={root.link}
            label={root.label}
            style={{ color: "var(--content-tertiary)" }}
            {...(root.role && { role: root.role })}
          />
          <span aria-hidden="true" className={style.separator}>
            /
          </span>
          <span title={`More items: ${truncated.map((item) => item.label).join(", ")}`}>
            <Icon name="more-horiz" size={12} />
          </span>
          <span aria-hidden="true" className={style.separator}>
            /
          </span>
          {remaining.map((item, index) => (
            <div key={item.link} className={style.breadcrumbItem}>
              {index === remaining.length - 1 ? (
                <span aria-label={item.label} aria-current="page" tabIndex={0}>
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.link}
                  label={item.label}
                  subtle
                  style={{ color: "var(--content-tertiary)" }}
                  {...(item.role && { role: item.role })}
                />
              )}
              {index < remaining.length - 1 && (
                <span aria-hidden="true" className={style.separator}>
                  /
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div ref={ref} className={style.breadcrumbsBadge} {...props} role="navigation" aria-label="Fil d'Ariane">
        {items.map((item, index) => (
          <div key={item.link} className={style.breadcrumbItem}>
            {index === items.length - 1 ? (
              <span aria-label={item.label} aria-current="page" tabIndex={0}>
                {item.label}
              </span>
            ) : (
              <Link
                href={item.link}
                label={item.label}
                subtle
                style={{ color: "var(--content-tertiary)" }}
                {...(item.role && { role: item.role })}
              />
            )}
            {index < items.length - 1 && (
              <span aria-hidden="true" className={style.separator}>
                /
              </span>
            )}
          </div>
        ))}
      </div>
    );
  }
});

export default Breadcrumbs;
