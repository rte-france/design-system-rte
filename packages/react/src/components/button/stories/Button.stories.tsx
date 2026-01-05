import {
  TESTING_ENTER_KEY,
  TESTING_SPACE_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard-test.constants";
import type { Meta, StoryObj } from "@storybook/react";
import { fn, userEvent, within, expect } from "@storybook/test";

import { focusElementBeforeComponent } from "../../../../.storybook/testing/testing.utils";
import { RegularIcons as RegularIconsList, TogglableIcons as TogglableIconsList } from "../../icon/IconMap";
import Button from "../Button";

const RegularIconIds = Object.keys(RegularIconsList);
const TogglableIconIds = Object.keys(TogglableIconsList);

const meta = {
  title: "Composants/Button/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "text", "transparent", "danger", "neutral", "reverse"],
    },
    size: {
      control: "select",
      options: ["s", "m", "l"],
    },
    iconPosition: {
      control: "select",
      options: ["left", "right"],
    },
    disabled: {
      control: "boolean",
    },
    badgeContent: {
      control: "select",
      options: ["number", "icon", "empty"],
      description: "Type de contenu du badge",
    },
    badgeIcon: {
      control: "select",
      options: [...RegularIconIds, ...TogglableIconIds].sort((a, b) => a.localeCompare(b)),
      description: "Nom de l’icône à afficher sur le badge",
      defaultValue: "check",
    },
    badgeCount: {
      control: "number",
      description: "Nombre à afficher dans le badge",
    },
    badgeType: {
      control: "select",
      options: ["brand", "neutral", "indicator"],
      description: "Type de badge",
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockFn = fn();

export const Default: Story = {
  args: {
    variant: "primary",
    label: "Button",
    onClick: mockFn,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Button" });
    await userEvent.click(button);
    expect(mockFn).toHaveBeenCalled();
    button.blur();
  },
};

export const Sizing: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => {
    return (
      <div style={{ display: "flex", gap: 8 }}>
        <Button {...args} size="s" label="Small" data-testid="small-button" />
        <Button {...args} label="Medium" data-testid="medium-button" />
        <Button {...args} size="l" label="Large" data-testid="large-button" />
      </div>
    );
  },
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

export const KeyboardInteraction: Story = {
  args: {
    ...Default.args,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    focusElementBeforeComponent(canvasElement);
    const button = canvas.getByRole("button", { name: "Button" });
    await userEvent.tab();
    expect(button).toHaveFocus();
    await userEvent.keyboard(TESTING_ENTER_KEY);
    await userEvent.keyboard(TESTING_SPACE_KEY);
    expect(mockFn).toHaveBeenCalledTimes(2);
    button.blur();
  },
};
