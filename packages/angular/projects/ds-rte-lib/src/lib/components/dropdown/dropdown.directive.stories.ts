import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { DropdownComponent } from "./dropdown.component";
import { DropdownItemComponent } from "./dropdownItem/dropdown-item.component";
import { DropdownMenuComponent } from "./dropdownMenu/dropdown-menu.component";
import { DropdownDirective } from "./dropdown.directive";


const meta: Meta<DropdownDirective> = {
  title: "Dropdown (développement en cours)",
  component: DropdownDirective,
  tags: ["autodocs"],
  argTypes: {

  },
  parameters: {
    layout: "centered",
  },
  decorators: [
    moduleMetadata({
      imports: [DropdownComponent, DropdownMenuComponent],
    }),
  ],
};
export default meta;
type Story = StoryObj<DropdownDirective>;

const wipWarning = `
<div>
  <span style="font-family: sans-serif; margin-bottom: 16px; border: 1px solid #F4922B; padding: 8px; border-radius: 5px; background-color: #FAFFC1; margin: 0;">
    Ce composant est en cours de développement et n'est pas encore disponible
  </span>
</div>
<br/>
`;

export const Default: Story = {
  render: (args) => ({
    props: { ...args, click: (event: Event) => console.log("clicked", event) },
    template: `
    ${wipWarning}
    <button [rteDropdownTriggerFor]="menu">Menu principal ⬇</button>
    <rte-dropdown-menu #menu [autoclose]="true" id="testDropdown">
      <div>Placeholder text</div>
    </rte-dropdown-menu>
    `,
  }),
};
