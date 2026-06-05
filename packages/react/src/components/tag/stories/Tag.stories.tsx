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
        "neutral-bold",
        "azur",
        "azur-bold",
        "bleu-iceberg",
        "bleu-iceberg-bold",
        "vert-foret",
        "vert-foret-bold",
        "violet",
        "violet-bold",
        "bleu-rte",
        "bleu-rte-bold",
        "bleu-digital",
        "bleu-digital-bold",
        "marine",
        "marine-bold",
        "bleu-petrole",
        "bleu-petrole-bold",
        "bleu-cyan",
        "bleu-cyan-bold",
        "vert",
        "vert-bold",
        "vert-indications",
        "vert-indications-bold",
        "vert-digital",
        "vert-digital-bold",
        "jaune",
        "jaune-bold",
        "jaune-ocre",
        "jaune-ocre-bold",
        "jaune-indications",
        "jaune-indications-bold",
        "saumon",
        "saumon-bold",
        "rose",
        "rose-bold",
        "fuschia",
        "fuschia-bold",
        "rouge-indication",
        "rouge-indication-bold",
        "taupe",
        "taupe-bold",
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
    color: "jaune",
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
    color: "jaune",
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
    color: "jaune",
    compactSpacing: true,
    label: "Compact Tag",
  },
  render: (args) => (
    <div style={{ display: "flex", gap: 8 }}>
      <Tag {...args} />
    </div>
  ),
};
