import { ENTER_KEY, SPACE_KEY, TAB_KEY } from "@design-system-rte/core/constants/keyboard.constants";
import { Meta, StoryObj } from "@storybook/angular";
import { fn, userEvent, within, expect } from "@storybook/test";

import { togglableIcons as TogglableIconsList } from "../icon/icon-map";

import { IconButtonToggleComponent } from "./icon-button-toggle.component";

const TogglableIconIds = Object.keys(TogglableIconsList);

const meta = {
  title: "IconButtonToggle",
  component: IconButtonToggleComponent,
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "select",
      options: [...TogglableIconIds].sort(),
      description: "Nom de l’icône à afficher",
      defaultValue: "check",
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
    selected: {
      control: "boolean",
      description: "Indique si l'icône est sélectionnée",
    },
  },
} satisfies Meta<IconButtonToggleComponent>;

export default meta;

type Story = StoryObj<IconButtonToggleComponent>;

const mockFn = fn();

export const Default: Story = {
  args: {
    name: "settings",
    size: "m",
    disabled: false,
    compactSpacing: false,
    variant: "primary",
    ariaLabel: "icon button aria label",
    click: mockFn,
    selected: false,
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
      <rte-icon-button-toggle 
        size="s" 
        name=${args.name} 
        data-testId="small-icon-button" 
        [compactSpacing]="${args.compactSpacing}" 
        [disabled]="${args.disabled}"
        [selected]="${args.selected}"
        [ariaLabel]="'Small Icon Button'"
        [type]="'${args.type}'"
        [variant]="'${args.variant}'"
      />
      <rte-icon-button-toggle
        name=${args.name} 
        data-testId="medium-icon-button" 
        [compactSpacing]="${args.compactSpacing}" 
        [disabled]="${args.disabled}"
        [selected]="${args.selected}"
        [ariaLabel]="'Small Icon Button'"
        [type]="'${args.type}'"
        [variant]="'${args.variant}'"
      />
      <rte-icon-button-toggle 
        size="l" 
        name=${args.name} 
        data-testId="large-icon-button" 
        [compactSpacing]="${args.compactSpacing}" 
        [disabled]="${args.disabled}"
        [selected]="${args.selected}"
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
      <rte-icon-button-toggle 
        size="s" 
        name=${args.name} 
        data-testId="small-icon-button" 
        [compactSpacing]="${args.compactSpacing}" 
        [disabled]="${args.disabled}"
        [selected]="${args.selected}"
        [ariaLabel]="'Small Icon Button'"
        [type]="'${args.type}'"
        [variant]="'${args.variant}'"
      />
      <rte-icon-button-toggle 
        name=${args.name} 
        data-testId="medium-icon-button" 
        [compactSpacing]="${args.compactSpacing}" 
        [disabled]="${args.disabled}"
        [selected]="${args.selected}"
        [ariaLabel]="'Small Icon Button'"
        [type]="'${args.type}'"
        [variant]="'${args.variant}'"
      />
      <rte-icon-button-toggle 
        size="l" 
        name=${args.name} 
        data-testId="large-icon-button" 
        [compactSpacing]="${args.compactSpacing}" 
        [disabled]="${args.disabled}"
        [selected]="${args.selected}"
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
