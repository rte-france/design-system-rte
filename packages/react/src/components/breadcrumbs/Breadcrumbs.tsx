import { BREADCRUMBS_DEFAULT_ARIA_LABEL } from "@design-system-rte/core/components/breadcrumbs/breadcrumbs.constants";
import { BreadcrumbsProps as BreadcrumbsPropsCore } from "@design-system-rte/core/components/breadcrumbs/breadcrumbs.interface";
import {
  getBreadcrumbsTruncatedItems,
  shouldTruncateBreadcrumbs,
} from "@design-system-rte/core/components/breadcrumbs/breadcrumbs.utils";
import { forwardRef, useState } from "react";

import { Dropdown } from "../dropdown/Dropdown";
import { DropdownItem } from "../dropdown/dropdownItem/DropdownItem";
import IconButton from "../iconButton/IconButton";
import Link from "../link/Link";
import { concatClassNames } from "../utils";

import style from "./Breadcrumbs.module.scss";

export interface BreadcrumbsProps extends BreadcrumbsPropsCore, React.HTMLAttributes<HTMLElement> {}

const Breadcrumbs = forwardRef<HTMLDivElement, BreadcrumbsProps>(
  ({ items, ariaLabel = BREADCRUMBS_DEFAULT_ARIA_LABEL, ...props }, ref) => {
    const [isTrucatedListOpened, setIsTruncatedListOpened] = useState<boolean>(false);
    if (shouldTruncateBreadcrumbs(items)) {
      const { root, truncated, remaining } = getBreadcrumbsTruncatedItems(items);

      return (
        <nav
          ref={ref}
          className={concatClassNames(style.breadcrumbsContainer, truncated.length ? style.truncated : "")}
          {...props}
          role="navigation"
          aria-label={ariaLabel}
        >
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
            <Dropdown
              dropdownId={"breadcrumbs-truncated-list" + ariaLabel}
              onClose={() => {
                setIsTruncatedListOpened(false);
              }}
              trigger={
                <IconButton
                  name="more-horiz"
                  size="s"
                  data-testid="show-more"
                  variant="neutral"
                  compactSpacing
                  onClick={() => setIsTruncatedListOpened(!isTrucatedListOpened)}
                />
              }
              isOpen={isTrucatedListOpened}
              offset={6}
            >
              {truncated.map((item, idx) => (
                <DropdownItem key={item.label + idx} label={item.label} link={item.link} />
              ))}
            </Dropdown>
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
        </nav>
      );
    }

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
  },
);

export default Breadcrumbs;
