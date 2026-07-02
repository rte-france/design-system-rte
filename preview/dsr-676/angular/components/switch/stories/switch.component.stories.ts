import { ENTER_KEY, SPACE_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";
import { componentWrapperDecorator, Meta, StoryObj } from "@storybook/angular";
import { expect, within, userEvent } from "@storybook/test";

import { focusElementBeforeComponent } from "../../../../../../../.storybook/testing/testing.utils";
import { SwitchComponent } from "../switch.component";

const meta: Meta<SwitchComponent> = {
  title: "Composants/Switch/Switch",
  component: SwitchComponent,
  tags: ["autodocs"],
  decorators: [
    componentWrapperDecorator(
      (story) => `<div style="height: 50px; width: 200px;">
        ${story}
        <div>
          <p>
            Switch State : <span id="switch-state"> </span>
          </p>
        </div>
      </div>`,
    ),
  ],
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
    stateChange: {
      action: "changed",
      description: "Function called when the switch state changes",
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
    stateChange: (e: Event) => {
      const switchState = (e.target as HTMLInputElement).checked ? "ON" : "OFF";
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
