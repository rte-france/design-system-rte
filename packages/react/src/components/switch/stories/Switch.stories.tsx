import { ENTER_KEY, SPACE_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";
import { Meta, StoryObj } from "@storybook/react";
import { expect, within, userEvent } from "@storybook/test";
import { useState } from "react";

import { focusElementBeforeComponent } from "../../../../.storybook/testing/testing.utils";
import Switch from "../Switch";

const meta = {
  title: "Composants/Switch/Switch",
  component: Switch,
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
      description: "Checked state (controlled)",
      defaultValue: false,
    },
    defaultChecked: {
      control: "boolean",
      description: "Default checked state (uncontrolled)",
      defaultValue: false,
    },
    onChange: {
      description: "Function called when the switch state changes",
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Label",
    disabled: false,
    readOnly: false,
    appearance: "brand",
    showIcon: true,
    checked: false,
  },
  render: (args) => {
    const [checked, setChecked] = useState(!!args.checked);

    return (
      <Switch
        {...args}
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
          args.onChange?.(e);
        }}
      />
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const switchElement = canvas.getByRole("switch");
    focusElementBeforeComponent();

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

export const Appearances: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px" }}>
      <Switch label="Brand Switch" appearance="brand" />
      <Switch label="Neutral Switch" appearance="neutral" />
    </div>
  ),
};

export const IconVisibility: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px" }}>
      <Switch label="Avec label et icône" showIcon />
      <Switch label="Sans icône" showIcon={false} />
    </div>
  ),
};

export const Uncontrolled: Story = {
  args: {
    label: "Uncontrolled Switch",
    defaultChecked: true,
  },
  render: (args) => {
    return (
      <Switch
        {...args}
        onChange={(e) => {
          args.onChange?.(e);
        }}
      />
    );
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
