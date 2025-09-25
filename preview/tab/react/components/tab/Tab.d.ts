interface TabProps {
    options: {
        id: string;
        panelId: string;
        label: string;
        selected?: boolean;
    }[];
    onChange: (id: string) => void;
    direction?: "horizontal" | "vertical";
    alignment?: "start" | "center";
    selectedTabId?: string;
}
declare const Tab: ({ options, onChange, direction, alignment, selectedTabId }: TabProps) => import("react/jsx-runtime").JSX.Element;
export default Tab;
