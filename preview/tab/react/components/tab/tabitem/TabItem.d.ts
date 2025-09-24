interface TabItemProps {
    tabId: string;
    tabPanelId: string;
    label: string;
    selected?: boolean;
    onClick?: () => void;
}
declare const TabItem: ({ tabId, tabPanelId, label, selected, onClick }: TabItemProps) => import("react/jsx-runtime").JSX.Element;
export default TabItem;
