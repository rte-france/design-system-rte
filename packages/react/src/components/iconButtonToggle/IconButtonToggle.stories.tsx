import { ENTER_KEY, SPACE_KEY } from "@design-system-rte/core/constants/keyboard.constants";
import { Meta, StoryObj } from "@storybook/react";
import { fn, userEvent, within, expect } from "@storybook/test";

import { TogglableIcons as TogglableIconsList } from "../icon/IconMap";

import IconButtonToggle from "./IconButtonToggle";

const TogglableIconIds = Object.keys(TogglableIconsList);

const meta = {
  title: "IconButtonToggle (développement en cours)",
  id: "IconButtonToggle",
  component: IconButtonToggle,
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "select",
      options: TogglableIconIds.sort((a, b) => a.localeCompare(b)),
      description: "Nom de l’icône à afficher",
      defaultValue: "check",
    },
    selected: {
      control: "boolean",
      description: "Indique si le bouton est sélectionné",
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
    selected: false,
    ["aria-label"]: "icon button toggle aria label",
  },

  render: (args) => (
    <>
      <div>
        <span
          style={{
            fontFamily: "sans-serif",
            marginBottom: 16,
            border: "1px solid #F4922B",
            padding: 8,
            borderRadius: 5,
            backgroundColor: "#FAFFC1",
            margin: 0,
          }}
        >
          Ce composant est en cours de développement et n'est pas encore disponible
        </span>
      </div>
      <br />
      <IconButtonToggle {...args} />
    </>
  ),

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const iconButton = canvas.getByRole("button");
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
        <IconButtonToggle {...args} size="s" data-testId="small-icon-button" />
        <IconButtonToggle {...args} data-testId="medium-icon-button" />
        <IconButtonToggle {...args} size="l" data-testId="large-icon-button" />
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
        <IconButtonToggle {...args} size="s" data-testId="small-icon-button" />
        <IconButtonToggle {...args} data-testId="medium-icon-button" />
        <IconButtonToggle {...args} size="l" data-testId="large-icon-button" />
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
    const button = canvas.getByRole("button");
    await userEvent.tab();
    expect(button).toHaveFocus();
    await userEvent.keyboard(ENTER_KEY);
    await userEvent.keyboard(SPACE_KEY);
    expect(mockFn).toHaveBeenCalledTimes(2);
    button.blur();
  },
};
