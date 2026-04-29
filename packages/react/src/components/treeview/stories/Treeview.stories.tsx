import {
  TESTING_DOWN_KEY,
  TESTING_UP_KEY,
  TESTING_ARROW_LEFT_KEY,
  TESTING_ARROW_RIGHT_KEY,
  TESTING_SPACE_KEY,
} from "@design-system-rte/core";
import {
  TreeviewActionMenuItem,
  TreeviewItemProps,
} from "@design-system-rte/core/components/treeview/treeview-item.interface";
import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect } from "@storybook/test";

import Treeview from "../Treeview";

const meta = {
  title: "Composants/Treeview/Treeview",
  component: Treeview,
  decorators: [
    (Story) => (
      <div style={{ minWidth: "200px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Treeview>;

export default meta;
type Story = StoryObj<typeof meta>;

const baseNavigationData: TreeviewItemProps[] = [
  { id: "home", labelText: "Home", icon: "home", hasIcon: true },
  {
    id: "documents",
    labelText: "Documents",
    icon: "folder",
    hasIcon: true,
    isOpen: true,
    items: [
      {
        id: "work",
        labelText: "Work",
        icon: "folder",
        hasIcon: true,
        items: [
          { id: "project-a", labelText: "Project A" },
          { id: "project-b", labelText: "Project B" },
        ],
      },
      { id: "personal", labelText: "Personal", icon: "folder", hasIcon: true },
    ],
  },
];

const withActionIcon = (
  items: TreeviewItemProps[],
  actionIcon: string,
  actionMenuItems?: TreeviewActionMenuItem[],
): TreeviewItemProps[] => {
  return items.map((item) => ({
    ...item,
    actionIcon,
    onActionIconClick: (itemId: string) => {
      alert(`Action clicked for item: ${itemId}`);
    },
    ...(actionMenuItems && { actionMenuItems }),
    ...(item.items && { items: withActionIcon(item.items, actionIcon, actionMenuItems) }),
  }));
};

const actionMenuItems: TreeviewActionMenuItem[] = [
  { label: "Edit", leftIcon: "edit", hasSeparator: true },
  { label: "Duplicate", leftIcon: "copy" },
  { label: "Delete", leftIcon: "delete", hasSeparator: true },
  { label: "Rename", leftIcon: "edit" },
];

const actionIconDropdownData = withActionIcon(baseNavigationData, "more-horiz", actionMenuItems);

const actionIconCustomBehaviorData = withActionIcon(baseNavigationData, "info-i");

const navigationData = baseNavigationData;

const badgeData: TreeviewItemProps[] = [
  {
    id: "settings",
    labelText: "Label",
    icon: "settings",
    hasIcon: true,
    hasBadge: true,
    actionIcon: "more-horiz",
    actionMenuItems: actionMenuItems,
  },
];

const checkboxCascadeData: TreeviewItemProps[] = [
  {
    id: "nesting-1",
    labelText: "Nesting 1 (check toggles all descendants)",
    isOpen: true,
    items: [
      {
        id: "nesting-2a",
        labelText: "Nesting 2a",
        isOpen: true,
        items: [
          { id: "nesting-3a", labelText: "Nesting 3a" },
          { id: "nesting-3b", labelText: "Nesting 3b" },
        ],
      },
      {
        id: "nesting-2b",
        labelText: "Nesting 2b",
        isOpen: true,
        items: [{ id: "nesting-3c", labelText: "Nesting 3c" }],
      },
    ],
  },
];

const keyboardNavigationData: TreeviewItemProps[] = [
  {
    id: "folder",
    labelText: "Folder",
    icon: "folder",
    hasIcon: true,
    isOpen: true,
    hasCheckbox: true,
    actionIcon: "info-i",
    items: [
      {
        id: "subfolder",
        labelText: "Subfolder",
        icon: "folder",
        hasIcon: true,
        isOpen: true,
        hasCheckbox: true,
        actionIcon: "info-i",
        hasBadge: true,
        items: [
          {
            id: "file",
            labelText: "File",
            icon: "file-copy",
            hasIcon: true,
            hasCheckbox: true,
            actionIcon: "info-i",
          },
        ],
      },
    ],
  },
];

function createConnectorLinesData(options: { middleOpen?: boolean } = {}): TreeviewItemProps[] {
  const { middleOpen = true } = options;
  return [
    {
      id: "root",
      labelText: "Root",
      hasIcon: true,
      icon: "folder",
      isOpen: true,
      items: [
        {
          id: "first",
          labelText: "First (branch/T-shape)",
          hasIcon: true,
          icon: "folder",
          isOpen: true,
          items: [
            {
              id: "first-1",
              labelText: "First-1 (branch)",
              hasIcon: true,
              icon: "folder",
              isOpen: true,
            },
            {
              id: "first-2",
              labelText: "First-2 (corner/L-shape)",
              hasIcon: true,
              icon: "folder",
              isOpen: true,
              items: [{ id: "first-2-a", labelText: "First-2-a (level 4)", hasIcon: true, icon: "folder" }],
            },
          ],
        },
        {
          id: "middle",
          labelText: "Middle (branch/T-shape)",
          hasIcon: true,
          icon: "folder",
          isOpen: middleOpen,
          items: [{ id: "middle-1", labelText: "Middle-1 (corner/L-shape)", hasIcon: true, icon: "folder" }],
        },
        { id: "last", labelText: "Last (corner/L-shape)", hasIcon: true, icon: "folder" },
      ],
    },
  ];
}

export const NestedItems: Story = {
  tags: ["skip-ci"],
  args: {
    items: createConnectorLinesData({ middleOpen: true }),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Nested structure with 4 levels of depth. Demonstrates branch/T-shape and corner/L-shape connector lines across multi-level hierarchy.",
      },
    },
  },
};

export const Compact: Story = {
  tags: ["skip-ci"],
  args: {
    items: navigationData,
    isCompact: true,
  },
};

export const PreselectedState: Story = {
  tags: ["skip-ci"],
  args: {
    items: createConnectorLinesData({ middleOpen: false }),
    selectedId: "first-2",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Item first-2 is preselected (highlighted). Selection is independent from check state. Use selectedPath input as alternative to select by index path (e.g. '0-1-0').",
      },
    },
  },
};

export const SelectionExclusive: Story = {
  tags: ["skip-ci"],
  args: {
    items: navigationData,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await clickTreeItem(canvas, "Home", "home");
    expectTreeItemSelected(canvas, "Home");

    await clickTreeItem(canvas, "Documents", "documents");
    expectTreeItemNotSelected(canvas, "Home");
    expectTreeItemSelected(canvas, "Documents");
  },
  parameters: {
    docs: {
      description: {
        story:
          "Selection is exclusive: clicking an item selects it; clicking another item deselects the first and selects the new one.",
      },
    },
  },
};

export const ActionIconDropdown: Story = {
  tags: ["skip-ci"],
  args: {
    items: actionIconDropdownData,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Each item has an action icon (more-horiz) that opens a dropdown menu with Edit, Duplicate, Delete, and Rename options. Click the icon to show or hide the menu.",
      },
    },
  },
};

export const ActionIconCustomBehavior: Story = {
  tags: ["skip-ci"],
  args: {
    items: actionIconCustomBehaviorData,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Each item has an info icon as action icon. Clicking the icon triggers a custom behavior (console log) instead of opening a dropdown.",
      },
    },
  },
};

export const WithBadge: Story = {
  args: {
    items: badgeData,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Item with a red indicator badge (size S) between the label and the action icon. The badge is a fixed design: no configuration options.",
      },
    },
  },
};

export const SelectionIndependence: Story = {
  args: {
    items: [],
  },
  render: () => {
    const leftItems = createSelectionTrees("left");
    const rightItems = createSelectionTrees("right");
    return (
      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
        <div>
          <h3 style={{ margin: "0 0 0.5rem 0" }}>Left tree</h3>
          <Treeview items={leftItems} />
        </div>
        <div>
          <h3 style={{ margin: "0 0 0.5rem 0" }}>Right tree</h3>
          <Treeview items={rightItems} />
        </div>
      </div>
    );
  },
};

export const CheckboxNesting: Story = {
  args: {
    items: checkboxCascadeData,
    hasCheckbox: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Checkboxes with nested hierarchy. Checking a parent checks all descendants. Checkboxes are hidden by default; hover or focus to reveal. Once any item is checked, all become visible. When hasCheckbox is false, a spacer preserves layout alignment. Use checkedIdsChange to receive the set of checked ids.",
      },
    },
  },
};

export const CheckboxIndeterminate: Story = {
  args: {
    items: checkboxCascadeData,
    hasCheckbox: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await clickCheckbox(canvas, "Nesting 3b");
    expectChecked(canvas, "Nesting 3b");
    expectIndeterminate(canvas, "Nesting 2a");
    expectIndeterminate(canvas, "Nesting 1");
    expectUnchecked(canvas, "Nesting 2b");
    expectUnchecked(canvas, "Nesting 3a");
    expectUnchecked(canvas, "Nesting 3c");

    await clickCheckbox(canvas, "Nesting 3c");
    expectChecked(canvas, "Nesting 3c");
    expectChecked(canvas, "Nesting 3b");
    expectChecked(canvas, "Nesting 2b");
    expectIndeterminate(canvas, "Nesting 1");
    expectIndeterminate(canvas, "Nesting 2a");
    expectUnchecked(canvas, "Nesting 3a");
  },
  parameters: {
    docs: {
      description: {
        story:
          "Click leaf Nesting 3b: parent Nesting 2a and root Nesting 1 become indeterminate. Click sibling Nesting 3c: Nesting 2b checked, Nesting 1 still indeterminate.",
      },
    },
  },
};

export const CheckboxCascadeChecked: Story = {
  args: {
    items: checkboxCascadeData,
    hasCheckbox: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await clickCheckbox(canvas, "Nesting 1");
    for (const label of checkboxScenarioLabels) {
      expectChecked(canvas, label);
    }

    await clickCheckbox(canvas, "Nesting 1");
    for (const label of checkboxScenarioLabels) {
      expectUnchecked(canvas, label);
    }

    await clickCheckbox(canvas, "Nesting 3c");
    expectChecked(canvas, "Nesting 2b");
    expectChecked(canvas, "Nesting 3c");
    expectIndeterminate(canvas, "Nesting 1");

    await clickCheckbox(canvas, "Nesting 3a");
    await clickCheckbox(canvas, "Nesting 3b");
    expectChecked(canvas, "Nesting 2a");
    expectChecked(canvas, "Nesting 3a");
    expectChecked(canvas, "Nesting 3b");
    expectChecked(canvas, "Nesting 1");
    for (const label of checkboxScenarioLabels) {
      expectChecked(canvas, label);
    }
  },
  parameters: {
    docs: {
      description: {
        story:
          "Parent-to-children: click Nesting 1 to check all. Children-to-parent: check Nesting 3c then Nesting 3a and Nesting 3b to auto-check Nesting 2a and Nesting 1.",
      },
    },
  },
};

export const CheckboxCascadeUnchecked: Story = {
  args: {
    items: checkboxCascadeData,
    hasCheckbox: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await clickCheckbox(canvas, "Nesting 1");
    for (const label of checkboxScenarioLabels) {
      expectChecked(canvas, label);
    }
    await clickCheckbox(canvas, "Nesting 1");
    for (const label of checkboxScenarioLabels) {
      expectUnchecked(canvas, label);
    }

    await clickCheckbox(canvas, "Nesting 2a");
    expectChecked(canvas, "Nesting 2a");
    expectChecked(canvas, "Nesting 3a");
    expectChecked(canvas, "Nesting 3b");

    await clickCheckbox(canvas, "Nesting 3a");
    await clickCheckbox(canvas, "Nesting 3b");
    expectUnchecked(canvas, "Nesting 1");
    expectUnchecked(canvas, "Nesting 2a");
    expectUnchecked(canvas, "Nesting 3a");
    expectUnchecked(canvas, "Nesting 3b");
  },
  parameters: {
    docs: {
      description: {
        story:
          "Toggle parent off: all unchecked. Check Nesting 2a (cascades to 3a, 3b), then uncheck 3a and 3b: Nesting 2a and descendants unchecked.",
      },
    },
  },
};

export const KeyboardNavigation: Story = {
  args: {
    items: keyboardNavigationData.map((item) => ({
      ...item,
      onActionIconClick: (itemId: string) => {
        (window as unknown as { lastActionIconClick?: string }).lastActionIconClick = itemId;
      },
    })),
    hasCheckbox: true,
    id: "treeview-keyboard-nav",
  },
  render: (args) => (
    <div style={{ display: "flex", gap: "1rem", minWidth: "280px", flexDirection: "column" }}>
      <button data-testid="before-tree">Before tree</button>
      <Treeview {...args} />
      <button data-testid="after-tree">After tree</button>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const beforeTree = canvas.getByTestId("before-tree");
    const afterTree = canvas.getByTestId("after-tree");

    await userEvent.click(beforeTree);
    expect(beforeTree).toHaveFocus();

    await userEvent.tab();
    expectFocusedContent(canvas, "folder");

    await userEvent.keyboard(TESTING_DOWN_KEY);
    expectFocusedContent(canvas, "subfolder");

    await userEvent.keyboard(TESTING_DOWN_KEY);
    expectFocusedContent(canvas, "file");

    await userEvent.keyboard(TESTING_DOWN_KEY);
    expectFocusedContent(canvas, "file");

    await userEvent.keyboard(TESTING_UP_KEY);
    expectFocusedContent(canvas, "subfolder");

    await userEvent.keyboard(TESTING_UP_KEY);
    expectFocusedContent(canvas, "folder");

    await userEvent.keyboard(TESTING_UP_KEY);
    expectFocusedContent(canvas, "folder");

    await userEvent.keyboard(TESTING_ARROW_LEFT_KEY);
    expectFocusedElement(canvas, "folder", "chevron");

    await userEvent.keyboard(TESTING_ARROW_LEFT_KEY);
    expectFocusedElement(canvas, "folder", "checkbox");

    await userEvent.keyboard(TESTING_ARROW_LEFT_KEY);
    expectFocusedElement(canvas, "folder", "checkbox");

    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    expectFocusedElement(canvas, "folder", "chevron");

    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    expectFocusedElement(canvas, "folder", "content");

    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    expectFocusedElement(canvas, "folder", "action");

    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    expectFocusedElement(canvas, "folder", "action");

    await userEvent.keyboard(TESTING_ARROW_LEFT_KEY);
    expectFocusedElement(canvas, "folder", "content");

    await userEvent.keyboard(TESTING_SPACE_KEY);
    expectTreeItemSelectedById(canvas, "folder");

    await userEvent.keyboard(TESTING_ARROW_LEFT_KEY);
    expectFocusedElement(canvas, "folder", "chevron");
    await userEvent.keyboard(TESTING_SPACE_KEY);
    const folderTreeitem = getTreeitemByDataId(canvas, "folder");
    expect(folderTreeitem.getAttribute("aria-expanded")).toBe("false");

    await userEvent.keyboard(TESTING_SPACE_KEY);
    expect(folderTreeitem.getAttribute("aria-expanded")).toBe("true");

    await userEvent.keyboard(TESTING_ARROW_LEFT_KEY);
    expectFocusedElement(canvas, "folder", "checkbox");
    await userEvent.keyboard(TESTING_SPACE_KEY);
    expectCheckedById(canvas, "folder");

    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    expectFocusedElement(canvas, "folder", "chevron");
    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    expectFocusedElement(canvas, "folder", "content");
    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    expectFocusedElement(canvas, "folder", "action");
    await userEvent.keyboard(TESTING_SPACE_KEY);
    expect((window as unknown as { lastActionIconClick?: string }).lastActionIconClick).toBe("folder");

    await userEvent.tab();
    expect(afterTree).toHaveFocus();

    await userEvent.tab({ shift: true });
    expectFocusedContent(canvas, "folder");
  },
  parameters: {
    docs: {
      description: {
        story:
          "Keyboard navigation: Tab enters tree (first content focused). ArrowUp/Down move between rows (stay at boundaries). ArrowLeft/Right move within row (checkbox→chevron→content→action). Space on content selects, on chevron expands/collapses, on checkbox toggles, on action emits. Tab exits; re-entry focuses first item.",
      },
    },
  },
};

const clickTreeItem = (canvas: ReturnType<typeof within>, label: string, id: string): Promise<void> => {
  const treeitem = canvas.getByRole("treeitem", { name: new RegExp(label, "i") });
  const mainContent = within(treeitem).getByTestId("treeview-item-main-content-" + id) as HTMLElement;
  return userEvent.click(mainContent);
};

const expectTreeItemSelected = (canvas: ReturnType<typeof within>, label: string): void => {
  const treeitem = canvas.getByRole("treeitem", { name: new RegExp(label, "i") });
  expect(treeitem.getAttribute("aria-selected")).toBe("true");
};

const expectTreeItemNotSelected = (canvas: ReturnType<typeof within>, label: string): void => {
  const treeitem = canvas.getByRole("treeitem", { name: new RegExp(label, "i") });
  expect(treeitem.getAttribute("aria-selected")).toBe("false");
};

const createSelectionTrees = (prefix: string): TreeviewItemProps[] => {
  return [
    {
      id: `${prefix}-a`,
      labelText: `${prefix} A`,
      icon: "folder",
      hasIcon: true,
      isOpen: true,
      items: [
        { id: `${prefix}-a1`, labelText: `${prefix} A1`, icon: "folder", hasIcon: true },
        { id: `${prefix}-a2`, labelText: `${prefix} A2`, icon: "folder", hasIcon: true },
      ],
    },
    {
      id: `${prefix}-b`,
      labelText: `${prefix} B`,
      icon: "folder",
      hasIcon: true,
      items: [{ id: `${prefix}-b1`, labelText: `${prefix} B1`, icon: "folder", hasIcon: true }],
    },
  ];
};

const checkboxScenarioLabels = ["Nesting 1", "Nesting 2a", "Nesting 2b", "Nesting 3a", "Nesting 3b", "Nesting 3c"];

const checkboxScenarioLabelToId: Record<string, string> = {
  "Nesting 1": "nesting-1",
  "Nesting 2a": "nesting-2a",
  "Nesting 2b": "nesting-2b",
  "Nesting 3a": "nesting-3a",
  "Nesting 3b": "nesting-3b",
  "Nesting 3c": "nesting-3c",
};

function getTreeitemByLabel(canvas: ReturnType<typeof within>, label: string): HTMLElement {
  const dataItemId = checkboxScenarioLabelToId[label];
  if (dataItemId) {
    const tree = canvas.getByRole("tree");
    const element = tree.querySelector(`[data-item-id="${dataItemId}"]`) as HTMLElement;
    if (element) return element;
  }
  const matches = canvas.getAllByRole("treeitem", { name: new RegExp(label, "i") });
  const leaf = matches.find((element: HTMLElement) => !element.querySelector('[role="treeitem"]'));
  return matches.length === 1 ? matches[0] : (leaf ?? matches[0]);
}

function getCheckboxInTreeitem(treeitem: HTMLElement): HTMLElement {
  const row = treeitem.children[0] as HTMLElement;
  if (!row) throw new Error("Row not found");
  return row.querySelector("input[type='checkbox']") as HTMLElement;
}

function getCheckboxInput(treeitem: HTMLElement): HTMLInputElement {
  return treeitem.querySelector('input[type="checkbox"]') as HTMLInputElement;
}

function clickCheckbox(canvas: ReturnType<typeof within>, label: string): Promise<void> {
  const treeitem = getTreeitemByLabel(canvas, label);
  const row = treeitem.children[0] as HTMLElement;
  return userEvent.hover(row).then(() => userEvent.click(getCheckboxInTreeitem(treeitem)));
}

function expectChecked(canvas: ReturnType<typeof within>, label: string): void {
  const input = getCheckboxInput(getTreeitemByLabel(canvas, label));
  expect(input.checked).toBe(true);
  expect(input.indeterminate).toBe(false);
}

function expectIndeterminate(canvas: ReturnType<typeof within>, label: string): void {
  const input = getCheckboxInput(getTreeitemByLabel(canvas, label));
  expect(input.indeterminate).toBe(true);
}

function expectUnchecked(canvas: ReturnType<typeof within>, label: string): void {
  const input = getCheckboxInput(getTreeitemByLabel(canvas, label));
  expect(input.checked).toBe(false);
  expect(input.indeterminate).toBe(false);
}

function getTreeitemByDataId(canvas: ReturnType<typeof within>, itemId: string): HTMLElement {
  const tree = canvas.getByRole("tree");
  const element = tree.querySelector(`[data-item-id="${itemId}"]`) as HTMLElement;
  if (!element) throw new Error(`Treeitem with data-item-id="${itemId}" not found`);
  return element;
}

function getFocusableInTreeitem(
  treeitem: HTMLElement,
  type: "checkbox" | "chevron" | "content" | "action",
): HTMLElement {
  const element = treeitem.querySelector(`[data-treeview-focusable="${type}"]`) as HTMLElement;
  if (!element) throw new Error(`Focusable "${type}" not found in treeitem`);
  return element;
}

function expectFocusedElement(
  canvas: ReturnType<typeof within>,
  itemId: string,
  focusableType: "checkbox" | "chevron" | "content" | "action",
): void {
  const treeitem = getTreeitemByDataId(canvas, itemId);
  const expected = getFocusableInTreeitem(treeitem, focusableType);
  expect(document.activeElement).toBe(expected);
}

function expectFocusedContent(canvas: ReturnType<typeof within>, itemId: string): void {
  expectFocusedElement(canvas, itemId, "content");
}

function expectTreeItemSelectedById(canvas: ReturnType<typeof within>, itemId: string): void {
  const treeitem = getTreeitemByDataId(canvas, itemId);
  expect(treeitem.getAttribute("aria-selected")).toBe("true");
}

function expectCheckedById(canvas: ReturnType<typeof within>, itemId: string): void {
  const treeitem = getTreeitemByDataId(canvas, itemId);
  const input = getCheckboxInput(treeitem);
  expect(input.checked).toBe(true);
  expect(input.indeterminate).toBe(false);
}
