import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";

import { DropdownDirective } from "./dropdown.directive";
import { DropdownModule } from "./dropdown.module";

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

const meta: Meta<DropdownDirective> = {
  title: "Dropdown",
  component: DropdownDirective,
  tags: ["autodocs"],
  argTypes: {},
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
  args: {},
  render: () => ({
    props: {
      items: MOCKUP_ITEMS,
      onItemClick: (event: { event: Event; id: string }) => {
        console.log("Item clicked:", event);
      },
    },
    template: `
    <div rteDropdown (menuEvent)="onItemClick($event)">
      <button rteDropdownTrigger>Menu principal ⬇</button>
      <rte-dropdown-menu [items]="items"/>
    </div>
    `,
  }),
};
