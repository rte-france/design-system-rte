import type { TreeviewItemProps } from "@design-system-rte/core/components/treeview/treeview-item.interface";
import { Meta, StoryObj } from "@storybook/angular";

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

export const DataDriven: Story = {
  render: () => ({
    props: {
      items: [{ labelText: "Images", isOpen: true, items: fileExplorerChildren }],
      selectedId: "sun",
    },
    template: `<rte-treeview id="treeview-data-driven" [items]="items" [selectedId]="selectedId" />`,
    moduleMetadata: {
      imports: [TreeviewComponent, TreeviewItemComponent],
    },
  }),
};

export const NavigationExample: Story = {
  render: () => ({
    props: {
      items: navigationData,
      selectedId: "project-b",
    },
    template: `<rte-treeview id="treeview-navigation-example" [items]="items" [selectedId]="selectedId" />`,
    moduleMetadata: {
      imports: [TreeviewComponent, TreeviewItemComponent],
    },
  }),
};

export const WithContentClickSelection: Story = {
  render: () => ({
    props: {
      items: navigationData,
      onSelectionChange: (event: { id: string | undefined; selected: boolean }) => {
        console.log("selectionChange", event);
      },
    },
    template: `<rte-treeview id="treeview-with-content-click-selection" [items]="items" (selectionChange)="onSelectionChange($event)" />`,
    moduleMetadata: {
      imports: [TreeviewComponent, TreeviewItemComponent],
    },
  }),
  parameters: {
    docs: {
      description: {
        story:
          "Click on any item's main content to select it. Only one item can be selected at a time; selecting another deselects the previous.",
      },
    },
  },
};

export const WithSelectionChange: Story = {
  render: () => ({
    props: {
      items: [{ labelText: "Images", isOpen: true, items: fileExplorerChildren }],
      onSelectionChange: (event: { id: string | undefined; selected: boolean }) => {
        console.log("selectionChange", event);
      },
    },
    template: `<rte-treeview id="treeview-with-selection-change" [items]="items" (selectionChange)="onSelectionChange($event)" />`,
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
    template: `<rte-treeview id="treeview-selected-state" [items]="items" [selectedId]="selectedId" />`,
    moduleMetadata: {
      imports: [TreeviewComponent, TreeviewItemComponent],
    },
  }),
};

const lastChildWithChildrenData: TreeviewItemProps[] = [
  {
    id: "first",
    labelText: "First",
    hasIcon: true,
    icon: "folder",
  },
  {
    id: "last",
    labelText: "Last (has children)",
    hasIcon: true,
    icon: "folder",
    isOpen: true,
    items: [
      {
        id: "grandchild",
        labelText: "Grandchild",
        hasIcon: true,
        icon: "folder",
      },
    ],
  },
];

export const AncestorBorder: Story = {
  render: () => ({
    props: {
      items: lastChildWithChildrenData,
    },
    template: `<rte-treeview id="treeview-ancestor-border" [items]="items" />`,
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

export const SelectByNodePathLast: Story = {
  render: () => ({
    props: {
      items: connectorLinesVerificationData,
      selectedPath: "0-2",
    },
    template: `<rte-treeview id="treeview-select-by-path-last" [items]="items" [selectedPath]="selectedPath" />`,
    moduleMetadata: {
      imports: [TreeviewComponent, TreeviewItemComponent],
    },
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Selection by node path: "0-2" selects the third child of root (Last). Path is 0-based indices from root.',
      },
    },
  },
};

export const SelectByNodePathMiddle1: Story = {
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
