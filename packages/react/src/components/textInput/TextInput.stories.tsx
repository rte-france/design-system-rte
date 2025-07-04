import { Meta, StoryObj } from "@storybook/react";
import TextInput from "./TextInput";
import { TextInputProps } from "@design-system-rte/core/components/text-input/text-input.interface";

const meta: Meta<typeof TextInput> = {
  title: "TextInput",
  component: TextInput,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text", defaultValue: "Label" },
    showLabel: { control: "boolean", defaultValue: true },
    labelPosition: { control: { type: "radio" }, options: ["top", "side"], defaultValue: "top" },
    required_optional: { control: "boolean", defaultValue: false },
    showCounter: { control: "boolean", defaultValue: false },
    value: { control: "text", defaultValue: "" },
    showLeftIcon: { control: "boolean", defaultValue: false },
    showRightIcon: { control: "boolean", defaultValue: false },
    rightIconAppearance: { 
      control: { type: "select" }, 
      options: ["clean", "visibilityOn", "visibilityOff"], 
      defaultValue: "clean" 
    },
    requiredAppearance: { 
      control: { type: "select" }, 
      options: ["required", "requiredIconOnly", "optional"], 
      defaultValue: "requiredIconOnly" 
    },
    showAssistiveText: { control: "boolean", defaultValue: false },
    assistiveAppearance: { 
      control: { type: "select" }, 
      options: ["description", "error", "success", "link"], 
      defaultValue: "description" 
    },
    showAssistiveIcon: { control: "boolean", defaultValue: false },
    assistiveLabel: { control: "text", defaultValue: "" },
    disabled: { control: "boolean", defaultValue: false },
    error: { control: "boolean", defaultValue: false},
    readOnly: { control: "boolean", defaultValue: false },
    onChange: { action: "changed" },
    onRightIconClick: { action: "right icon clicked" },
  },
};
export default meta;

type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    label: "Label",
    showLabel: true,
    labelPosition: "top",
    required_optional: false,
    showCounter: false,
    value: "",
    showLeftIcon: false,
    showRightIcon: false,
    rightIconAppearance: "clean",
    requiredAppearance: "requiredIconOnly",
    showAssistiveText: false,
    assistiveAppearance: "description",
    showAssistiveIcon: false,
    assistiveLabel: "Assistive Text",
    disabled: false,
    error:false,
    readOnly: false,
  } as TextInputProps,
};