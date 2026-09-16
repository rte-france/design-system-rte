import { Meta, StoryObj } from "@storybook/react";
import { expect } from "@storybook/test";

import Icon from "./Icon";
import { RegularIcons as RegularIconsList, TogglableIcons as TogglableIconsList } from "./IconMap";

const RegularIconIds = Object.keys(RegularIconsList);
const TogglableIconIds = Object.keys(TogglableIconsList);
const STORY_ICON_TARGET = "icon-story-target";

const getStoryIconSvg = (canvasElement: HTMLElement): SVGSVGElement | null =>
  canvasElement.querySelector(`[data-testid="${STORY_ICON_TARGET}"] svg`);

const meta = {
  title: "Composants/Icon",
  component: Icon,
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
      options: ["outlined", "filled"],
      description: "Apparence de l’icône (pour les icônes togglables)",
      defaultValue: "outlined",
    },
    size: {
      control: { type: "number", min: 20, step: 1 },
      description: "Taille de l’icône en pixels",
      defaultValue: 20,
    },
    color: {
      control: "color",
      description: "Couleur de l’icône",
      defaultValue: "#000000",
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "add",
    size: 20,
    color: "#000000",
    appearance: "outlined",
  },

  render: (args) => <Icon {...args} color="var(--content-primary)" aria-label={args.name} />,
};

export const DecorativeIcon: Story = {
  args: {
    name: "add",
    size: 20,
    appearance: "outlined",
  },
  render: (args) => (
    <div data-testid={STORY_ICON_TARGET}>
      <Icon {...args} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const iconSvg = getStoryIconSvg(canvasElement);

    expect(iconSvg).toHaveAttribute("aria-hidden", "true");
  },
};

export const SemanticIcon: Story = {
  args: {
    name: "add",
    size: 20,
    appearance: "outlined",
    "aria-label": "Add item",
    "aria-hidden": false,
  },
  render: (args) => (
    <div data-testid={STORY_ICON_TARGET}>
      <Icon {...args} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const iconSvg = getStoryIconSvg(canvasElement);

    expect(iconSvg).toHaveAttribute("aria-label", "Add item");
    expect(iconSvg).not.toHaveAttribute("aria-hidden", "true");
  },
};

export const RegularIcons: Story = {
  args: {
    name: "add",
    size: 20,
  },
  render: (args) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        gap: "10px",
        height: "700px",
      }}
    >
      {RegularIconIds.map((iconName) => (
        <div
          key={iconName}
          style={{ display: "flex", alignItems: "center", gap: "5px", border: "1px solid #ccc", padding: "5px" }}
        >
          <Icon {...args} key={iconName} name={iconName as keyof typeof RegularIconsList} aria-label={iconName} />
          <span>{iconName}</span>
        </div>
      ))}
    </div>
  ),
};

export const TogglableIcons: Story = {
  args: {
    name: "add",
    size: 20,
  },
  render: (args) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        gap: "10px",
        height: "700px",
      }}
    >
      {TogglableIconIds.map((iconName) => (
        <div
          key={iconName}
          style={{ display: "flex", alignItems: "center", gap: "5px", border: "1px solid #ccc", padding: "5px" }}
        >
          <Icon {...args} key={iconName} name={iconName as keyof typeof TogglableIconsList} aria-label={iconName} />
          <Icon
            {...args}
            name={iconName as keyof typeof TogglableIconsList}
            key={`${iconName}-filled`}
            appearance="filled"
            aria-label={`${iconName}-filled`}
          />
          <span>{iconName}</span>
        </div>
      ))}
    </div>
  ),
};
