import { DividerAppearance } from '../../../../core/components/divider/divider.interface';
import { SideNavAppearance, SideNavHeaderConfig } from '../../../../core/components/side-nav/side-nav.interface';
interface SideNavDefaultHeaderProps {
    headerConfig: SideNavHeaderConfig;
    isCollapsed: boolean;
    shouldShowTitle: boolean;
    appearance: SideNavAppearance;
    dividerAppearance: DividerAppearance;
}
declare function SideNavDefaultHeader({ headerConfig, isCollapsed, shouldShowTitle, appearance, dividerAppearance, }: SideNavDefaultHeaderProps): import("react").JSX.Element;
export default SideNavDefaultHeader;
