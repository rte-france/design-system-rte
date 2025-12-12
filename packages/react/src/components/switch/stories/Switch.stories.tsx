import { ENTER_KEY, SPACE_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";
import { Meta, StoryObj } from "@storybook/react";
import { expect, within, userEvent } from "@storybook/test";

import { focusElementBeforeComponent } from "../../../../.storybook/testing/testing.utils";
import Switch from "../Switch";

const meta = {
  title: "Composants/Switch/Switch",
  component: Switch,
  decorators: [
    (Story) => (
      <div style={{ height: "50px", width: "200px" }}>
        <Story />
        <div>
          {" "}
          <p>
            {" "}
            Switch State : <span id="switch-state"> </span>
          </p>
        </div>
      </div>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Label for the switch",
      defaultValue: "Label",
    },
    appearance: {
      control: "select",
      options: ["brand", "neutral"],
      description: "Appearance of the switch",
      defaultValue: "brand",
    },
    showLabel: {
      control: "boolean",
      description: "Whether to show the label",
      defaultValue: true,
    },
    showIcon: {
      control: "boolean",
      description: "Whether to show the icon",
      defaultValue: true,
    },
    disabled: {
      control: "boolean",
      description: "Whether the switch is disabled",
      defaultValue: false,
    },
    readOnly: {
      control: "boolean",
      description: "Whether the switch is read-only",
      defaultValue: false,
    },
    checked: {
      control: "boolean",
      description: "Initial checked state of the switch",
      defaultValue: false,
    },
    onChange: {
      action: "changed",
      description: "Function called when the switch state changes",
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Label",
    showLabel: true,
    disabled: false,
    readOnly: false,
    appearance: "brand",
    showIcon: true,
    checked: false,
    onChange: (e) => {
      const switchState = e.target.checked ? "ON" : "OFF";
      const switchStateElement = document.getElementById("switch-state");
      if (switchStateElement) {
        switchStateElement.textContent = switchState;
      }
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const switchElement = canvas.getByRole("switch");
    focusElementBeforeComponent(canvasElement);

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
    label: "Disabled Switch",
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    label: "Read-Only Switch",
    readOnly: true,
  },
};
