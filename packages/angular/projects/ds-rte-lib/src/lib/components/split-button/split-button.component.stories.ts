import { Meta, StoryObj } from "@storybook/angular";
import { userEvent, within } from "@storybook/test";

import { SplitButtonComponent } from "./split-button.component";

const meta: Meta<SplitButtonComponent> = {
  title: "SplitButton",
  component: SplitButtonComponent,
  tags: ["autodocs"],
  argTypes: {
    appearance: {
      control: "select",
      options: ["primary", "secondary"],
      defaultValue: "primary",
    },
    size: {
      control: "select",
      options: ["s", "m", "l"],
      defaultValue: "m",
    },
    label: {
      control: "text",
      defaultValue: "Split Button",
    },
    compactSpacing: {
      control: "boolean",
      defaultValue: false,
    },
    selected: {
      control: "boolean",
      defaultValue: false,
    },
    position: {
      control: "select",
      options: ["bottom-start", "bottom-end", "top-start", "top-end"],
      defaultValue: "bottom-start",
    },
    icon: {
      control: "text",
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
    },
  },
};
export default meta;
type Story = StoryObj<SplitButtonComponent>;

export const Default: Story = {
  args: {
    appearance: "primary",
    size: "m",
    label: "Split Button",
    compactSpacing: false,
    selected: false,
    position: "bottom-start",
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await userEvent.click(button);
  },
};

export const Secondary: Story = {
  args: {
    ...Default.args,
    appearance: "secondary",
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: "s",
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    size: "l",
  },
};

export const Compact: Story = {
  args: {
    ...Default.args,
    compactSpacing: true,
  },
};

export const Selected: Story = {
  args: {
    ...Default.args,
    selected: true,
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};
