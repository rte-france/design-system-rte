declare const Label: ({ id, label, htmlFor, required, showLabelRequirement, }: {
    id?: string;
    label: string;
    htmlFor?: string;
    required?: boolean;
    showLabelRequirement?: boolean;
}) => import("react").JSX.Element;
export default Label;
