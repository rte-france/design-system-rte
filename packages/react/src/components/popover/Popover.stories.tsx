import { Meta, StoryObj } from "@storybook/react";

import Popover from "./Popover";

const meta = {
  title: "Popover",
  component: Popover,
  decorators: [
    (Story) => (
      <div
        style={{
          height: "400px",
          width: "80%",
          padding: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: "select",
      options: ["auto", "top", "bottom", "left", "right"],
      description: "Position of the popover relative to trigger",
      defaultValue: "auto",
    },
    alignment: {
      control: "select",
      options: ["start", "center", "end"],
      description: "Alignment of the popover",
      defaultValue: "start",
    },
    arrow: {
      control: "boolean",
      description: "Whether to show the arrow",
      defaultValue: true,
    },
    showTitle: {
      control: "boolean",
      description: "Whether to show the title",
      defaultValue: false,
    },
    button2: {
      control: "boolean",
      description: "Whether to show the second button",
      defaultValue: false,
    },
    title: {
      control: "text",
      description: "Title of the popover",
      defaultValue: "Popover Title",
    },
    content: {
      control: "text",
      description: "Content of the popover",
      defaultValue: "Popover content",
    },
    buttonLabel: {
      control: "text",
      description: "Label for the primary button",
      defaultValue: "Close",
    },
    button2Label: {
      control: "text",
      description: "Label for the secondary button",
      defaultValue: "Cancel",
    },
    children: {
      table: {
        disable: true,
      },
    },
    triggerStyles: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    position: "auto",
    alignment: "start",
    arrow: true,
    showTitle: true,
    button2: false,
    title: "Popover Title",
    content:
      "Le Popover est un composant de type superposition (overlay), qui apparaît au clic, au focus ou au survol d'un élément déclencheur (trigger). Il est utilisé pour afficher un contenu contextuel enrichi : aide, options, actions complémentaires…",
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
    content: "Are you sure you want to proceed with this action? This cannot be undone.",
    buttonLabel: "Confirm",
    button2Label: "Cancel",
    children: <button>Open Confirmation</button>,
  },
};

export const WithoutTitle: Story = {
  args: {
    position: "top",
    alignment: "center",
    arrow: true,
    showTitle: false,
    button2: false,
    content: "This popover has no title, just content and a close button.",
    buttonLabel: "Got it",
    children: <button>Show Info</button>,
  },
};

export const WithoutArrow: Story = {
  args: {
    position: "right",
    alignment: "start",
    arrow: false,
    showTitle: true,
    button2: false,
    title: "No Arrow",
    content: "This popover is displayed without an arrow pointer.",
    buttonLabel: "Close",
    children: <button>Open Without Arrow</button>,
  },
};
