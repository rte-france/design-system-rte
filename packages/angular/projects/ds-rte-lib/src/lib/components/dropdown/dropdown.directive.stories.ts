import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { DropdownDirective } from "./dropdown.directive";
import { DropdownModule } from "./dropdown.module";

const MOCKUP_ITEMS = [
  { label: "Messages", leftIcon: "mail", hasSeparator: true, onClick: () => console.log("click") },
  { 
    label: "Actions", 
    leftIcon: "settings",
    subMenuItems: [
      { 
        label: "Edit", 
        leftIcon: "edit",
        subMenuItems: [
          { label: "Cut", leftIcon: "cut", trailingText: "⌘X" },
          { label: "Copy", leftIcon: "copy", trailingText: "⌘X", onClick: () => console.log("click") },
          { label: "Paste", leftIcon: "paste", trailingText: "⌘V" }
        ]
      },
      { label: "Archive", leftIcon: "archive" },
      { label: "Delete", leftIcon: "delete" }
    ]
  },
  { label: "Help", leftIcon: "help" },
  { label: "More information", leftIcon: "info", hasSeparator: true },
  { label: "First option", hasIndent: true },
  { label: "Second option", hasIndent: true },
  { label: "Third option", hasSeparator: true, hasIndent: true },
  { label: "Username", leftIcon: "user-circle", disabled: true }
]

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
      items: MOCKUP_ITEMS
    },
    template: `
    <div rteDropdown>
      <button rteDropdownTrigger>Menu principal ⬇</button>
      <rte-dropdown-menu [items]="items"/>
    </div>
    `,
  }),
};