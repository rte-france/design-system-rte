import type { Meta, StoryObj } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";
import { userEvent, within, expect, waitFor } from "@storybook/test";

import { ButtonComponent } from "../../button/button.component";
import { ToastComponent } from "../toast.component";
import { ToastService } from "../toast.service";

import { ToastDefaultComponent } from "./toast-default.component";
import { ToastDemoWrapperComponent } from "./toast-demo-wrapper.component";

const meta: Meta<ToastComponent> = {
  title: "Composants/Toast",
  component: ToastComponent,
  tags: ["autodocs", "toast"],
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
    actionButtonLabel: { control: "text" },
    showActionButton: { control: "boolean" },
    onActionButtonClick: { action: "action button clicked" },
  },
  decorators: [
    moduleMetadata({
      imports: [ToastDemoWrapperComponent, ButtonComponent, ToastDefaultComponent],
      providers: [ToastService],
    }),
  ],
};

export default meta;
type Story = StoryObj<ToastComponent>;

export const Default: Story = {
  args: {
    message: "Une mise à jour est disponible",
    type: "info",
    autoDismiss: false,
    closable: true,
    isOpen: false,
    placement: "bottom-right",
    actionButtonLabel: "Mettre à jour",
    showActionButton: true,
  },

  render: (args) => ({
    props: {
      ...args,
      toggleToast: (toastId: string) => {
        console.log(`${toastId} clicked`);
      },
    },
    template: `
    <toast-default
      [message]="message"
      [type]="type"
      [autoDismiss]="autoDismiss"
      [closable]="closable"
      [isOpen]="isOpen"
      [placement]="placement"
      [actionButtonLabel]="actionButtonLabel"
      [showActionButton]="showActionButton"
    />`,
  }),
};
export const Multiple: Story = {
  args: {
    message: "Une mise à jour est disponible",
    type: "info",
    autoDismiss: false,
    closable: true,
    isOpen: false,
    placement: "bottom-right",
  },

  render: (args) => ({
    props: args,
    template: `
    <toast-demo-wrapper/>`,
  }),

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);

    const liveRegion = await body.findByRole("status");
    expect(liveRegion).toBeEmptyDOMElement();

    await userEvent.click(canvas.getByRole("button", { name: "Toggle Error Toast" }));
    const announcement = await body.findByText("Erreur : Erreur lors de la sauvegarde des modifications");
    expect(announcement).toBe(liveRegion);
    expect(body.getByRole("status")).toBe(announcement);
    const closeButton = body.getByRole("button", { name: "Fermer le toast" });

    await userEvent.click(canvas.getByRole("button", { name: "Toggle Info Toast" }));
    expect(announcement).toHaveTextContent("Erreur : Erreur lors de la sauvegarde des modifications");

    await userEvent.click(closeButton);
    await waitFor(() => expect(announcement).toHaveTextContent("Information : Une mise à jour est disponible"));
    expect(body.getByRole("status")).toBe(liveRegion);
  },
};
export const KeyboardInteraction: Story = {
  tags: ["!autodocs"],
  args: {
    message: "Une mise à jour est disponible",
    type: "info",
    autoDismiss: false,
    closable: true,
    isOpen: false,
    placement: "bottom-right",
    actionButtonLabel: "Mettre à jour",
  },

  render: (args) => ({
    props: {
      ...args,
      toggleToast: (toastId: string) => {
        console.log(`${toastId} clicked`);
      },
    },
    template: `
    <toast-default
      [message]="message"
      [type]="type"
      [autoDismiss]="autoDismiss"
      [closable]="closable"
      [isOpen]="isOpen"
      [placement]="placement"
      [actionButtonLabel]="actionButtonLabel"
      [showActionButton]="showActionButton"
    />`,
  }),

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const toggleButton = await canvas.getByRole("button", { name: "Toggle toast" });

    const body = within(document.body);
    const liveRegion = await body.findByRole("status");
    expect(liveRegion).toBeEmptyDOMElement();

    await userEvent.click(toggleButton);

    const announcement = await body.findByText("Information : Une mise à jour est disponible");
    expect(announcement).toBe(liveRegion);
    expect(body.getAllByRole("status")).toHaveLength(1);
    expect(announcement).toHaveAttribute("role", "status");
    expect(announcement).toHaveAttribute("aria-live", "polite");
    expect(announcement).toHaveAttribute("aria-atomic", "true");
    expect(announcement.closest("#overlay-root")).not.toBeNull();
    expect(announcement.closest('[inert], [aria-hidden="true"]')).toBeNull();
    expect(getComputedStyle(announcement).clipPath).toBe("inset(50%)");
    expect(document.querySelector(".cdk-live-announcer-element")).toBeNull();

    const actionButton = body.getByRole("button", { name: "Mettre à jour" });
    const closeButton = body.getByRole("button", { name: "Fermer le toast" });

    await userEvent.tab();
    expect(actionButton).toHaveFocus();

    await userEvent.tab();
    expect(closeButton).toHaveFocus();

    await userEvent.tab({ shift: true });
    expect(actionButton).toHaveFocus();

    await userEvent.click(closeButton);
    await waitFor(() => expect(closeButton).not.toBeInTheDocument());
    expect(toggleButton).toHaveFocus();
    expect(announcement).toBeInTheDocument();

    await userEvent.click(toggleButton);
    await waitFor(() => expect(announcement).toBeEmptyDOMElement());
    await waitFor(() => expect(announcement).toHaveTextContent("Information : Une mise à jour est disponible"));
    expect(body.getByRole("status")).toBe(announcement);
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

    const toast = await within(document.body).findByRole("status");
    await userEvent.tab();
    expect(within(toast).getByRole("button", { name: "Mettre à jour" })).toHaveFocus();

    await userEvent.keyboard("{Escape}");
    expect(toast).toBeInTheDocument();
    expect(within(toast).queryByRole("button", { name: "Fermer le toast" })).not.toBeInTheDocument();
  },
};

const AUTO_DISMISS_SHORT_MS = 3000;

export const FocusRestorationAfterLeavingToast: Story = {
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    autoDismiss: true,
    duration: "short",
    showActionButton: false,
  },

  render: (args) => ({
    props: args,
    template: `
    <toast-default
      [message]="message"
      [type]="type"
      [autoDismiss]="autoDismiss"
      [duration]="duration"
      [closable]="closable"
      [showActionButton]="showActionButton"
    />
    <button rteButton>Autre élément</button>`,
  }),

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const showButton = canvas.getByRole("button", { name: "Toggle toast" });
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
  tags: ["!autodocs", "skip-ci"],
  args: {
    message: "Une mise à jour est disponible",
    type: "info",
    autoDismiss: true,
    duration: "short",
    closable: true,
    isOpen: false,
    placement: "bottom-right",
    showActionButton: false,
  },

  render: (args) => ({
    props: args,
    template: `
    <toast-default
      [message]="message"
      [type]="type"
      [autoDismiss]="autoDismiss"
      [duration]="duration"
      [closable]="closable"
      [isOpen]="isOpen"
      [placement]="placement"
      [showActionButton]="showActionButton"
    />`,
  }),

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const toggleButton = await canvas.getByRole("button", { name: "Toggle toast" });

    await userEvent.click(toggleButton);

    const closeButton = within(document.body).getByRole("button", { name: "Fermer le toast" });

    await userEvent.tab();
    expect(closeButton).toHaveFocus();

    await new Promise((resolve) => setTimeout(resolve, AUTO_DISMISS_SHORT_MS + 500));

    expect(closeButton).toBeInTheDocument();
  },
};
