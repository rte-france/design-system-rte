import { Meta, StoryObj } from "@storybook/angular";
import { within, userEvent, expect, waitFor } from "@storybook/test";

import { TooltipDirective } from "./tooltip.directive";

const meta: Meta<TooltipDirective> = {
  title: "Composants/Tooltip",
  component: TooltipDirective,
  tags: ["autodocs"],
  argTypes: {
    rteTooltip: {
      control: "text",
      defaultValue: "Tooltip Text",
    },
    rteTooltipPosition: {
      control: "select",
      options: ["auto", "top", "bottom", "left", "right"],
      defaultValue: "top",
    },
    rteTooltipAlignment: {
      control: "select",
      options: ["start", "center", "end"],
      defaultValue: "center",
    },
    rteTooltipArrow: {
      control: "boolean",
      defaultValue: true,
    },
  },
  parameters: {
    layout: "centered",
  },
};
export default meta;
type Story = StoryObj<TooltipDirective>;

const mockHost = (tooltipDirectives: string) => `
<div style="
    text-decoration: underline;
    text-decoration-color: #BF4C00;
    text-decoration-thickness: 2px;
    text-underline-offset: 4px;
    color: #BF4C00;
    font-weight: bold;
"
    ${tooltipDirectives}
>
    Hover Me!
</div>
`;

export const Default: Story = {
  args: {
    rteTooltip: "Tooltip",
    rteTooltipPosition: "top",
    rteTooltipAlignment: "center",
    rteTooltipArrow: true,
  },
  render: (args) => ({
    props: args,
    declarations: [TooltipDirective],
    template: mockHost(`
            [rteTooltip]="rteTooltip"
            [rteTooltipPosition]="rteTooltipPosition"
            [rteTooltipAlignment]="rteTooltipAlignment"
            [rteTooltipArrow]="rteTooltipArrow"
        `),
  }),
};

export const Position: Story = {
  args: Default.args,
  render: (args) => ({
    props: args,
    declarations: [TooltipDirective],
    template: `
        <div style="display: flex; flex-direction: column; align-items: center; gap: 16px;">
            ${mockHost(`
                rteTooltipPosition="top"
                [rteTooltip]="rteTooltip"
                [rteTooltipAlignment]="rteTooltipAlignment"
                [rteTooltipArrow]="rteTooltipArrow"
            `)}
            ${mockHost(`
                rteTooltipPosition="bottom"
                [rteTooltip]="rteTooltip"
                [rteTooltipAlignment]="rteTooltipAlignment"
                [rteTooltipArrow]="rteTooltipArrow"
            `)}
            ${mockHost(`
                rteTooltipPosition="left"
                [rteTooltip]="rteTooltip"
                [rteTooltipAlignment]="rteTooltipAlignment"
                [rteTooltipArrow]="rteTooltipArrow"
            `)}
            ${mockHost(`
                rteTooltipPosition="right"
                [rteTooltip]="rteTooltip"
                [rteTooltipAlignment]="rteTooltipAlignment"
                [rteTooltipArrow]="rteTooltipArrow"
            `)}
        </div>
        `,
  }),
};

export const Alignment: Story = {
  args: Default.args,
  render: (args) => ({
    props: args,
    declarations: [TooltipDirective],
    template: `
        <div style="display: flex; flex-direction: column; align-items: center; gap: 16px;">
            ${mockHost(`
                rteTooltipAlignment="start"
                [rteTooltipPosition]="rteTooltipPosition"
                [rteTooltip]="rteTooltip"
                [rteTooltipArrow]="rteTooltipArrow"
            `)}
            ${mockHost(`
                rteTooltipAlignment="center"
                [rteTooltipPosition]="rteTooltipPosition"
                [rteTooltip]="rteTooltip"
                [rteTooltipArrow]="rteTooltipArrow"
            `)}
            ${mockHost(`
                rteTooltipAlignment="end"
                [rteTooltipPosition]="rteTooltipPosition"
                [rteTooltip]="rteTooltip"
                [rteTooltipArrow]="rteTooltipArrow"
            `)}
        </div>
        `,
  }),
};

export const Arrow: Story = {
  args: Default.args,
  render: (args) => ({
    props: args,
    declarations: [TooltipDirective],
    template: `
        <div style="display: flex; gap: 8;">
            ${mockHost(`
                [rteTooltipArrow]="true"
                [rteTooltipPosition]="rteTooltipPosition"
                [rteTooltip]="rteTooltip"
            `)}
            ${mockHost(`
                [rteTooltipArrow]="false"
                [rteTooltipPosition]="rteTooltipPosition"
                [rteTooltip]="rteTooltip"
            `)}
        </div>
        `,
  }),
};

export const AutoPlacement: Story = {
  args: Default.args,
  render: (args) => ({
    props: args,
    declarations: [TooltipDirective],
    template: `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
            <div style="display: flex; align-items: flex-start; justify-content: flex-start; gap: 8px; border: 1px solid red; width: 75px; height: 250px;">
                ${mockHost(`
                    rteTooltipPosition="auto"
                    [rteTooltip]="rteTooltip"
                `)}
            </div>

            <div style="display: flex; align-items: center; justify-content: flex-start; gap: 8px; border: 1px solid red; width: 250px; height: 50px;">
                ${mockHost(`
                    rteTooltipPosition="auto"
                    [rteTooltip]="rteTooltip"
                `)}
            </div>

            <div style="display: flex; align-items: flex-end; justify-content: flex-end; gap: 8px; border: 1px solid red; width: 75px; height: 250px;">
                ${mockHost(`
                    rteTooltipPosition="auto"
                    [rteTooltip]="rteTooltip"
                `)}
            </div>

            <div style="display: flex; align-items: center; justify-content: flex-end; gap: 8px; border: 1px solid red; width: 250px; height: 50px;">
                ${mockHost(`
                    rteTooltipPosition="auto"
                    [rteTooltip]="rteTooltip"
                `)}
            </div>
        </div>
        `,
  }),
};

export const KeyboardInteraction: Story = {
  args: Default.args,
  render: (args) => ({
    props: args,
    declarations: [TooltipDirective],
    template: `
        <div style="display: flex; gap: 8px;">
            ${mockHost(`[rteTooltip]="rteTooltip"`)}
        </div>
        `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tooltipTrigger = canvas.queryByText("Hover Me!");
    await userEvent.tab();
    const tooltip = within(document.body).getByRole("tooltip");
    expect(tooltipTrigger).toHaveFocus();
    await waitFor(() => expect(tooltip).toBeVisible());
  },
};
