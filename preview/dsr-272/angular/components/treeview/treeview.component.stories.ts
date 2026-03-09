import type { TreeviewItemProps } from "@design-system-rte/core/components/treeview/treeview-item.interface";
import { Meta, StoryObj } from "@storybook/angular";

import { IconButtonComponent } from "../icon-button/icon-button.component";

import { TreeviewItemComponent } from "./treeview-item/treeview-item.component";
import { TreeviewItemActionDirective } from "./treeview-item-action.directive";
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
        hasAction: true,
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

export const TemplateComposition: Story = {
  render: () => ({
    template: `
      <rte-treeview>
        <rte-treeview-item labelText="Images" [isOpen]="true">
          <rte-treeview-item labelText="Summer 82" [hasCheckbox]="true" [isOpen]="true">
            <rte-treeview-item labelText="Sun" [hasCheckbox]="true" [isSelected]="true" [hasAction]="true">
              <button rteTreeviewItemAction type="button" aria-label="Actions">
                <rte-icon-button name="more-vert" size="s" />
              </button>
            </rte-treeview-item>
          </rte-treeview-item>
        </rte-treeview-item>
      </rte-treeview>
    `,
    moduleMetadata: {
      imports: [TreeviewComponent, TreeviewItemComponent, IconButtonComponent, TreeviewItemActionDirective],
    },
  }),
};

export const DataDriven: Story = {
  render: () => ({
    props: {
      items: fileExplorerChildren,
    },
    template: `
      <rte-treeview>
        <rte-treeview-item
          [items]="items"
          labelText="Images"
          [isOpen]="true"
        />
      </rte-treeview>
    `,
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
    template: `
      <rte-treeview>
        @for (item of items; track item.id) {
          <rte-treeview-item
            [id]="item.id"
            [labelText]="item.labelText"
            [icon]="item.icon"
            [link]="item.link"
            [hasIcon]="item.hasIcon"
            [hasCheckbox]="item.hasCheckbox"
            [isSelected]="item.isSelected"
            [isOpen]="item.isOpen"
            [items]="item.items ?? []"
          />
        }
      </rte-treeview>
    `,
    moduleMetadata: {
      imports: [TreeviewComponent, TreeviewItemComponent],
    },
  }),
};

export const WithSelectionChange: Story = {
  render: () => ({
    props: {
      items: fileExplorerChildren,
      onSelectionChange: (event: { id: string | undefined; selected: boolean }) => {
        console.log("selectionChange", event);
      },
    },
    template: `
      <rte-treeview>
        <rte-treeview-item
          [items]="items"
          labelText="Images"
          [isOpen]="true"
          (selectionChange)="onSelectionChange($event)"
        />
      </rte-treeview>
    `,
    moduleMetadata: {
      imports: [TreeviewComponent, TreeviewItemComponent],
    },
  }),
};
