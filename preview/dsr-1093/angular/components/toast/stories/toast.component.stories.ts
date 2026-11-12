import type { Meta, StoryObj } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";
import { userEvent, within, expect, waitFor, fn } from "@storybook/test";

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
export const AutoDismissWithoutActionCallback: Story = {
  tags: ["!autodocs"],
  args: {
    message: "Notification",
    isOpen: true,
    autoDismiss: true,
    duration: "short",
    closable: false,
    showActionButton: true,
    actionButtonLabel: "Mettre à jour",
    onActionButtonClick: undefined,
    close: fn(),
  },
  render: (args) => ({
    props: args,
    template: `
      <rte-toast
        [message]="message"
        [isOpen]="isOpen"
        [autoDismiss]="autoDismiss"
        [duration]="duration"
        [closable]="closable"
        [showActionButton]="showActionButton"
        [actionButtonLabel]="actionButtonLabel"
        [onActionButtonClick]="onActionButtonClick"
        (close)="close($event)"
      />`,
  }),
  play: async ({ canvasElement, args }) => {
    const toast = within(canvasElement).getByRole("status");
    expect(within(toast).queryByRole("button")).not.toBeInTheDocument();
    await waitFor(() => expect(args.close).toHaveBeenCalledTimes(1), { timeout: 5000 });
  },
};

export const AutoDismissInputChanges: Story = {
  tags: ["!autodocs"],
  args: {
    message: "Notification",
    isOpen: true,
    autoDismiss: false,
    duration: "short",
    closable: false,
    showActionButton: false,
    close: fn(),
  },
  render: (args) => ({
    props: args,
    template: `
      <button rteButton (click)="autoDismiss = !autoDismiss">Toggle auto-dismiss</button>
      <rte-toast
        [message]="message"
        [isOpen]="isOpen"
        [autoDismiss]="autoDismiss"
        [duration]="duration"
        [closable]="closable"
        [showActionButton]="showActionButton"
        (close)="close($event)"
      />`,
  }),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const toggleButton = canvas.getByRole("button", { name: "Toggle auto-dismiss" });
    const toast = within(canvas.getByRole("status"));
    expect(toast.getByRole("button", { name: "Fermer le toast" })).toBeInTheDocument();

    await userEvent.click(toggleButton);
    await waitFor(() => expect(toast.queryByRole("button", { name: "Fermer le toast" })).not.toBeInTheDocument());

    await userEvent.click(toggleButton);
    expect(toast.getByRole("button", { name: "Fermer le toast" })).toBeInTheDocument();
    await new Promise((resolve) => setTimeout(resolve, 3500));
    expect(args.close).not.toHaveBeenCalled();

    await userEvent.click(toggleButton);
    await waitFor(() => expect(args.close).toHaveBeenCalledTimes(1), { timeout: 5000 });
  },
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
