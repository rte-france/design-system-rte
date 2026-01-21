import {
  TESTING_DOWN_KEY,
  TESTING_ENTER_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard-test.constants";
import type { Meta, StoryObj } from "@storybook/angular";
import { fn, userEvent, within, expect } from "@storybook/test";

import { focusElementBeforeComponent } from "../../../../../../../.storybook/testing/testing.utils";
import { SelectComponent } from "../select.component";

const meta: Meta<SelectComponent> = {
  title: "Composants/Select/Select",
  component: SelectComponent,
  tags: ["autodocs"],
  argTypes: {
    value: { control: "text" },
    label: { control: "text" },
    labelPosition: {
      control: "select",
      options: ["top", "side"],
      description: "Position of the label relative to the textarea",
    },
    disabled: { control: "boolean" },
    valueChange: { action: "changed" },
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
    readOnly: {
      control: "boolean",
      description: "Whether the textarea is read-only",
    },
    options: { control: "object" },
    isError: { control: "boolean" },
    showResetButton: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<SelectComponent>;

const mockFn = fn();

export const Default: Story = {
  args: {
    id: "my-select",
    label: "Label",
    labelId: "LabelId",
    labelPosition: "top",
    assistiveTextLabel: "Assistive text label",
    assistiveTextLink: "https://example.com",
    assistiveTextAppearance: "description",
    required: false,
    value: "",
    showLabelRequirement: false,
    valueChange: (event: Event) => {
      mockFn(event);
    },
    options: [
      { value: "option-1", label: "Option 1" },
      { value: "option-2", label: "Option 2" },
      { value: "option-3", label: "Option 3" },
    ],
    isError: false,
    readOnly: false,
    disabled: false,
    showResetButton: false,
    showAssistiveIcon: false,
  },
  render: (args) => ({
    props: { ...args },
    template: `
    <div style="width: 350px">
      <rte-select
        [id]="id"
        [label]="label"
        [labelId]="labelId"
        [labelPosition]="labelPosition"
        [assistiveTextLabel]="assistiveTextLabel"
        [assistiveTextLink]="assistiveTextLink"
        [assistiveTextAppearance]="assistiveTextAppearance"
        [required]="required"
        [showLabelRequirement]="showLabelRequirement"
        [readOnly]="readOnly"
        [value]="value"
        [disabled]="disabled"
        [options]="options"
        (change)="change($event)"
        [isError]="isError"
        [showResetButton]="showResetButton"
        [showAssistiveIcon]="showAssistiveIcon"
        />
    </div>
    `,
  }),
};

export const Error: Story = {
  args: {
    ...Default.args,
    assistiveTextLabel: "Error message",
    assistiveTextAppearance: "error",
  },
  render: (args) => ({
    props: { ...args },
    template: `
    <div style="width: 350px">
      <rte-select
        [id]="id"
        [label]="label"
        [labelId]="labelId"
        [labelPosition]="labelPosition"
        [assistiveTextLabel]="assistiveTextLabel"
        [assistiveTextLink]="assistiveTextLink"
        [assistiveTextAppearance]="assistiveTextAppearance"
        [required]="required"
        [showLabelRequirement]="showLabelRequirement"
        [readOnly]="readOnly"
        [value]="value"
        [disabled]="disabled"
        [options]="options"
        isError="true"
        (change)="change($event)"
        [showResetButton]="showResetButton"
        [showAssistiveIcon]="showAssistiveIcon"
        />
    </div>
    `,
  }),
};

export const ReadOnly: Story = {
  args: {
    ...Default.args,
    readOnly: true,
    value: "This is a read-only textarea.",
  },
  render: (args) => ({
    props: { ...args },
    template: `
    <div style="width: 350px">
      <rte-select
        [id]="id"
        [label]="label"
        [labelId]="labelId"
        [labelPosition]="labelPosition"
        [assistiveTextLabel]="assistiveTextLabel"
        [assistiveTextLink]="assistiveTextLink"
        [assistiveTextAppearance]="assistiveTextAppearance"
        [required]="required"
        [showLabelRequirement]="showLabelRequirement"
        [readOnly]="readOnly"
        [value]="value"
        [disabled]="disabled"
        [options]="options"
        (change)="change($event)"
        [showResetButton]="showResetButton"
        [showAssistiveIcon]="showAssistiveIcon"
        />
    </div>
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole("combobox");
    focusElementBeforeComponent(canvasElement);
    await userEvent.tab();
    expect(select).not.toHaveFocus();
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
  render: (args) => ({
    props: { ...args },
    template: `
    <div style="width: 350px">
      <rte-select
        [id]="id"
        [label]="label"
        [labelId]="labelId"
        [labelPosition]="labelPosition"
        [assistiveTextLabel]="assistiveTextLabel"
        [assistiveTextLink]="assistiveTextLink"
        [assistiveTextAppearance]="assistiveTextAppearance"
        [required]="required"
        [showLabelRequirement]="showLabelRequirement"
        [readOnly]="readOnly"
        [value]="value"
        [disabled]="disabled"
        [options]="options"
        (change)="change($event)"
        [showResetButton]="showResetButton"
        [showAssistiveIcon]="showAssistiveIcon"
        />
    </div>
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole("combobox");
    focusElementBeforeComponent(canvasElement);
    await userEvent.tab();
    expect(select).not.toHaveFocus();
  },
};

export const KeyboardInteraction: Story = {
  args: {
    ...Default.args,
    showResetButton: true,
  },
  render: (args) => ({
    props: { ...args },
    template: `
    <div style="width: 350px">
      <rte-select
        [id]="id"
        [label]="label"
        [labelId]="labelId"
        [labelPosition]="labelPosition"
        [assistiveTextLabel]="assistiveTextLabel"
        [assistiveTextLink]="assistiveTextLink"
        [assistiveTextAppearance]="assistiveTextAppearance"
        [required]="required"
        [showLabelRequirement]="showLabelRequirement"
        [readOnly]="readOnly"
        [value]="value"
        [disabled]="disabled"
        [options]="options"
        (change)="change($event)"
        [showResetButton]="showResetButton"
        [showAssistiveIcon]="showAssistiveIcon"
        />
    </div>
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole("combobox");
    focusElementBeforeComponent(canvasElement);
    await userEvent.tab();
    expect(select).toHaveFocus();
    await userEvent.keyboard(TESTING_ENTER_KEY);
    await userEvent.tab();
    await userEvent.keyboard(TESTING_DOWN_KEY);
    await userEvent.keyboard(TESTING_ENTER_KEY);
    expect(select).toHaveTextContent("Option 2");

    const clearButton = select.querySelector("rte-icon-button.clear-icon button");
    const toggleIcon = select.querySelector("rte-icon.trigger-icon-down");

    await userEvent.click(clearButton!);
    expect(select).toHaveTextContent("");

    await userEvent.click(toggleIcon!);

    await userEvent.tab();

    await userEvent.keyboard(TESTING_DOWN_KEY);
    await userEvent.keyboard(TESTING_DOWN_KEY);
    await userEvent.keyboard(TESTING_ENTER_KEY);
    expect(select).toHaveTextContent("Option 3");
  },
};
