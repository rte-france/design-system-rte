import { useEffect, useRef, useState } from "react";

import Link from "../../link/Link";
import Tooltip from "../../tooltip/Tooltip";

import style from "./BreadcrumbItem.module.scss";

type BreadcrumbItemProps = {
  item: {
    label: string;
    link: string;
  };
  isLast: boolean;
  breadcrumbItemMaxWidth?: number;
};

const BreadcrumbItem = ({ item, isLast, breadcrumbItemMaxWidth }: BreadcrumbItemProps) => {
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
            </Tooltip>
          ) : (
            <a
              role="link"
              aria-label={item.label}
              aria-current="page"
              tabIndex={0}
              style={{ maxWidth: `${breadcrumbItemMaxWidth}px` }}
            >
              {item.label}
            </a>
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
              />
            </Tooltip>
          ) : (
            <Link
              href={item.link}
              label={item.label}
              subtle
              style={{ color: "var(--content-tertiary)", maxWidth: `${breadcrumbItemMaxWidth}px` }}
            />
          )}
        </>
      )}
    </div>
  );
};

export default BreadcrumbItem;
