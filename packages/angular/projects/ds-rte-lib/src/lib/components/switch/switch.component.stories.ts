import { Meta, StoryObj } from "@storybook/angular";

import { SwitchComponent } from "./switch.component";

const meta: Meta<SwitchComponent> = {
  title: "Switch",
  component: SwitchComponent,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      defaultValue: "Switch",
    },
    appearance: {
      control: "select",
      options: ["brand", "neutral"],
      defaultValue: "brand",
    },
    showLabel: {
      control: "boolean",
      defaultValue: true,
    },
    showIcon: {
      control: "boolean",
      defaultValue: true,
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
    },
    readOnly: {
      control: "boolean",
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<SwitchComponent>;

export const Default: Story = {
  args: {
    label: "Switch",
    appearance: "brand",
    showLabel: true,
    showIcon: true,
    disabled: false,
    readOnly: false,
  },
};
