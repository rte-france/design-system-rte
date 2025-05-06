export type Direction = "horizontal" | "vertical";

export interface CheckboxGroupProps {
    groupName: string;
    items: string[];
    direction?: Direction;
    showItemsLabel?: boolean;
    groupTitle?: string;
    showGroupTitle?: boolean;
    groupHelpText?: string;
    showHelpText?: boolean;
    errorMessage?: string;
    error?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
}