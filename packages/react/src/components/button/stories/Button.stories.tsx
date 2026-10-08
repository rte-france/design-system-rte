import {
  TESTING_ENTER_KEY,
  TESTING_SPACE_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard-test.constants";
import type { Meta, StoryObj } from "@storybook/react";
import { fn, userEvent, within, expect } from "@storybook/test";

import { focusElementBeforeComponent } from "../../../../.storybook/testing/testing.utils";
import { RegularIcons as RegularIconsList, TogglableIcons as TogglableIconsList } from "../../icon/IconMap";
import Button from "../Button";

import ButtonVariantGrid from "./ButtonVariantGrid";

const RegularIconIds = Object.keys(RegularIconsList);
const TogglableIconIds = Object.keys(TogglableIconsList);

const meta = {
  title: "Composants/Button/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    appearance: {
      control: "select",
      options: ["brand", "neutral"],
    },
    hierarchy: {
      control: "select",
      options: ["primary", "secondary", "text", "transparent"],
    },
    isCritical: {
      control: "boolean",
    },
    isReversed: {
      control: "boolean",
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "text", "transparent", "danger", "neutral", "reverse"],
      description: "Deprecated flat visual alias.",
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
    icon: {
      control: "select",
      options: [...RegularIconIds, ...TogglableIconIds].sort((a, b) => a.localeCompare(b)),
      description: "Nom de l’icône à afficher sur le bouton",
    },
    iconAppearance: {
      control: "select",
      options: ["filled", "outlined"],
      description: "Apparence de l’icône du bouton",
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockFn = fn();

export const Default: Story = {
  args: {
    appearance: "brand",
    hierarchy: "primary",
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

export const WithIcon: Story = {
  args: {
    ...Default.args,
    icon: "add-circle",
    label: "Button with Icon",
  },

  render: (args) => {
    return (
      <div style={{ display: "flex", gap: 8 }}>
        <Button {...args} iconPosition="left" iconAppearance="filled" />
        <Button {...args} iconPosition="right" icon="add-circle" iconAppearance="outlined" />
      </div>
    );
  },
};

export const FigmaVariantGrid: Story = {
  args: {
    label: "Button",
  },
  tags: ["!autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  render: () => <ButtonVariantGrid />,
};

export const BrandHierarchies: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => {
    return (
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        <Button {...args} appearance="brand" hierarchy="primary" label="Primary" />
        <Button {...args} appearance="brand" hierarchy="secondary" label="Secondary" />
        <Button {...args} appearance="brand" hierarchy="text" label="Text" />
        <Button {...args} appearance="brand" hierarchy="transparent" label="Transparent" />
      </div>
    );
  },
};

export const NeutralHierarchies: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => {
    return (
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        <Button {...args} appearance="neutral" hierarchy="primary" label="Neutral primary" />
        <Button {...args} appearance="neutral" hierarchy="secondary" label="Neutral secondary" />
        <Button {...args} appearance="neutral" hierarchy="text" label="Neutral text" />
        <Button {...args} appearance="neutral" hierarchy="transparent" label="Neutral transparent" />
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
    onClick: mockFn,
  },
  render: (args) => {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          <Button {...args} appearance="brand" hierarchy="primary" label="Primary" />
          <Button {...args} appearance="brand" hierarchy="secondary" label="Secondary" />
          <Button {...args} appearance="brand" hierarchy="text" label="Text" />
          <Button {...args} appearance="brand" hierarchy="transparent" label="Transparent" />
          <Button {...args} appearance="brand" hierarchy="primary" isCritical label="Critical" />
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          <Button {...args} appearance="neutral" hierarchy="primary" label="Neutral primary" />
          <Button {...args} appearance="neutral" hierarchy="secondary" label="Neutral secondary" />
          <Button {...args} appearance="neutral" hierarchy="text" label="Neutral text" />
          <Button {...args} appearance="neutral" hierarchy="transparent" label="Neutral transparent" />
        </div>
        <div
          style={{
            background: "var(--background-inverse)",
            padding: 16,
            borderRadius: 8,
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <Button {...args} appearance="brand" hierarchy="transparent" isReversed label="Reversed" />
          <Button {...args} appearance="neutral" hierarchy="primary" isReversed label="Neutral reversed" />
        </div>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    mockFn.mockClear();
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole("button");

    for (const button of buttons) {
      expect(button).toBeDisabled();
    }

    await userEvent.click(buttons[0]);
    expect(mockFn).not.toHaveBeenCalled();
  },
};

export const CriticalAndReversed: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => {
    return (
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
        <Button {...args} appearance="brand" hierarchy="primary" isCritical label="Critical" />
        <div
          style={{
            background: "var(--background-inverse)",
            padding: 16,
            borderRadius: 8,
            display: "flex",
            gap: 8,
            alignItems: "center",
          }}
        >
          <Button {...args} appearance="brand" hierarchy="transparent" isReversed label="Reversed S" size="s" />
          <Button {...args} appearance="brand" hierarchy="transparent" isReversed label="Reversed M" />
          <Button {...args} appearance="brand" hierarchy="transparent" isReversed label="Reversed L" size="l" />
          <Button {...args} appearance="neutral" hierarchy="primary" isReversed label="Neutral reversed" />
        </div>
      </div>
    );
  },
};

export const LegacyVariants: Story = {
  args: {
    label: "Button",
    onClick: mockFn,
  },
  render: (args) => {
    return (
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        <Button {...args} variant="primary" label="Primary" />
        <Button {...args} variant="secondary" label="Secondary" />
        <Button {...args} variant="text" label="Text" />
        <Button {...args} variant="transparent" label="Transparent" />
        <Button {...args} variant="danger" label="Danger" />
        <Button {...args} variant="neutral" label="Neutral" />
        <div style={{ background: "var(--background-inverse)", padding: 8, borderRadius: 8 }}>
          <Button {...args} variant="reverse" label="Reverse" />
        </div>
      </div>
    );
  },
};

export const WithBadge: Story = {
  args: {
    ...Default.args,
    badgeContent: "number",
    badgeCount: 5,
    badgeType: "indicator",
  },
  render: (args) => {
    return <Button {...args} label="Button with Badge" />;
  },
};

const iconAppearanceWithBadgeColumnStyle = {
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "flex-start",
  gap: 8,
};

const iconAppearanceWithBadgeCaptionStyle = {
  color: "var(--content-secondary)",
  fontSize: 12,
  margin: 0,
};

export const IconAppearanceWithBadge: Story = {
  tags: ["!autodocs"],
  parameters: {
    docs: {
      description: {
        story:
          "Manual check (React): row 2 — **filled** with/without badge (should match; bug = ring on the badged button). Row 3 — **outlined** with/without badge (often identical even when broken, because missing `appearance` on `Icon` already renders outlined).",
      },
    },
  },
  args: {
    ...Default.args,
    icon: "add-circle",
    iconPosition: "left",
    iconAppearance: "filled",
    label: "Filled icon",
    badgeContent: "number",
    badgeCount: 3,
    badgeType: "indicator",
  },
  render: (args) => {
    const { badgeContent, badgeCount, badgeType, ...buttonArgs } = args;

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 24, padding: 8 }}>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          <div style={iconAppearanceWithBadgeColumnStyle}>
            <p style={iconAppearanceWithBadgeCaptionStyle}>Reference — filled</p>
            <Button {...buttonArgs} iconAppearance="filled" label="Filled icon" />
          </div>
          <div style={iconAppearanceWithBadgeColumnStyle}>
            <p style={iconAppearanceWithBadgeCaptionStyle}>Reference — outlined</p>
            <Button {...buttonArgs} iconAppearance="outlined" label="Outlined icon" />
          </div>
        </div>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          <div style={iconAppearanceWithBadgeColumnStyle}>
            <p style={iconAppearanceWithBadgeCaptionStyle}>Filled, no badge</p>
            <Button {...buttonArgs} iconAppearance="filled" label="Filled icon" />
          </div>
          <div style={iconAppearanceWithBadgeColumnStyle}>
            <p style={iconAppearanceWithBadgeCaptionStyle}>Filled + badge (should match left)</p>
            <Button
              {...buttonArgs}
              iconAppearance="filled"
              label="Filled + badge"
              badgeContent={badgeContent}
              badgeCount={badgeCount}
              badgeType={badgeType}
            />
          </div>
        </div>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          <div style={iconAppearanceWithBadgeColumnStyle}>
            <p style={iconAppearanceWithBadgeCaptionStyle}>Outlined, no badge</p>
            <Button {...buttonArgs} iconAppearance="outlined" label="Outlined icon" />
          </div>
          <div style={iconAppearanceWithBadgeColumnStyle}>
            <p style={iconAppearanceWithBadgeCaptionStyle}>Outlined + badge</p>
            <Button
              {...buttonArgs}
              iconAppearance="outlined"
              label="Outlined + badge"
              badgeContent={badgeContent}
              badgeCount={badgeCount}
              badgeType={badgeType}
            />
          </div>
        </div>
      </div>
    );
  },
};

export const KeyboardInteraction: Story = {
  tags: ["!autodocs"],
  args: {
    ...Default.args,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    focusElementBeforeComponent();
    const button = canvas.getByRole("button", { name: "Button" });
    await userEvent.tab();
    expect(button).toHaveFocus();
    await userEvent.keyboard(TESTING_ENTER_KEY);
    await userEvent.keyboard(TESTING_SPACE_KEY);
    expect(mockFn).toHaveBeenCalledTimes(2);
    button.blur();
  },
};
