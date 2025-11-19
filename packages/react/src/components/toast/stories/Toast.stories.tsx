import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, expect, within, waitFor } from "@storybook/test";
import { useState } from "react";

import Button from "../../button/Button";
import Toast from "../Toast";
import ToastQueueProvider from "../toastQueue/ToastQueueProvider";

const meta = {
  title: "Toast",
  tags: ["autodocs"],
  component: Toast,
  argTypes: {
    message: { control: "text" },
    actionButton: { control: false },
    type: { control: "select", options: ["info", "success", "warning", "error", "neutral"] },
    placement: {
      control: "select",
      options: ["top-right", "top-left", "bottom-right", "bottom-left", "bottom-center"],
    },
    closable: { control: "boolean" },
    isOpen: { control: "boolean" },
    autoDismiss: { control: "boolean" },
    duration: { control: "select", options: ["short", "medium", "long"] },
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
            actionButton={<Button label="Mettre à jour" variant={args.type === "neutral" ? "reverse" : "text"} />}
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
    placement: "top-left",
  },

  render: (args) => {
    const [isErrorOpen, setIsErrorOpen] = useState(false);
    const [isSuccessOpen, setIsSuccessOpen] = useState(false);
    const [isInfoOpen, setIsInfoOpen] = useState(false);
    const [isSuccessBis, setIsSuccessBis] = useState(false);

    return (
      <>
        <Button
          label="Toggle error toast"
          onClick={() => setIsErrorOpen(!isErrorOpen)}
          style={{ marginBottom: "16px" }}
          variant="danger"
        />
        <Button
          label="Toggle success toast"
          onClick={() => setIsSuccessOpen(!isSuccessOpen)}
          style={{ marginBottom: "16px" }}
          variant="primary"
        />
        <Button
          label="Toggle info toast"
          onClick={() => setIsInfoOpen(!isInfoOpen)}
          style={{ marginBottom: "16px" }}
          variant="secondary"
        />
        <Button
          label="Toggle success bis toast"
          onClick={() => setIsSuccessBis(!isSuccessBis)}
          style={{ marginBottom: "16px" }}
          variant="secondary"
        />
        <ToastQueueProvider>
          <Toast
            {...args}
            id="my-toast-error-z"
            type={"error"}
            isOpen={isErrorOpen}
            message="Error toast"
            actionButton={<Button label="Mettre à jour" variant={args.type === "neutral" ? "reverse" : "text"} />}
            onClose={() => {
              setIsErrorOpen(false);
            }}
          />
          <Toast
            {...args}
            type={"success"}
            isOpen={isSuccessOpen}
            actionButton={<Button label="Mettre à jour" variant={args.type === "neutral" ? "reverse" : "text"} />}
            onClose={() => {
              setIsSuccessOpen(false);
            }}
          />
          <Toast
            {...args}
            message="Info toast"
            isOpen={isInfoOpen}
            actionButton={<Button label="Mettre à jour" variant={args.type === "neutral" ? "reverse" : "text"} />}
            onClose={() => {
              setIsInfoOpen(false);
            }}
          />
          <Toast
            {...args}
            type={"success"}
            message="Success bis toast"
            isOpen={isSuccessBis}
            actionButton={<Button label="Mettre à jour" variant={args.type === "neutral" ? "reverse" : "text"} />}
            onClose={() => {
              setIsSuccessBis(false);
            }}
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
            actionButton={<Button label="Mettre à jour" variant={args.type === "neutral" ? "reverse" : "text"} />}
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
