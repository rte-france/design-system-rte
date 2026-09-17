import { RADIO_BUTTON_MISSING_ACCESSIBLE_NAME_ERROR } from "@design-system-rte/core";
import { Meta, StoryObj } from "@storybook/angular";
import { userEvent, within, expect } from "@storybook/test";

import { acceptLogError } from "../../../../../../.storybook/testing/testing.utils";

import { RadioButtonComponent } from "./radio-button.component";

const meta: Meta<RadioButtonComponent> = {
  title: "Composants/RadioButton",
  component: RadioButtonComponent,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      defaultValue: "Radio Button",
    },
    value: {
      control: "text",
      defaultValue: "radio-value",
    },
    groupName: {
      control: "text",
      defaultValue: "radio-group",
    },
    ariaLabel: {
      control: "text",
      defaultValue: "",
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
    },
    error: {
      control: "boolean",
      defaultValue: false,
    },
    readOnly: {
      control: "boolean",
      defaultValue: false,
    },

    isChecked: {
      control: "boolean",
      defaultValue: false,
    },
  },
};
export default meta;
type Story = StoryObj<RadioButtonComponent>;

export const Default: Story = {
  args: {
    label: "Radio Button",
    value: "radio-value",
    groupName: "radio-group",
    disabled: false,
    error: false,
    readOnly: false,
    isChecked: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radioButton = canvas.getByRole("radio", { name: /radio button/i });
    await userEvent.click(radioButton);
    expect(radioButton).toBeChecked();
  },
};

export const States: Story = {
  args: {
    ...Default.args,
    groupName: "states-radio-group",
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; gap: 8px">
        <rte-radio-button
          label="Disabled"
          value="disabled-radio-button"
          [groupName]="groupName"
          [disabled]="true"
        ></rte-radio-button>
        <rte-radio-button
          label="Error"
          value="error-radio-button"
          [groupName]="groupName"
          [error]="true"
        ></rte-radio-button>
        <rte-radio-button
          label="Read Only"
          value="readonly-radio-button"
          [groupName]="groupName"
          [readOnly]="true"
        ></rte-radio-button>
        <rte-radio-button
          label="Initially Checked"
          value="initial-checked-radio-button"
          [groupName]="groupName"
          [isChecked]="true"
        ></rte-radio-button>
      </div>
    `,
  }),
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    groupName: "disabled-radio-group",
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    ...Default.args,
    groupName: "error-radio-group",
    error: true,
  },
};

export const ReadOnly: Story = {
  args: {
    ...Default.args,
    groupName: "readonly-radio-group",
    readOnly: true,
  },
};

export const InitiallyChecked: Story = {
  args: {
    ...Default.args,
    groupName: "checked-radio-group",
    isChecked: true,
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radioButton = canvas.getByRole("radio", { name: /radio button/i });
    expect(radioButton).toBeChecked();
  },
};

export const HiddenLabel: Story = {
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    label: "",
    groupName: "hidden-label-radio-group",
  },
  beforeEach: acceptLogError(RADIO_BUTTON_MISSING_ACCESSIBLE_NAME_ERROR),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radioButton = canvas.getByRole("radio", { name: /radio button/i });
    expect(radioButton).toBeInTheDocument();
  },
};

export const HiddenLabelWithAriaLabelOnly: Story = {
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    label: "",
    ariaLabel: "Radio Button",
    groupName: "hidden-label-aria-only-radio-group",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radioButton = await canvas.queryByRole("radio");
    expect(radioButton).toBeInTheDocument();
  },
};
