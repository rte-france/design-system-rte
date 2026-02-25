import { signal } from "@angular/core";
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
    multiple: { control: "boolean" },
    withSelectAll: { control: "boolean" },
    optionToDisplay: {
      control: "select",
      options: ["first-selected", "last-selected", "highest-selected"],
      description: "Option to display when multiple options are selected",
    },
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
    valueChange: (value: string) => {
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

export const Multiple: Story = {
  args: {
    ...Default.args,
    multiple: true,
    value: [],
    withSelectAll: true,
  },
  render: (args) => {
    const options = args.options;

    const values = signal<string[] | undefined>(undefined);
    const displayedValues = signal("");

    function handleChange(value: string) {
      const valuesArray = values();
      if (value === "select-all") {
        if (valuesArray) {
          if (valuesArray.length === options.length) {
            values.set([]);
            displayedValues.set("");
          } else {
            values.set(options.map((option) => option.value));
            displayedValues.set(options.map((option) => option.label).join(", "));
          }
        } else {
          values.set(options.map((option) => option.value));
          displayedValues.set(options.map((option) => option.label).join(", "));
        }
      } else {
        if (valuesArray) {
          if (valuesArray.includes(value)) {
            valuesArray.splice(valuesArray.indexOf(value), 1);
          } else {
            valuesArray.push(value);
          }
          values.set(valuesArray);
          displayedValues.set(
            options
              .filter((option) => values()?.includes(option.value))
              .map((option) => option.label)
              .join(", "),
          );
        } else {
          values.set([value]);
          const selectedOption = options.find((option) => option.value === value);
          displayedValues.set(selectedOption ? selectedOption.label : "");
        }
      }
    }

    return {
      props: {
        ...args,
        handleChange,
        values,
        displayedValues,
      },
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
        (valueChange)="handleChange($event)"
        [showResetButton]="showResetButton"
        [showAssistiveIcon]="showAssistiveIcon"
        [multiple]="multiple"
        [withSelectAll]="withSelectAll"
        [optionToDisplay]="optionToDisplay"
        />
        <span style="font-family: Arial; color: var(--content-primary);">
          Selected values : {{ displayedValues() }}
        </span>
    </div>
    `,
    };
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
