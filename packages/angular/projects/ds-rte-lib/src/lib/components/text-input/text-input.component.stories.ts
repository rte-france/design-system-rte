import { SPACE_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";
import { Meta, StoryObj } from "@storybook/angular";
import { expect, userEvent, waitFor, within } from "@storybook/test";

import { RegularIcons as RegularIconsList, TogglableIcons as TogglableIconsList } from "../icon/icon-map";

import { TextInputComponent } from "./text-input.component";

const RegularIconIds = Object.keys(RegularIconsList);
const TogglableIconIds = Object.keys(TogglableIconsList);

const meta: Meta<TextInputComponent> = {
  title: "TextInput",
  component: TextInputComponent,
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
    valueChange: { action: "value changed" },
    rightIconClick: { action: "right icon clicked" },
  },
};
export default meta;
type Story = StoryObj<TextInputComponent>;

export const Default: Story = {
  args: {
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
    value: "",
  },
};

export const CharacterCount: Story = {
  args: {
    ...Default.args,
    maxLength: 15,
    showCounter: true,
    id: "text-input-add-chip",
  },
  render: (args) => ({
    props: args,
    template: `
      <div data-testid="input-container">
        <rte-text-input
          [id]="id"
          [label]="label"
          [labelPosition]="labelPosition"
          [required]="required"
          [showCounter]="showCounter"
          [maxLength]="maxLength"
          [value]="value"
          (valueChange)="valueChange($event)"
        ></rte-text-input>
      </div>
    `,
  }),
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
  },
};

export const InteractionStates: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; flex-direction: column; gap: 32px; font-family: Nunito Sans">
        <rte-text-input [label]="'Enabled'" [value]="value"></rte-text-input>
        <rte-text-input [label]="'Disabled'" [disabled]="true"></rte-text-input>
        <rte-text-input [label]="'Read only'" [value]="'Read only text'" [readOnly]="true" data-testid="read-only"></rte-text-input>
        <rte-text-input [label]="'Error'" [assistiveTextLabel]="'Error message'" [assistiveAppearance]="'error'" [error]="true"></rte-text-input>
      </div>
    `,
  }),
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
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; flex-direction: column; gap: 32px; font-family: Nunito Sans">
        <div>
          <h3>Default width (300px)</h3>
          <rte-text-input [label]="'Default'"></rte-text-input>
        </div>
        <div>
          <h3>20px width (truncated to min-width 48px)</h3>
          <rte-text-input [label]="'20px'" [width]="'20px'"></rte-text-input>
        </div>
        <div>
          <h3>100% width</h3>
          <rte-text-input [label]="'100%'" [width]="'100%'"></rte-text-input>
        </div>
      </div>
    `,
  }),
};

export const LabelPosition: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; flex-direction: column; gap: 32px; font-family: Nunito Sans">
        <rte-text-input [label]="'Top'" [labelPosition]="'top'"></rte-text-input>
        <rte-text-input [label]="'Side'" [labelPosition]="'side'"></rte-text-input>
      </div>
    `,
  }),
};

export const RequiredIndicator: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; flex-direction: column; gap: 32px; font-family: Nunito Sans">
        <div>
          <h3>Required (show label requirement)</h3>
          <rte-text-input [width]="'400px'" [label]="'Label'" [required]="true" [showLabelRequirement]="true"></rte-text-input>
        </div>
        <div>
          <h3>Required (hide label requirement)</h3>
          <rte-text-input [width]="'400px'" [label]="'Label'" [required]="true" [assistiveAppearance]="'error'"></rte-text-input>
        </div>
        <div>
          <h3>Not required (show label requirement)</h3>
          <rte-text-input [width]="'400px'" [label]="'Label'" [showLabelRequirement]="true"></rte-text-input>
        </div>
        <div>
          <h3>Not required (hide label requirement)</h3>
          <rte-text-input [width]="'400px'" [label]="'Label'" [assistiveAppearance]="'error'"></rte-text-input>
        </div>
      </div>
    `,
  }),
};

export const AssistiveText: Story = {
  args: {
    ...Default.args,
    assistiveTextLabel: "Assistive text",
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; flex-direction: column; gap: 32px; font-family: Nunito Sans">
        <rte-text-input [label]="'Description'" [assistiveAppearance]="'description'" [assistiveTextLabel]="assistiveTextLabel"></rte-text-input>
        <rte-text-input [label]="'Error'" [assistiveAppearance]="'error'" [error]="true" [assistiveTextLabel]="assistiveTextLabel"></rte-text-input>
        <rte-text-input [label]="'Success'" [assistiveAppearance]="'success'" [assistiveTextLabel]="assistiveTextLabel"></rte-text-input>
        <rte-text-input [label]="'Link'" [assistiveAppearance]="'link'" [assistiveTextLabel]="assistiveTextLabel"></rte-text-input>
        <rte-text-input [label]="'Error + icon'" [assistiveAppearance]="'error'" [showAssistiveIcon]="true" [error]="true" [assistiveTextLabel]="assistiveTextLabel"></rte-text-input>
        <rte-text-input [label]="'Success + icon'" [assistiveAppearance]="'success'" [showAssistiveIcon]="true" [assistiveTextLabel]="assistiveTextLabel"></rte-text-input>
      </div>
    `,
  }),
};

export const LeftIcon: Story = {
  args: {
    ...Default.args,
    leftIcon: "search",
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; flex-direction: column; gap: 32px; font-family: Nunito Sans">
        <rte-text-input [label]="'Search icon'" [leftIcon]="'search'"></rte-text-input>
        <rte-text-input [label]="'Search icon + error'" [leftIcon]="'search'" [error]="true" data-testid="error"></rte-text-input>
      </div>
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const errorInput = canvas.getByTestId("error");
    const leftIcon = errorInput.querySelector("rte-icon");
    expect(leftIcon).toBeVisible();
    expect(leftIcon).toHaveAttribute("ng-reflect-name", "error");
  },
};

export const RightIconClean: Story = {
  args: {
    ...Default.args,
    rightIconAction: "clean",
    showRightIcon: true,
  },
  render: (args) => ({
    props: args,
    template: `<rte-text-input [label]="label" data-testid="input" [rightIconAction]="rightIconAction" [showRightIcon]="showRightIcon"></rte-text-input>`,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textInput = canvas.getByTestId("input").querySelector("input");
    let rightIcon = canvas.queryByTestId("right-icon");
    expect(rightIcon).not.toBeInTheDocument();
    await userEvent.type(textInput!, "Hello");
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
  },
  render: (args) => ({
    props: args,
    template: `<rte-text-input [label]="label" data-testid="input"></rte-text-input>`,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textInput = canvas.getByTestId("input").querySelector("input");
    await userEvent.tab();
    expect(textInput).toHaveFocus();
  },
};

export const KeyboardRightIconClean: Story = {
  args: {
    ...Default.args,
    rightIconAction: "clean",
    showRightIcon: true,
  },
  render: (args) => ({
    props: args,
    template: `<rte-text-input [label]="label" data-testid="input" [rightIconAction]="rightIconAction" [showRightIcon]="showRightIcon"></rte-text-input>`,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textInput = canvas.getByTestId("input").querySelector("input");
    await userEvent.type(textInput!, "Hello");
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
  },
  render: (args) => ({
    props: args,
    template: `<rte-text-input [label]="label" data-testid="input" [rightIconAction]="rightIconAction" [showRightIcon]="showRightIcon"></rte-text-input>`,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textInput = canvas.getByTestId("input").querySelector("input");
    await userEvent.type(textInput!, "Hello");
    await userEvent.tab();
    expect(textInput).toHaveAttribute("type", "text");
    await userEvent.keyboard(SPACE_KEY);
    expect(textInput).toHaveAttribute("type", "password");
    await userEvent.keyboard(SPACE_KEY);
    expect(textInput).toHaveAttribute("type", "text");
  },
};
