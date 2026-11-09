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
  tags: ["autodocs"],
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

    await userEvent.click(toggleButton);

    const toast = within(document.body).getByRole("status");
    const actionButton = await within(toast).getByRole("button", { name: "Mettre à jour" });
    const closeButton = await within(toast).getByRole("button", { name: "Fermer le toast" });

    await userEvent.keyboard("{Escape}");
    expect(toast).toBeInTheDocument();

    await userEvent.tab();
    expect(actionButton).toHaveFocus();

    await userEvent.tab();
    expect(closeButton).toHaveFocus();

    await userEvent.tab({ shift: true });
    expect(actionButton).toHaveFocus();

    await userEvent.keyboard("{Escape}");
    await waitFor(() => expect(toast).not.toBeInTheDocument());

    await userEvent.click(toggleButton);
    const reopenedToast = await within(document.body).findByRole("status");
    await userEvent.click(within(reopenedToast).getByRole("button", { name: "Fermer le toast" }));
    await waitFor(() => expect(reopenedToast).not.toBeInTheDocument());
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

    const toast = within(document.body).getByRole("status");
    const closeButton = await within(toast).getByRole("button", { name: "Fermer le toast" });

    await userEvent.tab();
    expect(closeButton).toHaveFocus();

    await new Promise((resolve) => setTimeout(resolve, AUTO_DISMISS_SHORT_MS + 500));

    expect(toast).toBeInTheDocument();
  },
};
