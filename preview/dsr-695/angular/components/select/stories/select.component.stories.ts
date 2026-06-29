import { signal } from "@angular/core";
import {
  TESTING_DOWN_KEY,
  TESTING_ENTER_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard-test.constants";
import type { Meta, StoryObj } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";
import { fn, userEvent, within, expect } from "@storybook/test";

import { focusElementBeforeComponent } from "../../../../../../../.storybook/testing/testing.utils";
import { SelectFooterDirective } from "../select-footer.directive";
import { SelectHeaderDirective } from "../select-header.directive";
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
    multiple: { control: "boolean" },
    withSelectAll: { control: "boolean" },
    optionToDisplay: {
      control: "select",
      options: ["first-selected", "last-selected", "highest-selected"],
      description: "Option to display when multiple options are selected",
    },
  },
  decorators: [
    moduleMetadata({
      imports: [SelectHeaderDirective, SelectFooterDirective],
    }),
  ],
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
    value: "option-2",
    showLabelRequirement: false,
    valueChange: (value: string | string[]) => {
      mockFn(value);
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
    multiple: false,
    withSelectAll: false,
    optionToDisplay: "first-selected",
    width: "350px",
    placeholder: "Select an option",
    compactSpacing: false,
  },
  render: (args) => ({
    props: { ...args },
    template: `
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
        (valueChange)="valueChange($event)"
        [isError]="isError"
        [showResetButton]="showResetButton"
        [showAssistiveIcon]="showAssistiveIcon"
        [width]="width"
        [placeholder]="placeholder"
        [compactSpacing]="compactSpacing"
        [variant]="variant"
        />
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
        [isError]="isError"
        (valueChange)="valueChange($event)"
        [showResetButton]="showResetButton"
        [showAssistiveIcon]="showAssistiveIcon"
        [width]="width"
        [placeholder]="placeholder"
        [compactSpacing]="compactSpacing"
        [variant]="variant"
        />
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
        (valueChange)="valueChange($event)"
        [showResetButton]="showResetButton"
        [showAssistiveIcon]="showAssistiveIcon"
        [width]="width"
        [placeholder]="placeholder"
        [compactSpacing]="compactSpacing"
        [variant]="variant"
        />
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
        (valueChange)="valueChange($event)"
        [showResetButton]="showResetButton"
        [showAssistiveIcon]="showAssistiveIcon"
        [width]="width"
        [placeholder]="placeholder"
        [compactSpacing]="compactSpacing"
        [variant]="variant"
        />
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

export const CompactSpacing: Story = {
  args: {
    ...Default.args,
    compactSpacing: true,
  },
  render: (args) => ({
    props: { ...args },
    template: `
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
        (valueChange)="valueChange($event)"
        [showResetButton]="showResetButton"
        [showAssistiveIcon]="showAssistiveIcon"
        [width]="width"
        [placeholder]="placeholder"
        [compactSpacing]="compactSpacing"
        [variant]="variant"
        />
    `,
  }),
};

export const VisiblySelected: Story = {
  args: {
    ...Default.args,
    variant: "visibly-selected",
  },
  render: (args) => ({
    props: { ...args },
    template: `
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
        (valueChange)="valueChange($event)"
        [showResetButton]="showResetButton"
        [showAssistiveIcon]="showAssistiveIcon"
        [width]="width"
        [placeholder]="placeholder"
        [compactSpacing]="compactSpacing"
        [variant]="variant"
        />
    `,
  }),
};

export const Multiple: Story = {
  args: {
    ...Default.args,
    multiple: true,
    value: ["option-1", "option-2"],
    withSelectAll: true,
  },
  render: (args) => {
    const options = args.options;

    const displayedValues = signal(
      args.value
        ? Array.isArray(args.value)
          ? args.value.map((val) => options.find((option) => option.value === val)?.label).join(", ")
          : options.find((option) => option.value === args.value)?.label || ""
        : "",
    );

    function handleChange(value: string[]) {
      displayedValues.set(
        value
          ? options
              .filter((option) => value.includes(option.value))
              .map((option) => option.label)
              .join(", ")
          : "",
      );
    }

    return {
      props: {
        ...args,
        handleChange,
        displayedValues,
      },
      template: `
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
        (valueChange)="handleChange($event)"
        [showResetButton]="showResetButton"
        [showAssistiveIcon]="showAssistiveIcon"
        [multiple]="multiple"
        [withSelectAll]="withSelectAll"
        [optionToDisplay]="optionToDisplay"
        [width]="width"
        [placeholder]="placeholder"
        [compactSpacing]="compactSpacing"
        [variant]="variant"
        />
        <span style="font-family: Arial; color: var(--content-primary);">
          Selected values : {{ displayedValues() }}
        </span>
    `,
    };
  },
};

export const KeyboardInteraction: Story = {
  args: {
    ...Default.args,
    value: "",
    showResetButton: true,
  },
  render: (args) => ({
    props: { ...args },
    template: `
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
        (valueChange)="valueChange($event)"
        [showResetButton]="showResetButton"
        [showAssistiveIcon]="showAssistiveIcon"
        [width]="width"
        [placeholder]="placeholder"
        [compactSpacing]="compactSpacing"
        [variant]="variant"
        />
    `,
  }),
  play: async ({ canvasElement, args }) => {
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
    expect(select).toHaveTextContent(args.placeholder!);

    await userEvent.click(toggleIcon!);

    await userEvent.tab();

    await userEvent.keyboard(TESTING_DOWN_KEY);
    await userEvent.keyboard(TESTING_DOWN_KEY);
    await userEvent.keyboard(TESTING_ENTER_KEY);
    expect(select).toHaveTextContent("Option 3");
  },
};
