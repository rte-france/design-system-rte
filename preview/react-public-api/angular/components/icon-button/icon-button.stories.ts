import { ENTER_KEY, SPACE_KEY, TAB_KEY } from "@design-system-rte/core/constants/keyboard.constants";
import { Meta, StoryObj } from "@storybook/angular";
import { fn, userEvent, within, expect } from "@storybook/test";

import { regularIcons as RegularIconsList, togglableIcons as TogglableIconsList } from "../icon/icon-map";

import { IconButtonComponent } from "./icon-button.component";

const RegularIconIds = Object.keys(RegularIconsList);
const TogglableIconIds = Object.keys(TogglableIconsList);

const meta = {
  title: "IconButton",
  component: IconButtonComponent,
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "select",
      options: [...RegularIconIds, ...TogglableIconIds].sort((a, b) => a.localeCompare(b)),
      description: "Nom de l’icône à afficher",
      defaultValue: "check",
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "text", "transparent", "danger"],
    },
    appearance: {
      control: "select",
      options: ["outlined", "filled"],
      description: "Apparence de l’icône (pour les icônes togglables)",
      defaultValue: "outlined",
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
} satisfies Meta<IconButtonComponent>;

export default meta;

type Story = StoryObj<IconButtonComponent>;

const mockFn = fn();

export const Default: Story = {
  args: {
    name: "settings",
    size: "m",
    appearance: "outlined",
    disabled: false,
    compactSpacing: false,
    variant: "primary",
    ariaLabel: "icon button aria label",
    click: mockFn,
  },

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
        [appearance]="${args.appearance}"
        [ariaLabel]="'Small Icon Button'"
        [type]="'${args.type}'"
        [variant]="'${args.variant}'"
      />
      <rte-icon-button 
        name=${args.name} 
        data-testid="medium-icon-button" 
        [compactSpacing]="${args.compactSpacing}" 
        [disabled]="${args.disabled}"
        [appearance]="${args.appearance}"
        [ariaLabel]="'Small Icon Button'"
        [type]="'${args.type}'"
        [variant]="'${args.variant}'"
      />
      <rte-icon-button 
        size="l" 
        name=${args.name} 
        data-testid="large-icon-button" 
        [compactSpacing]="${args.compactSpacing}" 
        [disabled]="${args.disabled}"
        [appearance]="${args.appearance}"
        [ariaLabel]="'Small Icon Button'"
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
        [appearance]="${args.appearance}"
        [ariaLabel]="'Small Icon Button'"
        [type]="'${args.type}'"
        [variant]="'${args.variant}'"
      />
      <rte-icon-button 
        name=${args.name} 
        data-testid="medium-icon-button" 
        [compactSpacing]="${args.compactSpacing}" 
        [disabled]="${args.disabled}"
        [appearance]="${args.appearance}"
        [ariaLabel]="'Small Icon Button'"
        [type]="'${args.type}'"
        [variant]="'${args.variant}'"
      />
      <rte-icon-button 
        size="l" 
        name=${args.name} 
        data-testid="large-icon-button" 
        [compactSpacing]="${args.compactSpacing}" 
        [disabled]="${args.disabled}"
        [appearance]="${args.appearance}"
        [ariaLabel]="'Small Icon Button'"
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

export const KeyboardInteraction: Story = {
  args: {
    ...Default.args,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await userEvent.keyboard(TAB_KEY);
    expect(button).toHaveFocus();
    await userEvent.keyboard(ENTER_KEY);
    await userEvent.keyboard(SPACE_KEY);
    expect(mockFn).toHaveBeenCalledTimes(2);
    button.blur();
  },
};
