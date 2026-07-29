import { BadgeHolderProps } from "../badge/badge.interface";

type DynamicTabAppearance = "neutral" | "brand";

export interface DynamicTabItemOption extends BadgeHolderProps {
  id: string;
  title: string;
  iconName?: string;
}

interface DynamicTabItemProps extends BadgeHolderProps, React.HTMLAttributes<HTMLLIElement> {
  id: string;
  index: number;
  title: string;
  parentId: string;
  appearance?: DynamicTabAppearance;
  isActive?: boolean;
  onClick?: () => void;
  onClickClose?: () => void;
  onChangeTabTitle?: (newTitle: string) => void;
  iconName?: string;
  compactSpacing?: boolean;
  editable?: boolean;
  closable?: boolean;
  updateIndicator?: () => void;
  isHidden?: boolean;
  setIsMoving?: (isMoving: boolean) => void;
  isMoving?: boolean;
  width?: string;
}

interface DynamicTabProps {
  id: string;
  appearance?: DynamicTabAppearance;
  options: DynamicTabItemOption[];
  selectedTabId?: string;
  onChangeActiveTab?: (selectedTabId: string) => void;
  onUpdateTabs?: (updatedTabs: DynamicTabItemOption[]) => void;
  compactSpacing?: boolean;
  closable?: boolean;
  editable?: boolean;
  newTabConfig?: DynamicTabItemOption;
}
