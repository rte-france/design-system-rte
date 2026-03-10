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
        isSelected: true,
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
    link: "#",
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
            isSelected: true,
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
    },
    template: `<rte-treeview [items]="items" />`,
    moduleMetadata: {
      imports: [TreeviewComponent, TreeviewItemComponent],
    },
  }),
};

export const NavigationExample: Story = {
  render: () => ({
    props: {
      items: navigationData,
    },
    template: `<rte-treeview [items]="items" />`,
    moduleMetadata: {
      imports: [TreeviewComponent, TreeviewItemComponent],
    },
  }),
};

export const WithSelectionChange: Story = {
  render: () => ({
    props: {
      items: [{ labelText: "Images", isOpen: true, items: fileExplorerChildren }],
      onSelectionChange: (event: { id: string | undefined; selected: boolean }) => {
        console.log("selectionChange", event);
      },
    },
    template: `<rte-treeview [items]="items" (selectionChange)="onSelectionChange($event)" />`,
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
    template: `<rte-treeview [items]="items" [isCompact]="true" />`,
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
    template: `<rte-treeview [items]="items"/>`,
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
            { id: "child2", labelText: "Child 2 (selected)", hasCheckbox: true, isSelected: true },
            { id: "child3", labelText: "Child 3", hasCheckbox: true },
          ],
        },
      ],
    },
    template: `<rte-treeview [items]="items" />`,
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

export const AncestorSpacer: Story = {
  render: () => ({
    props: {
      items: lastChildWithChildrenData,
    },
    template: `<rte-treeview [items]="items" />`,
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
    template: `<rte-treeview [items]="items" [dottedLine]="true" />`,
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
    template: `<rte-treeview [items]="items" />`,
    moduleMetadata: {
      imports: [TreeviewComponent, TreeviewItemComponent],
    },
  }),
};
