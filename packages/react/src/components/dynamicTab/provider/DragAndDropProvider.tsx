import { DynamicTabItemOption } from "@design-system-rte/core";
import { DragDropProvider as DndKitDragDropProvider } from "@dnd-kit/react";
import { isSortable } from "@dnd-kit/react/sortable";

interface DragAndDropProviderProps {
  children: React.ReactNode;
  internalOptions: DynamicTabItemOption[];
  setInternalOptions: (options: DynamicTabItemOption[]) => void;
  onUpdateTabs?: (options: DynamicTabItemOption[]) => void;
  onDragEndCallback?: () => void;
  onBeforeDragStartCallback?: () => void;
}

const DragAndDropProvider = ({
  children,
  internalOptions,
  setInternalOptions,
  onUpdateTabs,
  onDragEndCallback,
  onBeforeDragStartCallback,
}: DragAndDropProviderProps) => {
  return (
    <DndKitDragDropProvider
      onBeforeDragStart={() => {
        onBeforeDragStartCallback?.();
      }}
      onDragEnd={({ operation }) => {
        const { source } = operation;
        if (source && isSortable(source)) {
          const sourceIndex = source.initialIndex;
          const destinationIndex = source.index;
          const movedItem = internalOptions[sourceIndex];
          const newUpdatedOptions = [...internalOptions.filter((option) => option.id !== movedItem.id)];
          newUpdatedOptions.splice(destinationIndex, 0, movedItem);
          setInternalOptions(newUpdatedOptions);
          onUpdateTabs?.(newUpdatedOptions);
          onDragEndCallback?.();
        }
      }}
    >
      {children}
    </DndKitDragDropProvider>
  );
};

export default DragAndDropProvider;
