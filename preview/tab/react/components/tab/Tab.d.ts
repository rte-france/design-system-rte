interface TabProps {
    options: {
        id: string;
        panelId: string;
        label?: string;
        selected?: boolean;
        icon?: string;
        badgeCount?: number;
        badgeAppearance?: "text" | "icon";
        badgeIcon?: string;
    }[];
    onChange: (id: string) => void;
    direction?: "horizontal" | "vertical";
    alignment?: "start" | "center";
    selectedTabId?: string;
    compactSpacing?: boolean;
}
declare const Tab: ({ options, onChange, direction, alignment, selectedTabId, compactSpacing, }: TabProps) => import("react/jsx-runtime").JSX.Element;
export default Tab;
