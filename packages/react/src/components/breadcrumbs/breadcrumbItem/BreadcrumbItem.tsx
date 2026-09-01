import { shouldDisplayBadge as coreShouldDisplayBadge } from "@design-system-rte/core/components/badge/badge.utils";
import { BreadcrumbProps } from "@design-system-rte/core/components/breadcrumbs/breadcrumbs.interface";

import { useNavigationLinkComponent } from "../../../provider/NavigationContext";
import Badge from "../../badge/Badge";
import Link from "../../link/Link";
import Tooltip from "../../tooltip/Tooltip";

import style from "./BreadcrumbItem.module.scss";

const BreadcrumbItem = ({ item, isLast, breadcrumbItemMaxWidth }: BreadcrumbProps) => {
  const LinkComponent = useNavigationLinkComponent();
  const maxWidthStyle = breadcrumbItemMaxWidth ? { maxWidth: `${breadcrumbItemMaxWidth}px` } : undefined;

  const { showBadge, badgeContent, badgeCount, badgeIcon, badgeType, badgeSize } = item;
  const shouldDisplayBadge = coreShouldDisplayBadge({ showBadge: !!showBadge, badgeContent, badgeCount, badgeIcon });

  const badge = shouldDisplayBadge ? (
    <Badge count={badgeCount} content={badgeContent} icon={badgeIcon} badgeType={badgeType} size={badgeSize} />
  ) : null;

  return (
    <div key={item.link} className={style.breadcrumbItem}>
      {isLast ? (
        <>
          {breadcrumbItemMaxWidth ? (
            <Tooltip
              label={item.label}
              position="bottom"
              alignment="center"
              showOnEllipsis
              shouldFocusTrigger={false}
              triggerStyles={{ ...maxWidthStyle, minWidth: 0, overflow: "hidden" }}
            >
              <a role="link" aria-label={item.label} aria-current="page" tabIndex={0} style={maxWidthStyle}>
                {item.label}
              </a>
            </Tooltip>
          ) : (
            <a role="link" aria-label={item.label} aria-current="page" tabIndex={0}>
              {item.label}
            </a>
          )}
          {badge}
        </>
      ) : (
        <>
          {breadcrumbItemMaxWidth ? (
            <Tooltip
              label={item.label}
              position="bottom"
              alignment="center"
              showOnEllipsis
              shouldFocusTrigger={false}
              triggerStyles={{
                maxWidth: `${breadcrumbItemMaxWidth}px`,
                overflow: "hidden",
                minWidth: 0,
              }}
            >
              <Link
                href={item.link}
                label={item.label}
                subtle
                customLinkComponent={LinkComponent}
                style={{ color: "var(--content-tertiary)", maxWidth: `${breadcrumbItemMaxWidth}px` }}
              />
            </Tooltip>
          ) : (
            <Link
              href={item.link}
              label={item.label}
              subtle
              customLinkComponent={LinkComponent}
              style={{ color: "var(--content-tertiary)" }}
            />
          )}
          {badge}
        </>
      )}
    </div>
  );
};

export default BreadcrumbItem;
