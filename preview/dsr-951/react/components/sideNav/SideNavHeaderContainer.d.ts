import { DividerAppearance } from '../../../../core/components/divider/divider.interface';
import { SideNavAppearance } from '../../../../core/components/side-nav/side-nav.interface';
import { ReactNode } from '../../../../../node_modules/react';
interface SideNavHeaderContainerProps {
    isCollapsed: boolean;
    appearance: SideNavAppearance;
    dividerAppearance: DividerAppearance;
    isCompact?: boolean;
    children: ReactNode;
}
declare function SideNavHeaderContainer({ isCollapsed, appearance, dividerAppearance, isCompact, children, }: SideNavHeaderContainerProps): import("react").JSX.Element;
export default SideNavHeaderContainer;
