import { Meta, StoryObj } from "@storybook/angular";
import { expect, userEvent, waitFor, within } from "@storybook/test";

import { RegularIcons as RegularIconsList, TogglableIcons as TogglableIconsList } from "../../icon/icon-map";
import { BadgeDirective } from "../badge.directive";

const RegularIconIds = Object.keys(RegularIconsList);
const TogglableIconIds = Object.keys(TogglableIconsList);

const meta: Meta<BadgeDirective> = {
  title: "Composants/Badge/Badge",
  component: BadgeDirective,
  tags: ["autodocs"],
  argTypes: {
    rteBadgeType: {
      control: "select",
      options: ["brand", "neutral", "indicator"],
      defaultValue: "brand",
    },
    rteBadgeSize: {
      control: "select",
      options: ["xs", "s", "m", "l"],
      defaultValue: "m",
    },
    rteBadgeAppearance: {
      control: "select",
      options: ["text", "icon", "empty"],
      defaultValue: "text",
    },
    rteBadgeCount: {
      control: "number",
      type: "number",
    },
    rteBadgeIcon: {
      control: "select",
      options: [...RegularIconIds, ...TogglableIconIds].sort((a, b) => a.localeCompare(b)),
      defaultValue: "notification",
    },
  },
  parameters: {
    layout: "centered",
  },
};

const mockHost = (badgeDirectives: string) => `
<span
    data-testid="badge-host"
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
    rteBadge
    ${badgeDirectives}
>
</span>
`;

export default meta;

type Story = StoryObj<BadgeDirective>;

export const Default: Story = {
  args: {
    rteBadgeType: "brand",
    rteBadgeSize: "m",
    rteBadgeCount: 1,
    rteBadgeAppearance: "text",
    rteBadgeIcon: "notification",
  },
  render: (args) => ({
    props: args,
    declarations: [BadgeDirective],
    template: mockHost(`
            [rteBadgeType]="rteBadgeType"
            [rteBadgeSize]="rteBadgeSize"
            [rteBadgeAppearance]="rteBadgeAppearance"
            [rteBadgeCount]="rteBadgeCount"
            [rteBadgeIcon]="rteBadgeIcon"
        `),
  }),
};

export const IconBadge: Story = {
  args: {
    rteBadgeType: "brand",
    rteBadgeSize: "m",
    rteBadgeAppearance: "icon",
    rteBadgeIcon: "notification",
  },
  render: (args) => ({
    props: args,
    declarations: [BadgeDirective],
    template: mockHost(`
      [rteBadgeType]="rteBadgeType"
      [rteBadgeSize]="rteBadgeSize"
      [rteBadgeAppearance]="rteBadgeAppearance"
      [rteBadgeIcon]="rteBadgeIcon"
    `),
  }),
};

export const BadgeDisplay: Story = {
  args: {
    rteBadgeIcon: "notification",
    rteBadgeCount: 1,
  },
  render: (args) => ({
    props: args,
    declarations: [BadgeDirective],
    template: `
    <div style="display: flex; flex-direction: column; align-items: center; font-family: 'Nunito Sans', sans-serif;">
      <h4>Appearance: Text</h4>
      <div style="display: flex; gap: 16px;">
        ${mockHost(`
            rteBadgeSize="xs"
            rteBadgeAppearance="text"
            [rteBadgeCount]="rteBadgeCount"
        `)}
        ${mockHost(`
            rteBadgeSize="s"
            rteBadgeAppearance="text"
            [rteBadgeCount]="rteBadgeCount"
            data-testid="badge-text-s-host"
        `)}
        ${mockHost(`
            rteBadgeSize="m"
            rteBadgeAppearance="text"
            [rteBadgeCount]="rteBadgeCount"
            data-testid="badge-text-m-host"
        `)}
        ${mockHost(`
            rteBadgeSize="l"
            rteBadgeAppearance="text"
            [rteBadgeCount]="rteBadgeCount"
        `)}
      </div>
      <h4>Appearance: Icon</h4>
      <div style="display: flex; gap: 16px;">
        ${mockHost(`
            rteBadgeSize="xs"
            rteBadgeAppearance="icon"
            [rteBadgeIcon]="rteBadgeIcon"
        `)}
        ${mockHost(`
            rteBadgeSize="s"  
            rteBadgeAppearance="icon"
            [rteBadgeIcon]="rteBadgeIcon"
            data-testid="badge-icon-s-host"
        `)}
        ${mockHost(`
            rteBadgeSize="m"
            rteBadgeAppearance="icon"
            [rteBadgeIcon]="rteBadgeIcon"
            data-testid="badge-icon-m-host"
        `)}
        ${mockHost(`
            rteBadgeSize="l"
            rteBadgeAppearance="icon"
            [rteBadgeIcon]="rteBadgeIcon"
        `)}
    </div>
    <h4>Appearance: Empty</h4>
      <div style="display: flex; gap: 16px;">
        ${mockHost(`
            rteBadgeSize="xs"
            rteBadgeAppearance="empty"
        `)}
        ${mockHost(`
            rteBadgeSize="s"  
            rteBadgeAppearance="empty"
            data-testid="badge-empty-s-host"
        `)}
        ${mockHost(`
            rteBadgeSize="m"
            rteBadgeAppearance="empty"
        `)}
        ${mockHost(`
            rteBadgeSize="l"
            rteBadgeAppearance="empty"
        `)}
    </div>
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const badgeTextS = canvas.getByTestId("badge-text-s-host").querySelector(".badge");
    expect(badgeTextS).not.toBeVisible();
    const badgeIconS = canvas.getByTestId("badge-icon-s-host").querySelector(".badge");
    expect(badgeIconS).not.toBeVisible();
    const badgeEmptyS = canvas.getByTestId("badge-empty-s-host").querySelector(".badge");
    expect(badgeEmptyS).toBeVisible();
    const badgeTextM = canvas.getByTestId("badge-text-m-host").querySelector(".badge");
    expect(badgeTextM).toBeVisible();
    const badgeIconM = canvas.getByTestId("badge-icon-m-host").querySelector(".badge");
    expect(badgeIconM).toBeVisible();
  },
};

export const Sizes: Story = {
  args: {
    rteBadgeAppearance: "empty",
    rteBadgeCount: 1,
  },
  render: (args) => ({
    props: {
      ...args,
    },
    declarations: [BadgeDirective],
    template: `
            <div style="display: flex; gap: 16px; align-items: center;">
                ${mockHost(`
                    [rteBadgeAppearance]="rteBadgeAppearance"
                    rteBadgeSize="xs"
                    [rteBadgeCount]="rteBadgeCount"
                `)}
                ${mockHost(`
                    [rteBadgeAppearance]="rteBadgeAppearance"
                    rteBadgeSize="s"
                    [rteBadgeCount]="rteBadgeCount"
                `)}
                ${mockHost(`
                    [rteBadgeAppearance]="rteBadgeAppearance"
                    rteBadgeSize="m"
                    [rteBadgeCount]="rteBadgeCount"
                `)}
                ${mockHost(`
                    [rteBadgeAppearance]="rteBadgeAppearance"
                    rteBadgeSize="l"
                    [rteBadgeCount]="rteBadgeCount"
                `)}
            </div>
        `,
  }),
};

export const CountLimit: Story = {
  args: {
    rteBadgeType: "indicator",
    rteBadgeAppearance: "text",
    rteBadgeSize: "m",
  },
  render: (args) => ({
    props: {
      ...args,
      count5: 5,
      count99: 99,
      count100: 100,
    },
    declarations: [BadgeDirective],
    template: `
            <div style="display: flex; gap: 16px; align-items: center;">
                ${mockHost(`
                    [rteBadgeType]="rteBadgeType"
                    [rteBadgeAppearance]="rteBadgeAppearance"
                    [rteBadgeSize]="rteBadgeSize"
                    [rteBadgeCount]="count5"
                `)}
                ${mockHost(`
                    [rteBadgeType]="rteBadgeType"
                    [rteBadgeAppearance]="rteBadgeAppearance"
                    [rteBadgeSize]="rteBadgeSize"
                    [rteBadgeCount]="count99"
                `)}
                ${mockHost(`
                    [rteBadgeType]="rteBadgeType"
                    [rteBadgeAppearance]="rteBadgeAppearance"
                    [rteBadgeSize]="rteBadgeSize"
                    [rteBadgeCount]="count100"
                `)}
            </div>
        `,
  }),
};

export const Icons: Story = {
  args: {
    rteBadgeType: "brand",
    rteBadgeAppearance: "icon",
    rteBadgeSize: "m",
  },
  render: (args) => ({
    props: args,
    declarations: [BadgeDirective],
    template: `
            <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
                ${mockHost(`
                    [rteBadgeType]="rteBadgeType"
                    [rteBadgeAppearance]="rteBadgeAppearance"
                    [rteBadgeSize]="rteBadgeSize"
                    rteBadgeIcon="notification"
                `)}
                ${mockHost(`
                    [rteBadgeType]="rteBadgeType"
                    [rteBadgeAppearance]="rteBadgeAppearance"
                    [rteBadgeSize]="rteBadgeSize"
                    rteBadgeIcon="home"
                `)}
                ${mockHost(`
                    [rteBadgeType]="rteBadgeType"
                    [rteBadgeAppearance]="rteBadgeAppearance"
                    [rteBadgeSize]="rteBadgeSize"
                    rteBadgeIcon="user"
                `)}
                ${mockHost(`
                    [rteBadgeType]="rteBadgeType"
                    [rteBadgeAppearance]="rteBadgeAppearance"
                    [rteBadgeSize]="rteBadgeSize"
                    rteBadgeIcon="search"
                `)}
                ${mockHost(`
                    [rteBadgeType]="rteBadgeType"
                    [rteBadgeAppearance]="rteBadgeAppearance"
                    [rteBadgeSize]="rteBadgeSize"
                    rteBadgeIcon="heart"
                `)}
                ${mockHost(`
                    [rteBadgeType]="rteBadgeType"
                    [rteBadgeAppearance]="rteBadgeAppearance"
                    [rteBadgeSize]="rteBadgeSize"
                    rteBadgeIcon="star"
                `)}
            </div>
        `,
  }),
};

export const BadgeVisibility: Story = {
  args: {
    rteBadgeType: "brand",
    rteBadgeAppearance: "text",
    rteBadgeSize: "m",
    rteBadgeCount: 1,
  },
  render: (args) => ({
    props: args,
    declarations: [BadgeDirective],
    template: `
          <div style="display: flex; flex-direction: column; gap: 8px;">
            ${mockHost(`
                [rteBadgeType]="rteBadgeType"
                [rteBadgeAppearance]="rteBadgeAppearance"
                [rteBadgeSize]="rteBadgeSize"
                [rteBadgeCount]="rteBadgeCount"
            `)}
            <hr>
            <label>Badge Count</label>
            <input
              type="number"
              [value]="rteBadgeCount"
              (input)="rteBadgeCount = $event.target.valueAsNumber"
              data-testid="badge-count-input"
              aria-hidden="true"
            />
          </div>
        `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const badgeCountInput = canvas.getByTestId("badge-count-input");
    const badge = canvas.getByTestId("badge");
    expect(badge).toBeVisible();
    await userEvent.clear(badgeCountInput);
    await userEvent.type(badgeCountInput, "0");
    await waitFor(() => expect(badge).not.toBeVisible());
    await userEvent.type(badgeCountInput, "1");
    await waitFor(() => expect(badge).toBeVisible());
  },
};

export const KeyboardInteraction: Story = {
  args: Default.args,
  render: (args) => ({
    props: args,
    declarations: [BadgeDirective],
    template: `
        <div style="display: flex; gap: 8px;">
            ${mockHost(`
              [rteBadgeCount]="rteBadgeCount"
            `)}
        </div>
        `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const badge = canvas.getByTestId("badge");
    await userEvent.tab();
    expect(badge).not.toHaveFocus();
  },
};

export const BadgeType: Story = {
  args: {
    rteBadgeType: "brand",
    rteBadgeCount: 1,
  },
  render: (args) => ({
    props: args,
    declarations: [BadgeDirective],
    template: `
      <div style="display: flex; gap: 24px; font-family: 'Nunito Sans', sans-serif;">
        <div>
          <h4>Brand</h4>
          ${mockHost(`
            rteBadgeType="brand"
            [rteBadgeCount]="rteBadgeCount"
          `)}
        </div>
        <div>
          <h4>Neutral</h4>
          ${mockHost(`
            rteBadgeType="neutral"
            [rteBadgeCount]="rteBadgeCount"
          `)}
        </div>
        <div>
          <h4>Indicator</h4>
          ${mockHost(`
            rteBadgeType="indicator"
            [rteBadgeCount]="rteBadgeCount"
          `)} 
        </div>
      </div>
    `,
  }),
};
