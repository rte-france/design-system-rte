import { Meta, StoryObj } from "@storybook/react";

import { RegularIcons, TogglableIcons } from "../../icon/IconMap";
import Tag from "../Tag";

const RegularIconIds = Object.keys(RegularIcons);
const TogglableIconIds = Object.keys(TogglableIcons);

const meta = {
  title: "Composants/Tag/Tag",
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
    iconName: {
      control: "select",
      options: [...RegularIconIds, ...TogglableIconIds],
      description: "Icon to display on the tag",
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
    ...Default.args,
    tagType: "decorative",
    color: "azur",
    label: "Decorative Tag",
    showLeftIcon: false,
  },
  render: (args) => {
    return (
      <div style={{ display: "flex", gap: 8 }}>
        <Tag {...args} />
      </div>
    );
  },
};
export const WithIcon: Story = {
  args: {
    ...Default.args,
    tagType: "decorative",
    color: "jade",
    label: "Decorative Tag with Icon",
    showLeftIcon: true,
  },
  render: (args) => (
    <div style={{ display: "flex", gap: 8 }}>
      <Tag {...args} />
    </div>
  ),
};

export const Compact: Story = {
  args: {
    ...Default.args,
    tagType: "decorative",
    color: "brand",
    compactSpacing: true,
    label: "Compact Tag",
  },
  render: (args) => (
    <div style={{ display: "flex", gap: 8 }}>
      <Tag {...args} />
    </div>
  ),
};
