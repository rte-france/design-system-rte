import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Popover from "./Popover";

const meta: Meta<typeof Popover> = {
    title: "Popover",
    component: Popover,
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
        arrow: { control: "boolean" },
        showTitle: { control: "boolean" },
        button2: { control: "boolean" },
        title: { control: "text" },
        content: { control: "text" },
        buttonLabel: { control: "text" },
        button2Label: { control: "text" },
        children: { control: "text" },
    },
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
    args: {
        position: "auto",
        alignment: "start",
        arrow: true,
        showTitle: true,
        button2: false,
        title: "Popover Title",
        content: "This is the popover content.",
        buttonLabel: "Close",
        button2Label: "Cancel",
        children: <button>Open Popover</button>,
    },
};

export const WithTwoButtons: Story = {
    args: {
        position: "bottom",
        alignment: "center",
        arrow: true,
        showTitle: true,
        button2: true,
        title: "Confirm Action",
        content: "Are you sure you want to proceed?",
        buttonLabel: "Confirm",
        button2Label: "Cancel",
        children: <button>Open Confirmation</button>,
    },
};