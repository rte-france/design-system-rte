import { Meta, StoryObj } from "@storybook/angular";

import { regularIcons as RegularIconsList, togglableIcons as TogglableIconsList } from "../icon/icon-map";

import { BadgeDirective } from "./badge.directive";

const RegularIconIds = Object.keys(RegularIconsList);
const TogglableIconIds = Object.keys(TogglableIconsList);

const meta: Meta<BadgeDirective> = {
  title: "Badge",
  component: BadgeDirective,
  tags: ["autodocs"],
  argTypes: {
    rteBadge: {
      control: "text",
      defaultValue: "Badge Text",
    },
    rteBadgeType: {
      control: "select",
      options: ["brand", "info", "success", "warning", "error"],
      defaultValue: "brand",
    },
    rteBadgeSize: {
      control: "select",
      options: ["S", "M", "L"],
      defaultValue: "M",
    },
    rteBadgeAppearance: {
      control: "select",
      options: ["text", "icon"],
      defaultValue: "text",
    },
    rteBadgeCount: {
      control: "number",
      defaultValue: 42,
    },
    rteBadgeIcon: {
      control: "select",
      options: [...RegularIconIds, ...TogglableIconIds].sort((a, b) => a.localeCompare(b)),
      description: "Icon to display in the badge",
      defaultValue: "settings",
    },
  },
  parameters: {
    layout: "centered",
  },
};

const mockHost = (badgeDirectives: string) => `
<span style="
    display: inline-block;
    padding: 8px 12px;
    background-color: #f5f5f5;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-family: Arial, sans-serif;
    font-size: 14px;
"
    ${badgeDirectives}
>
    Badge Example
</span>
`;

export default meta;

type Story = StoryObj<BadgeDirective>;

export const Default: Story = {
  args: {
    rteBadge: "Badge Text",
    rteBadgeType: "brand",
    rteBadgeSize: "M",
    rteBadgeAppearance: "text",
    rteBadgeCount: 42,
    rteBadgeIcon: "settings",
  },
  render: (args) => ({
    props: args,
    declarations: [BadgeDirective],
    template: mockHost(`
            [rteBadge]="rteBadge"
            [rteBadgeType]="rteBadgeType"
            [rteBadgeSize]="rteBadgeSize"
            [rteBadgeAppearance]="rteBadgeAppearance"
            [rteBadgeCount]="rteBadgeCount"
            [rteBadgeIcon]="rteBadgeIcon"
        `),
  }),
};
