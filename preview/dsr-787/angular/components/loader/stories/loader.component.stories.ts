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
