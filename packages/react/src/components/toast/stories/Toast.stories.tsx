import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, expect, fn, within, waitFor } from "@storybook/test";
import { useCallback, useRef, useState } from "react";

import Button from "../../button/Button";
import Drawer from "../../drawer/Drawer";
import { RegularIcons as RegularIconsList, TogglableIcons as TogglableIconsList } from "../../icon/IconMap";
import Modal from "../../modal/Modal";
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
      options: ["top-right", "top-left", "top-center", "bottom-right", "bottom-left", "bottom-center"],
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

export const ManualDismissByDefault: Story = {
  tags: ["!autodocs"],
  args: {
    message: "Notification",
    duration: "short",
    showActionButton: false,
  },
  render: Default.render,
  play: async ({ canvasElement }) => {
    await userEvent.click(within(canvasElement).getByRole("button", { name: "Toggle toast" }));
    const body = within(document.body);
    const message = await body.findByText("Notification");
    const closeButton = body.getByRole("button", { name: "Fermer le toast" });
    await new Promise((resolve) => setTimeout(resolve, 3500));
    expect(message).toBeVisible();
    await userEvent.click(closeButton);
    await waitFor(() => expect(message).not.toBeInTheDocument());
    expect(body.getByRole("status")).toBeInTheDocument();
  },
};

export const CloseButtonWithoutAutoDismiss: Story = {
  tags: ["!autodocs"],
  args: {
    message: "Notification",
    autoDismiss: false,
    closable: false,
    showActionButton: false,
  },
  render: Default.render,
  play: async ({ canvasElement }) => {
    await userEvent.click(within(canvasElement).getByRole("button", { name: "Toggle toast" }));
    const body = within(document.body);
    const message = await body.findByText("Notification");
    await userEvent.click(body.getByRole("button", { name: "Fermer le toast" }));
    await waitFor(() => expect(message).not.toBeInTheDocument());
    expect(body.getByRole("status")).toBeInTheDocument();
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
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    message: "Une mise à jour est disponible",
    type: "info",
    autoDismiss: false,
    closable: true,
    onKeyDown: fn(),
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

  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const toggleButton = await canvas.getByRole("button", { name: "Toggle toast" });
    const announcement = within(document.body).getByRole("status");

    expect(announcement).toBeEmptyDOMElement();

    await userEvent.click(toggleButton);

    await waitFor(() => expect(announcement).toHaveTextContent("Information : Une mise à jour est disponible"));
    expect(within(document.body).getAllByRole("status")).toHaveLength(1);

    const body = within(document.body);
    const actionButton = body.getByRole("button", { name: "Mettre à jour" });
    const closeButton = body.getByRole("button", { name: "Fermer le toast" });

    await userEvent.tab();
    expect(actionButton).toHaveFocus();

    await userEvent.tab();
    expect(closeButton).toHaveFocus();

    await userEvent.tab({ shift: true });
    expect(actionButton).toHaveFocus();

    await userEvent.keyboard("{ArrowRight}");
    expect(args.onKeyDown).toHaveBeenCalledWith(expect.objectContaining({ key: "ArrowRight" }));

    await userEvent.keyboard("{Escape}");
    await waitFor(() => expect(closeButton).not.toBeInTheDocument());
    expect(toggleButton).toHaveFocus();
    expect(args.onKeyDown).not.toHaveBeenCalledWith(expect.objectContaining({ key: "Escape" }));
    expect(announcement).toBeInTheDocument();

    await userEvent.click(toggleButton);
    await waitFor(() => expect(announcement).toBeEmptyDOMElement());
    await waitFor(() => expect(announcement).toHaveTextContent("Information : Une mise à jour est disponible"));
  },
};

export const AnnouncementsWithModalOverlays: Story = {
  tags: ["!autodocs"],
  args: {
    ...Default.args,
  },

  render: (args) => {
    const [overlay, setOverlay] = useState<"modal" | "drawer" | null>(null);
    const [isToastOpen, setIsToastOpen] = useState(false);
    const showToastButton = <Button label="Afficher le toast" onClick={() => setIsToastOpen(true)} />;

    return (
      <ToastQueueProvider>
        <Button label="Ouvrir Modal" onClick={() => setOverlay("modal")} />
        <Button label="Ouvrir Drawer" onClick={() => setOverlay("drawer")} />
        <Modal
          id="toast-announcement-modal"
          title="Modal avec toast"
          isOpen={overlay === "modal"}
          onClose={() => setOverlay(null)}
          primaryButton={<Button label="Fermer" onClick={() => setOverlay(null)} />}
        >
          {showToastButton}
        </Modal>
        <Drawer
          id="toast-announcement-drawer"
          title="Drawer avec toast"
          position="modal"
          isOpen={overlay === "drawer"}
          onClose={() => setOverlay(null)}
          onClickToggle={() => setOverlay(null)}
          primaryButtonLabel="Fermer"
          onClickPrimaryButton={() => setOverlay(null)}
          content={showToastButton}
        />
        <Toast {...args} isOpen={isToastOpen} onClose={() => setIsToastOpen(false)} />
      </ToastQueueProvider>
    );
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const announcement = body.getByRole("status");

    expect(announcement).toBeEmptyDOMElement();

    for (const overlay of ["Modal", "Drawer"]) {
      await userEvent.click(canvas.getByRole("button", { name: `Ouvrir ${overlay}` }));
      const dialog = await body.findByRole("dialog", { name: `${overlay} avec toast` });

      await waitFor(() => {
        expect(canvasElement.closest('[aria-hidden="true"]')).not.toBeNull();
        expect(canvasElement.closest("[inert]")).not.toBeNull();
      });

      expect(body.getByRole("status")).toBe(announcement);
      expect(announcement.closest('[aria-hidden="true"], [inert]')).toBeNull();

      await userEvent.click(within(dialog).getByRole("button", { name: "Afficher le toast" }));
      await waitFor(() => expect(announcement).toHaveTextContent("Information : Une mise à jour est disponible"));
      expect(body.getAllByRole("status")).toHaveLength(1);
      expect(announcement.closest('[aria-hidden="true"], [inert]')).toBeNull();

      const closeToastButton = body.getByRole("button", { name: "Fermer le toast" });
      closeToastButton.focus();
      await userEvent.keyboard("{Escape}");
      await waitFor(() => expect(closeToastButton).not.toBeInTheDocument());
      expect(dialog).toBeInTheDocument();

      await userEvent.click(within(dialog).getByRole("button", { name: "Fermer" }));
      await waitFor(() => expect(dialog).not.toBeInTheDocument());
      await waitFor(() => expect(canvasElement.closest('[aria-hidden="true"], [inert]')).toBeNull());
      expect(body.getByRole("status")).toBe(announcement);
    }
  },
};

export const EscapeDoesNotCloseNonClosableToast: Story = {
  ...KeyboardInteraction,
  args: {
    ...KeyboardInteraction.args,
    closable: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: "Toggle toast" }));

    const body = within(document.body);
    const actionButton = await body.findByRole("button", { name: "Mettre à jour" });
    await waitFor(() =>
      expect(body.getByRole("status")).toHaveTextContent("Information : Une mise à jour est disponible"),
    );
    await userEvent.tab();
    expect(actionButton).toHaveFocus();

    await userEvent.keyboard("{Escape}");
    await new Promise((resolve) => setTimeout(resolve, 350));
    expect(actionButton).toBeVisible();
    expect(actionButton).toHaveFocus();
    expect(body.getByText("Une mise à jour est disponible")).toBeVisible();
    const closeButton = body.getByRole("button", { name: "Fermer le toast" });
    expect(closeButton).toBeVisible();

    await userEvent.click(closeButton);
    await waitFor(() => expect(actionButton).not.toBeInTheDocument());
    expect(canvas.getByRole("button", { name: "Toggle toast" })).toHaveFocus();
  },
};

const AUTO_DISMISS_SHORT_MS = 3000;
const queuedToastOnClose = fn();
const consumerToastOnClose = fn(() => document.activeElement);

export const FocusRestorationWhenQueued: Story = {
  tags: ["!autodocs", "toast-focus"],
  args: {
    ...Default.args,
    onClose: queuedToastOnClose,
  },

  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isPriorityOpen, setIsPriorityOpen] = useState(false);
    const closePriorityToast = useCallback(() => setIsPriorityOpen(false), []);

    return (
      <>
        <Button label="Afficher le toast" onClick={() => setIsOpen(true)} />
        <ToastQueueProvider>
          <Toast
            {...args}
            isOpen={isOpen}
            actionButtonLabel="Afficher une erreur"
            onActionButtonClick={() => setIsPriorityOpen(true)}
          />
          <Toast
            message="Erreur prioritaire"
            type="error"
            autoDismiss={false}
            closable
            isOpen={isPriorityOpen}
            onClose={closePriorityToast}
          />
        </ToastQueueProvider>
      </>
    );
  },

  play: async ({ canvasElement }) => {
    const showButton = within(canvasElement).getByRole("button", { name: "Afficher le toast" });
    const body = within(document.body);
    await userEvent.click(showButton);
    const actionButton = await body.findByRole("button", { name: "Afficher une erreur" });
    queuedToastOnClose.mockClear();

    await userEvent.tab();
    expect(actionButton).toHaveFocus();
    await userEvent.keyboard("{Enter}");
    await waitFor(() => expect(actionButton).not.toBeInTheDocument());
    expect(showButton).toHaveFocus();
    expect(queuedToastOnClose).not.toHaveBeenCalled();

    await userEvent.click(body.getByRole("button", { name: "Fermer le toast" }));
    await waitFor(() => expect(body.getByRole("button", { name: "Afficher une erreur" })).toBeVisible());
    expect(queuedToastOnClose).not.toHaveBeenCalled();
  },
};

export const ConsumerControlsFocusOnClose: Story = {
  tags: ["!autodocs", "toast-focus"],
  args: {
    ...Default.args,
    onClose: consumerToastOnClose,
  },

  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    const targetRef = useRef<HTMLInputElement>(null);
    const { onClose } = args;
    const handleClose = useCallback(() => {
      onClose?.();
      setIsOpen(false);
      targetRef.current?.focus();
    }, [onClose]);

    return (
      <>
        <Button label="Afficher le toast" onClick={() => setIsOpen(true)} />
        <input ref={targetRef} aria-label="Cible du callback" />
        <ToastQueueProvider>
          <Toast {...args} isOpen={isOpen} onClose={handleClose} />
        </ToastQueueProvider>
      </>
    );
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const showButton = canvas.getByRole("button", { name: "Afficher le toast" });
    const target = canvas.getByRole("textbox", { name: "Cible du callback" });
    await userEvent.click(showButton);
    const closeButton = await within(document.body).findByRole("button", { name: "Fermer le toast" });
    consumerToastOnClose.mockClear();
    closeButton.focus();
    expect(closeButton).toHaveFocus();

    await userEvent.keyboard("{Enter}");
    expect(consumerToastOnClose).toHaveReturnedWith(showButton);
    expect(target).toHaveFocus();
    await waitFor(() => expect(closeButton).not.toBeInTheDocument());
    expect(target).toHaveFocus();
  },
};

export const FocusRestorationAfterLeavingToast: Story = {
  tags: ["!autodocs", "toast-focus"],
  args: {
    ...Default.args,
    autoDismiss: true,
    duration: "short",
    showActionButton: false,
  },

  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button label="Afficher le toast" onClick={() => setIsOpen(true)} />
        <Button label="Autre élément" />
        <ToastQueueProvider>
          <Toast {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </ToastQueueProvider>
      </>
    );
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const showButton = canvas.getByRole("button", { name: "Afficher le toast" });
    const otherButton = canvas.getByRole("button", { name: "Autre élément" });

    await userEvent.click(showButton);
    let closeButton = await body.findByRole("button", { name: "Fermer le toast" });
    closeButton.focus();
    expect(closeButton).toHaveFocus();

    await userEvent.tab({ shift: true });
    expect(otherButton).toHaveFocus();

    await userEvent.tab();
    expect(closeButton).toHaveFocus();
    await userEvent.click(closeButton);
    await waitFor(() => expect(closeButton).not.toBeInTheDocument());
    expect(otherButton).toHaveFocus();

    await userEvent.click(showButton);
    closeButton = await body.findByRole("button", { name: "Fermer le toast" });
    closeButton.focus();
    expect(closeButton).toHaveFocus();

    await userEvent.tab({ shift: true });
    expect(otherButton).toHaveFocus();
    await userEvent.unhover(closeButton);

    await waitFor(() => expect(closeButton).not.toBeInTheDocument(), { timeout: AUTO_DISMISS_SHORT_MS + 1000 });
    expect(otherButton).toHaveFocus();
  },
};

export const AutoDismissPausesOnKeyboardFocus: Story = {
  tags: ["!autodocs"],
  args: {
    message: "Une mise à jour est disponible",
    type: "info",
    autoDismiss: true,
    duration: "short",
    closable: true,
    showActionButton: false,
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
          />
        </ToastQueueProvider>
      </>
    );
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const toggleButton = await canvas.getByRole("button", { name: "Toggle toast" });

    await userEvent.click(toggleButton);

    const closeButton = within(document.body).getByRole("button", { name: "Fermer le toast" });

    await userEvent.tab();
    expect(closeButton).toHaveFocus();

    const announcement = within(document.body).getByRole("status");
    expect(announcement).toBeEmptyDOMElement();
    await waitFor(() => expect(announcement).toHaveTextContent("Information : Une mise à jour est disponible"));

    await new Promise((resolve) => setTimeout(resolve, AUTO_DISMISS_SHORT_MS + 500));

    expect(closeButton).toBeInTheDocument();
    expect(closeButton).toHaveFocus();

    await userEvent.tab({ shift: true });
    expect(toggleButton).toHaveFocus();
    await waitFor(() => expect(closeButton).not.toBeInTheDocument(), { timeout: AUTO_DISMISS_SHORT_MS + 1000 });
  },
};

export const AutoDismissPausesOnHover: Story = {
  ...AutoDismissPausesOnKeyboardFocus,

  play: async ({ canvasElement }) => {
    const toggleButton = within(canvasElement).getByRole("button", { name: "Toggle toast" });
    await userEvent.click(toggleButton);

    const body = within(document.body);
    const closeButton = body.getByRole("button", { name: "Fermer le toast" });
    await userEvent.hover(closeButton);

    const announcement = body.getByRole("status");
    expect(announcement).toBeEmptyDOMElement();
    await waitFor(() => expect(announcement).toHaveTextContent("Information : Une mise à jour est disponible"));

    await new Promise((resolve) => setTimeout(resolve, AUTO_DISMISS_SHORT_MS + 500));
    expect(closeButton).toBeInTheDocument();

    await userEvent.unhover(closeButton);
    await waitFor(() => expect(closeButton).not.toBeInTheDocument(), { timeout: AUTO_DISMISS_SHORT_MS + 1000 });
  },
};
