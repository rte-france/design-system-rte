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

function generateSplitButtonElement(props: Record<string, string> = {}): string {
  const defaultProps = {
    appearance: "appearance",
    label: "label",
    position: "position",
    disabled: "disabled",
    ariaLabelRight: "ariaLabelRight",
    ...props,
  };

  const attributes = Object.entries(defaultProps)
    .map(([key, value]) => `[${key}]="${value}"`)
    .join("\n");

  return `
    <rte-split-button
      ${attributes}
    >
      ${mockChildren}
    </rte-split-button>`;
}

const meta: Meta<SplitButtonComponent> = {
  title: "SplitButton",
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
    appearance: "primary",
    label: "Button Label",
    compactSpacing: false,
    position: "bottom-start",
    disabled: false,
    ariaLabelRight: "Open menu",
  },
  render: (args) => ({
    props: args,
    template: `
      ${generateSplitButtonElement()}
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
        ${generateSplitButtonElement({ appearance: "'primary'" })}
        ${generateSplitButtonElement({ appearance: "'secondary'" })}
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
        ${generateSplitButtonElement({ size: "'s'" })}
        ${generateSplitButtonElement({ size: "'m'" })}
        ${generateSplitButtonElement({ size: "'l'" })}
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
        ${generateSplitButtonElement({
          size: "'s'",
          compactSpacing: "true",
          icon: "icon",
        })}
        ${generateSplitButtonElement({
          size: "'m'",
          compactSpacing: "true",
          icon: "icon",
        })}
        ${generateSplitButtonElement({
          size: "'l'",
          compactSpacing: "true",
          icon: "icon",
        })}
      </div>
    `,
  }),
  args: {
    ...Default.args,
  },
};

export const Position: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; justify-content: center; align-items: center; min-height: 600px">
        <div style="display: grid; grid-template-columns: 2fr 2fr; gap: 24px">
          ${generateSplitButtonElement({
            position: "'top-end'",
            compactSpacing: "compactSpacing",
            selected: "selected",
            icon: "icon",
          })}
          ${generateSplitButtonElement({
            position: "'top-start'",
            compactSpacing: "compactSpacing",
            selected: "selected",
            icon: "icon",
          })}
          ${generateSplitButtonElement({
            position: "'bottom-end'",
            compactSpacing: "compactSpacing",
            selected: "selected",
            icon: "icon",
          })}
          ${generateSplitButtonElement({
            position: "'bottom-start'",
            compactSpacing: "compactSpacing",
            selected: "selected",
            icon: "icon",
          })}
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
