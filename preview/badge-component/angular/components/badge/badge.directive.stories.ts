import { Meta, StoryObj } from "@storybook/angular";

import { RegularIcons as RegularIconsList, TogglableIcons as TogglableIconsList } from "../icon/icon-map";

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
      options: ["brand", "neutral", "indicator"],
      defaultValue: "brand",
    },
    rteBadgeSize: {
      control: "select",
      options: ["XS", "S", "M", "L"],
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
      defaultValue: "settings",
    },
  },
  parameters: {
    layout: "centered",
  },
};

const mockHost = (badgeDirectives: string) => `
<span
    style="
      display: inline-flex;
      width: 48px;
      height: 48px;
      background: orange;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
      align-items: center;
      justify-content: center;
      color: #000;
      font-weight: bold;
      font-size: 16px;
      position: relative;
    "
    ${badgeDirectives}
>
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

export const Sizes: Story = {
  args: {
    rteBadge: "Badge",
    rteBadgeType: "brand",
    rteBadgeAppearance: "text",
  },
  render: (args) => ({
    props: {
      ...args,
      sizeXS: "XS",
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
    },
    declarations: [BadgeDirective],
    template: `
            <div style="display: flex; gap: 16px; align-items: center;">
                ${mockHost(`
                    [rteBadge]="rteBadge"
                    [rteBadgeType]="rteBadgeType"
                    [rteBadgeAppearance]="rteBadgeAppearance"
                    [rteBadgeSize]="sizeXS"
                `)}
                ${mockHost(`
                    [rteBadge]="rteBadge"
                    [rteBadgeType]="rteBadgeType"
                    [rteBadgeAppearance]="rteBadgeAppearance"
                    [rteBadgeSize]="sizeS"
                `)}
                ${mockHost(`
                    [rteBadge]="rteBadge"
                    [rteBadgeType]="rteBadgeType"
                    [rteBadgeAppearance]="rteBadgeAppearance"
                    [rteBadgeSize]="sizeM"
                `)}
                ${mockHost(`
                    [rteBadge]="rteBadge"
                    [rteBadgeType]="rteBadgeType"
                    [rteBadgeAppearance]="rteBadgeAppearance"
                    [rteBadgeSize]="sizeL"
                `)}
            </div>
        `,
  }),
};

export const CountLimit: Story = {
  args: {
    rteBadgeType: "indicator",
    rteBadgeAppearance: "text",
    rteBadgeSize: "M",
  },
  render: (args) => ({
    props: {
      ...args,
      count5: 5,
      count99: 99,
      count100: 100,
      count999: 999,
      count1000: 1000,
    },
    declarations: [BadgeDirective],
    template: `
            <div style="display: flex; gap: 16px; align-items: center;">
                ${mockHost(`
                    [rteBadge]="rteBadge"
                    [rteBadgeType]="rteBadgeType"
                    [rteBadgeAppearance]="rteBadgeAppearance"
                    [rteBadgeSize]="rteBadgeSize"
                    [rteBadgeCount]="count5"
                `)}
                ${mockHost(`
                    [rteBadge]="rteBadge"
                    [rteBadgeType]="rteBadgeType"
                    [rteBadgeAppearance]="rteBadgeAppearance"
                    [rteBadgeSize]="rteBadgeSize"
                    [rteBadgeCount]="count99"
                `)}
                ${mockHost(`
                    [rteBadge]="rteBadge"
                    [rteBadgeType]="rteBadgeType"
                    [rteBadgeAppearance]="rteBadgeAppearance"
                    [rteBadgeSize]="rteBadgeSize"
                    [rteBadgeCount]="count100"
                `)}
                ${mockHost(`
                    [rteBadge]="rteBadge"
                    [rteBadgeType]="rteBadgeType"
                    [rteBadgeAppearance]="rteBadgeAppearance"
                    [rteBadgeSize]="rteBadgeSize"
                    [rteBadgeCount]="count999"
                `)}
                ${mockHost(`
                    [rteBadge]="rteBadge"
                    [rteBadgeType]="rteBadgeType"
                    [rteBadgeAppearance]="rteBadgeAppearance"
                    [rteBadgeSize]="rteBadgeSize"
                    [rteBadgeCount]="count1000"
                `)}
            </div>
        `,
  }),
};

export const Icons: Story = {
  args: {
    rteBadgeType: "brand",
    rteBadgeAppearance: "icon",
    rteBadgeSize: "M",
  },
  render: (args) => ({
    props: args,
    declarations: [BadgeDirective],
    template: `
            <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
                ${mockHost(`
                    [rteBadge]="rteBadge"
                    [rteBadgeType]="rteBadgeType"
                    [rteBadgeAppearance]="rteBadgeAppearance"
                    [rteBadgeSize]="rteBadgeSize"
                    rteBadgeIcon="settings"
                `)}
                ${mockHost(`
                    [rteBadge]="rteBadge"
                    [rteBadgeType]="rteBadgeType"
                    [rteBadgeAppearance]="rteBadgeAppearance"
                    [rteBadgeSize]="rteBadgeSize"
                    rteBadgeIcon="home"
                `)}
                ${mockHost(`
                    [rteBadge]="rteBadge"
                    [rteBadgeType]="rteBadgeType"
                    [rteBadgeAppearance]="rteBadgeAppearance"
                    [rteBadgeSize]="rteBadgeSize"
                    rteBadgeIcon="user"
                `)}
                ${mockHost(`
                    [rteBadge]="rteBadge"
                    [rteBadgeType]="rteBadgeType"
                    [rteBadgeAppearance]="rteBadgeAppearance"
                    [rteBadgeSize]="rteBadgeSize"
                    rteBadgeIcon="search"
                `)}
                ${mockHost(`
                    [rteBadge]="rteBadge"
                    [rteBadgeType]="rteBadgeType"
                    [rteBadgeAppearance]="rteBadgeAppearance"
                    [rteBadgeSize]="rteBadgeSize"
                    rteBadgeIcon="heart"
                `)}
                ${mockHost(`
                    [rteBadge]="rteBadge"
                    [rteBadgeType]="rteBadgeType"
                    [rteBadgeAppearance]="rteBadgeAppearance"
                    [rteBadgeSize]="rteBadgeSize"
                    rteBadgeIcon="star"
                `)}
            </div>
        `,
  }),
};
