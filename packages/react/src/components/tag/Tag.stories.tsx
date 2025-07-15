import { Meta, StoryObj } from "@storybook/react";

import Tag from "./Tag";

const meta = {
  title: "Tag",
  component: Tag,
  tags: ["autodocs"],
  argTypes: {
    tagType: {
      control: "select",
      options: ["status", "decorative"],
    },
    status: {
      control: "select",
      options: ["success", "information", "warning", "alert"],
    },
    color: {
      control: "select",
      options: [
        "brand",
        "neutral",
        "azur",
        "jade",
        "lavande",
        "ciel",
        "nuage",
        "givre",
        "brume",
        "glacier",
        "turquoise",
        "anis",
        "menthe",
        "citronnelle",
        "sable",
        "abricot",
        "coral",
        "rose",
        "petale",
        "quartz",
        "cendre",
      ],
    },
    compactSpacing: {
      control: "boolean",
    },
    showLeftIcon: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Tag>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tagType: "status",
    status: "success",
    color: "brand",
    compactSpacing: false,
    label: "Tag Label",
    showLeftIcon: false,
    iconName: "check",
  },
};

export const Decorative: Story = {
  args: {
    tagType: "decorative",
    color: "azur",
    compactSpacing: false,
    label: "Decorative Tag",
    showLeftIcon: false,
  },
};

export const WithIcon: Story = {
  args: {
    tagType: "status",
    status: "information",
    color: "jade",
    compactSpacing: false,
    label: "Tag with Icon",
    showLeftIcon: true,
  },
};

export const Compact: Story = {
  args: {
    tagType: "status",
    status: "warning",
    color: "citronnelle",
    compactSpacing: true,
    label: "Compact Tag",
    showLeftIcon: false,
  },
};

export const AlertStatus: Story = {
  args: {
    tagType: "status",
    status: "alert",
    compactSpacing: false,
    label: "Alert Tag",
    showLeftIcon: true,
  },
};
