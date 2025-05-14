import { Meta, StoryObj } from "@storybook/react";
import Tooltip from "./Tooltip";

const meta = {
    title: "Tooltip",
    component: Tooltip,
    tags: ["autodocs"],
    argTypes: {
        position: {
            control: "select",
            options: ["auto", "top", "bottom", "left", "right"],
        },
        alignment: {
            control: "select",
            options: ["start", "center", "end"],
        },
        label: {
            control: "text",
        },
        arrow: {
            control: "boolean",
        },
    },
    args: {
        label: "Tooltip Text",
        position: "top",
        alignment: "center",
        arrow: true,
    },
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Tooltip>;


export default meta;
type Story = StoryObj<typeof meta>;

const mockChildren = (
    <span
        style={{
            textDecoration: "underline",
            textDecorationColor: "#FF8C00",
            textDecorationThickness: "2px",
            textUnderlineOffset: "4px",
            color: "#FF8C00",
            cursor: "pointer",
            fontWeight: "bold",
        }}
    >
        Hover Me!
    </span>
);

export const Default: Story = {
    args: {
        label: "Tooltip",
        children: mockChildren,
    },
};

export const Position: Story = {
    args: {
        label: "Tooltip",
        children: mockChildren,
    },
    render: (args) => {
        return (
            <div style={{ display: "flex", gap: 8 }}>
                <Tooltip {...args} position="top" />
                <Tooltip {...args} position="bottom" />
                <Tooltip {...args} position="left" />
                <Tooltip {...args} position="right" />
            </div>
        );
    },
};

export const Alignment: Story = {
    args: {
        label: "Tooltip",
        children: mockChildren,
    },
    render: (args) => {
        return (
            <div style={{ display: "flex", gap: 8 }}>
                <Tooltip {...args} alignment="start" />
                <Tooltip {...args} alignment="center" />
                <Tooltip {...args} alignment="end" />
            </div>
        );
    },
};

export const Arrow: Story = {
    args: {
        label: "Tooltip",
        children: mockChildren,
    },
    render: (args) => {
        return (
            <div style={{ display: "flex", gap: 8 }}>
                <Tooltip {...args} arrow={true} />
                <Tooltip {...args} arrow={false} />
            </div>
        );
    },
};