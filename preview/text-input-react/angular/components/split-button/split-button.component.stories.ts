import { DOWN_KEY } from "@design-system-rte/core/constants/keyboard.constants";
import { Meta, StoryObj } from "@storybook/angular";
import { expect, userEvent, waitFor, within } from "@storybook/test";

import { SplitButtonComponent } from "./split-button.component";

const mockChildren = `
  <div style="display: flex; flex-direction: column; gap: 8px; min-width: 120px">
    <button
      style="
        padding: 8px 16px;
        border: none;
        border-radius: 4px;
        background: #2563eb;
        color: #fff;
        font-weight: 500;
        font-size: 15px;
        cursor: pointer;
      "
    >
      Action 1
    </button>
    <button
      style="
        padding: 8px 16px;
        border: none;
        border-radius: 4px;
        background: #64748b;
        color: #fff;
        font-weight: 500;
        font-size: 15px;
        cursor: pointer;
      "
    >
      Action 2
    </button>
  </div>
`;

const wipWarning = `
<div>
  <span style="font-family: sans-serif; margin-bottom: 16px; border: 1px solid #F4922B; padding: 8px; border-radius: 5px; background-color: #FAFFC1; margin: 0;">
    Ce composant est en cours de développement et n'est pas encore disponible
  </span>
</div>
<br/>
`;

const meta: Meta<SplitButtonComponent> = {
  title: "SplitButton (développement en cours)",
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
    selected: {
      control: "boolean",
    },
    position: {
      control: "select",
      options: ["bottom-start", "bottom-end", "top-start", "top-end"],
    },
    disabled: {
      control: "boolean",
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
    selected: false,
  },
  render: (args) => ({
    props: args,
    template: `
      ${wipWarning}
      <rte-split-button
        label="${args.label}"
        ariaLabelRight="${args.ariaLabelRight}"
        size="${args.size}"
        [compactSpacing]="${args.compactSpacing}"
        appearance="${args.appearance}"
        position="${args.position}"
        [disabled]="${args.disabled}"
        [selected]="${args.selected}"
      >
        ${mockChildren}
      </rte-split-button>
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
      ${wipWarning}
      <div style="display: flex; gap: 16px">
        <rte-split-button
          label="${args.label}"
          ariaLabelRight="${args.ariaLabelRight}"
          size="${args.size}"
          [compactSpacing]="${args.compactSpacing}"
          appearance="primary"
          position="${args.position}"
          [disabled]="${args.disabled}"
          [selected]="${args.selected}"
        >
          ${mockChildren}
        </rte-split-button>
        <rte-split-button
          label="${args.label}"
          ariaLabelRight="${args.ariaLabelRight}"
          size="${args.size}"
          [compactSpacing]="${args.compactSpacing}"
          appearance="secondary"
          position="${args.position}"
          [disabled]="${args.disabled}"
          [selected]="${args.selected}"
        >
          ${mockChildren}
        </rte-split-button>
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
      ${wipWarning}
      <div style="display: flex; gap: 16px">
        <rte-split-button
          label="${args.label}"
          ariaLabelRight="${args.ariaLabelRight}"
          size="s"
          [compactSpacing]="${args.compactSpacing}"
          appearance="${args.appearance}"
          position="${args.position}"
          [disabled]="${args.disabled}"
          [selected]="${args.selected}"
        >
          ${mockChildren}
        </rte-split-button>
        <rte-split-button
          label="${args.label}"
          ariaLabelRight="${args.ariaLabelRight}"
          size="m"
          [compactSpacing]="${args.compactSpacing}"
          appearance="${args.appearance}"
          position="${args.position}"
          [disabled]="${args.disabled}"
          [selected]="${args.selected}"
        >
          ${mockChildren}
        </rte-split-button>
        <rte-split-button
          label="${args.label}"
          ariaLabelRight="${args.ariaLabelRight}"
          size="l"
          [compactSpacing]="${args.compactSpacing}"
          appearance="${args.appearance}"
          position="${args.position}"
          [disabled]="${args.disabled}"
          [selected]="${args.selected}"
        >
          ${mockChildren}
        </rte-split-button>
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
      ${wipWarning}
      <div style="display: flex; gap: 16px">
        <rte-split-button
          label="${args.label}"
          ariaLabelRight="${args.ariaLabelRight}"
          size="s"
          [compactSpacing]="${args.compactSpacing}"
          appearance="${args.appearance}"
          position="${args.position}"
          [disabled]="${args.disabled}"
          [selected]="${args.selected}"
        >
          ${mockChildren}
        </rte-split-button>
        <rte-split-button
          label="${args.label}"
          ariaLabelRight="${args.ariaLabelRight}"
          size="m"
          [compactSpacing]="${args.compactSpacing}"
          appearance="${args.appearance}"
          position="${args.position}"
          [disabled]="${args.disabled}"
          [selected]="${args.selected}"
        >
          ${mockChildren}
        </rte-split-button>
        <rte-split-button
          label="${args.label}"
          ariaLabelRight="${args.ariaLabelRight}"
          size="l"
          [compactSpacing]="${args.compactSpacing}"
          appearance="${args.appearance}"
          position="${args.position}"
          [disabled]="${args.disabled}"
          [selected]="${args.selected}"
        >
          ${mockChildren}
        </rte-split-button>
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
      ${wipWarning}
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
            [selected]="${args.selected}"
          >
            ${mockChildren}
          </rte-split-button>
          <rte-split-button
            label="${args.label}"
            ariaLabelRight="${args.ariaLabelRight}"
            size="${args.size}"
            [compactSpacing]="${args.compactSpacing}"
            appearance="${args.appearance}"
            position="top-start"
            [disabled]="${args.disabled}"
            [selected]="${args.selected}"
          >
            ${mockChildren}
          </rte-split-button>
          <rte-split-button
            label="${args.label}"
            ariaLabelRight="${args.ariaLabelRight}"
            size="${args.size}"
            [compactSpacing]="${args.compactSpacing}"
            appearance="${args.appearance}"
            position="bottom-end"
          >
            ${mockChildren}
          </rte-split-button>
          <rte-split-button
            label="${args.label}"
            ariaLabelRight="${args.ariaLabelRight}"
            size="${args.size}"
            [compactSpacing]="${args.compactSpacing}"
            appearance="${args.appearance}"
            position="bottom-start"
          >
            ${mockChildren}
          </rte-split-button>
        </div>
      </div>
    `,
  }),
  args: {
    ...Default.args,
  },
};

export const KeyboardInteraction: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByTestId("Menu button");
    const menuContainer = canvas.getByTestId("Menu container");
    await userEvent.tab();
    await userEvent.tab();
    expect(document.activeElement).toBe(button);
    await userEvent.keyboard(DOWN_KEY);
    await waitFor(() => expect(menuContainer).toBeVisible());
  },
  args: {
    ...Default.args,
  },
};
