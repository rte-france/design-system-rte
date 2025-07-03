import type { Meta, StoryObj } from "@storybook/angular";

import { TextareaComponent } from "./textarea.component";

const meta: Meta<TextareaComponent> = {
  title: "Textarea",
  component: TextareaComponent,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<TextareaComponent>;

export const Default: Story = {
  args: {
    id: "my-textarea",
    label: "Label",
    labelId: "LabelId",
    assistiveTextLabel: "Assistive text label",
    required: false,
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
        [required]=${args.required}
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
        [required]=${args.required}
        [maxLength]=${args.maxLength}
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
        assistiveTextAppearance=${args.assistiveTextAppearance}
        [maxLength]=${args.maxLength}
        [required]=${args.required}
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
        assistiveTextAppearance=${args.assistiveTextAppearance}
        [maxLength]=${args.maxLength}
        [required]=${args.required}
        [readOnly]=${args.readOnly}
        [value]="'${args.value}'"
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
        assistiveTextAppearance=${args.assistiveTextAppearance}
        [maxLength]=${args.maxLength}
        [required]=${args.required}
        [readOnly]=${args.readOnly}
        [disabled]=${args.disabled}
        />
    </div>
    `,
  }),
};
