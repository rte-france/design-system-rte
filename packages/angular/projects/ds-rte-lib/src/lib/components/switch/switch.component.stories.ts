import { ENTER_KEY, SPACE_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";
import { Meta, StoryObj } from "@storybook/angular";
import { expect, within, userEvent } from "@storybook/test";

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
    checked: {
      control: "boolean",
      defaultValue: false,
    },
    handleClick: {
      table: { disable: true },
    },
    switchHeight: {
      table: { disable: true },
    },
    switchWidth: {
      table: { disable: true },
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
    checked: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const switchElement = canvas.getByRole("switch");

    await userEvent.tab();
    await expect(switchElement).toHaveFocus();

    await userEvent.keyboard(SPACE_KEY);
    await expect(switchElement).toBeChecked();

    await userEvent.keyboard(SPACE_KEY);
    await expect(switchElement).not.toBeChecked();

    await userEvent.keyboard(ENTER_KEY);
    await expect(switchElement).not.toBeChecked();
  },
};

export const Disabled: Story = {
  args: {
    label: "Switch",
    appearance: "brand",
    showLabel: true,
    showIcon: true,
    disabled: true,
    readOnly: false,
  },
};

export const ReadOnly: Story = {
  args: {
    label: "Switch",
    appearance: "brand",
    showLabel: true,
    showIcon: true,
    disabled: false,
    readOnly: true,
  },
};
