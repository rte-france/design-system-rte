import { DynamicTabItemOption } from "@design-system-rte/core";

import { generateId } from "../../utils";

export const buildNewTab = (
  newTabConfig: DynamicTabItemOption | undefined,
  internalOptions: DynamicTabItemOption[],
): DynamicTabItemOption | null => {
  if (!newTabConfig) return null;
  const hasDuplicateId = internalOptions.some((option) => option.id === newTabConfig.id);
  const newTab: DynamicTabItemOption = {
    id: hasDuplicateId ? newTabConfig.id + `-${generateId()}` : newTabConfig.id,
    title: newTabConfig.title,
    badgeContent: newTabConfig.badgeContent,
    badgeCount: newTabConfig.badgeCount,
    badgeIcon: newTabConfig.badgeIcon,
    badgeType: newTabConfig.badgeType,
  };
  return newTab;
};
