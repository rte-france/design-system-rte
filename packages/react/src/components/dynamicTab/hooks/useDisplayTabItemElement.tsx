import { useEffect, useState, useCallback } from "react";

import { isValidIconName } from "../../icon/IconMap";

const useDisplayTabItemElement = ({
  tabItem,
  isActive,
  hasBadgeContent,
  iconName,
  isClosable,
}: {
  tabItem: React.RefObject<HTMLLIElement>;
  isActive: boolean;
  hasBadgeContent: boolean;
  iconName?: string;
  isClosable?: boolean;
}) => {
  const [shouldDisplayBadge, setShouldDisplayBadge] = useState(false);
  const [shouldDisplayIcon, setShouldDisplayIcon] = useState(false);
  const [shouldDisplayText, setShouldDisplayText] = useState(false);
  const [shouldDisplayCloseButton, setShouldDisplayCloseButton] = useState(false);

  const tabItemSmallWidth = 104;
  const tabItemXSmallWidth = 48;

  const isZeroToXS = tabItem.current && tabItem.current.offsetWidth <= tabItemXSmallWidth;
  const isXSToS =
    tabItem.current &&
    tabItem.current.offsetWidth > tabItemXSmallWidth &&
    tabItem.current.offsetWidth <= tabItemSmallWidth;
  const isSOrMore = tabItem.current && tabItem.current.offsetWidth > tabItemSmallWidth;

  const computeShouldDisplayBadge = useCallback(() => {
    if (!hasBadgeContent) return false;
    if (isZeroToXS) {
      return !isActive;
    }
    return true;
  }, [hasBadgeContent, isZeroToXS, isActive]);

  const computeShouldDisplayIcon = useCallback(() => {
    if (!iconName) return false;
    if (!isValidIconName(iconName)) return false;
    if (isActive) {
      return !!isSOrMore;
    }
    if (isZeroToXS) {
      return !hasBadgeContent;
    }
    return true;
  }, [iconName, isActive, isSOrMore, isZeroToXS, hasBadgeContent]);

  const computeShouldDisplayText = useCallback(() => {
    return !!(isXSToS || isSOrMore);
  }, [isXSToS, isSOrMore]);

  const computeShouldDisplayCloseButton = useCallback(() => {
    if (!isClosable) return false;
    if (isZeroToXS) {
      return isActive;
    }
    if (isXSToS) {
      return isActive;
    }
    return true;
  }, [isClosable, isZeroToXS, isXSToS, isActive]);

  useEffect(() => {
    setShouldDisplayBadge(computeShouldDisplayBadge());
    setShouldDisplayIcon(computeShouldDisplayIcon());
    setShouldDisplayText(computeShouldDisplayText());
    setShouldDisplayCloseButton(computeShouldDisplayCloseButton());
  }, [computeShouldDisplayBadge, computeShouldDisplayIcon, computeShouldDisplayText, computeShouldDisplayCloseButton]);

  return { shouldDisplayBadge, shouldDisplayIcon, shouldDisplayText, shouldDisplayCloseButton, isZeroToXS };
};

export default useDisplayTabItemElement;
