import {
  TESTING_ENTER_KEY,
  TESTING_SPACE_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard-test.constants";
import { Meta, StoryObj } from "@storybook/angular";
import { fn, userEvent, within, expect } from "@storybook/test";

import { focusElementBeforeComponent } from "../../../../../../.storybook/testing/testing.utils";
import { RegularIcons as RegularIconsList, TogglableIcons as TogglableIconsList } from "../icon/icon-map";

import { IconButtonComponent } from "./icon-button.component";

const RegularIconIds = Object.keys(RegularIconsList);
const TogglableIconIds = Object.keys(TogglableIconsList);

const meta = {
  title: "Composants/IconButton",
  component: IconButtonComponent,
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
    ariaLabel: {
      control: "text",
      description: "Texte alternatif pour l’icône bouton",
    },
    clickEvent: {
      action: "click",
      description: "Événement déclenché lors du clic sur le bouton",
    },
    badgeContent: {
      control: "select",
      options: ["number", "icon", "empty"],
    },
    badgeType: {
      control: "select",
      options: ["brand", "neutral", "indicator"],
    },
    badgeIcon: {
      control: "select",
      options: [...RegularIconIds, ...TogglableIconIds].sort((a, b) => a.localeCompare(b)),
      description: "Nom de l’icône à afficher dans le badge",
      defaultValue: "settings",
    },
  },
} satisfies Meta<IconButtonComponent>;

export default meta;

type Story = StoryObj<IconButtonComponent>;

const mockFn = fn();

export const Default: Story = {
  args: {
    name: "settings",
    size: "m",
    iconAppearance: "outlined",
    disabled: false,
    compactSpacing: false,
    ariaLabel: "Ouvrir les paramètres",
    clickEvent: mockFn,
  },

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
  render: () => ({
    template: `
      <div style="display: flex; gap: 8px">
        <rte-icon-button name="settings" variant="primary" ariaLabel="Primary" />
        <rte-icon-button name="settings" variant="secondary" ariaLabel="Secondary" />
        <rte-icon-button name="settings" variant="text" ariaLabel="Text" />
        <rte-icon-button name="settings" variant="transparent" ariaLabel="Transparent" />
        <rte-icon-button name="settings" variant="danger" ariaLabel="Danger" />
        <rte-icon-button name="settings" variant="neutral" ariaLabel="Neutral" />
        <div style="background: var(--background-inverse)">
          <rte-icon-button name="settings" variant="reverse" ariaLabel="Reverse" />
        </div>
      </div>
    `,
  }),
};

export const ShellAppearance: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px">
        <div style="display: flex; gap: 8px; flex-wrap: wrap">
          <rte-icon-button name="settings" appearance="brand" hierarchy="primary" ariaLabel="Brand primary" />
          <rte-icon-button name="settings" appearance="brand" hierarchy="secondary" ariaLabel="Brand secondary" />
          <rte-icon-button name="settings" appearance="brand" hierarchy="text" ariaLabel="Brand text" />
          <rte-icon-button name="settings" appearance="brand" hierarchy="transparent" ariaLabel="Brand transparent" />
          <rte-icon-button name="settings" appearance="brand" hierarchy="primary" [isCritical]="true" ariaLabel="Critical" />
        </div>
        <div style="display: flex; gap: 8px; flex-wrap: wrap">
          <rte-icon-button name="settings" appearance="neutral" hierarchy="primary" ariaLabel="Neutral primary" />
          <rte-icon-button name="settings" appearance="neutral" hierarchy="secondary" ariaLabel="Neutral secondary" />
          <rte-icon-button name="settings" appearance="neutral" hierarchy="text" ariaLabel="Neutral text" />
          <rte-icon-button name="settings" appearance="neutral" hierarchy="transparent" ariaLabel="Neutral transparent" />
        </div>
        <div style="background: var(--background-inverse); display: inline-flex; padding: 8px">
          <rte-icon-button
            name="settings"
            appearance="brand"
            hierarchy="transparent"
            [isReversed]="true"
            ariaLabel="Reversed"
          />
        </div>
      </div>
    `,
  }),
};

export const IconAppearances: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 8px">
        <rte-icon-button name="settings" iconAppearance="outlined" ariaLabel="Outlined" />
        <rte-icon-button name="settings" iconAppearance="filled" ariaLabel="Filled" />
      </div>
    `,
  }),
};

export const Sizing: Story = {
  args: {
    ...Default.args,
    compactSpacing: false,
  },
  render: (args) => ({
    props: { ...args },
    template: `
    <div style="display: flex; gap: 8px">
    <rte-icon-button 
    size="s" 
    name=${args.name} 
    data-testid="small-icon-button" 
    [compactSpacing]="${args.compactSpacing}" 
    [disabled]="${args.disabled}"
    [iconAppearance]="'${args.iconAppearance || "outlined"}'"
    [ariaLabel]="'Petit bouton'"
    [type]="'${args.type}'"
    [variant]="'${args.variant}'"
    />
    <rte-icon-button 
    name=${args.name} 
    data-testid="medium-icon-button" 
    [compactSpacing]="${args.compactSpacing}" 
    [disabled]="${args.disabled}"
    [iconAppearance]="'${args.iconAppearance || "outlined"}'"
    [ariaLabel]="'Bouton moyen'"
    [type]="'${args.type}'"
    [variant]="'${args.variant}'"
    />
    <rte-icon-button 
    size="l" 
    name=${args.name} 
    data-testid="large-icon-button" 
    [compactSpacing]="${args.compactSpacing}" 
    [disabled]="${args.disabled}"
    [iconAppearance]="'${args.iconAppearance || "outlined"}'"
    [ariaLabel]="'Grand bouton'"
    [type]="'${args.type}'"
    [variant]="'${args.variant}'"
    />
    </div>
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const smallIconButton = canvas.getByTestId("small-icon-button").getElementsByTagName("button")[0];
    const mediumIconButton = canvas.getByTestId("medium-icon-button").getElementsByTagName("button")[0];
    const largeIconButton = canvas.getByTestId("large-icon-button").getElementsByTagName("button")[0];

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
  render: (args) => ({
    props: { ...args },
    template: `
    <div style="display: flex; gap: 8px">
    <rte-icon-button 
    size="s" 
    name=${args.name} 
    data-testid="small-icon-button" 
    [compactSpacing]="${args.compactSpacing}" 
    [disabled]="${args.disabled}"
    [iconAppearance]="'${args.iconAppearance || "outlined"}'"
    [ariaLabel]="'Petit bouton'"
    [type]="'${args.type}'"
    [variant]="'${args.variant}'"
    />
    <rte-icon-button 
    name=${args.name} 
    data-testid="medium-icon-button" 
    [compactSpacing]="${args.compactSpacing}" 
    [disabled]="${args.disabled}"
    [iconAppearance]="'${args.iconAppearance || "outlined"}'"
    [ariaLabel]="'Bouton moyen'"
    [type]="'${args.type}'"
    [variant]="'${args.variant}'"
    />
    <rte-icon-button 
    size="l" 
    name=${args.name} 
    data-testid="large-icon-button" 
    [compactSpacing]="${args.compactSpacing}" 
    [disabled]="${args.disabled}"
    [iconAppearance]="'${args.iconAppearance || "outlined"}'"
    [ariaLabel]="'Grand bouton'"
    [type]="'${args.type}'"
    [variant]="'${args.variant}'"
    />
    </div>
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const smallIconButton = canvas.getByTestId("small-icon-button").getElementsByTagName("button")[0];
    const mediumIconButton = canvas.getByTestId("medium-icon-button").getElementsByTagName("button")[0];
    const largeIconButton = canvas.getByTestId("large-icon-button").getElementsByTagName("button")[0];

    expect(smallIconButton.clientHeight).toBe(16);
    expect(mediumIconButton.clientHeight).toBe(20);
    expect(largeIconButton.clientHeight).toBe(24);
  },
};

export const WithBadge: Story = {
  args: {
    ...Default.args,
    name: "settings",
    size: "m",
    iconAppearance: "outlined",
    disabled: false,
    compactSpacing: false,
    ariaLabel: "icon button aria label",
    onClick: mockFn,
    badgeContent: "number",
    badgeCount: 1,
    badgeType: "brand",
  },

  render: (args) => ({
    props: { ...args },
    template: `
    <rte-icon-button 
    size=${args.size} 
    name=${args.name} 
    data-testid="small-icon-button" 
    [compactSpacing]="${args.compactSpacing}" 
    [disabled]="${args.disabled}"
    [iconAppearance]="'${args.iconAppearance || "outlined"}'"
    [ariaLabel]="'Small Icon Button'"
    [type]="'${args.type}'"
    [variant]="'${args.variant}'"
    [badgeContent]="'${args.badgeContent}'"
    [badgeCount]="${args.badgeCount}"
    [badgeType]="'${args.badgeType}'"
    />
    `,
  }),
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
