import type { Meta, StoryObj } from "@storybook/angular";

import { RegularIcons as RegularIconsList, TogglableIcons as TogglableIconsList } from "./icon-map";
import { IconComponent } from "./icon.component";

const RegularIconIds = Object.keys(RegularIconsList);
const TogglableIconIds = Object.keys(TogglableIconsList);

const meta = {
  title: "Icon",
  component: IconComponent,
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
} satisfies Meta<IconComponent>;

export default meta;

type Story = StoryObj<IconComponent>;

export const Default: Story = {
  args: {
    name: "add",
    size: 20,
    color: "#000000",
    appearance: "outlined",
  },
};

export const RegularIcons: Story = {
  render: (args) => ({
    props: { ...args, iconNames: RegularIconIds },
    template: `
    <div style="display: flex; flex-direction: column; flex-wrap: wrap; gap: 10px; height: 700px">
      <div *ngFor="let iconName of iconNames" style="display: flex; align-items: center; gap: 5px; border: 1px solid #ccc; padding: 5px">
        <rte-icon
          [name]="iconName"
        />
      <span>{{iconName}}</span>
      </div>
    </div>`,
  }),
};

export const TogglableIcons: Story = {
  render: (args) => ({
    props: { ...args, iconNames: TogglableIconIds },
    template: `
    <div style="display: flex; flex-direction: column; flex-wrap: wrap; gap: 10px; height: 700px">
      <div *ngFor="let iconName of iconNames" style="display: flex; align-items: center; gap: 5px; border: 1px solid #ccc; padding: 5px">
        <rte-icon
          [name]="iconName"
        />
         <rte-icon
          [name]="iconName"
          appearance="filled"
        />
      <span>{{iconName}}</span>
      </div>
    </div>`,
  }),
};
