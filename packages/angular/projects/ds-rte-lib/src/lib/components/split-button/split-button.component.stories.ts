import { ARROW_DOWN_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";
import { Meta, StoryObj } from "@storybook/angular";
import { expect, userEvent, waitFor, within } from "@storybook/test";

import { focusElementBeforeComponent } from "../../../../../../.storybook/testing/testing.utils";
import { RegularIcons as RegularIconsList, TogglableIcons as TogglableIconsList } from "../icon/icon-map";

import { SplitButtonComponent } from "./split-button.component";

const RegularIconIds = Object.keys(RegularIconsList);
const TogglableIconIds = Object.keys(TogglableIconsList);

const defaultOptions = [
  {
    id: "option-1",
    label: "Option 1",
    click: () => console.log("Option 1 clicked"),
  },
  {
    id: "option-2",
    label: "Option 2",
    click: () => console.log("Option 2 clicked"),
  },
  {
    id: "option-3",
    label: "Option 3",
    click: () => console.log("Option 3 clicked"),
  },
];

const meta: Meta<SplitButtonComponent> = {
  title: "Composants/SplitButton",
  id: "SplitButton",
  component: SplitButtonComponent,
  tags: ["autodocs"],
  argTypes: {
    appearance: {
      control: "select",
      options: ["primary", "secondary"],
    },
    size: {
      control: "select",
      options: ["s", "m", "l"],
    },
    compactSpacing: {
      control: "boolean",
    },
    position: {
      control: "select",
      options: ["bottom-start", "bottom-end", "top-start", "top-end"],
    },
    disabled: {
      control: "boolean",
    },
    icon: {
      control: "select",
      options: ["", ...RegularIconIds, ...TogglableIconIds].sort((a, b) => a.localeCompare(b)),
      description: "Nom de l’icône à afficher",
      defaultValue: "",
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
      options: RegularIconIds.sort((a, b) => a.localeCompare(b)),
    },
    showBadge: {
      control: "boolean",
    },
    badgeCount: {
      control: "number",
    },
    badgeSize: {
      control: "select",
      options: ["xs", "s", "m", "l"],
    },
  },
};
export default meta;
type Story = StoryObj<SplitButtonComponent>;

export const Default: Story = {
  args: {
    label: "Button Label",
    ariaLabelRight: "Open menu",
    size: "m",
    compactSpacing: false,
    appearance: "primary",
    position: "bottom-start",
    disabled: false,
    icon: null,
    options: defaultOptions,
  },
  render: (args) => ({
    props: args,
    template: `
      <rte-split-button
        label="${args.label}"
        ariaLabelRight="${args.ariaLabelRight}"
        size="${args.size}"
        [compactSpacing]="${args.compactSpacing}"
        appearance="${args.appearance}"
        position="${args.position}"
        [disabled]="${args.disabled}"
        [icon]="icon"
        [options]="options"
      />
        
      
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByTestId("Main action button");
    await userEvent.click(button);
  },
};

export const Appearance: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; gap: 16px">
        <rte-split-button
          label="${args.label}"
          ariaLabelRight="${args.ariaLabelRight}"
          size="${args.size}"
          [compactSpacing]="${args.compactSpacing}"
          appearance="primary"
          position="${args.position}"
          [disabled]="${args.disabled}"
          [options]="options"
        />
          
        
        <rte-split-button
          label="${args.label}"
          ariaLabelRight="${args.ariaLabelRight}"
          size="${args.size}"
          [compactSpacing]="${args.compactSpacing}"
          appearance="secondary"
          position="${args.position}"
          [disabled]="${args.disabled}"
          [options]="options"
        />
          
        
      </div>
    `,
  }),
  args: {
    ...Default.args,
  },
};

export const Size: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; gap: 16px">
        <rte-split-button
          label="${args.label}"
          ariaLabelRight="${args.ariaLabelRight}"
          size="s"
          [compactSpacing]="${args.compactSpacing}"
          appearance="${args.appearance}"
          position="${args.position}"
          [disabled]="${args.disabled}"
          [options]="options"
        />
          
        
        <rte-split-button
          label="${args.label}"
          ariaLabelRight="${args.ariaLabelRight}"
          size="m"
          [compactSpacing]="${args.compactSpacing}"
          appearance="${args.appearance}"
          position="${args.position}"
          [disabled]="${args.disabled}"
          [options]="options"
        />
          
        
        <rte-split-button
          label="${args.label}"
          ariaLabelRight="${args.ariaLabelRight}"
          size="l"
          [compactSpacing]="${args.compactSpacing}"
          appearance="${args.appearance}"
          position="${args.position}"
          [disabled]="${args.disabled}"
          [options]="options"
        />
      </div>
    `,
  }),
  args: {
    ...Default.args,
  },
};

export const CompactSpacing: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; gap: 16px">
        <rte-split-button
          label="${args.label}"
          ariaLabelRight="${args.ariaLabelRight}"
          size="s"
          [compactSpacing]="${args.compactSpacing}"
          appearance="${args.appearance}"
          position="${args.position}"
          [disabled]="${args.disabled}"
          [options]="options"
        />
          
        
        <rte-split-button
          label="${args.label}"
          ariaLabelRight="${args.ariaLabelRight}"
          size="m"
          [compactSpacing]="${args.compactSpacing}"
          appearance="${args.appearance}"
          position="${args.position}"
          [disabled]="${args.disabled}"
          [options]="options"
        />
          
        
        <rte-split-button
          label="${args.label}"
          ariaLabelRight="${args.ariaLabelRight}"
          size="l"
          [compactSpacing]="${args.compactSpacing}"
          appearance="${args.appearance}"
          position="${args.position}"
          [disabled]="${args.disabled}"
          [options]="options"
        />
          
        
      </div>
    `,
  }),
  args: {
    ...Default.args,
    compactSpacing: true,
  },
};

export const Position: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; justify-content: center; align-items: center; min-height: 600px">
        <div style="display: grid; grid-template-columns: 2fr 2fr; gap: 24px">
          <rte-split-button
            label="${args.label}"
            ariaLabelRight="${args.ariaLabelRight}"
            size="${args.size}"
            [compactSpacing]="${args.compactSpacing}"
            appearance="${args.appearance}"
            position="top-end"
            [disabled]="${args.disabled}"
            [options]="options"
          />
          <rte-split-button
            label="${args.label}"
            ariaLabelRight="${args.ariaLabelRight}"
            size="${args.size}"
            [compactSpacing]="${args.compactSpacing}"
            appearance="${args.appearance}"
            position="top-start"
            [disabled]="${args.disabled}"
            [options]="options"
          />
          <rte-split-button
            label="${args.label}"
            ariaLabelRight="${args.ariaLabelRight}"
            size="${args.size}"
            [compactSpacing]="${args.compactSpacing}"
            appearance="${args.appearance}"
            position="bottom-end"
            [options]="options"
          />
          <rte-split-button
            label="${args.label}"
            ariaLabelRight="${args.ariaLabelRight}"
            size="${args.size}"
            [compactSpacing]="${args.compactSpacing}"
            appearance="${args.appearance}"
            position="bottom-start"
            [options]="options"
          />
        </div>
      </div>
    `,
  }),
  args: {
    ...Default.args,
  },
};

export const WithBadge: Story = {
  args: {
    label: "Button Label",
    ariaLabelRight: "Open menu",
    size: "m",
    compactSpacing: false,
    appearance: "primary",
    position: "bottom-start",
    disabled: false,
    icon: null,
    badgeContent: "number",
    badgeType: "indicator",
    showBadge: true,
    badgeCount: 3,
    options: [
      {
        id: "option-1",
        label: "Option 1",
        showBadge: true,
        badgeCount: 2,
        badgeContent: "number",
        badgeType: "indicator",
        badgeSize: "m",
      },
      { id: "option-2", label: "Option 2" },
      {
        id: "option-3",
        label: "Option 3",
        showBadge: true,
        badgeCount: 5,
        badgeContent: "number",
        badgeType: "indicator",
        badgeSize: "m",
      },
    ],
  },
  render: (args) => ({
    props: args,
    template: `
      <rte-split-button
        label="${args.label}"
        ariaLabelRight="${args.ariaLabelRight}"
        size="${args.size}"
        [compactSpacing]="${args.compactSpacing}"
        appearance="${args.appearance}"
        position="${args.position}"
        [disabled]="${args.disabled}"
        [icon]="icon"
        [options]="options"
        [badgeContent]="badgeContent"
        [badgeType]="badgeType"
        [showBadge]="showBadge"
        [badgeCount]="badgeCount"
      />
        
      
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByTestId("Main action button");
    await userEvent.click(button);
  },
};
export const KeyboardInteraction: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByTestId("Menu button");
    focusElementBeforeComponent(canvasElement);
    await userEvent.tab();
    await userEvent.tab();
    expect(document.activeElement).toBe(button);
    await userEvent.keyboard(`{${ARROW_DOWN_KEY}}`);
    await waitFor(() => expect(document.body.querySelector('[data-testid = "Menu container"]')).toBeVisible());
  },
  args: {
    ...Default.args,
  },
};
