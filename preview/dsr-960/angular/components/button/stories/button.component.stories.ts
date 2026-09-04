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
  title: "Composants/Button/Button",
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
    rteButtonIcon: {
      control: "select",
      options: [...RegularIconIds, ...TogglableIconIds],
    },
    rteButtonIconPosition: {
      control: "select",
      options: ["left", "right"],
    },
    rteButtonIconAppearance: {
      control: "select",
      options: ["filled", "outlined"],
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
    rteButtonIconPosition: "left",
    rteButtonIconAppearance: "filled",
  },
  render: (args) => ({
    props: { ...args, click: mockFn },
    template: `
    <button rteButton
      [rteButtonVariant]="rteButtonVariant"
      [rteButtonSize]="rteButtonSize"
      [rteButtonIcon]="rteButtonIcon"
      [rteButtonIconPosition]="rteButtonIconPosition"
      [rteButtonIconAppearance]="rteButtonIconAppearance"
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
    rteBadgeType: "indicator",
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

export const WithIcon: Story = {
  args: {
    ...Default.args,
    rteButtonIcon: "add",
    rteButtonIconPosition: "left",
    rteButtonIconAppearance: "filled",
  },
  render: (args) => ({
    props: { ...args, click: mockFn },
    template: `
    <div style="display: flex; gap: 8px;">
      <button rteButton
        [rteButtonVariant]="rteButtonVariant"
        [rteButtonSize]="rteButtonSize"
        [rteButtonIcon]="'add-circle'"
        [rteButtonIconPosition]="rteButtonIconPosition"
        [rteButtonIconAppearance]="'outlined'"
        data-testid="button-with-icon-left"
        (click)="click()"
      >Button with Icon</button>
      <button rteButton
        [rteButtonVariant]="rteButtonVariant"
        [rteButtonSize]="rteButtonSize"
        [rteButtonIcon]="'add-circle'"
        [rteButtonIconPosition]="'right'"
        [rteButtonIconAppearance]="'filled'"
        data-testid="button-with-icon-right"
        (click)="click()"
      >Button with Icon</button>
    </div>
    `,
  }),
};

export const Variants: Story = {
  render: (args) => ({
    props: { ...args },
    template: `
    <div style="display: flex; gap: 8px;">
        <button rteButton 
          rteButtonVariant="primary"
          rteButtonSize="m"
          data-testid="primary-button"
        >Primary</button>
        <button rteButton 
          rteButtonVariant="secondary"
          rteButtonSize="m"
          data-testid="secondary-button"
        >Secondary</button>
        <button rteButton 
          rteButtonVariant="text"
          rteButtonSize="m"
          data-testid="text-button"
        >Text</button>
        <button rteButton 
          rteButtonVariant="transparent"
          rteButtonSize="m"
          data-testid="transparent-button"
        >Transparent</button>
        <button rteButton 
          rteButtonVariant="danger"
          rteButtonSize="m"
          data-testid="danger-button"
        >Danger</button>
        <button rteButton 
          rteButtonVariant="neutral"
          rteButtonSize="m"
          data-testid="neutral-button"
        >Neutral</button>
        <button rteButton 
          rteButtonVariant="reverse"
          rteButtonSize="m"
          data-testid="reverse-button"
        >Reverse</button>
    </div>
    `,
  }),
};

export const KeyboardInteraction: Story = {
  tags: ["!autodocs"],
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
    focusElementBeforeComponent();
    await userEvent.tab();
    expect(button).toHaveFocus();
    await userEvent.keyboard(TESTING_ENTER_KEY);
    await userEvent.keyboard(TESTING_SPACE_KEY);
    expect(mockFn).toHaveBeenCalledTimes(2);
    button.blur();
  },
};
