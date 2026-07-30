import { DynamicTabItemOption } from "./dynamic-tab.interface";

const generateUniqueId = (): string => `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

export const buildNewTab = (
  newTabConfig: DynamicTabItemOption | undefined,
  existingOptions: DynamicTabItemOption[],
): DynamicTabItemOption | null => {
  if (!newTabConfig) {
    return null;
  }

  const hasDuplicateId = existingOptions.some((option) => option.id === newTabConfig.id);

  return {
    id: hasDuplicateId ? `${newTabConfig.id}-${generateUniqueId()}` : newTabConfig.id,
    title: newTabConfig.title,
    badgeContent: newTabConfig.badgeContent,
    badgeCount: newTabConfig.badgeCount,
    badgeIcon: newTabConfig.badgeIcon,
    badgeType: newTabConfig.badgeType,
    showBadge: newTabConfig.showBadge,
    badgeSize: newTabConfig.badgeSize,
  };
};
