import { BadgeHolderProps } from "../badge/badge.interface";

export type DynamicTabAppearance = "neutral" | "brand";

export interface DynamicTabItemOption extends BadgeHolderProps {
  id: string;
  title: string;
}

export interface DynamicTabItemProps extends BadgeHolderProps {
  id: string;
  index: number;
  title: string;
  parentId: string;
  appearance?: DynamicTabAppearance;
  isActive?: boolean;
  onClick?: () => void;
  onClickClose?: () => void;
  onChangeTabTitle?: (newTitle: string) => void;
  compactSpacing?: boolean;
  isEditable?: boolean;
  isClosable?: boolean;
  updateIndicator?: () => void;
  isHidden?: boolean;
  setIsMoving?: (isMoving: boolean) => void;
  isMoving?: boolean;
  width?: string;
  iconName?: string;
}

export interface DynamicTabProps {
  id?: string;
  appearance?: DynamicTabAppearance;
  options: DynamicTabItemOption[];
  selectedTabId?: string;
  onChangeActiveTab?: (selectedTabId: string) => void;
  onUpdateTabs?: (updatedTabs: DynamicTabItemOption[]) => void;
  compactSpacing?: boolean;
  isClosable?: boolean;
  isEditable?: boolean;
  newTabConfig?: DynamicTabItemOption;
  iconName?: string;
}
