import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { DropdownDirective } from "./dropdown.directive";
import { DropdownModule } from "./dropdown.module";

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
  render: (args) => ({
    props: { ...args, click: (event: Event) => console.log("clicked", event) },
    template: `
    <div rteDropdown>
      <button rteDropdownTrigger>Menu principal ⬇</button>
    </div>
    `,
  }),
};
