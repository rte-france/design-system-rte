import {
  TESTING_ENTER_KEY,
  TESTING_SPACE_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard-test.constants";
import { Meta, StoryObj } from "@storybook/angular";
import { fn, userEvent, within, expect } from "@storybook/test";

import { focusElementBeforeComponent } from "../../../../../../.storybook/testing/testing.utils";
import { TogglableIcons as TogglableIconsList } from "../icon/icon-map";

import { IconButtonToggleComponent } from "./icon-button-toggle.component";

const TogglableIconIds = Object.keys(TogglableIconsList);

const meta = {
  title: "Composants/IconButtonToggle",
  id: "IconButtonToggle",
  component: IconButtonToggleComponent,
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "select",
      options: [...TogglableIconIds].sort((a, b) => a.localeCompare(b)),
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
      description: "Indique si l'icône est sélectionnée en mode contrôlé",
    },
    defaultSelected: {
      control: "boolean",
      description: "Valeur par défaut de la sélection en mode non contrôlé",
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
    selected: undefined,
    defaultSelected: false,
  },
  render: (args) => ({
    props: { ...args },
    template: `
    <rte-icon-button-toggle 
        name=${args.name} 
        [compactSpacing]="${args.compactSpacing}" 
        [disabled]="${args.disabled}"
        [selected]="${args.selected}"
        [type]="'${args.type}'"
        [variant]="'${args.variant}'"
        [defaultSelected]="${args.defaultSelected}"
        (click)="click()"
        [ariaLabel]="ariaLabel"
      />
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const iconButton = canvas.getByRole("button", { name: "icon button aria label" });
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
        data-testid="small-icon-button" 
        [compactSpacing]="${args.compactSpacing}" 
        [disabled]="${args.disabled}"
        [selected]="${args.selected}"
        [defaultSelected]="${args.defaultSelected}"
        [ariaLabel]="'Small Icon Button'"
        [type]="'${args.type}'"
        [variant]="'${args.variant}'"
      />
      <rte-icon-button-toggle
        name=${args.name} 
        data-testid="medium-icon-button" 
        [compactSpacing]="${args.compactSpacing}" 
        [disabled]="${args.disabled}"
        [selected]="${args.selected}"
        [defaultSelected]="${args.defaultSelected}"
        [ariaLabel]="'Small Icon Button'"
        [type]="'${args.type}'"
        [variant]="'${args.variant}'"
      />
      <rte-icon-button-toggle 
        size="l" 
        name=${args.name} 
        data-testid="large-icon-button" 
        [compactSpacing]="${args.compactSpacing}" 
        [disabled]="${args.disabled}"
        [selected]="${args.selected}"
        [defaultSelected]="${args.defaultSelected}"
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
        data-testid="small-icon-button" 
        [compactSpacing]="${args.compactSpacing}" 
        [disabled]="${args.disabled}"
        [selected]="${args.selected}"
        [defaultSelected]="${args.defaultSelected}"
        [ariaLabel]="'Small Icon Button'"
        [type]="'${args.type}'"
        [variant]="'${args.variant}'"
      />
      <rte-icon-button-toggle 
        name=${args.name} 
        data-testid="medium-icon-button" 
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
        data-testid="large-icon-button" 
        [compactSpacing]="${args.compactSpacing}" 
        [disabled]="${args.disabled}"
        [selected]="${args.selected}"
        [defaultSelected]="${args.defaultSelected}"
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
    const button = canvas.getByRole("button", { name: "icon button aria label" });
    focusElementBeforeComponent(canvasElement);
    await userEvent.tab();
    expect(button).toHaveFocus();
    await userEvent.keyboard(TESTING_ENTER_KEY);
    await userEvent.keyboard(TESTING_SPACE_KEY);
    expect(mockFn).toHaveBeenCalledTimes(2);
    button.blur();
  },
};
