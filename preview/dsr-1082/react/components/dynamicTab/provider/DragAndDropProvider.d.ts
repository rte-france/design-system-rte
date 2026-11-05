import { DynamicTabItemOption } from '../../../../../core';
interface DragAndDropProviderProps {
    children: React.ReactNode;
    internalOptions: DynamicTabItemOption[];
    setInternalOptions: (options: DynamicTabItemOption[]) => void;
    onUpdateTabs?: (options: DynamicTabItemOption[]) => void;
    onDragEndCallback?: () => void;
    onBeforeDragStartCallback?: () => void;
}
declare const DragAndDropProvider: ({ children, internalOptions, setInternalOptions, onUpdateTabs, onDragEndCallback, onBeforeDragStartCallback, }: DragAndDropProviderProps) => import("react").JSX.Element;
export default DragAndDropProvider;
