import { Meta, StoryObj } from "@storybook/react";

import Icon from "./Icon";
import { RegularIcons as RegularIconsList, TogglableIcons as TogglableIconsList } from "./IconMap";

const RegularIconIds = Object.keys(RegularIconsList);
const TogglableIconIds = Object.keys(TogglableIconsList);

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

  render: (args) => <Icon {...args} aria-label={args.name} />,
};

export const RegularIcons: Story = {
  args: {
    name: "add",
    size: 20,
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap", gap: "10px", height: "700px" }}>
      {RegularIconIds.map((iconName) => (
        <div
          key={iconName}
          style={{ display: "flex", alignItems: "center", gap: "5px", border: "1px solid #ccc", padding: "5px" }}
        >
          <Icon key={iconName} name={iconName as keyof typeof RegularIconsList} color="#000000" aria-label={iconName} />
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
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap", gap: "10px", height: "700px" }}>
      {TogglableIconIds.map((iconName) => (
        <div
          key={iconName}
          style={{ display: "flex", alignItems: "center", gap: "5px", border: "1px solid #ccc", padding: "5px" }}
        >
          <Icon
            key={iconName}
            name={iconName as keyof typeof TogglableIconsList}
            color="#000000"
            aria-label={iconName}
          />
          <Icon
            key={`${iconName}-filled`}
            name={iconName as keyof typeof TogglableIconsList}
            color="#000000"
            appearance="filled"
            aria-label={`${iconName}-filled`}
          />
          <span>{iconName}</span>
        </div>
      ))}
    </div>
  ),
};
