import {
  TESTING_ENTER_KEY,
  TESTING_SPACE_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard-test.constants";
import { Meta, StoryObj } from "@storybook/react";
import { fn, userEvent, within, expect } from "@storybook/test";

import { focusElementBeforeComponent } from "../../../.storybook/testing/testing.utils";
import { RegularIcons as RegularIconsList, TogglableIcons as TogglableIconsList } from "../icon/IconMap";

import IconButton from "./IconButton";

const RegularIconIds = Object.keys(RegularIconsList);
const TogglableIconIds = Object.keys(TogglableIconsList);

const meta = {
  title: "Composants/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "select",
      options: [...RegularIconIds, ...TogglableIconIds].sort((a, b) => a.localeCompare(b)),
      description: "Nom de l’icône à afficher",
      defaultValue: "check",
    },
    appearance: {
      control: "select",
      options: ["brand", "neutral", "outlined", "filled"],
      description: "Apparence du shell (brand/neutral) ou alias déprécié icône (outlined/filled)",
    },
    hierarchy: {
      control: "select",
      options: ["primary", "secondary", "text", "transparent"],
    },
    isCritical: { control: "boolean" },
    isReversed: { control: "boolean" },
    iconAppearance: {
      control: "select",
      options: ["outlined", "filled"],
      description: "Apparence de l’icône (togglable)",
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "text", "transparent", "danger", "neutral", "reverse"],
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
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

const mockFn = fn();

export const Default: Story = {
  args: {
    name: "settings",
    size: "m",
    iconAppearance: "outlined",
    disabled: false,
    compactSpacing: false,
    ["aria-label"]: "Ouvrir les paramètres",
    onClick: mockFn,
  },

  render: (args) => <IconButton {...args} />,

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const iconButton = canvas.getByLabelText("Ouvrir les paramètres");
    const iconSvg = iconButton.querySelector("svg");

    expect(iconSvg).toHaveAttribute("aria-hidden", "true");
    await userEvent.click(iconButton);
    expect(mockFn).toHaveBeenCalled();
    iconButton.blur();
  },
};

export const Variants: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => {
    return (
      <div style={{ display: "flex", gap: 8 }}>
        <IconButton {...args} variant="primary" data-testid="primary-icon-button" />
        <IconButton {...args} variant="secondary" data-testid="secondary-icon-button" />
        <IconButton {...args} variant="text" data-testid="text-icon-button" />
        <IconButton {...args} variant="transparent" data-testid="transparent-icon-button" />
        <IconButton {...args} variant="danger" data-testid="danger-icon-button" />
        <IconButton {...args} variant="neutral" data-testid="neutral-icon-button" />
        <div style={{ backgroundColor: "var(--background-inverse)" }}>
          <IconButton {...args} variant="reverse" data-testid="reverse-icon-button" />
        </div>
      </div>
    );
  },
};

export const ShellAppearance: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <IconButton {...args} appearance="brand" hierarchy="primary" aria-label="Brand primary" />
        <IconButton {...args} appearance="brand" hierarchy="secondary" aria-label="Brand secondary" />
        <IconButton {...args} appearance="brand" hierarchy="text" aria-label="Brand text" />
        <IconButton {...args} appearance="brand" hierarchy="transparent" aria-label="Brand transparent" />
        <IconButton {...args} appearance="brand" hierarchy="primary" isCritical aria-label="Critical" />
      </div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <IconButton {...args} appearance="neutral" hierarchy="primary" aria-label="Neutral primary" />
        <IconButton {...args} appearance="neutral" hierarchy="secondary" aria-label="Neutral secondary" />
        <IconButton {...args} appearance="neutral" hierarchy="text" aria-label="Neutral text" />
        <IconButton {...args} appearance="neutral" hierarchy="transparent" aria-label="Neutral transparent" />
      </div>
      <div style={{ background: "var(--background-inverse)", display: "inline-flex", padding: 8 }}>
        <IconButton {...args} appearance="brand" hierarchy="transparent" isReversed aria-label="Reversed" />
      </div>
    </div>
  ),
};

export const IconAppearances: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => (
    <div style={{ display: "flex", gap: 8 }}>
      <IconButton {...args} iconAppearance="outlined" data-testid="outlined-icon-button" />
      <IconButton {...args} iconAppearance="filled" data-testid="filled-icon-button" />
    </div>
  ),
};

export const Sizing: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => {
    return (
      <div style={{ display: "flex", gap: 8 }}>
        <IconButton {...args} size="s" data-testid="small-icon-button" aria-label="Petit bouton" />
        <IconButton {...args} size="m" data-testid="medium-icon-button" aria-label="Bouton moyen" />
        <IconButton {...args} size="l" data-testid="large-icon-button" aria-label="Grand bouton" />
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
        <IconButton {...args} size="s" data-testid="small-icon-button" aria-label="Petit bouton" />
        <IconButton {...args} size="m" data-testid="medium-icon-button" aria-label="Bouton moyen" />
        <IconButton {...args} size="l" data-testid="large-icon-button" aria-label="Grand bouton" />
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

export const WithBadge: Story = {
  args: {
    name: "settings",
    size: "m",
    iconAppearance: "outlined",
    disabled: false,
    compactSpacing: false,
    ["aria-label"]: "icon button aria label",
    onClick: mockFn,
    badgeContent: "number",
    badgeCount: 1,
    badgeType: "brand",
  },

  render: (args) => <IconButton {...args} />,
};

export const KeyboardInteraction: Story = {
  args: {
    ...Default.args,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Ouvrir les paramètres" });
    focusElementBeforeComponent();
    await userEvent.tab();
    expect(button).toHaveFocus();
    await userEvent.keyboard(TESTING_ENTER_KEY);
    await userEvent.keyboard(TESTING_SPACE_KEY);
    expect(mockFn).toHaveBeenCalledTimes(2);
    button.blur();
  },
};
