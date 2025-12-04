import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, expect, within, waitFor } from "@storybook/test";
import { useState } from "react";

import Button from "../../button/Button";
import { RegularIcons as RegularIconsList, TogglableIcons as TogglableIconsList } from "../../icon/IconMap";
import Toast from "../Toast";
import ToastQueueProvider from "../toastQueue/ToastQueueProvider";

const RegularIconIds = Object.keys(RegularIconsList);
const TogglableIconIds = Object.keys(TogglableIconsList);

const meta = {
  title: "Composants/Toast",
  tags: ["autodocs"],
  component: Toast,
  argTypes: {
    message: { control: "text" },
    type: { control: "select", options: ["info", "success", "warning", "error", "neutral"] },
    placement: {
      control: "select",
      options: ["top-right", "top-left", "bottom-right", "bottom-left", "bottom-center"],
    },
    closable: { control: "boolean" },
    isOpen: { control: "boolean" },
    autoDismiss: { control: "boolean" },
    duration: { control: "select", options: ["short", "medium", "long"] },
    iconName: {
      control: "select",
      options: [...RegularIconIds, ...TogglableIconIds].sort((a, b) => a.localeCompare(b)),
      description: "Nom de l’icône à afficher sur le badge",
    },
    showLeftIcon: { control: "boolean" },
    showActionButton: { control: "boolean" },
    actionButtonLabel: { control: "text" },
    onActionButtonClick: { control: false },
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: "Une mise à jour est disponible",
    type: "info",
    autoDismiss: false,
    closable: true,
  },

  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button label="Toggle toast" onClick={() => setIsOpen(!isOpen)} style={{ marginBottom: "16px" }} />
        <ToastQueueProvider>
          <Toast
            {...args}
            isOpen={isOpen}
            onClose={() => {
              setIsOpen(false);
            }}
            actionButtonLabel="Mettre à jour"
          />
        </ToastQueueProvider>
      </>
    );
  },
};

export const Multiple: Story = {
  args: {
    ...Default.args,
    message: "Une mise à jour est disponible",
    type: "info",
    autoDismiss: true,
    duration: "short",
    closable: true,
    placement: "bottom-center",
  },

  render: (args) => {
    const [isErrorOpen, setIsErrorOpen] = useState(false);
    const [isSuccessOpen, setIsSuccessOpen] = useState(false);
    const [isInfoOpen, setIsInfoOpen] = useState(false);
    const [isWarningOpen, setIsWarningOpen] = useState(false);
    const [isNeutralOpen, setIsNeutralOpen] = useState(false);

    return (
      <>
        <div style={{ display: "flex", gap: "12px" }}>
          <Button label="Toggle error toast" onClick={() => setIsErrorOpen(!isErrorOpen)} variant="danger" />
          <Button label="Toggle warning toast" onClick={() => setIsWarningOpen(!isWarningOpen)} variant="secondary" />
          <Button label="Toggle success toast" onClick={() => setIsSuccessOpen(!isSuccessOpen)} variant="primary" />
          <Button label="Toggle info toast" onClick={() => setIsInfoOpen(!isInfoOpen)} variant="secondary" />
          <Button label="Toggle neutral toast" onClick={() => setIsNeutralOpen(!isNeutralOpen)} variant="neutral" />
        </div>
        <ToastQueueProvider>
          <Toast
            {...args}
            type={"error"}
            isOpen={isErrorOpen}
            message="Error toast"
            actionButtonLabel="Mettre à jour"
            onClose={() => {
              setIsErrorOpen(false);
            }}
          />
          <Toast
            {...args}
            type={"warning"}
            message="Warning toast"
            isOpen={isWarningOpen}
            actionButtonLabel="Mettre à jour"
            onClose={() => {
              setIsWarningOpen(false);
            }}
          />
          <Toast
            {...args}
            type={"success"}
            message="Success toast"
            isOpen={isSuccessOpen}
            actionButtonLabel="Mettre à jour"
            onClose={() => {
              setIsSuccessOpen(false);
            }}
          />
          <Toast
            {...args}
            type={"info"}
            message="Info toast"
            isOpen={isInfoOpen}
            actionButtonLabel="Mettre à jour"
            onClose={() => {
              setIsInfoOpen(false);
            }}
          />
          <Toast
            {...args}
            type={"neutral"}
            message="Neutral toast"
            isOpen={isNeutralOpen}
            actionButtonLabel="Mettre à jour"
            onClose={() => {
              setIsNeutralOpen(false);
            }}
            iconName="settings"
          />
        </ToastQueueProvider>
      </>
    );
  },
};

export const KeyboardInteraction: Story = {
  args: {
    ...Default.args,
    message: "Une mise à jour est disponible",
    type: "info",
    autoDismiss: false,
    closable: true,
  },

  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button label="Toggle toast" onClick={() => setIsOpen(!isOpen)} style={{ marginBottom: "16px" }} />
        <ToastQueueProvider>
          <Toast
            {...args}
            isOpen={isOpen}
            onClose={() => {
              setIsOpen(false);
            }}
            actionButtonLabel="Mettre à jour"
          />
        </ToastQueueProvider>
      </>
    );
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const toggleButton = await canvas.getByRole("button", { name: "Toggle toast" });

    await userEvent.click(toggleButton);

    const toast = within(document.body).getByRole("status");
    const actionButton = await within(toast).getByRole("button", { name: "Mettre à jour" });
    const closeButton = await within(toast).getByTestId("toast-close-button");

    await userEvent.tab();
    expect(actionButton).toHaveFocus();

    await userEvent.tab();
    expect(closeButton).toHaveFocus();

    await userEvent.tab({ shift: true });
    expect(actionButton).toHaveFocus();

    await userEvent.click(closeButton);
    await waitFor(() => expect(toast).not.toBeInTheDocument());
  },
};
