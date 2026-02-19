import { BadgeContent, BadgeSize, BadgeType } from "@design-system-rte/core/components/badge/badge.interface";
import { TESTING_DOWN_KEY, TESTING_UP_KEY } from "@design-system-rte/core/constants/keyboard/keyboard-test.constants";
import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { expect, userEvent, waitFor, within } from "@storybook/test";

import { ButtonComponent } from "../../button/button.component";
import { RegularIcons as RegularIconsList, TogglableIcons as TogglableIconsList } from "../../icon/icon-map";
import { DropdownDirective } from "../dropdown.directive";
import { DropdownModule } from "../dropdown.module";

const RegularIconIds = Object.keys(RegularIconsList);
const TogglableIconIds = Object.keys(TogglableIconsList);

const MOCKUP_ITEMS = [
  { label: "Messages", leftIcon: "mail", hasSeparator: true },
  { label: "Actions", leftIcon: "settings" },
  { label: "Help", leftIcon: "help" },
  { label: "More information", leftIcon: "info", hasSeparator: true },
  { label: "First option", hasIndent: true },
  { label: "Second option", hasIndent: true },
  { label: "Third option", hasSeparator: true, hasIndent: true },
  { label: "Username", leftIcon: "user-circle", disabled: true },
];

const wipWarning = `
<div>
  <span style="font-family: sans-serif; margin-bottom: 16px; border: 1px solid #F4922B; padding: 8px; border-radius: 5px; background-color: #FAFFC1; margin: 0;">
    Ce composant est en cours de développement et n'est pas encore disponible
  </span>
</div>
<br/>
`;

const meta: Meta<DropdownDirective> = {
  title: "Composants/Dropdown (développement en cours)",
  id: "Dropdown",
  component: DropdownDirective,
  tags: ["autodocs"],
  argTypes: {
    rteDropdownPosition: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
      defaultValue: "bottom",
    },
  },
  parameters: {
    layout: "centered",
  },
};
export default meta;
type Story = StoryObj<DropdownDirective>;

export const Default: Story = {
  decorators: [
    moduleMetadata({
      imports: [DropdownModule],
    }),
  ],
  args: {
    rteDropdownPosition: "bottom",
  },
  render: (args) => ({
    props: {
      ...args,
      items: MOCKUP_ITEMS,
      onItemClick: (event: { event: Event; id: string }) => {
        console.log("Item clicked:", event);
      },
    },
    template: `
    ${wipWarning}
    <div rteDropdown [rteDropdownPosition]="rteDropdownPosition" (menuEvent)="onItemClick($event)">
      <button rteDropdownTrigger>Menu principal ⬇</button>
      <rte-dropdown-menu [items]="items"/>
    </div>
    `,
  }),
};

export const WithBadge: StoryObj<{
  badgeContent?: BadgeContent;
  badgeType?: BadgeType;
  badgeIcon: string;
  showBadge: boolean;
  badgeCount: number;
  badgeSize?: BadgeSize;
}> = {
  args: {
    badgeContent: "empty" as BadgeContent,
    badgeType: "indicator" as BadgeType,
    badgeIcon: "settings",
    showBadge: true,
    badgeCount: 56,
    badgeSize: "m" as BadgeSize,
  },
  argTypes: {
    badgeContent: {
      control: "select",
      options: ["number", "icon", "empty"],
    },
    badgeType: {
      control: "select",
      options: ["brand", "neutral", "indicator"],
    },
    badgeIcon: {
      control: "select",
      options: ["", ...RegularIconIds, ...TogglableIconIds].sort((a, b) => a.localeCompare(b)),
    },
    showBadge: {
      control: "boolean",
    },
    badgeCount: {
      control: "number",
    },
    badgeSize: {
      control: "select",
      options: ["xs", "s", "m", "l"],
    },
  },
  decorators: [
    moduleMetadata({
      imports: [DropdownModule],
    }),
  ],
  render: (args) => ({
    props: {
      ...args,
      items: [
        ...MOCKUP_ITEMS,
        {
          label: "Notifications",
          leftIcon: "notification",
          badgeCount: 4,
          badgeType: args.badgeType,
          showBadge: args.showBadge,
          badgeContent: args.badgeContent,
          badgeSize: args.badgeSize,
        },
      ],
      onItemClick: (event: { event: Event; id: string }) => {
        console.log("Item clicked:", event);
      },
    },
    template: `
    ${wipWarning}
    <div rteDropdown [rteDropdownPosition]="rteDropdownPosition" (menuEvent)="onItemClick($event)">
      <button rteDropdownTrigger>Menu principal ⬇</button>
      <rte-dropdown-menu [items]="items"/>
    </div>
    `,
  }),
};

export const KeyboardNavigation: Story = {
  decorators: [
    moduleMetadata({
      imports: [DropdownModule],
    }),
  ],
  args: {
    rteDropdownPosition: "bottom",
  },
  render: (args) => ({
    props: {
      ...args,
      items: MOCKUP_ITEMS,
      onItemClick: (event: { event: Event; id: string }) => {
        console.log("Item clicked:", event);
      },
    },
    template: `
    ${wipWarning}
    <div rteDropdown [rteDropdownPosition]="rteDropdownPosition" (menuEvent)="onItemClick($event)">
      <button rteDropdownTrigger>Click me!</button>
      <rte-dropdown-menu [items]="items"/>
    </div>
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const triggerButton = await canvas.getByRole("button", {
      name: /click me!/i,
    });
    await userEvent.click(triggerButton);
    const overlay = document.getElementById("overlay-root");
    const dropdown = overlay?.querySelector("rte-dropdown-menu");
    const menuItems = dropdown?.querySelector("ul")?.querySelectorAll("li");
    expect(dropdown).toBeInTheDocument();
    await userEvent.tab();
    expect(menuItems?.[0]).toHaveFocus();
    await userEvent.keyboard(TESTING_DOWN_KEY);
    expect(menuItems?.[1]).toHaveFocus();
    await userEvent.keyboard(TESTING_UP_KEY);
    expect(menuItems?.[0]).toHaveFocus();
  },
};

export const KeyboardNavigationWithLink: Story = {
  decorators: [
    moduleMetadata({
      imports: [DropdownModule],
    }),
  ],
  args: {
    rteDropdownPosition: "bottom",
  },
  render: (args) => ({
    props: {
      ...args,
      items: [
        { label: "Messages", leftIcon: "mail", link: "/messages" },
        { label: "Username", leftIcon: "user-circle", link: "/username" },
      ],
      onItemClick: (event: { event: Event; id: string }) => {
        console.log("Item clicked:", event);
      },
    },
    template: `
    ${wipWarning}
    <div rteDropdown [rteDropdownPosition]="rteDropdownPosition" (menuEvent)="onItemClick($event)">
      <button rteDropdownTrigger>Click me!</button>
      <rte-dropdown-menu [items]="items"/>
    </div>
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const triggerButton = await canvas.getByRole("button", {
      name: /click me!/i,
    });
    await userEvent.click(triggerButton);
    const overlay = document.getElementById("overlay-root");
    const dropdown = overlay?.querySelector("rte-dropdown-menu");
    const menuItems = dropdown?.querySelector("ul")?.querySelectorAll("li");

    await waitFor(() => {
      expect(dropdown).toBeInTheDocument();
      expect(menuItems?.[0]).toHaveFocus();
    });
    await userEvent.keyboard(TESTING_DOWN_KEY);
    expect(menuItems?.[1]).toHaveFocus();
    await userEvent.keyboard(TESTING_UP_KEY);
    expect(menuItems?.[0]).toHaveFocus();
  },
};

export const WithProjectedHeaderAndFooter: Story = {
  decorators: [
    moduleMetadata({
      imports: [DropdownModule],
    }),
  ],
  args: {
    rteDropdownPosition: "bottom",
  },
  render: (args) => ({
    props: {
      ...args,
      items: MOCKUP_ITEMS,
      onItemClick: (event: { event: Event; id: string }) => {
        console.log("Item clicked:", event);
      },
    },
    template: `
    ${wipWarning}
    <div rteDropdown [rteDropdownPosition]="rteDropdownPosition" (menuEvent)="onItemClick($event)">
      <button rteDropdownTrigger>Menu with Header/Footer ⬇</button>
      <rte-dropdown-menu [items]="items">
        <ng-template rteDropdownMenuHeader>
          <div style="padding: 8px 16px; font-weight: bold;">Dropdown Header</div>
        </ng-template>
        <ng-template rteDropdownMenuFooter>
          <div style="padding: 8px 16px; font-weight: bold;">Dropdown Footer</div>
        </ng-template>
      </rte-dropdown-menu>
    </div>
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const triggerButton = await canvas.getByRole("button", { name: /menu with header\/footer/i });
    await userEvent.click(triggerButton);

    const overlay = document.getElementById("overlay-root");
    const dropdown = overlay?.querySelector("rte-dropdown-menu");

    await waitFor(() => {
      expect(dropdown).toBeInTheDocument();
    });

    const headerSection = dropdown?.querySelector(".rte-dropdown-menu-header");
    const footerSection = dropdown?.querySelector(".rte-dropdown-menu-footer");

    expect(headerSection).toBeInTheDocument();
    expect(footerSection).toBeInTheDocument();

    const headerContent = headerSection?.textContent?.trim();
    const footerContent = footerSection?.textContent?.trim();

    expect(headerContent).toContain("Dropdown Header");
    expect(footerContent).toContain("Dropdown Footer");
  },
};

export const WithFilterableHeader: Story = {
  decorators: [
    moduleMetadata({
      imports: [DropdownModule],
    }),
  ],
  args: {
    rteDropdownPosition: "bottom",
  },
  render: (args) => {
    const allItems = [
      { label: "Messages", leftIcon: "mail", hasSeparator: true },
      { label: "Actions", leftIcon: "settings" },
      { label: "Help", leftIcon: "help" },
    ];

    return {
      props: {
        ...args,
        filterValue: "",
        allItems,
        filteredItems: [...allItems],
        onFilterChange(event: Event) {
          const target = event.target as HTMLInputElement;
          const filter = target.value.toLowerCase();
          this["filterValue"] = target.value;
          if (!filter) {
            this["filteredItems"] = [...this["allItems"]];
          } else {
            this["filteredItems"] = this["allItems"].filter((item: { label: string }) =>
              item.label.toLowerCase().includes(filter),
            );
          }
        },
        onItemClick: (event: { event: Event; id: string }) => {
          console.log("Item clicked:", event);
        },
      },
      template: `
      ${wipWarning}
      <div rteDropdown [rteDropdownPosition]="rteDropdownPosition" (menuEvent)="onItemClick($event)">
        <button rteDropdownTrigger>Filterable Menu ⬇</button>
        <rte-dropdown-menu [items]="filteredItems">
          <ng-template rteDropdownMenuHeader>
            <div style="padding: 8px 16px;">
              <input
                type="text"
                placeholder="Filter items..."
                [value]="filterValue"
                (input)="onFilterChange($event)"
                style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box;"
              />
            </div>
          </ng-template>
        </rte-dropdown-menu>
      </div>
      `,
    };
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const triggerButton = await canvas.getByRole("button", { name: /filterable menu/i });
    await userEvent.click(triggerButton);

    const overlay = document.getElementById("overlay-root");
    const dropdown = overlay?.querySelector("rte-dropdown-menu");

    await waitFor(() => {
      expect(dropdown).toBeInTheDocument();
    });

    const headerSection = dropdown?.querySelector(".rte-dropdown-menu-header");
    expect(headerSection).toBeInTheDocument();

    const filterInput = headerSection?.querySelector("input") as HTMLInputElement;
    expect(filterInput).toBeInTheDocument();

    await userEvent.type(filterInput, "Help");
    await waitFor(() => {
      const menuItems = dropdown?.querySelector("ul")?.querySelectorAll("li");
      expect(menuItems?.length).toBe(1);
    });
  },
};

export const WithAddItemFooter: Story = {
  decorators: [
    moduleMetadata({
      imports: [DropdownModule, ButtonComponent],
    }),
  ],
  args: {
    rteDropdownPosition: "bottom",
  },
  render: (args) => {
    const initialItems = [
      { label: "Messages", leftIcon: "mail", hasSeparator: true },
      { label: "Actions", leftIcon: "settings" },
      { label: "Help", leftIcon: "help" },
    ];

    return {
      props: {
        ...args,
        newItemLabel: "",
        menuItems: [...initialItems],
        onNewItemLabelChange(event: Event) {
          const target = event.target as HTMLInputElement;
          this["newItemLabel"] = target.value;
        },
        onAddItem() {
          const label = (this["newItemLabel"] || "").trim();
          if (label) {
            this["menuItems"] = [...this["menuItems"], { label }];
            this["newItemLabel"] = "";
          }
        },
        onAddItemKeyDown(event: KeyboardEvent) {
          if (event.key === "Enter") {
            event.preventDefault();
            this["onAddItem"]();
          }
        },
        onItemClick: (event: { event: Event; id: string }) => {
          console.log("Item clicked:", event);
        },
      },
      template: `
      ${wipWarning}
      <div rteDropdown [rteDropdownPosition]="rteDropdownPosition" (menuEvent)="onItemClick($event)">
        <button rteDropdownTrigger>Menu with Add Item Footer ⬇</button>
        <rte-dropdown-menu [items]="menuItems" width="400">
          <ng-template rteDropdownMenuFooter>
            <div style="padding: 8px 16px; display: flex; gap: 8px;">
              <input
                type="text"
                placeholder="Add new item..."
                [value]="newItemLabel"
                (input)="onNewItemLabelChange($event)"
                (keydown)="onAddItemKeyDown($event)"
                style="flex: 1; padding: 8px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box;"
              />
              <button
                rteButton
                rteButtonVariant="primary"
                rteButtonSize="m"
                type="button"
                (click)="onAddItem()"
              >
                Add
              </button>
            </div>
          </ng-template>
        </rte-dropdown-menu>
      </div>
      `,
    };
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const triggerButton = await canvas.getByRole("button", { name: /menu with add item footer/i });
    await userEvent.click(triggerButton);

    const overlay = document.getElementById("overlay-root");
    let dropdown!: Element;

    await waitFor(() => {
      const found = overlay?.querySelector("rte-dropdown-menu");
      expect(found).toBeInTheDocument();
      if (!found) {
        throw new Error("Dropdown not found");
      }
      dropdown = found;
      return found;
    });

    const footerSection = dropdown?.querySelector(".rte-dropdown-menu-footer");
    expect(footerSection).toBeInTheDocument();

    const addItemInput = footerSection?.querySelector("input") as HTMLInputElement;
    const addButton = footerSection?.querySelector("button[rteButton]") as HTMLButtonElement;

    expect(addItemInput).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();

    const initialItemCount = dropdown?.querySelector("ul")?.querySelectorAll("li").length || 0;

    await userEvent.type(addItemInput, "New Item");
    await userEvent.click(addButton);

    await waitFor(
      () => {
        const menuItems = dropdown.querySelector("ul")?.querySelectorAll("li");
        expect(menuItems?.length).toBe(initialItemCount + 1);
        expect(menuItems?.[menuItems.length - 1]?.textContent).toContain("New Item");
      },
      { timeout: 300 },
    );
  },
};
