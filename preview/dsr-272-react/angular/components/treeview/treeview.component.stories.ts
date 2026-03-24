import type {
  TreeviewActionMenuItem,
  TreeviewItemProps,
} from "@design-system-rte/core/components/treeview/treeview-item.interface";
import {
  TESTING_ARROW_LEFT_KEY,
  TESTING_ARROW_RIGHT_KEY,
  TESTING_DOWN_KEY,
  TESTING_SPACE_KEY,
  TESTING_UP_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard-test.constants";
import { componentWrapperDecorator, Meta, StoryObj } from "@storybook/angular";
import { expect, userEvent, within } from "@storybook/test";

import { TreeviewItemComponent } from "./treeview-item/treeview-item.component";
import { TreeviewComponent } from "./treeview.component";

const meta: Meta<TreeviewComponent> = {
  title: "Composants/Treeview",
  component: TreeviewComponent,
  tags: ["autodocs"],
  decorators: [componentWrapperDecorator((story) => `<div style="min-width: 200px">${story}</div>`)],
};

export default meta;
type Story = StoryObj<TreeviewComponent>;

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

function withActionIcon(
  items: TreeviewItemProps[],
  actionIcon: string,
  actionMenuItems?: TreeviewActionMenuItem[],
): TreeviewItemProps[] {
  return items.map((item) => ({
    ...item,
    actionIcon,
    ...(actionMenuItems && { actionMenuItems }),
    ...(item.items && { items: withActionIcon(item.items, actionIcon, actionMenuItems) }),
  }));
}

const navigationData = baseNavigationData;

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
  render: () => ({
    props: {
      items: createConnectorLinesData({ middleOpen: true }),
      // items: [
      //   {
      //     id: "root",
      //     labelText: "Root",
      //     hasIcon: true,
      //     icon: "folder",
      //     isOpen: true,
      //     items: [],
      //   },
      // ],
    },
    template: `<rte-treeview id="treeview-nested-items" [items]="items" />`,
    moduleMetadata: {
      imports: [TreeviewComponent, TreeviewItemComponent],
    },
  }),
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
  render: () => ({
    props: {
      items: navigationData,
    },
    template: `<rte-treeview id="treeview-compact" [items]="items" [hasCheckbox]="true" [isCompact]="true"/>`,
    moduleMetadata: {
      imports: [TreeviewComponent, TreeviewItemComponent],
    },
  }),
};

export const DottedLine: Story = {
  render: () => ({
    props: {
      items: navigationData,
    },
    template: `<rte-treeview id="treeview-dotted-line" [items]="items" [dottedLine]="true" />`,
    moduleMetadata: {
      imports: [TreeviewComponent, TreeviewItemComponent],
    },
  }),
};

export const PreSelectedState: Story = {
  render: () => ({
    props: {
      items: createConnectorLinesData({ middleOpen: false }),
      selectedId: "first-2",
    },
    template: `<rte-treeview id="treeview-preselected-state" [items]="items" [selectedId]="selectedId" />`,
    moduleMetadata: {
      imports: [TreeviewComponent, TreeviewItemComponent],
    },
  }),
  parameters: {
    docs: {
      description: {
        story:
          "Item first-2 is preselected (highlighted). Selection is independent from check state. Use selectedPath input as alternative to select by index path (e.g. '0-1-0').",
      },
    },
  },
};

function createSelectionTrees(prefix: string): TreeviewItemProps[] {
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
}

function clickTreeItem(canvas: ReturnType<typeof within>, label: string): Promise<void> {
  const treeitem = canvas.getByRole("treeitem", { name: new RegExp(label, "i") });
  const mainContent = treeitem.querySelector(".treeview-item-main-content") as HTMLElement;
  return userEvent.click(mainContent);
}

function expectTreeItemSelected(canvas: ReturnType<typeof within>, label: string): void {
  const treeitem = canvas.getByRole("treeitem", { name: new RegExp(label, "i") });
  expect(treeitem.getAttribute("aria-selected")).toBe("true");
}

function expectTreeItemNotSelected(canvas: ReturnType<typeof within>, label: string): void {
  const treeitem = canvas.getByRole("treeitem", { name: new RegExp(label, "i") });
  expect(treeitem.getAttribute("aria-selected")).toBe("false");
}

export const SelectionExclusive: Story = {
  render: () => ({
    props: {
      items: navigationData,
    },
    template: `<rte-treeview id="treeview-selection-exclusive" data-testid="treeview-selection-exclusive" [items]="items" />`,
    moduleMetadata: {
      imports: [TreeviewComponent, TreeviewItemComponent],
    },
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await clickTreeItem(canvas, "Home");
    expectTreeItemSelected(canvas, "Home");

    await clickTreeItem(canvas, "Documents");
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

const actionMenuItems: TreeviewActionMenuItem[] = [
  { label: "Edit", leftIcon: "edit", hasSeparator: true },
  { label: "Duplicate", leftIcon: "copy" },
  { label: "Delete", leftIcon: "delete", hasSeparator: true },
  { label: "Rename", leftIcon: "edit" },
];

const actionIconDropdownData = withActionIcon(baseNavigationData, "more-horiz", actionMenuItems);

export const ActionIconDropdown: Story = {
  render: () => ({
    props: {
      items: actionIconDropdownData,
    },
    template: `
      <rte-treeview
        id="treeview-action-icon-dropdown"
        [items]="items"
        (actionIconClick)="onActionIconClick($event)"
      />
    `,
    moduleMetadata: {
      imports: [TreeviewComponent, TreeviewItemComponent],
    },
  }),
  parameters: {
    docs: {
      description: {
        story:
          "Each item has an action icon (more-horiz) that opens a dropdown menu with Edit, Duplicate, Delete, and Rename options. Click the icon to show or hide the menu.",
      },
    },
  },
};

const actionIconCustomBehaviorData = withActionIcon(baseNavigationData, "info-i");

export const ActionIconCustomBehavior: Story = {
  render: () => ({
    props: {
      items: actionIconCustomBehaviorData,
      onActionIconClick: (event: { itemId: string; event: Event }) => {
        window.alert(`Action clicked for item: ${event.itemId}`);
      },
    },
    template: `
      <rte-treeview
        id="treeview-action-icon-custom-behavior"
        [items]="items"
        (actionIconClick)="onActionIconClick($event)"
      />
    `,
    moduleMetadata: {
      imports: [TreeviewComponent, TreeviewItemComponent],
    },
  }),
  parameters: {
    docs: {
      description: {
        story:
          "Each item has an info icon without a built-in dropdown. The consumer handles the click via actionIconClick and implements custom behavior (e.g. an alert).",
      },
    },
  },
};

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

export const Badge: Story = {
  render: () => ({
    props: {
      items: badgeData,
    },
    template: `<rte-treeview id="treeview-badge" [items]="items" />`,
    moduleMetadata: {
      imports: [TreeviewComponent, TreeviewItemComponent],
    },
  }),
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
  render: () => ({
    props: {
      leftItems: createSelectionTrees("left"),
      rightItems: createSelectionTrees("right"),
    },
    template: `
      <div style="display: flex; gap: 2rem; flex-wrap: wrap;">
        <div>
          <h3 style="margin: 0 0 0.5rem 0;">Left tree</h3>
          <rte-treeview id="treeview-left" [items]="leftItems" />
        </div>
        <div>
          <h3 style="margin: 0 0 0.5rem 0;">Right tree</h3>
          <rte-treeview id="treeview-right" [items]="rightItems" />
        </div>
      </div>
    `,
    moduleMetadata: {
      imports: [TreeviewComponent, TreeviewItemComponent],
    },
  }),
  parameters: {
    docs: {
      description: {
        story:
          "Two treeviews side by side. Selecting an item in one tree does not change the selection in the other; each instance has its own selection state.",
      },
    },
  },
};

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

export const CheckboxNesting: Story = {
  render: () => ({
    props: {
      items: checkboxCascadeData,
    },
    template: `<rte-treeview id="treeview-checkbox-nesting" [items]="items" [hasCheckbox]="true" />`,
    moduleMetadata: {
      imports: [TreeviewComponent, TreeviewItemComponent],
    },
  }),
  parameters: {
    docs: {
      description: {
        story:
          "Checkboxes with nested hierarchy. Checking a parent checks all descendants. Checkboxes are hidden by default; hover or focus to reveal. Once any item is checked, all become visible. When hasCheckbox is false, a spacer preserves layout alignment. Use checkedIdsChange to receive the set of checked ids.",
      },
    },
  },
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
    const tree = canvas.getByTestId("treeview-checkbox-scenario");
    const element = tree.querySelector(`[data-item-id="${dataItemId}"]`) as HTMLElement;
    if (element) return element;
  }
  const matches = canvas.getAllByRole("treeitem", { name: new RegExp(label, "i") });
  const leaf = matches.find((element: HTMLElement) => !element.querySelector('[role="treeitem"]'));
  return matches.length === 1 ? matches[0] : (leaf ?? matches[0]);
}

function getCheckboxInTreeitem(treeitem: HTMLElement): HTMLElement {
  const row = treeitem.querySelector(".treeview-item-row");
  if (!row) throw new Error("Row not found");
  return row.querySelector(".treeview-item-checkbox") as HTMLElement;
}

function getCheckboxInput(treeitem: HTMLElement): HTMLInputElement {
  return treeitem.querySelector('input[type="checkbox"]') as HTMLInputElement;
}

function clickCheckbox(canvas: ReturnType<typeof within>, label: string): Promise<void> {
  const treeitem = getTreeitemByLabel(canvas, label);
  const row = treeitem.querySelector(".treeview-item-row") as HTMLElement;
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

const checkboxScenarioTemplate = `
  <rte-treeview
    id="treeview-checkbox-scenario"
    data-testid="treeview-checkbox-scenario"
    [items]="items"
    [hasCheckbox]="true"
  />
`;

export const CheckboxIndeterminate: Story = {
  render: () => ({
    props: { items: checkboxCascadeData },
    template: checkboxScenarioTemplate,
    moduleMetadata: { imports: [TreeviewComponent, TreeviewItemComponent] },
  }),
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
  render: () => ({
    props: { items: checkboxCascadeData },
    template: checkboxScenarioTemplate,
    moduleMetadata: { imports: [TreeviewComponent, TreeviewItemComponent] },
  }),
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
  render: () => ({
    props: { items: checkboxCascadeData },
    template: checkboxScenarioTemplate,
    moduleMetadata: { imports: [TreeviewComponent, TreeviewItemComponent] },
  }),
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

function getTreeitemByDataId(canvas: ReturnType<typeof within>, itemId: string): HTMLElement {
  const tree = canvas.getByTestId("treeview-keyboard-nav");
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

export const KeyboardNavigation: Story = {
  render: () => ({
    props: {
      items: keyboardNavigationData,
      onActionIconClick: (event: { itemId: string; event: Event }) => {
        (window as unknown as { lastActionIconClick?: string }).lastActionIconClick = event.itemId;
      },
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem; min-width: 280px;">
        <button type="button" data-testid="before-tree">Before tree</button>
        <rte-treeview
          id="treeview-keyboard-nav"
          data-testid="treeview-keyboard-nav"
          [items]="items"
          [hasCheckbox]="true"
          (actionIconClick)="onActionIconClick($event)"
        />
        <button type="button" data-testid="after-tree">After tree</button>
      </div>
    `,
    moduleMetadata: {
      imports: [TreeviewComponent, TreeviewItemComponent],
    },
  }),
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
