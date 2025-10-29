import { useEffect, useRef, useState } from "react";

import Link from "../../link/Link";
import Tooltip from "../../tooltip/Tooltip";

type BreadcrumbItemProps = {
  item: {
    label: string;
    link?: string;
  };
  isLast: boolean;
  breadcrumbItemMaxWidth?: number;
};

const BreadcrumbItem = ({ item, isLast, breadcrumbItemMaxWidth }: BreadcrumbItemProps) => {
  const [isEllipsisActive, setIsEllipsisActive] = useState<boolean>(false);
  const aRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const initialAScrollWidth = useRef<number | undefined>(0);
  const initialLinkScrollWidth = useRef<number | undefined>(0);

  useEffect(() => {
    initialAScrollWidth.current = aRef.current?.scrollWidth;
    initialLinkScrollWidth.current = linkRef.current?.scrollWidth;
  }, []);

  useEffect(() => {
    const computeIsEllipsisActive = (elementScrollWith: number) => {
      if (elementScrollWith && breadcrumbItemMaxWidth) {
        setIsEllipsisActive(breadcrumbItemMaxWidth <= elementScrollWith);
      }
    };
    computeIsEllipsisActive(initialAScrollWidth.current!);
    computeIsEllipsisActive(initialLinkScrollWidth.current!);
  }, [breadcrumbItemMaxWidth]);

  return (
    <div ref={aRef}>
      {isLast ? (
        <>
          {isEllipsisActive ? (
            <Tooltip
              label={item.label}
              triggerStyles={{
                maxWidth: `${breadcrumbItemMaxWidth}px`,
                overflow: "hidden",
                textOverflow: "ellipsis",
                textWrap: "nowrap",
              }}
            >
              <a role="link" aria-label={item.label} aria-current="page" tabIndex={0}>
                {item.label}
              </a>
            </Tooltip>
          ) : (
            <a role="link" aria-label={item.label} aria-current="page" tabIndex={0}>
              {item.label}
            </a>
          )}
        </>
      ) : (
        <>
          {isEllipsisActive ? (
            <Tooltip label={item.label}>
              <Link
                ref={linkRef}
                href={item.link}
                label={item.label}
                subtle
                style={{
                  color: "var(--content-tertiary)",
                  maxWidth: `${breadcrumbItemMaxWidth}px`,
                }}
              />
            </Tooltip>
          ) : (
            <Link
              ref={linkRef}
              href={item.link}
              label={item.label}
              subtle
              style={{
                color: "var(--content-tertiary)",
                maxWidth: `${breadcrumbItemMaxWidth}px`,
              }}
            />
          )}
        </>
      )}
    </div>
  );
};

export default BreadcrumbItem;
