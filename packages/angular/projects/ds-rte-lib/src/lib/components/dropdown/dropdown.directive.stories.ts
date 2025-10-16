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

const wipWarning = `
<div>
  <span style="font-family: sans-serif; margin-bottom: 16px; border: 1px solid #F4922B; padding: 8px; border-radius: 5px; background-color: #FAFFC1; margin: 0;">
    Ce composant est en cours de développement et n'est pas encore disponible
  </span>
</div>
<br/>
`;

const meta: Meta<DropdownDirective> = {
  title: "Dropdown (développement en cours)",
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
