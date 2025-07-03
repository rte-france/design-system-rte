import type { Meta, StoryObj } from "@storybook/angular";

import { TextareaComponent } from "./textarea.component";

const meta: Meta<TextareaComponent> = {
  title: "Textarea",
  component: TextareaComponent,
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
    rows: { control: "number" },
    change: { action: "changed" },
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
    requiredAppearance: {
      control: "select",
      options: ["required", "icon", "optional"],
      description: "Appearance of the required indicator",
    },
    maxLength: {
      control: "number",
      description: "Maximum number of characters allowed in the textarea",
    },
  },
};

export default meta;
type Story = StoryObj<TextareaComponent>;

export const Default: Story = {
  args: {
    id: "my-textarea",
    label: "Label",
    labelId: "LabelId",
    assistiveTextLabel: "Assistive text label",
    assistiveTextLink: "https://example.com",
    assistiveTextAppearance: "description",
    required: false,
    requiredAppearance: "icon",
    value: "",
    rows: 3,
  },
  render: (args) => ({
    props: { ...args },
    template: `
    <div style="width: 350px">
      <rte-textarea
        [id]="'${args.id}'"
        [label]="'${args.label}'"
        [labelId]="'${args.labelId}'"
        [assistiveTextLabel]="'${args.assistiveTextLabel}'"
        [assistiveTextLink]="'${args.assistiveTextLink}'"
        [assistiveTextAppearance]="'${args.assistiveTextAppearance}'"
        [required]=${args.required}
        [requiredAppearance]="'${args.requiredAppearance}'"
        [maxLength]=${args.maxLength}
        [required]=${args.required}
        [readOnly]=${args.readOnly}
        [value]="'${args.value}'"
        [rows]=${args.rows}
        [disabled]=${args.disabled}
        (change)="args.change($event)"
        />
    </div>
    `,
  }),
};

export const CharacterCount: Story = {
  args: {
    ...Default.args,
    maxLength: 100,
  },
  render: (args) => ({
    props: { ...args },
    template: `
    <div style="width: 350px">
      <rte-textarea
        [id]="'${args.id}'"
        [label]="'${args.label}'"
        [labelId]="'${args.labelId}'"
        [assistiveTextLabel]="'${args.assistiveTextLabel}'"
        [assistiveTextLink]="'${args.assistiveTextLink}'"
        [assistiveTextAppearance]="'${args.assistiveTextAppearance}'"
        [required]=${args.required}
        [requiredAppearance]="'${args.requiredAppearance}'"
        [maxLength]=${args.maxLength}
        [required]=${args.required}
        [readOnly]=${args.readOnly}
        [value]="'${args.value}'"
        [rows]=${args.rows}
        [disabled]=${args.disabled}
        (change)="args.change($event)"
        />
    </div>
    `,
  }),
};

export const Error: Story = {
  args: {
    ...Default.args,
    maxLength: 100,
    assistiveTextLabel: "Error message",
    assistiveTextAppearance: "error",
  },
  render: (args) => ({
    props: { ...args },
    template: `
    <div style="width: 350px">
      <rte-textarea
        [id]="'${args.id}'"
        [label]="'${args.label}'"
        [labelId]="'${args.labelId}'"
        [assistiveTextLabel]="'${args.assistiveTextLabel}'"
        [assistiveTextLink]="'${args.assistiveTextLink}'"
        [assistiveTextAppearance]="'${args.assistiveTextAppearance}'"
        [required]=${args.required}
        [requiredAppearance]="'${args.requiredAppearance}'"
        [maxLength]=${args.maxLength}
        [required]=${args.required}
        [readOnly]=${args.readOnly}
        [value]="'${args.value}'"
        [rows]=${args.rows}
        [disabled]=${args.disabled}
        (change)="args.change($event)"
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
      <rte-textarea
        [id]="'${args.id}'"
        [label]="'${args.label}'"
        [labelId]="'${args.labelId}'"
        [assistiveTextLabel]="'${args.assistiveTextLabel}'"
        [assistiveTextLink]="'${args.assistiveTextLink}'"
        [assistiveTextAppearance]="'${args.assistiveTextAppearance}'"
        [required]=${args.required}
        [requiredAppearance]="'${args.requiredAppearance}'"
        [maxLength]=${args.maxLength}
        [required]=${args.required}
        [readOnly]=${args.readOnly}
        [value]="'${args.value}'"
        [rows]=${args.rows}
        [disabled]=${args.disabled}
        (change)="args.change($event)"
        />
    </div>
    `,
  }),
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
      <rte-textarea
        [id]="'${args.id}'"
        [label]="'${args.label}'"
        [labelId]="'${args.labelId}'"
        [assistiveTextLabel]="'${args.assistiveTextLabel}'"
        [assistiveTextLink]="'${args.assistiveTextLink}'"
        [assistiveTextAppearance]="'${args.assistiveTextAppearance}'"
        [required]=${args.required}
        [requiredAppearance]="'${args.requiredAppearance}'"
        [maxLength]=${args.maxLength}
        [required]=${args.required}
        [readOnly]=${args.readOnly}
        [value]="'${args.value}'"
        [rows]=${args.rows}
        [disabled]=${args.disabled}
        (change)="args.change($event)"
        />
    </div>
    `,
  }),
};
