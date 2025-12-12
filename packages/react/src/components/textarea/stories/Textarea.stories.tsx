import { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect, fn } from "@storybook/test";

import { focusElementBeforeComponent } from "../../../../.storybook/testing/testing.utils";
import Textarea from "../Textarea";

const meta = {
  title: "Composants/Textarea/Textarea",
  tags: ["autodocs"],
  component: Textarea,
  args: {
    disabled: false,
  },
  argTypes: {
    value: { control: "text" },
    label: { control: "text" },
    labelPosition: {
      control: "select",
      options: ["top", "side"],
      description: "Position of the label relative to the textarea",
    },
    disabled: { control: "boolean" },
    rows: { control: "number" },
    onChange: { action: "changed" },
    assistiveTextAppearance: {
      control: "select",
      options: ["description", "error", "success", "link"],
      description: "Appearance of the assistive text",
    },
    assistiveTextLink: {
      control: "text",
      description: "Link for the assistive text when appearance is 'link'",
    },
    required: {
      control: "boolean",
      description: "Whether the textarea is required",
    },
    showLabelRequirement: {
      control: "boolean",
      description: "Whether to show the requirement indicator in the label",
    },
    maxLength: {
      control: "number",
      description: "Maximum number of characters allowed in the textarea",
    },
    showCounter: {
      control: "boolean",
      description: "Whether to display the character count",
    },
    readOnly: {
      control: "boolean",
      description: "Whether the textarea is read-only",
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

const mockFn = fn();

export const Default: Story = {
  args: {
    id: "my-textarea",
    label: "Label",
    labelId: "LabelId",
    assistiveTextLabel: "Assistive text for the textarea",
    required: false,
    showLabelRequirement: false,
    onChange: mockFn,
    readOnly: false,
    rows: 3,
  },
  render: (args) => {
    return (
      <div style={{ width: "350px" }}>
        <Textarea {...args} />
      </div>
    );
  },
};

export const CharacterCount: Story = {
  args: {
    ...Default.args,
    maxLength: 10,
  },
  render: (args) => {
    return (
      <div style={{ width: "350px" }}>
        <Textarea {...args} />
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole("textbox");
    await userEvent.type(textarea, "Hello World");
    expect(mockFn).toHaveBeenCalledTimes(10);
    expect(textarea).toHaveValue("Hello Worl");
  },
};

export const Error: Story = {
  args: {
    ...Default.args,
    maxLength: 100,
    assistiveTextLabel: "Error message",
    assistiveTextAppearance: "error",
  },
  render: (args) => {
    return (
      <div style={{ width: "350px" }}>
        <Textarea {...args} />
      </div>
    );
  },
};

export const ReadOnly: Story = {
  args: {
    ...Default.args,
    readOnly: true,
    value: "This is a read-only textarea.",
  },
  render: (args) => {
    return (
      <div style={{ width: "350px" }}>
        <Textarea {...args} />
      </div>
    );
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole("textbox");
    focusElementBeforeComponent(canvasElement);
    await userEvent.tab();
    expect(textarea).toHaveFocus();
    await userEvent.type(textarea, "Hello World");
    expect(mockFn).not.toHaveBeenCalled();
    expect(textarea).toHaveValue(args.value);
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
  render: (args) => {
    return (
      <div style={{ width: "350px" }}>
        <Textarea {...args} />
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole("textbox");
    await userEvent.tab();
    expect(textarea).not.toHaveFocus();
  },
};

export const KeyboardInteraction: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => {
    return (
      <div style={{ width: "350px" }}>
        <Textarea {...args} />
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole("textbox");
    focusElementBeforeComponent(canvasElement);
    await userEvent.tab();
    expect(textarea).toHaveFocus();
    textarea.blur();
  },
};
