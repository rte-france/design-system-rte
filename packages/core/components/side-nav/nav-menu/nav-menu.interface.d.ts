import { NavGroupItem } from "../nav-item/nav-item.interface";
import { SideNavContrast } from "../side-nav.interface";

export interface NavMenuComponentProps extends NavGroupItem {
  contrast?: SideNavContrast;
  onOpenChange?: (open: boolean) => void;
}
