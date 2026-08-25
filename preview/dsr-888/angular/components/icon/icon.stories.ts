import { CommonModule } from "@angular/common";
import { moduleMetadata, type Meta, type StoryObj } from "@storybook/angular";

import { RegularIcons as RegularIconsList, TogglableIcons as TogglableIconsList } from "./icon-map";
import { IconComponent } from "./icon.component";

const RegularIconIds = Object.keys(RegularIconsList);
const TogglableIconIds = Object.keys(TogglableIconsList);

const TABLE_ACTION_ICONS = ["edit", "delete", "settings", "more-vert"] as const;

const meta = {
  title: "Composants/Icon",
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
  args: { ...Default.args },
  render: (args) => ({
    props: { ...args, iconNames: RegularIconIds },
    template: `
    <div style="display: flex; flex-direction: column; flex-wrap: wrap; gap: 10px; height: 700px">
      <div *ngFor="let iconName of iconNames" style="display: flex; align-items: center; gap: 5px; border: 1px solid #ccc; padding: 5px">
        <rte-icon
          [name]="iconName"
          [color]="color"
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
          [color]="color"
        />
         <rte-icon
          [name]="iconName"
          [color]="color"
          appearance="filled"
        />
      <span>{{iconName}}</span>
      </div>
    </div>`,
  }),
};

type IconTableStoryArgs = IconComponent & { rowCount: number };

export const TableWithRepeatedIcons: StoryObj<IconTableStoryArgs> = {
  name: "Table avec icônes répétées (perf)",
  decorators: [
    moduleMetadata({
      imports: [CommonModule, IconComponent],
    }),
  ],
  parameters: {
    docs: {
      description: {
        story: [
          "Reproduit le cas Coressy : un tableau avec plusieurs icônes d’action identiques par ligne.",
          "Ouvrir les DevTools → Network (cache désactivé) et inspecter le DOM pour observer :",
          "1. Aucune requête HTTP vers `assets/icons/*.svg` (icônes bundlées au build).",
          "2. Rendu synchrone des icônes (pas d’effet « pop »).",
          "3. Duplication du SVG (`<path>`) par instance dans le DOM (comportement équivalent à Angular Material SVG).",
        ].join("\n\n"),
      },
    },
  },
  argTypes: {
    rowCount: {
      control: { type: "number", min: 1, max: 200, step: 1 },
      description: "Nombre de lignes du tableau",
    },
    color: {
      control: "color",
      description: "Couleur des icônes d’action",
    },
  },
  args: {
    rowCount: 50,
    color: "#1a1a1a",
    size: 20,
  },
  render: (args) => ({
    props: {
      ...args,
      rows: Array.from({ length: args.rowCount }, (_, index) => ({
        id: index + 1,
        label: `Ligne ${index + 1}`,
      })),
      actionIcons: TABLE_ACTION_ICONS,
      totalIcons: args.rowCount * TABLE_ACTION_ICONS.length,
      uniqueIcons: TABLE_ACTION_ICONS.length,
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; max-width: 960px;">
        <p style="margin: 0; font-size: 14px; color: var(--text-secondary, #666);">
          {{ totalIcons }} instances d’icônes ({{ uniqueIcons }} icônes uniques × {{ rowCount }} lignes).
          Ouvrir Network + Elements dans les DevTools : aucune requête icon SVG attendue ; la duplication DOM par instance reste visible.
        </p>

        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <thead>
            <tr style="border-bottom: 2px solid var(--border-default, #ddd); text-align: left;">
              <th style="padding: 8px 12px;">ID</th>
              <th style="padding: 8px 12px;">Libellé</th>
              <th style="padding: 8px 12px;">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr
              *ngFor="let row of rows"
              style="border-bottom: 1px solid var(--border-default, #eee);"
            >
              <td style="padding: 8px 12px;">{{ row.id }}</td>
              <td style="padding: 8px 12px;">{{ row.label }}</td>
              <td style="padding: 8px 12px;">
                <div style="display: flex; gap: 8px; align-items: center;">
                  <rte-icon
                    *ngFor="let iconName of actionIcons"
                    [name]="iconName"
                    [size]="size"
                    [color]="color"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
  }),
};
