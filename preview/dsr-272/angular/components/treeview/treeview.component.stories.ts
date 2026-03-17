import type {
  TreeviewActionMenuItem,
  TreeviewItemProps,
} from "@design-system-rte/core/components/treeview/treeview-item.interface";
import { Meta, StoryObj } from "@storybook/angular";
import { expect, userEvent, within } from "@storybook/test";

import { TreeviewItemComponent } from "./treeview-item/treeview-item.component";
import { TreeviewComponent } from "./treeview.component";

const meta: Meta<TreeviewComponent> = {
  title: "Composants/Treeview",
  component: TreeviewComponent,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<TreeviewComponent>;

const singleItemData: TreeviewItemProps[] = [{ id: "root", labelText: "Single item", hasIcon: true, icon: "folder" }];

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

export const SingleItem: Story = {
  render: () => ({
    props: {
      items: singleItemData,
    },
    template: `<rte-treeview id="treeview-single-item" [items]="items" />`,
    moduleMetadata: {
      imports: [TreeviewComponent, TreeviewItemComponent],
    },
  }),
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
            { id: "first-1", labelText: "First-1 (branch)", hasIcon: true, icon: "folder" },
            { id: "first-2", labelText: "First-2 (corner/L-shape)", hasIcon: true, icon: "folder" },
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
          "Nested structure with branch/T-shape and corner/L-shape connector lines. Demonstrates correct rendering of multi-level hierarchy.",
      },
    },
  },
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
      onActionIconClick: (event: { itemId: string; event: Event }) => {
        console.log("actionIconClick", event);
      },
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
