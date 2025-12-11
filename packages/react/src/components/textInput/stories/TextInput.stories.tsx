import { TextInputProps } from "@design-system-rte/core/components/text-input/text-input.interface";
import { SPACE_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";
import { Meta, StoryObj } from "@storybook/react";
import { fn, within, userEvent, expect, waitFor } from "@storybook/test";

import { focusElementBeforeComponent } from "../../../../.storybook/testing/testing.utils";
import { RegularIcons as RegularIconsList, TogglableIcons as TogglableIconsList } from "../../icon/IconMap";
import TextInput from "../TextInput";

const RegularIconIds = Object.keys(RegularIconsList);
const TogglableIconIds = Object.keys(TogglableIconsList);

const mockFn = fn();

const meta: Meta<typeof TextInput> = {
  title: "Composants/TextInput/TextInput",
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
    showAssistiveIcon: { control: "boolean" },
    assistiveTextLabel: { control: "text", defaultValue: "" },
    disabled: { control: "boolean" },
    error: { control: "boolean" },
    readOnly: { control: "boolean" },
    onChange: mockFn,
    onRightIconClick: { action: "right icon clicked" },
  },
};
export default meta;

type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    id: "text-input-default",
    label: "Label",
    labelPosition: "top",
    required: false,
    disabled: false,
    showCounter: false,
    showLabelRequirement: false,
    assistiveAppearance: "description",
    showAssistiveIcon: false,
    error: false,
    readOnly: false,
    maxLength: 150,
    placeholder: "Placeholder",
    value: "",
    "aria-required": true,
    autoComplete: "off",
  } as TextInputProps,
  render: (args) => <TextInput {...args} />,
};

export const CharacterCount: Story = {
  args: {
    ...Default.args,
    maxLength: 15,
    showCounter: true,
  } as TextInputProps,
  render: (args) => (
    <div data-testid="input-container">
      <TextInput {...args} />
    </div>
  ),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const inputContainer = canvas.getByTestId("input-container");
    const textInput = inputContainer.querySelector("input");
    const counter = canvas.getByTestId("input-counter");
    await userEvent.type(
      textInput!,
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate libero et lorem iaculis ullamcorper. Duis dictum libero sed ultrices rutrum. Nullam hendrerit bibendum ornare. Donec consequat pellentesque lectus, quis gravida tortor luctus nec.",
    );
    await waitFor(() => expect(textInput!.value.length).toBe(args.maxLength));
    await waitFor(() => expect(counter).toHaveTextContent(`${args.maxLength}/${args.maxLength}`));
  },
};

export const Error: Story = {
  args: {
    ...Default.args,
    error: true,
    assistiveAppearance: "error",
    showAssistiveIcon: true,
    assistiveTextLabel: "Error message",
  } as TextInputProps,
  render: (args) => <TextInput {...args} />,
};

export const InteractionStates: Story = {
  args: {
    ...Default.args,
  } as TextInputProps,
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px", fontFamily: "Nunito Sans" }}>
      <div>
        <TextInput {...args} label="Enabled" />
      </div>
      <div>
        <TextInput {...args} label="Disabled" disabled />
      </div>
      <div>
        <TextInput {...args} label="Read only" value="Read only text" data-testid="read-only" readOnly />
      </div>
      <div>
        <TextInput {...args} label="Error" assistiveTextLabel="Error message" assistiveAppearance="error" error />
      </div>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const readOnlyInput = canvas.getByTestId("read-only");
    const rightIcon = readOnlyInput.querySelector("rte-icon");
    expect(rightIcon).not.toBeInTheDocument();
  },
};

export const Sizes: Story = {
  args: {
    ...Default.args,
  } as TextInputProps,
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px", fontFamily: "Nunito Sans" }}>
      <div>
        <h3>Default width (300px)</h3>
        <TextInput {...args} label="Default" />
      </div>
      <div>
        <h3>20px width (truncated to min-width 48px)</h3>
        <TextInput {...args} label="20px" width="20px" />
      </div>
      <div>
        <h3>100% width</h3>
        <TextInput {...args} label="100%" width="100%" />
      </div>
    </div>
  ),
};

export const LabelPosition: Story = {
  args: {
    ...Default.args,
  } as TextInputProps,
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px", fontFamily: "Nunito Sans" }}>
      <div>
        <TextInput {...args} label="Top" labelPosition="top" />
      </div>
      <div>
        <TextInput {...args} label="Side" labelPosition="side" />
      </div>
    </div>
  ),
};

export const RequiredIndicator: Story = {
  args: {
    ...Default.args,
  } as TextInputProps,
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px", fontFamily: "Nunito Sans" }}>
      <div>
        <h3>Required (show label requirement)</h3>
        <TextInput {...args} width="400px" label="Label" required showLabelRequirement />
      </div>
      <div>
        <h3>Required (hide label requirement)</h3>
        <TextInput {...args} width="400px" label="Label" required assistiveAppearance="error" />
      </div>
      <div>
        <h3>Not required (show label requirement)</h3>
        <TextInput {...args} width="400px" label="Label" showLabelRequirement />
      </div>
      <div>
        <h3>Not required (hide label requirement)</h3>
        <TextInput {...args} width="400px" label="Label" assistiveAppearance="error" />
      </div>
    </div>
  ),
};

export const AssistiveText: Story = {
  args: {
    ...Default.args,
    assistiveTextLabel: "Assistive text",
  } as TextInputProps,
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px", fontFamily: "Nunito Sans" }}>
      <div>
        <TextInput {...args} label="Description" assistiveAppearance="description" />
      </div>
      <div>
        <TextInput {...args} label="Error" assistiveAppearance="error" error />
      </div>
      <div>
        <TextInput {...args} label="Success" assistiveAppearance="success" />
      </div>
      <div>
        <TextInput {...args} label="Link" assistiveAppearance="link" />
      </div>
      <div>
        <TextInput {...args} label="Error + icon" assistiveAppearance="error" showAssistiveIcon error />
      </div>
      <div>
        <TextInput {...args} label="Success + icon" assistiveAppearance="success" showAssistiveIcon />
      </div>
    </div>
  ),
};

export const LeftIcon: Story = {
  args: {
    ...Default.args,
    leftIcon: "search",
  } as TextInputProps,
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px", fontFamily: "Nunito Sans" }}>
      <div>
        <TextInput {...args} label="Search icon" />
      </div>
      <div>
        <TextInput {...args} label="Search icon + error" leftIcon="search" error />
      </div>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const leftIcon = canvas.getByTestId("left-icon error");
    expect(leftIcon).toBeVisible();
  },
};

export const RightIconClean: Story = {
  args: {
    ...Default.args,
    rightIconAction: "clean",
    showRightIcon: true,
  } as TextInputProps,
  render: (args) => <TextInput data-testid="input" {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textInput = canvas.getByTestId("input");
    let rightIcon = canvas.queryByTestId("right-icon");
    expect(rightIcon).not.toBeInTheDocument();
    await userEvent.type(textInput, "Hello");
    rightIcon = canvas.getByTestId("right-icon");
    await userEvent.tab();
    expect(rightIcon).toBeInTheDocument();
    await userEvent.keyboard(SPACE_KEY);
    expect(textInput).toHaveValue("");
    expect(rightIcon).not.toBeInTheDocument();
  },
};

export const KeyboardInteraction: Story = {
  args: {
    ...Default.args,
  } as TextInputProps,
  render: (args) => <TextInput data-testid="input" {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textInput = canvas.getByTestId("input");
    focusElementBeforeComponent(canvasElement);
    await userEvent.tab();
    expect(textInput).toHaveFocus();
  },
};

export const KeyboardRightIconClean: Story = {
  args: {
    ...Default.args,
    rightIconAction: "clean",
    showRightIcon: true,
  } as TextInputProps,
  render: (args) => <TextInput data-testid="input" {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textInput = canvas.getByTestId("input");
    await userEvent.type(textInput, "Hello");
    await userEvent.tab();
    await userEvent.keyboard(SPACE_KEY);
    expect(textInput).toHaveValue("");
  },
};

export const KeyboardRightIconVisibility: Story = {
  args: {
    ...Default.args,
    rightIconAction: "visibilityOff",
    showRightIcon: true,
  } as TextInputProps,
  render: (args) => <TextInput data-testid="input" {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textInput = canvas.getByTestId("input");
    await userEvent.type(textInput, "Hello");
    await userEvent.tab();
    expect(textInput).toHaveAttribute("type", "text");
    await userEvent.keyboard(SPACE_KEY);
    expect(textInput).toHaveAttribute("type", "password");
    await userEvent.keyboard(SPACE_KEY);
    expect(textInput).toHaveAttribute("type", "text");
  },
};
