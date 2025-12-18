import {
  TESTING_DOWN_KEY,
  TESTING_ENTER_KEY,
  TESTING_UP_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard-test.constants";
import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { expect, userEvent, waitFor } from "@storybook/test";

import { DropdownDirective } from "../dropdown.directive";
import { DropdownModule } from "../dropdown.module";

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
      <button rteDropdownTrigger>Menu principal ⬇</button>
      <rte-dropdown-menu [items]="items"/>
    </div>
    `,
  }),
  play: async () => {
    await userEvent.tab();
    await userEvent.keyboard(TESTING_ENTER_KEY);
    await userEvent.tab();
    const overlay = document.getElementById("overlay-root");
    const dropdown = overlay?.querySelector("rte-dropdown-menu");
    const menuItems = dropdown?.querySelector("ul")?.querySelectorAll("li");
    expect(dropdown).toBeInTheDocument();
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
      <button rteDropdownTrigger>Menu principal ⬇</button>
      <rte-dropdown-menu [items]="items"/>
    </div>
    `,
  }),
  play: async () => {
    await userEvent.tab();
    await userEvent.keyboard(TESTING_ENTER_KEY);
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
