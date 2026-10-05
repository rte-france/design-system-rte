import { Meta, StoryObj } from "@storybook/angular";

import { LoaderComponent } from "../loader.component";

const meta: Meta<LoaderComponent> = {
  title: "Composants/Loader/Loader",
  component: LoaderComponent,
  tags: ["autodocs"],
  argTypes: {
    appearance: {
      control: "select",
      options: ["brand", "reverse"],
      description: "appearance of the Loader",
      defaultValue: "brand",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "size of the Loader",
      defaultValue: "medium",
    },
    labelPosition: {
      control: "select",
      options: ["right", "under"],
      description: "position of the label",
      defaultValue: "right",
    },
    label: {
      control: "text",
      description: "label of the Loader",
      defaultValue: "Chargement",
    },
  },
  parameters: {
    layout: "centered",
  },
};
export default meta;
type Story = StoryObj<LoaderComponent>;

export const Default: Story = {
  args: {
    appearance: "brand",
    labelPosition: "right",
    label: "Chargement...",
    size: "medium",
  },
};

export const Appearance: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <rte-loader [appearance]="'brand'" [label]="label"></rte-loader>
        <div style="background: #1f2937; padding: 16px;">
          <rte-loader [appearance]="'reverse'" [label]="label"></rte-loader>
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
      <div style="display: flex; gap: 48px;">
        <rte-loader [labelPosition]="'right'" [label]="label"></rte-loader>
        <rte-loader [labelPosition]="'under'" [label]="label"></rte-loader>
      </div>
    `,
  }),
};

export const Size: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; align-items: center; gap: 32px;">
        <rte-loader [size]="'small'" [label]="label"></rte-loader>
        <rte-loader [size]="'medium'" [label]="label"></rte-loader>
        <rte-loader [size]="'large'" [label]="label"></rte-loader>
      </div>
    `,
  }),
};
