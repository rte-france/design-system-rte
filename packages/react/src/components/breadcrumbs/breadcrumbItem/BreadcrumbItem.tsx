import { shouldDisplayBadge as coreShouldDisplayBadge } from "@design-system-rte/core/components/badge/badge.utils";
import { BreadcrumbProps } from "@design-system-rte/core/components/breadcrumbs/breadcrumbs.interface";
import { useEffect, useRef, useState } from "react";

import Badge from "../../badge/Badge";
import Link from "../../link/Link";
import Tooltip from "../../tooltip/Tooltip";

import style from "./BreadcrumbItem.module.scss";

const BreadcrumbItem = ({ item, isLast, breadcrumbItemMaxWidth }: BreadcrumbProps) => {
  const [isEllipsisActive, setIsEllipsisActive] = useState<boolean>(false);
  const initialScrollWidth = useRef<number>();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      initialScrollWidth.current = ref.current.querySelector("a")?.scrollWidth;
    }
  }, []);

  useEffect(() => {
    const computeIsEllipsisActive = () => {
      if (initialScrollWidth.current && breadcrumbItemMaxWidth) {
        setIsEllipsisActive(initialScrollWidth.current >= breadcrumbItemMaxWidth);
      }
    };
    computeIsEllipsisActive();
  }, [breadcrumbItemMaxWidth]);

  const { showBadge, badgeContent, badgeCount, badgeIcon, badgeType, badgeSize } = item;
  const shouldDisplayBadge = coreShouldDisplayBadge({ showBadge: !!showBadge, badgeContent, badgeCount, badgeIcon });

  return (
    <div key={item.link} className={style.breadcrumbItem} ref={ref}>
      {isLast ? (
        <>
          {isEllipsisActive ? (
            <Tooltip
              label={item.label}
              position="bottom"
              alignment="center"
              triggerStyles={{
                maxWidth: `${breadcrumbItemMaxWidth}px`,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              <a
                role="link"
                aria-label={item.label}
                aria-current="page"
                tabIndex={-1}
                style={{ maxWidth: `${breadcrumbItemMaxWidth}px` }}
              >
                {item.label}
              </a>
              {shouldDisplayBadge && (
                <Badge
                  count={badgeCount}
                  content={badgeContent}
                  icon={badgeIcon}
                  badgeType={badgeType}
                  size={badgeSize}
                />
              )}
            </Tooltip>
          ) : (
            <>
              <a
                role="link"
                aria-label={item.label}
                aria-current="page"
                tabIndex={0}
                style={{ maxWidth: `${breadcrumbItemMaxWidth}px` }}
              >
                {item.label}
              </a>
              {shouldDisplayBadge && (
                <Badge count={badgeCount} content={badgeContent} icon={badgeIcon} badgeType={badgeType} />
              )}
            </>
          )}
        </>
      ) : (
        <>
          {isEllipsisActive ? (
            <Tooltip
              label={item.label}
              position="bottom"
              alignment="center"
              triggerStyles={{
                maxWidth: `${breadcrumbItemMaxWidth}px`,
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
              shouldFocusTrigger={false}
            >
              <Link
                href={item.link}
                label={item.label}
                subtle
                style={{ color: "var(--content-tertiary)", maxWidth: `${breadcrumbItemMaxWidth}px` }}
              />{" "}
              {shouldDisplayBadge && (
                <Badge count={badgeCount} content={badgeContent} icon={badgeIcon} badgeType={badgeType} />
              )}
            </Tooltip>
          ) : (
            <>
              <Link
                href={item.link}
                label={item.label}
                subtle
                style={{ color: "var(--content-tertiary)", maxWidth: `${breadcrumbItemMaxWidth}px` }}
              />
              {shouldDisplayBadge && (
                <Badge count={badgeCount} content={badgeContent} icon={badgeIcon} badgeType={badgeType} />
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default BreadcrumbItem;
