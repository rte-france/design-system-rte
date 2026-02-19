import { shouldDisplayBadge } from "@design-system-rte/core/components/badge/badge.utils";
import { BREADCRUMBS_DEFAULT_ARIA_LABEL } from "@design-system-rte/core/components/breadcrumbs/breadcrumbs.constants";
import { BreadcrumbsProps as BreadcrumbsPropsCore } from "@design-system-rte/core/components/breadcrumbs/breadcrumbs.interface";
import {
  getBreadcrumbsTruncatedItems,
  shouldTruncateBreadcrumbs,
} from "@design-system-rte/core/components/breadcrumbs/breadcrumbs.utils";
import { forwardRef, useState, Fragment } from "react";

import Badge from "../badge/Badge.tsx";
import { Dropdown } from "../dropdown/Dropdown";
import { DropdownItem } from "../dropdown/dropdownItem/DropdownItem";
import IconButton from "../iconButton/IconButton";
import { concatClassNames } from "../utils";

import BreadcrumbItem from "./breadcrumbItem/BreadcrumbItem.tsx";
import style from "./Breadcrumbs.module.scss";

export interface BreadcrumbsProps extends BreadcrumbsPropsCore, React.HTMLAttributes<HTMLElement> {}

const Separator = () => (
  <span aria-hidden="true" className={style.separator}>
    /
  </span>
);

const Breadcrumbs = forwardRef<HTMLDivElement, BreadcrumbsProps>(
  (
    {
      items,
      ariaLabel = BREADCRUMBS_DEFAULT_ARIA_LABEL,
      breadcrumbItemMaxWidth,
      badgeContent,
      badgeCount,
      badgeIcon,
      badgeType,
      badgeSize,
      showBadge,
      ...props
    },
    ref,
  ) => {
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
          <BreadcrumbItem item={root} isLast={false} breadcrumbItemMaxWidth={breadcrumbItemMaxWidth} />
          <Separator />

          <span className={style.breadcrumbItem}>
            <Dropdown
              dropdownId={"breadcrumbs-truncated-list" + ariaLabel}
              onClose={() => {
                setIsTruncatedListOpened(false);
              }}
              trigger={
                <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <IconButton
                    name="more-horiz"
                    data-testid="show-more"
                    variant="neutral"
                    compactSpacing
                    onClick={() => setIsTruncatedListOpened(!isTrucatedListOpened)}
                  />
                  {shouldDisplayBadge({ showBadge: !!showBadge, badgeContent, badgeCount, badgeIcon }) && (
                    <Badge
                      count={badgeCount}
                      content={badgeContent}
                      icon={badgeIcon}
                      badgeType={badgeType}
                      size={badgeSize}
                    />
                  )}
                </div>
              }
              isOpen={isTrucatedListOpened}
              offset={6}
            >
              {truncated.map((item, idx) => (
                <DropdownItem
                  key={item.label + idx}
                  label={item.label}
                  link={item.link}
                  badgeCount={item.badgeCount}
                  badgeContent={item.badgeContent}
                  badgeIcon={item.badgeIcon}
                  badgeType={item.badgeType}
                  showBadge={item.showBadge}
                />
              ))}
            </Dropdown>
          </span>
          <span aria-hidden="true" className={style.separator}>
            /
          </span>
          {remaining.map((item, index) => (
            <Fragment key={item.label + index}>
              <BreadcrumbItem
                item={item}
                isLast={index === remaining.length - 1}
                breadcrumbItemMaxWidth={breadcrumbItemMaxWidth}
              />
              {index < remaining.length - 1 && <Separator />}
            </Fragment>
          ))}
        </nav>
      );
    }

    return (
      <nav ref={ref} className={style.breadcrumbsBadge} {...props} role="navigation" aria-label="Fil d'Ariane">
        {items.map((item, index) => (
          <Fragment key={item.label + index}>
            <BreadcrumbItem
              item={item}
              isLast={index === items.length - 1}
              breadcrumbItemMaxWidth={breadcrumbItemMaxWidth}
            />
            {index < items.length - 1 && <Separator />}
          </Fragment>
        ))}
      </nav>
    );
  },
);

export default Breadcrumbs;
