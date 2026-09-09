import {
  TESTING_ENTER_KEY,
  TESTING_ESCAPE_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard-test.constants";
import { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, waitFor, within } from "@storybook/test";
import { useState } from "react";

import { focusElementBeforeComponent } from "../../../.storybook/testing/testing.utils";

import Popover from "./Popover";

const meta = {
  title: "Composants/Popover",
  component: Popover,
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
    primaryButtonLabel: {
      control: "text",
      description: "Label for the primary button",
      defaultValue: "Close",
    },
    secondaryButtonLabel: {
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
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    position: "auto",
    arrow: true,
    title: "Popover Title",
    content: "Informations complémentaires.",
    primaryButtonLabel: "Fermer",
    children: <button>Afficher les informations</button>,
  },
};

export const WithTwoButtons: Story = {
  args: {
    position: "bottom",
    alignment: "start",
    arrow: true,
    title: "Confirm Action",
    content: "Are you sure you want to proceed with this action? This cannot be undone.",
    primaryButtonLabel: "Confirm",
    secondaryButtonLabel: "Cancel",
    children: <button>Open Confirmation</button>,
  },
};

export const Positions: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "16px" }}>
      <Popover {...args} position="top">
        <button>Top</button>
      </Popover>
      <Popover {...args} position="bottom">
        <button>Bottom</button>
      </Popover>
      <Popover {...args} position="right">
        <button>Right</button>
      </Popover>
      <Popover {...args} position="left">
        <button>Left</button>
      </Popover>
    </div>
  ),
  args: {
    arrow: true,
    alignment: "center",
    title: "Popover position",
    content: "This popover demonstrates a position.",
    primaryButtonLabel: "Close",
    children: <button>Position</button>,
  },
};

export const Alignments: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "16px" }}>
      <Popover {...args} alignment="start">
        <button>Start</button>
      </Popover>
      <Popover {...args} alignment="center">
        <button>Center</button>
      </Popover>
      <Popover {...args} alignment="end">
        <button>End</button>
      </Popover>
    </div>
  ),
  args: {
    position: "bottom",
    arrow: true,
    title: "Popover alignment",
    content: "This popover demonstrates an alignment.",
    primaryButtonLabel: "Close",
    children: <button>Alignment</button>,
  },
};

export const Actions: Story = {
  render: (args) => {
    const [message, setMessage] = useState("Aucune action sélectionnée.");

    return (
      <div>
        <Popover
          {...args}
          onClickPrimaryButton={() => setMessage("Action confirmée.")}
          onClickSecondaryButton={() => setMessage("Action annulée.")}
        />
        <p>{message}</p>
      </div>
    );
  },
  args: {
    position: "bottom",
    alignment: "start",
    arrow: true,
    title: "Confirm Action",
    content: "Are you sure you want to proceed with this action? This cannot be undone.",
    primaryButtonLabel: "Confirm",
    secondaryButtonLabel: "Cancel",
    children: <button>Open Confirmation</button>,
  },
};

export const WithoutTitle: Story = {
  args: {
    position: "top",
    alignment: "center",
    arrow: true,
    "aria-label": "Informations complémentaires",
    content: "This popover has no title, just content and a close button.",
    primaryButtonLabel: "Got it",
    children: <button>Show Info</button>,
  },
};

export const WithoutArrow: Story = {
  args: {
    position: "right",
    alignment: "start",
    arrow: false,
    title: "No Arrow",
    content: "This popover is displayed without an arrow pointer.",
    primaryButtonLabel: "Close",
    children: <button>Open Without Arrow</button>,
  },
};

export const KeyboardInteraction: Story = {
  tags: ["!autodocs"],
  args: {
    position: "auto",
    arrow: true,
    title: "Popover Title",
    content:
      "Le Popover est un composant de type superposition (overlay), qui apparaît au clic, au focus ou au survol d'un élément déclencheur (trigger). Il est utilisé pour afficher un contenu contextuel enrichi : aide, options, actions complémentaires…",
    primaryButtonLabel: "Close",
    secondaryButtonLabel: "Cancel",
    children: <button>Open Popover</button>,
  },
  play: async () => {
    focusElementBeforeComponent();
    await userEvent.tab();
    await userEvent.keyboard(TESTING_ENTER_KEY);
    const popover = within(document.body).getByRole("dialog");
    await waitFor(() => expect(popover).toBeVisible());

    await userEvent.tab();
    const closeButton = within(popover).getByRole("button", { name: /close/i });
    expect(closeButton).toHaveFocus();

    await userEvent.tab();
    const cancelButton = within(popover).getByRole("button", { name: /cancel/i });
    expect(cancelButton).toHaveFocus();

    await userEvent.tab();
    expect(closeButton).toHaveFocus();

    await userEvent.keyboard(TESTING_ESCAPE_KEY);
    await waitFor(() => expect(popover).not.toBeVisible());
  },
};
