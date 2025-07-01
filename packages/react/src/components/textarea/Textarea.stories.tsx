import { Meta, StoryObj } from "@storybook/react";

import Textarea from "./Textarea";

const meta = {
  title: "Textarea",
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
    showAssistiveTextIcon: {
      control: "boolean",
      description: "Whether to show an icon next to the assistive text",
    },
    required: {
      control: "boolean",
      description: "Whether the textarea is required",
    },
    requiredAppearance: {
      control: "select",
      options: ["required", "icon", "optional"],
      description: "Appearance of the required indicator",
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "my-textarea",
    label: "Label",
    labelId: "LabelId",
    assistiveTextLabel: "Assistive text for the textarea",
    required: false,
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
    maxLength: 100,
  },
  render: (args) => {
    return (
      <div style={{ width: "350px" }}>
        <Textarea {...args} />
      </div>
    );
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
    defaultValue: "This is a read-only textarea.",
  },
  render: (args) => {
    return (
      <div style={{ width: "350px" }}>
        <Textarea {...args} />
      </div>
    );
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
};
