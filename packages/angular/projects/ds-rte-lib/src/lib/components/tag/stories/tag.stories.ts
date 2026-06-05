import { Meta, StoryObj } from "@storybook/angular";

import { RegularIcons as RegularIconsList, TogglableIcons as TogglableIconsList } from "../../icon/icon-map";
import { TagComponent } from "../tag.component";

const RegularIconIds = Object.keys(RegularIconsList);
const TogglableIconIds = Object.keys(TogglableIconsList);

const meta: Meta<TagComponent> = {
  title: "Composants/Tag/Tag",
  component: TagComponent,
  tags: ["autodocs"],
  argTypes: {
    tagType: {
      control: "select",
      options: ["status", "decorative"],
      description: "Type of tag",
    },
    status: {
      control: "select",
      options: ["success", "information", "warning", "alert"],
      description: "Status for status tag",
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
      description: "Color of the tag",
    },
    compactSpacing: {
      control: "boolean",
      description: "Compact spacing for tag",
    },
    label: {
      control: "text",
      description: "Label text for tag",
    },
    showLeftIcon: {
      control: "boolean",
      description: "Show icon on the left",
    },
    iconName: {
      control: "select",
      description: "Custom icon name",
      options: [...RegularIconIds, ...TogglableIconIds],
    },
    computedIconName: {
      table: {
        disable: true,
      },
    },
    isValidIconName: {
      table: {
        disable: true,
      },
    },
  },
};
export default meta;
type Story = StoryObj<TagComponent>;

export const Default: Story = {
  args: {
    label: "Tag",
    color: "brand",
    tagType: "status",
    status: "success",
    compactSpacing: false,
    showLeftIcon: false,
    iconName: "check",
  },
};

export const Decorative: Story = {
  args: {
    tagType: "decorative",
    color: "saumon",
    compactSpacing: false,
    label: "Decorative Tag",
    showLeftIcon: false,
  },
};

export const WithIcon: Story = {
  args: {
    tagType: "status",
    status: "information",
    color: "saumon",
    compactSpacing: false,
    label: "Tag with Icon",
    showLeftIcon: true,
  },
};

export const Compact: Story = {
  args: {
    tagType: "decorative",
    color: "saumon",
    compactSpacing: true,
    label: "Compact Tag",
    showLeftIcon: false,
  },
};
