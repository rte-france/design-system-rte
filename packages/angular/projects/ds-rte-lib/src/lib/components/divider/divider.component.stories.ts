import { componentWrapperDecorator, Meta, StoryObj } from "@storybook/angular";

import { DividerComponent } from "./divider.component";

const meta: Meta<DividerComponent> = {
    title: "Divider",
    component: DividerComponent,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    decorators: [
        componentWrapperDecorator(
            (story) => `<div style="height: 100px; width: 500px;">${story}</div>`,
        ),
    ],
    argTypes: {
        orientation: {
            control: "select",
            options: ["horizontal", "vertical"],
            description: "Orientation of the divider",
        },
        thickness: {
            control: "select",
            options: ["light", "medium", "bold"],
            description: "Thickness of the divider",
        },
    },
};

export default meta;
type Story = StoryObj<DividerComponent>;

export const Default: Story = {
    args: {
        orientation: "horizontal",
        thickness: "light",
    },
};

export const VerticalSizes: Story = {
    args: {
        orientation: "vertical",
        thickness: "light",
    },
    render: (args) => ({
        props: args,
        template: `
        <div style="display: flex; justify-content: space-between; gap: 20px; height: 100px; width: 500px;">
            <rte-divider
                orientation="vertical"
                thickness="light"
                data-testid="vertical-light-divider">
            </rte-divider>
            <rte-divider
                orientation="vertical"
                thickness="medium"
                data-testid="vertical-medium-divider">
            </rte-divider>
            <rte-divider
                orientation="vertical"
                thickness="bold"
                data-testid="vertical-bold-divider">
            </rte-divider>
        </div>
        `,
    }),
};

export const HorizontalSizes: Story = {
    args: {
        orientation: "horizontal",
        thickness: "light",
    },
    render: (args) => ({
        props: args,
        template: `
        <div style="display: flex; flex-direction: column; gap: 20px; height: 100px; width: 500px;">
            <rte-divider
                orientation="horizontal"
                thickness="light"
                data-testid="horizontal-light-divider">
            </rte-divider>
            <rte-divider
                orientation="horizontal"
                thickness="medium"
                data-testid="horizontal-medium-divider">
            </rte-divider>
            <rte-divider
                orientation="horizontal"
                thickness="bold"
                data-testid="horizontal-bold-divider">
            </rte-divider>
        </div>
        `,
    }),
};