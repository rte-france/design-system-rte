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
    showLabel: {
      control: "boolean",
      description: "show the label of the Loader",
      defaultValue: "true",
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
};
export default meta;
type Story = StoryObj<LoaderComponent>;

export const Default: Story = {
  args: {
    appearance: "brand",
    labelPosition: "right",
    label: "Chargement...",
    size: "medium",
    showLabel: true,
  },
};

export const SizesComparison: Story = {
  args: {
    appearance: "brand",
    labelPosition: "under",
    showLabel: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; gap: 32px; align-items: flex-start;">
        <rte-loader appearance="${args.appearance}" labelPosition="${args.labelPosition}" [showLabel]="${args.showLabel}" size="small" label="Small" />
        <rte-loader appearance="${args.appearance}" labelPosition="${args.labelPosition}" [showLabel]="${args.showLabel}" size="medium" label="Medium" />
        <rte-loader appearance="${args.appearance}" labelPosition="${args.labelPosition}" [showLabel]="${args.showLabel}" size="large" label="Large" />
      </div>
    `,
  }),
};

export const WithoutLabelDefinition: Story = {
  args: {
    appearance: "brand",
    size: "medium",
    showLabel: true,
    labelPosition: "under",
  },
};

export const ShowLabelFalse: Story = {
  args: {
    appearance: "brand",
    size: "medium",
    showLabel: false,
    label: "Chargement",
    labelPosition: "under",
  },
};

export const LabelPositionRight: Story = {
  args: {
    appearance: "brand",
    size: "medium",
    showLabel: true,
    label: "Chargement",
    labelPosition: "right",
  },
};
