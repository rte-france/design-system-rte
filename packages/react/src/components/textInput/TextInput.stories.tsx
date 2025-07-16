import { TextInputProps } from "@design-system-rte/core/components/text-input/text-input.interface";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { IconIds as RegularIconsList, TogglableIcons as TogglableIconsList } from "../icon/IconMap";

import TextInput from "./TextInput";

const RegularIconIds = Object.keys(RegularIconsList);
const TogglableIconIds = Object.keys(TogglableIconsList);

const mockFn = fn();

const meta: Meta<typeof TextInput> = {
  title: "TextInput",
  component: TextInput,
  tags: ["autodocs"],
  argTypes: {
    value: { control: "text" },
    label: { control: "text", defaultValue: "Label" },
    labelPosition: { control: { type: "radio" }, options: ["top", "side"], defaultValue: "top" },
    required: { control: "boolean", defaultValue: false },
    showCounter: { control: "boolean", defaultValue: false },
    maxLength: { control: "number", defaultValue: 150 },
    leftIcon: {
      control: "select",
      options: ["", ...RegularIconIds, ...TogglableIconIds].sort((a, b) => a.localeCompare(b)),
      description: "Nom de l’icône à afficher",
      defaultValue: "check",
    },
    rightIconAction: {
      control: { type: "select" },
      options: ["", "clean", "visibilityOn", "visibilityOff"],
      defaultValue: "clean",
    },
    showLabelRequirement: { control: "boolean", defaultValue: false },
    assistiveAppearance: {
      control: { type: "select" },
      options: ["description", "error", "success", "link"],
      defaultValue: "description",
    },
    showAssistiveIcon: { control: "boolean", defaultValue: false },
    assistiveTextLabel: { control: "text", defaultValue: "" },
    disabled: { control: "boolean", defaultValue: false },
    error: { control: "boolean", defaultValue: false },
    readOnly: { control: "boolean", defaultValue: false },
    onChange: mockFn,
    onRightIconClick: { action: "right icon clicked" },
  },
};
export default meta;

type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    label: "Label",
    labelPosition: "top",
    required: false,
    showCounter: false,
    showRightIcon: true,
    rightIconAction: "visibilityOn",
    showLabelRequirement: false,
    assistiveAppearance: "description",
    showAssistiveIcon: false,
    assistiveTextLabel: "Assistive Text",
    disabled: false,
    error: false,
    readOnly: false,
    maxLength: 150,
  } as TextInputProps,
  render: (args) => <TextInput {...args} />,
};
