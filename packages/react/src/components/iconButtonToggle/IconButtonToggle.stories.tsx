import {
  TESTING_ENTER_KEY,
  TESTING_SPACE_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard-test.constants";
import { Meta, StoryObj } from "@storybook/react";
import { fn, userEvent, within, expect } from "@storybook/test";

import { focusElementBeforeComponent } from "../../../.storybook/testing/testing.utils";
import { TogglableIcons as TogglableIconsList } from "../icon/IconMap";

import IconButtonToggle from "./IconButtonToggle";

const TogglableIconIds = Object.keys(TogglableIconsList).sort((a, b) => a.localeCompare(b));

const meta = {
  title: "Composants/IconButtonToggle",
  id: "IconButtonToggle",
  component: IconButtonToggle,
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "select",
      options: TogglableIconIds,
      description: "Nom de l’icône à afficher",
      defaultValue: "check",
    },
    selected: {
      control: "boolean",
      description: "Indique si le bouton est sélectionné en mode contrôlé",
    },
    defaultSelected: {
      control: "boolean",
      description: "Indique si le bouton est sélectionné par défaut en mode non contrôlé",
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "text", "transparent", "danger"],
    },
    size: {
      control: "select",
      options: ["s", "m", "l"],
    },
    compactSpacing: {
      control: "boolean",
      description: "Utiliser un espacement compact",
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof IconButtonToggle>;

export default meta;

type Story = StoryObj<typeof meta>;

const mockFn = fn();

export const Default: Story = {
  args: {
    name: "settings",
    size: "m",
    disabled: false,
    compactSpacing: false,
    onClick: mockFn,
    defaultSelected: false,
    ["aria-label"]: "icon button toggle aria label",
  },

  render: (args) => <IconButtonToggle {...args} />,

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const iconButton = canvas.getByRole("button", { name: "icon button toggle aria label" });
    await userEvent.click(iconButton);
    expect(mockFn).toHaveBeenCalled();
    iconButton.blur();
  },
};

export const Sizing: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => {
    return (
      <div style={{ display: "flex", gap: 8 }}>
        <IconButtonToggle {...args} size="s" data-testid="small-icon-button" />
        <IconButtonToggle {...args} data-testid="medium-icon-button" />
        <IconButtonToggle {...args} size="l" data-testid="large-icon-button" />
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const smallIconButton = canvas.getByTestId("small-icon-button");
    const mediumIconButton = canvas.getByTestId("medium-icon-button");
    const largeIconButton = canvas.getByTestId("large-icon-button");

    expect(smallIconButton.clientHeight).toBe(24);
    expect(mediumIconButton.clientHeight).toBe(32);
    expect(largeIconButton.clientHeight).toBe(40);
  },
};

export const CompactSizing: Story = {
  args: {
    ...Default.args,
    compactSpacing: true,
  },
  render: (args) => {
    return (
      <div style={{ display: "flex", gap: 8 }}>
        <IconButtonToggle {...args} size="s" data-testid="small-icon-button" />
        <IconButtonToggle {...args} data-testid="medium-icon-button" />
        <IconButtonToggle {...args} size="l" data-testid="large-icon-button" />
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const smallIconButton = canvas.getByTestId("small-icon-button");
    const mediumIconButton = canvas.getByTestId("medium-icon-button");
    const largeIconButton = canvas.getByTestId("large-icon-button");

    expect(smallIconButton.clientHeight).toBe(16);
    expect(mediumIconButton.clientHeight).toBe(20);
    expect(largeIconButton.clientHeight).toBe(24);
  },
};

export const KeyboardInteraction: Story = {
  args: {
    ...Default.args,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "icon button toggle aria label" });
    focusElementBeforeComponent(canvasElement);
    await userEvent.tab();
    expect(button).toHaveFocus();
    await userEvent.keyboard(TESTING_ENTER_KEY);
    await userEvent.keyboard(TESTING_SPACE_KEY);
    expect(mockFn).toHaveBeenCalledTimes(2);
    button.blur();
  },
};
