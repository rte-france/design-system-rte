import { DividerAppearance } from '../../../../core/components/divider/divider.interface';
import { SideNavAppearance } from '../../../../core/components/side-nav/side-nav.interface';
import { ReactNode } from '../../../../../node_modules/react';
interface SideNavDefaultFooterProps {
    footerItemsContent: ReactNode;
    collapsible?: boolean;
    isCollapsed: boolean;
    appearance: SideNavAppearance;
    dividerAppearance: DividerAppearance;
    collapseIcon: string;
    onCollapse: () => void;
}
declare function SideNavDefaultFooter({ footerItemsContent, collapsible, isCollapsed, appearance, dividerAppearance, collapseIcon, onCollapse, }: SideNavDefaultFooterProps): import("react").JSX.Element;
export default SideNavDefaultFooter;
