import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";

import { DropdownComponent } from "../dropdown.component";
import { DropdownItemComponent } from "../dropdownItem/dropdown-item.component";
import { DropdownMenuComponent } from "../dropdownMenu/dropdown-menu.component";

const meta: Meta<DropdownComponent> = {
  title: "Dropdown (développement en cours)",
  component: DropdownComponent,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};
export default meta;
type Story = StoryObj<DropdownComponent>;

const wipWarning = `
<div>
  <span style="font-family: sans-serif; margin-bottom: 16px; border: 1px solid #F4922B; padding: 8px; border-radius: 5px; background-color: #FAFFC1; margin: 0;">
    Ce composant est en cours de développement et n'est pas encore disponible
  </span>
</div>
<br/>
`;

export const Default: Story = {
  decorators: [
    moduleMetadata({
      imports: [DropdownMenuComponent, DropdownItemComponent],
    }),
  ],
  args: {},

  render: (args) => ({
    props: { ...args, click: (event: Event) => console.log("clicked", event) },
    template: `
    ${wipWarning}
    <rte-dropdown #dropdown="rteDropdown" [autoclose]="true">
      <button dropdownTrigger (click)="dropdown.open()">Menu principal ⬇</button>
      <rte-dropdown-item label="Messages" leftIcon="mail" [hasSeparator]="true" (click)="click"></rte-dropdown-item>
      <rte-dropdown-item label="Actions" leftIcon="settings"></rte-dropdown-item>
      <rte-dropdown-item label="Help" leftIcon="help"></rte-dropdown-item>
      <rte-dropdown-item label="More information" leftIcon="info" [hasSeparator]="true"></rte-dropdown-item>
      <rte-dropdown-item label="First option" [hasIndent]="true" ></rte-dropdown-item>
      <rte-dropdown-item label="Second option" [hasIndent]="true"></rte-dropdown-item>
      <rte-dropdown-item label="Third option" [hasSeparator]="true" [hasIndent]="true"></rte-dropdown-item>
      <rte-dropdown-item label="Username" leftIcon="user-circle" [disabled]="true"></rte-dropdown-item>
    </rte-dropdown>
    `,
  }),
};
