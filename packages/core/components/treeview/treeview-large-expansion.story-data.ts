import type { TreeviewItemProps } from "./treeview-item.interface";
import { TREEVIEW_ROW_HEIGHT_PX } from "./treeview.constants";

export const TREEVIEW_LEGACY_CHILDREN_OPEN_MAX_HEIGHT_PX = 2000;

export const largeExpansionRowCountBuffer = 15;

export const largeExpansionDefaultChildCount =
  Math.ceil(TREEVIEW_LEGACY_CHILDREN_OPEN_MAX_HEIGHT_PX / TREEVIEW_ROW_HEIGHT_PX) + largeExpansionRowCountBuffer;

export const largeExpansionNestedChildrenPerLevel = Math.ceil(largeExpansionDefaultChildCount / 2);

export function createManyLeafItems(count: number, idPrefix = "leaf"): TreeviewItemProps[] {
  return Array.from({ length: count }, (_, index) => {
    const ordinal = index + 1;
    return {
      id: `${idPrefix}-${ordinal}`,
      labelText: `${idPrefix}-${String(ordinal).padStart(3, "0")}`,
    };
  });
}

export function createLargeExpansionScenarioData(childCount = largeExpansionDefaultChildCount): TreeviewItemProps[] {
  return [
    {
      id: "dem0265433-reflecto",
      labelText: "DEM0265433-Reflecto_P.ORG-RC",
      icon: "folder",
      isOpen: true,
      items: [
        {
          id: "phase2-inuit-many-indices",
          labelText: "Phase2-SO-INUIT",
          icon: "folder",
          isOpen: true,
          items: createManyLeafItems(childCount, "CM-Indice"),
        },
        {
          id: "cm-sibling-after-large-branch",
          labelText: "CM-SiblingAfterLargeBranch",
          icon: "folder",
        },
        {
          id: "cm-sibling-second",
          labelText: "CM-SecondSibling",
          icon: "folder",
        },
        {
          id: "nouvelle-ait",
          labelText: "Nouvelle AIT",
          icon: "add-circle",
          actionIcon: "add-circle",
        },
      ],
    },
  ];
}

export const largeExpansionScenarioData = createLargeExpansionScenarioData();

export function createLargeExpansionNestedScenarioData(
  childrenPerLevel = largeExpansionNestedChildrenPerLevel,
): TreeviewItemProps[] {
  return [
    {
      id: "nested-root",
      labelText: "Nested large expansion",
      icon: "folder",
      isOpen: true,
      items: [
        {
          id: "nested-level-1",
          labelText: "Level 1 (many children)",
          icon: "folder",
          isOpen: true,
          items: createManyLeafItems(childrenPerLevel, "L1-Item"),
        },
        {
          id: "nested-level-1-sibling",
          labelText: "CM-Level1-Sibling",
          icon: "folder",
          isOpen: true,
          items: [
            {
              id: "nested-level-2",
              labelText: "Level 2 (many children)",
              icon: "folder",
              isOpen: true,
              items: createManyLeafItems(childrenPerLevel, "L2-Item"),
            },
            {
              id: "nested-level-2-sibling",
              labelText: "CM-Level2-Sibling",
              icon: "folder",
            },
          ],
        },
      ],
    },
  ];
}

export const largeExpansionNestedScenarioData = createLargeExpansionNestedScenarioData();
