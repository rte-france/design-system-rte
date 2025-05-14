import {Meta, StoryObj} from "@storybook/angular";
import {userEvent, within, expect} from "@storybook/test";
import {TooltipComponent} from "./tooltip.component";

const meta: Meta<TooltipComponent> = {
  title: "Tooltip",
  component: TooltipComponent,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      defaultValue: "Tooltip Text",
    },
    position: {
      control: "select",
      options: ["auto", "top", "bottom", "left", "right"],
      defaultValue: "top",
    },
    alignment: {
      control: "select",
      options: ["start", "center", "end"],
      defaultValue: "center",
    },
    arrow: {
      control: "boolean",
      defaultValue: true,
    },
  },
  parameters: {
    layout: "centered",
  },
}
export default meta;
type Story = StoryObj<TooltipComponent>;

const mockChildren = (
  `<span
        style="
            text-decoration: underline;
            text-decoration-color: #FF8C00;
            text-decoration-thickness: 2px;
            text-underline-offset: 4px;
            color: #FF8C00;
            cursor: pointer;
            font-weight: bold;
        "
    >
        Hover Me!
    </span>`
);

export const Default: Story = {
  args: {
    label: "Tooltip",
    position: "top",
    alignment: "center",
    arrow: true,
  },
    render: (args) => ({
        props: args,
        template: `
            <rte-tooltip [label]="label" [position]="position" [alignment]="alignment" [arrow]="arrow">
                ${mockChildren}
            </rte-tooltip>
        `,
    }),
};

export const AllPositions: Story = {
    render: (args) => ({
        props: args,
        template: `
            <div style="display: flex; flex-direction: column; align-items: center; gap: 16px;">
                <rte-tooltip label="Top Tooltip" position="top" [alignment]="alignment" [arrow]="arrow">
                    ${mockChildren}
                </rte-tooltip>
                <rte-tooltip label="Bottom Tooltip" position="bottom" [alignment]="alignment" [arrow]="arrow">
                    ${mockChildren}
                </rte-tooltip>
                <rte-tooltip label="Left Tooltip" position="left" [alignment]="alignment" [arrow]="arrow">
                    ${mockChildren}
                </rte-tooltip>
                <rte-tooltip label="Right Tooltip" position="right" [alignment]="alignment" [arrow]="arrow">
                    ${mockChildren}
                </rte-tooltip>
            </div>
        `,
    }),
    args: {
        alignment: "center",
        arrow: true,
    },
};

export const AllAlignments: Story = {
    render: (args) => ({
        props: args,
        template: `
            <div style="display: flex; flex-direction: column; align-items: center; gap: 16px;">
                <rte-tooltip label="Start Tooltip" position="top" [alignment]="'start'" [arrow]="arrow">
                    ${mockChildren}
                </rte-tooltip>
                <rte-tooltip label="Center Tooltip" position="top" [alignment]="'center'" [arrow]="arrow">
                    ${mockChildren}
                </rte-tooltip>
                <rte-tooltip label="End Tooltip" position="top" [alignment]="'end'" [arrow]="arrow">
                    ${mockChildren}
                </rte-tooltip>
            </div>
        `,
    }),
    args: {
        position: "top",
        arrow: true,
    },
};

export const Arrow: Story = {
    render: (args) => ({
        props: args,
        template: `
            <div style="display: flex; flex-direction: column; align-items: center; gap: 16px;">
                <rte-tooltip label="Arrow Tooltip" position="top" [alignment]="alignment" [arrow]="true">
                    ${mockChildren}
                </rte-tooltip>
                <rte-tooltip label="No Arrow Tooltip" position="top" [alignment]="alignment" [arrow]="false">
                    ${mockChildren}
                </rte-tooltip>
            </div>
        `,
    }),
    args: {
        position: "top",
        alignment: "center",
    },
};

export const Placement: Story = {
    render: (args) => ({
        props: args,
        template: `
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                <div style="display: flex; align-items: flex-start; justify-content: flex-start; gap: 8px; border: 1px solid red; width: 75px; height: 250px;">
                    <rte-tooltip [label]="label" [position]="'auto'" [alignment]="alignment" [arrow]="arrow">
                        ${mockChildren}
                    </rte-tooltip>
                </div>
                <div style="display: flex; align-items: center; justify-content: flex-start; gap: 8px; border: 1px solid red; width: 250px; height: 50px;">
                    <rte-tooltip [label]="label" [position]="'auto'" [alignment]="alignment" [arrow]="arrow">
                        ${mockChildren}
                    </rte-tooltip>
                </div>
                <div style="display: flex; align-items: flex-end; justify-content: flex-end; gap: 8px; border: 1px solid red; width: 75px; height: 250px;">
                    <rte-tooltip [label]="label" [position]="'auto'" [alignment]="alignment" [arrow]="arrow">
                        ${mockChildren}
                    </rte-tooltip>
                </div>
                <div style="display: flex; align-items: center; justify-content: flex-end; gap: 8px; border: 1px solid red; width: 250px; height: 50px;">
                    <rte-tooltip [label]="label" [position]="'auto'" [alignment]="alignment" [arrow]="arrow">
                        ${mockChildren}
                    </rte-tooltip>
                </div>
            </div>
        `,
    }),
    args: {
        label: "Tooltip",
        alignment: "center",
        arrow: true,
    },
};