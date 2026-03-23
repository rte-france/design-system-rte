import { getNodeAtPath, parsePathString, TreeviewItemProps } from "@design-system-rte/core";
import { useCallback, useEffect, useState } from "react";

export const useSelectItem = (selectedId: string, selectedPath?: string, items?: TreeviewItemProps[]) => {
  const [internalSelectedId, setInternalSelectedId] = useState<string | null>(selectedId || null);

  const selectByNodePath = useCallback((pathString: string, items: TreeviewItemProps[]) => {
    const pathIndices = parsePathString(pathString);
    const node = getNodeAtPath(items, pathIndices);
    const id = node?.id ?? node?.labelText;
    if (id) {
      setInternalSelectedId(id);
    } else {
      setInternalSelectedId(null);
    }
  }, []);

  useEffect(() => {
    if (selectedId) {
      setInternalSelectedId(selectedId);
    } else {
      if (selectedPath && items) {
        selectByNodePath(selectedPath, items);
      }
    }
  }, [selectedId, selectedPath, items, selectByNodePath]);

  return { internalSelectedId, setInternalSelectedId };
};
