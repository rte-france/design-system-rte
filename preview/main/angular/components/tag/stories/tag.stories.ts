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
    tagType: "decorative",
    color: "brand",
    compactSpacing: true,
    label: "Compact Tag",
    showLeftIcon: false,
  },
};
