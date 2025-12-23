import {
  TESTING_ENTER_KEY,
  TESTING_SPACE_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard-test.constants";
import type { Meta, StoryObj } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";
import { fn, userEvent, within, expect } from "@storybook/test";

import { focusElementBeforeComponent } from "../../../../../../../.storybook/testing/testing.utils";
import { BadgeDirective } from "../../badge/badge.directive";
import { RegularIcons as RegularIconsList, TogglableIcons as TogglableIconsList } from "../../icon/icon-map";
import { ButtonComponent } from "../button.component";

const RegularIconIds = Object.keys(RegularIconsList);
const TogglableIconIds = Object.keys(TogglableIconsList);

const meta: Meta<ButtonComponent> = {
  title: "Composants/Button",
  component: ButtonComponent,
  tags: ["autodocs"],
  argTypes: {
    rteButtonVariant: {
      control: "select",
      options: ["primary", "secondary", "text", "transparent", "danger", "neutral", "reverse"],
    },
    rteButtonSize: {
      control: "select",
      options: ["s", "m", "l"],
    },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

const mockFn = fn();

export const Default: Story = {
  args: {
    rteButtonVariant: "primary",
    rteButtonSize: "m",
  },
  render: (args) => ({
    props: { ...args, click: mockFn },
    template: `
    <button rteButton
      [rteButtonVariant]="rteButtonVariant"
      [rteButtonSize]="rteButtonSize"
      data-testid="button"
      (click)="click()"
    >Button</button>
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Button" });
    await userEvent.click(button);
    expect(mockFn).toHaveBeenCalled();
    button.blur();
  },
};

export const Sizing: Story = {
  render: (args) => ({
    props: args,
    template: `
    <div style="display: flex; gap: 8px;">
        <button rteButton 
          rteButtonSize="s"
          rteButtonVariant="primary"
          data-testid="small-button"
        >Small</button>
        <button rteButton 
          rteButtonSize="m"
          rteButtonVariant="primary"
          data-testid="medium-button"
        >Medium</button>
        <button rteButton 
          rteButtonSize="l"
          rteButtonVariant="primary"
          data-testid="large-button"
        >Large</button>
    </div>
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const smallButton = canvas.getByTestId("small-button");
    const mediumButton = canvas.getByTestId("medium-button");
    const largeButton = canvas.getByTestId("large-button");

    expect(smallButton.clientHeight).toBe(24);
    expect(mediumButton.clientHeight).toBe(32);
    expect(largeButton.clientHeight).toBe(40);
  },
};

export const WithBadge: StoryObj<ButtonComponent & BadgeDirective> = {
  decorators: [
    moduleMetadata({
      imports: [ButtonComponent, BadgeDirective],
    }),
  ],
  args: {
    rteButtonVariant: "primary",
    rteButtonSize: "m",
    rteBadgeContent: "number",
    rteBadgeCount: 5,
    rteBadgeType: "brand",
    rteBadgeIcon: "notification",
    rteBadgeSize: "m",
  },
  argTypes: {
    rteBadgeType: {
      control: "select",
      options: ["brand", "neutral", "indicator"],
      description: "Badge type variant",
    },
    rteBadgeSize: {
      control: "select",
      options: ["xs", "s", "m", "l"],
      description: "Badge size",
    },
    rteBadgeContent: {
      control: "select",
      options: ["number", "icon", "empty"],
      description: "Badge content type",
    },
    rteBadgeCount: {
      control: "number",
      description: "Badge count (only used when content is 'number')",
    },
    rteBadgeIcon: {
      control: "select",
      options: [...RegularIconIds, ...TogglableIconIds],
      description: "Badge icon (only used when content is 'icon')",
    },
  },
  render: (args) => ({
    props: { ...args },
    template: `
    <button rteButton
    rteBadge
      [rteButtonVariant]="rteButtonVariant"
      [rteButtonSize]="rteButtonSize"
      [rteBadgeContent]="rteBadgeContent"
      [rteBadgeCount]="rteBadgeCount"
      [rteBadgeType]="rteBadgeType"
      [rteBadgeIcon]="rteBadgeIcon"
      [rteBadgeSize]="rteBadgeSize"
      data-testid="button-with-badge"
    >Button with Badge</button>
    `,
  }),
};

export const KeyboardInteraction: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => ({
    props: { ...args, click: mockFn },
    template: `
    <button rteButton
      [rteButtonVariant]="rteButtonVariant"
      [rteButtonSize]="rteButtonSize"
      data-testid="button"
      (click)="click()"
    >Button</button>
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Button" });
    focusElementBeforeComponent(canvasElement);
    await userEvent.tab();
    expect(button).toHaveFocus();
    await userEvent.keyboard(TESTING_ENTER_KEY);
    await userEvent.keyboard(TESTING_SPACE_KEY);
    expect(mockFn).toHaveBeenCalledTimes(2);
    button.blur();
  },
};
