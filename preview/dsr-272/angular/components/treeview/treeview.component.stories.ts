import type { TreeviewItemProps } from "@design-system-rte/core/components/treeview/treeview-item.interface";
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

const fileExplorerChildren: TreeviewItemProps[] = [
  {
    id: "summer82",
    labelText: "Summer 82",
    hasCheckbox: true,
    isOpen: true,
    items: [
      {
        id: "sun",
        labelText: "Sun",
        hasCheckbox: true,
      },
    ],
  },
];

const navigationData: TreeviewItemProps[] = [
  {
    id: "home",
    labelText: "Home",
    icon: "home",
    hasIcon: true,
  },
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
          {
            id: "project-a",
            labelText: "Project A",
            hasCheckbox: true,
          },
          {
            id: "project-b",
            labelText: "Project B",
            hasCheckbox: true,
          },
        ],
      },
      {
        id: "personal",
        labelText: "Personal",
        icon: "folder",
        hasIcon: true,
      },
    ],
  },
];

export const WithSelectionChange: Story = {
  render: () => ({
    props: {
      items: [{ labelText: "Images", isOpen: true, items: fileExplorerChildren }],
      onSelectionChange: (event: { id: string | undefined; selected: boolean }) => {
        console.log("selectionChange", event);
      },
    },
    template: `<rte-treeview id="treeview-with-selection-change" [items]="items" [hasCheckbox]="true" (selectionChange)="onSelectionChange($event)" />`,
    moduleMetadata: {
      imports: [TreeviewComponent, TreeviewItemComponent],
    },
  }),
};

const deepNestingData: TreeviewItemProps[] = [
  {
    id: "root",
    labelText: "Root",
    hasIcon: true,
    icon: "folder",
    isOpen: true,
    items: [
      {
        id: "level1",
        labelText: "Level 1",
        hasIcon: true,
        icon: "folder",
        isOpen: true,
        items: [
          {
            id: "level2",
            labelText: "Level 2",
            hasIcon: true,
            icon: "folder",
            isOpen: true,
            items: [
              {
                id: "level3",
                labelText: "Level 3",
                hasIcon: true,
                icon: "folder",
              },
            ],
          },
        ],
      },
    ],
  },
];

export const Compact: Story = {
  render: () => ({
    props: {
      items: [{ labelText: "Images", isOpen: true, isCompact: true, items: fileExplorerChildren }],
    },
    template: `<rte-treeview id="treeview-compact" [items]="items" [isCompact]="true" />`,
    moduleMetadata: {
      imports: [TreeviewComponent, TreeviewItemComponent],
    },
  }),
};

export const DeepNesting: Story = {
  render: () => ({
    props: {
      items: deepNestingData,
    },
    template: `<rte-treeview id="treeview-deep-nesting" [items]="items"/>`,
    moduleMetadata: {
      imports: [TreeviewComponent, TreeviewItemComponent],
    },
  }),
};

export const SelectedState: Story = {
  render: () => ({
    props: {
      items: [
        {
          labelText: "Parent",
          isOpen: true,
          items: [
            { id: "child1", labelText: "Child 1", hasCheckbox: true },
            { id: "child2", labelText: "Child 2 (selected)", hasCheckbox: true },
            { id: "child3", labelText: "Child 3", hasCheckbox: true },
          ],
        },
      ],
      selectedId: "child2",
    },
    template: `<rte-treeview id="treeview-selected-state" [items]="items" [selectedId]="selectedId" [hasCheckbox]="true" />`,
    moduleMetadata: {
      imports: [TreeviewComponent, TreeviewItemComponent],
    },
  }),
  parameters: {
    docs: {
      description: {
        story:
          "Selection (highlight) is independent from check state. Child 2 is selected (highlighted) but no items are checked.",
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

const connectorLinesVerificationData: TreeviewItemProps[] = [
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
          },
          {
            id: "first-2",
            labelText: "First-2 (corner/L-shape)",
            hasIcon: true,
            icon: "folder",
          },
        ],
      },
      {
        id: "middle",
        labelText: "Middle (branch/T-shape)",
        hasIcon: true,
        icon: "folder",
        isOpen: true,
        items: [
          {
            id: "middle-1",
            labelText: "Middle-1 (corner/L-shape)",
            hasIcon: true,
            icon: "folder",
          },
        ],
      },
      {
        id: "last",
        labelText: "Last (corner/L-shape)",
        hasIcon: true,
        icon: "folder",
      },
    ],
  },
];

export const ConnectorLinesVerification: Story = {
  render: () => ({
    props: {
      items: connectorLinesVerificationData,
    },
    template: `<rte-treeview id="treeview-connector-lines-verification" [items]="items" />`,
    moduleMetadata: {
      imports: [TreeviewComponent, TreeviewItemComponent],
    },
  }),
};

export const SelectByNodePath: Story = {
  render: () => ({
    props: {
      items: connectorLinesVerificationData,
      selectedPath: "0-1-0",
    },
    template: `<rte-treeview id="treeview-select-by-path-middle1" [items]="items" [selectedPath]="selectedPath" />`,
    moduleMetadata: {
      imports: [TreeviewComponent, TreeviewItemComponent],
    },
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Selection by node path: "0-1-0" selects root (0) → Middle (1) → Middle-1 (0). Use selectedPath input to select by index path.',
      },
    },
  },
};

const connectorLinesPreselectedData: TreeviewItemProps[] = [
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
          },
          {
            id: "first-2",
            labelText: "First-2 (corner/L-shape)",
            hasIcon: true,
            icon: "folder",
          },
        ],
      },
      {
        id: "middle",
        labelText: "Middle (branch/T-shape)",
        hasIcon: true,
        icon: "folder",
        isOpen: false,
        items: [
          {
            id: "middle-1",
            labelText: "Middle-1 (corner/L-shape)",
            hasIcon: true,
            icon: "folder",
          },
        ],
      },
      {
        id: "last",
        labelText: "Last (corner/L-shape)",
        hasIcon: true,
        icon: "folder",
      },
    ],
  },
];

export const ConnectorLinesPreselected: Story = {
  render: () => ({
    props: {
      items: connectorLinesPreselectedData,
      selectedId: "first-2",
    },
    template: `<rte-treeview id="treeview-connector-lines-preselected" [items]="items" [selectedId]="selectedId" />`,
    moduleMetadata: {
      imports: [TreeviewComponent, TreeviewItemComponent],
    },
  }),
  parameters: {
    docs: {
      description: {
        story:
          "Same structure as Connector Lines Verification with first-2 selected and its path open (root, first expanded). Middle is closed.",
      },
    },
  },
};

const leftTreeData: TreeviewItemProps[] = [
  {
    id: "left-a",
    labelText: "Left A",
    icon: "folder",
    hasIcon: true,
    isOpen: true,
    items: [
      { id: "left-a1", labelText: "Left A1", icon: "folder", hasIcon: true },
      { id: "left-a2", labelText: "Left A2", icon: "folder", hasIcon: true },
    ],
  },
  {
    id: "left-b",
    labelText: "Left B",
    icon: "folder",
    hasIcon: true,
    items: [{ id: "left-b1", labelText: "Left B1", icon: "folder", hasIcon: true }],
  },
];

const rightTreeData: TreeviewItemProps[] = [
  {
    id: "right-a",
    labelText: "Right A",
    icon: "folder",
    hasIcon: true,
    isOpen: true,
    items: [
      { id: "right-a1", labelText: "Right A1", icon: "folder", hasIcon: true },
      { id: "right-a2", labelText: "Right A2", icon: "folder", hasIcon: true },
    ],
  },
  {
    id: "right-b",
    labelText: "Right B",
    icon: "folder",
    hasIcon: true,
    items: [{ id: "right-b1", labelText: "Right B1", icon: "folder", hasIcon: true }],
  },
];

export const TwoTreeviewsSelectionIndependence: Story = {
  render: () => ({
    props: {
      leftItems: leftTreeData,
      rightItems: rightTreeData,
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

export const CheckboxCascade: Story = {
  render: () => ({
    props: {
      items: checkboxCascadeData,
    },
    template: `<rte-treeview id="treeview-checkbox-cascade" [items]="items" [hasCheckbox]="true" />`,
    moduleMetadata: {
      imports: [TreeviewComponent, TreeviewItemComponent],
    },
  }),
  parameters: {
    docs: {
      description: {
        story: "Checking a parent checks all its descendants at every nesting level (1, 2, 3). Unchecking removes all.",
      },
    },
  },
};

const checkboxScenarioLabels = ["Nesting 1", "Nesting 2a", "Nesting 2b", "Nesting 3a", "Nesting 3b", "Nesting 3c"];

function getTreeitemByLabel(canvas: ReturnType<typeof within>, label: string): HTMLElement {
  const matches = canvas.getAllByRole("treeitem", { name: new RegExp(label, "i") });
  if (matches.length === 1) return matches[0];
  const leaf = matches.find((element: HTMLElement) => !element.querySelector('[role="treeitem"]'));
  return leaf ?? matches[0];
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

export const CheckboxScenario1ClickNesting1AllChecked: Story = {
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
  },
  parameters: {
    docs: {
      description: {
        story: "1. Click Nesting 1. All items should be checked.",
      },
    },
  },
};

export const CheckboxScenario2ClickNesting3cIndeterminateChain: Story = {
  render: () => ({
    props: { items: checkboxCascadeData },
    template: checkboxScenarioTemplate,
    moduleMetadata: { imports: [TreeviewComponent, TreeviewItemComponent] },
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await clickCheckbox(canvas, "Nesting 3c");
    expectChecked(canvas, "Nesting 3c");
    expectIndeterminate(canvas, "Nesting 1");
    expectIndeterminate(canvas, "Nesting 2b");
    expectUnchecked(canvas, "Nesting 2a");
    expectUnchecked(canvas, "Nesting 3a");
    expectUnchecked(canvas, "Nesting 3b");
  },
  parameters: {
    docs: {
      description: {
        story:
          "2. Click Nesting 3c. Nesting 3c checked, Nesting 1 indeterminate, Nesting 2b indeterminate. Others unchecked.",
      },
    },
  },
};

export const CheckboxScenario3ClickNesting3cThenNesting1AllChecked: Story = {
  render: () => ({
    props: { items: checkboxCascadeData },
    template: checkboxScenarioTemplate,
    moduleMetadata: { imports: [TreeviewComponent, TreeviewItemComponent] },
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await clickCheckbox(canvas, "Nesting 3c");
    expectIndeterminate(canvas, "Nesting 1");
    await clickCheckbox(canvas, "Nesting 1");
    for (const label of checkboxScenarioLabels) {
      expectChecked(canvas, label);
    }
  },
  parameters: {
    docs: {
      description: {
        story:
          "3. Click Nesting 3c. Then click Nesting 1. Nesting 1 passes from indeterminate to checked. All elements checked.",
      },
    },
  },
};

export const CheckboxScenario4ClickNesting3bIndeterminateChain: Story = {
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
  },
  parameters: {
    docs: {
      description: {
        story:
          "4. Click Nesting 3b. Nesting 3b checked, Nesting 2a indeterminate, Nesting 1 indeterminate. Others unchecked.",
      },
    },
  },
};

export const CheckboxScenario5ClickNesting1ToggleAll: Story = {
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
  },
  parameters: {
    docs: {
      description: {
        story:
          "5. Click Nesting 1. Verify everything is checked. Click Nesting 1 again. Verify everything is unchecked.",
      },
    },
  },
};

export const CheckboxCheckedIdsChange: Story = {
  render: () => ({
    props: {
      items: checkboxCascadeData,
      onCheckedIdsChange: (ids: ReadonlySet<string>) => {
        console.log("checkedIdsChange", Array.from(ids));
      },
    },
    template: `<rte-treeview id="treeview-checked-ids" [items]="items" [hasCheckbox]="true" (checkedIdsChange)="onCheckedIdsChange($event)" />`,
    moduleMetadata: {
      imports: [TreeviewComponent, TreeviewItemComponent],
    },
  }),
  parameters: {
    docs: {
      description: {
        story: "checkedIdsChange emits the set of checked item ids when the user toggles checkboxes.",
      },
    },
  },
};

export const CheckboxVisibility: Story = {
  render: () => ({
    props: {
      items: checkboxCascadeData,
    },
    template: `<rte-treeview id="treeview-checkbox-visibility" [items]="items" [hasCheckbox]="true" />`,
    moduleMetadata: {
      imports: [TreeviewComponent, TreeviewItemComponent],
    },
  }),
  parameters: {
    docs: {
      description: {
        story:
          "Checkboxes are hidden by default. Hover or focus an item to reveal. Once any item is checked, all checkboxes become visible.",
      },
    },
  },
};

export const WithoutCheckboxSpacer: Story = {
  render: () => ({
    props: {
      items: checkboxCascadeData,
    },
    template: `<rte-treeview id="treeview-no-checkbox" [items]="items" />`,
    moduleMetadata: {
      imports: [TreeviewComponent, TreeviewItemComponent],
    },
  }),
  parameters: {
    docs: {
      description: {
        story: "When hasCheckbox is false, a spacer is shown to preserve layout alignment.",
      },
    },
  },
};
