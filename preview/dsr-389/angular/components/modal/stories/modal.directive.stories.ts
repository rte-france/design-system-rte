import {
  TESTING_ENTER_KEY,
  TESTING_ESCAPE_KEY,
  TESTING_SPACE_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard-test.constants";
import { Meta, StoryObj, moduleMetadata } from "@storybook/angular";
import { userEvent, waitFor, within, expect, fn } from "@storybook/test";

import { focusElementBeforeComponent } from "../../../../../../../.storybook/testing/testing.utils";
import { ButtonComponent } from "../../button/button.component";
import { RegularIcons as RegularIconsList, TogglableIcons as TogglableIconsList } from "../../icon/icon-map";
import { TextareaComponent } from "../../textarea/textarea.component";
import { ModalDirective } from "../modal.directive";
import { ModalModule } from "../modal.module";

const RegularIconIds = Object.keys(RegularIconsList);
const TogglableIconIds = Object.keys(TogglableIconsList);

const meta: Meta<ModalDirective> = {
  title: "Composants/Modal",
  component: ModalDirective,
  tags: ["autodocs"],
  argTypes: {
    rteModalId: { control: "text", description: "ID of the modal", defaultValue: undefined },
    rteModalIcon: {
      control: "select",
      options: ["", ...RegularIconIds, ...TogglableIconIds].sort((a, b) => a.localeCompare(b)),
      description: "Nom de l’icône à afficher",
      defaultValue: "",
    },
    rteModalIconAppearance: {
      control: "select",
      options: ["outlined", "filled"],
      description: "Icon appearance for the modal",
      defaultValue: "outlined",
    },
    rteModalTitle: { control: "text", description: "Title of the modal", defaultValue: "Modal Title" },
    rteModalDescription: {
      control: "text",
      description: "Description of the modal",
      defaultValue: "This is a description for the modal.",
    },
    rteModalIsOpen: { control: "boolean", description: "Whether the modal is open", defaultValue: false },
    rteModalAriaDescribedby: { control: "text", description: "ARIA describedby attribute", defaultValue: undefined },
    rteModalSize: {
      control: "select",
      options: ["xs", "s", "m", "l", "xl"],
      description: "Size of the modal",
      defaultValue: "m",
    },
    rteModalCloseOnClickOutside: {
      control: "boolean",
      description: "Close modal on outside click",
      defaultValue: true,
    },
  },
};
export default meta;
type Story = StoryObj<ModalDirective>;

const mockFn = fn();

export const Default: Story = {
  decorators: [
    moduleMetadata({
      imports: [ModalModule, ButtonComponent],
    }),
  ],
  args: {
    rteModalId: "modal-1",
    rteModalTitle: "Connect to Wi-Fi",
    rteModalDescription:
      "Please connect to wifi to synchronise your projects or go to Settings to change your preferences.",
    rteModalAriaDescribedby: undefined,
    rteModalSize: "xs",
    rteModalIcon: "wifi",
    rteModalIconAppearance: "filled",
    rteModalCloseOnClickOutside: true,
  },
  render: (args) => ({
    props: {
      ...args,
      handlePrimaryClick: () => console.log("Primary button clicked"),
      handleSecondaryClick: () => console.log("Secondary button clicked"),
    },
    declarations: [ModalDirective],
    template: `<div
                rteModal
                [rteModalId]="rteModalId"
                [rteModalIconAppearance]="rteModalIconAppearance"
                [rteModalTitle]="rteModalTitle"
                [rteModalDescription]="rteModalDescription"
                [rteModalSize]="rteModalSize"
                [rteModalIcon]="rteModalIcon"
                [rteModalAriaDescribedby]="rteModalAriaDescribedby"
                [rteModalCloseOnClickOutside]="rteModalCloseOnClickOutside"
                >
                <button rteButton rteButtonVariant="primary" rteModalTrigger>Open Modal</button>
                <ng-template #primaryButton>
                  <button rteButton rteButtonVariant="primary" (click)="handlePrimaryClick()">Continue</button>
                </ng-template>
                <ng-template #secondaryButton>
                  <button rteButton rteButtonVariant="neutral" (click)="handleSecondaryClick()">Cancel</button>
                </ng-template>
              </div>
      `,
  }),
};

export const Sizes: Story = {
  decorators: [
    moduleMetadata({
      imports: [ModalModule, ButtonComponent],
    }),
  ],
  args: {
    ...Default.args,
    rteModalTitle: "Modal Title",
    rteModalDescription:
      "La Modal (ou fenêtre modale) est un composant de superposition (overlay) qui interrompt le flux principal pour afficher un contenu ou solliciter une action de l’utilisateur. Elle nécessite une interaction explicite pour être fermée. Elle se superpose au contenu existant avec un fond atténué (overlay) et capte le focus tant qu’elle est ouverte.",
    rteModalAriaDescribedby: undefined,
    rteModalSize: "xs",
    rteModalIcon: "settings",
    rteModalCloseOnClickOutside: true,
  },
  render: (args) => ({
    props: {
      ...args,
      handlePrimaryClick: () => console.log("Primary button clicked"),
      handleSecondaryClick: () => console.log("Secondary button clicked"),
    },
    declarations: [ModalDirective],
    template: `
    <div style="display: flex; gap: 12px; margin-bottom: 16px;">
    <div
                rteModal
                [rteModalId]="'modal-xs'"
                [rteModalIconAppearance]="rteModalIconAppearance"
                [rteModalTitle]="rteModalTitle"
                [rteModalDescription]="rteModalDescription"
                [rteModalSize]="'xs'"
                [rteModalIcon]="rteModalIcon"
                [rteModalAriaDescribedby]="rteModalAriaDescribedby"
                [rteModalCloseOnClickOutside]="rteModalCloseOnClickOutside"
                >
                <button rteButton rteButtonVariant="primary" rteModalTrigger>Open Modal xs</button>
                <ng-template #primaryButton>
                  <button rteButton rteButtonVariant="primary" (click)="handlePrimaryClick()">Continue</button>
                </ng-template>
                <ng-template #secondaryButton>
                  <button rteButton rteButtonVariant="neutral" (click)="handleSecondaryClick()">Cancel</button>
                </ng-template>
              </div>
              <div
                rteModal
                [rteModalId]="'modal-s'"
                [rteModalIconAppearance]="rteModalIconAppearance"
                [rteModalTitle]="rteModalTitle"
                [rteModalDescription]="rteModalDescription"
                [rteModalSize]="'s'"
                [rteModalIcon]="rteModalIcon"
                [rteModalAriaDescribedby]="rteModalAriaDescribedby"
                [rteModalCloseOnClickOutside]="rteModalCloseOnClickOutside"
                >
                <button rteButton rteButtonVariant="primary" rteModalTrigger>Open Modal s</button>
                <ng-template #primaryButton>
                  <button rteButton rteButtonVariant="primary" (click)="handlePrimaryClick()">Continue</button>
                </ng-template>
                <ng-template #secondaryButton>
                  <button rteButton rteButtonVariant="neutral" (click)="handleSecondaryClick()">Cancel</button>
                </ng-template>
              </div>
              <div
                rteModal
                [rteModalId]="'modal-m'"
                [rteModalIconAppearance]="rteModalIconAppearance"
                [rteModalTitle]="rteModalTitle"
                [rteModalDescription]="rteModalDescription"
                [rteModalSize]="'m'"
                [rteModalIcon]="rteModalIcon"
                [rteModalAriaDescribedby]="rteModalAriaDescribedby"
                [rteModalCloseOnClickOutside]="rteModalCloseOnClickOutside"
                >
                <button rteButton rteButtonVariant="primary" rteModalTrigger>Open Modal m</button>
                <ng-template #primaryButton>
                  <button rteButton rteButtonVariant="primary" (click)="handlePrimaryClick()">Continue</button>
                </ng-template>
                <ng-template #secondaryButton>
                  <button rteButton rteButtonVariant="neutral" (click)="handleSecondaryClick()">Cancel</button>
                </ng-template>
              </div>
              <div
                rteModal
                [rteModalId]="'modal-l'"
                [rteModalIconAppearance]="rteModalIconAppearance"
                [rteModalTitle]="rteModalTitle"
                [rteModalDescription]="rteModalDescription"
                [rteModalSize]="'l'"
                [rteModalIcon]="rteModalIcon"
                [rteModalAriaDescribedby]="rteModalAriaDescribedby"
                [rteModalCloseOnClickOutside]="rteModalCloseOnClickOutside"
                >
                <button rteButton rteButtonVariant="primary" rteModalTrigger>Open Modal l</button>
                <ng-template #primaryButton>
                  <button rteButton rteButtonVariant="primary" (click)="handlePrimaryClick()">Continue</button>
                </ng-template>
                <ng-template #secondaryButton>
                  <button rteButton rteButtonVariant="neutral" (click)="handleSecondaryClick()">Cancel</button>
                </ng-template>
              </div>
              <div
                rteModal
                [rteModalId]="'modal-xl'"
                [rteModalIconAppearance]="rteModalIconAppearance"
                [rteModalTitle]="rteModalTitle"
                [rteModalDescription]="rteModalDescription"
                [rteModalSize]="'xl'"
                [rteModalIcon]="rteModalIcon"
                [rteModalAriaDescribedby]="rteModalAriaDescribedby"
                [rteModalCloseOnClickOutside]="rteModalCloseOnClickOutside"
                >
                <button rteButton rteButtonVariant="primary" rteModalTrigger>Open Modal xl</button>
                <ng-template #primaryButton>
                  <button rteButton rteButtonVariant="primary" (click)="handlePrimaryClick()">Continue</button>
                </ng-template>
                <ng-template #secondaryButton>
                  <button rteButton rteButtonVariant="neutral" (click)="handleSecondaryClick()">Cancel</button>
                </ng-template>
              </div>
    </div>
      `,
  }),
};

export const WithCustomContent: Story = {
  decorators: [
    moduleMetadata({
      imports: [ModalModule, ButtonComponent, TextareaComponent],
    }),
  ],
  args: {
    ...Default.args,
    rteModalId: "modal-2",
    rteModalTitle: "Préciser le motif du refus",
    rteModalDescription:
      "En motivant votre refus, vous aidez votre collaborateur à mieux identifier comment corriger sa demande.",
    rteModalAriaDescribedby: undefined,
    rteModalSize: "m",
  },
  render: (args) => ({
    props: {
      ...args,
      handlePrimaryClick: () => console.log("Primary button clicked"),
      handleSecondaryClick: () => console.log("Secondary button clicked"),
    },
    declarations: [ModalDirective],
    template: `<div
                rteModal
                [rteModalId]="rteModalId"
                [rteModalIconAppearance]="rteModalIconAppearance"
                [rteModalTitle]="rteModalTitle"
                [rteModalDescription]="rteModalDescription"
                [rteModalSize]="rteModalSize"
                [rteModalIcon]="rteModalIcon"
                [rteModalAriaDescribedby]="rteModalAriaDescribedby"
                [rteModalCloseOnClickOutside]="rteModalCloseOnClickOutside"
                >
                <button rteButton rteButtonVariant="primary" rteModalTrigger>Open Modal</button>
                <ng-template #primaryButton>
                  <button rteButton rteButtonVariant="primary"(click)="handlePrimaryClick()">Continue</button>
                </ng-template>
                <ng-template #secondaryButton>
                  <button rteButton rteButtonVariant="neutral" (click)="handleSecondaryClick()">Cancel</button>
                </ng-template>
                <ng-template #customContent>
                  <rte-textarea resizeable="true" />
                </ng-template>
              </div>
      `,
  }),
};

export const KeyboardInteraction: Story = {
  decorators: [
    moduleMetadata({
      imports: [ModalModule, ButtonComponent],
    }),
  ],
  args: {
    ...Default.args,
    rteModalId: "modal-3",
    rteModalTitle: "Delete 3 documents",
    rteModalDescription: "The selected documents will be deleted.",
    rteModalAriaDescribedby: undefined,
    rteModalSize: "xs",
    rteModalIcon: "delete",
  },
  render: (args) => ({
    props: {
      ...args,
      handlePrimaryClick: () => {
        console.log("Primary button clicked");
        mockFn();
      },
      handleSecondaryClick: () => console.log("Secondary button clicked"),
    },
    declarations: [ModalDirective],
    template: `<div
                rteModal
                [rteModalId]="rteModalId"
                [rteModalIconAppearance]="rteModalIconAppearance"
                [rteModalTitle]="rteModalTitle"
                [rteModalDescription]="rteModalDescription"
                [rteModalSize]="rteModalSize"
                [rteModalIcon]="rteModalIcon"
                [rteModalAriaDescribedby]="rteModalAriaDescribedby"
                [rteModalIsOpen]="rteModalIsOpen"
                >
                <button rteButton rteModalTrigger variant="primary">Open Modal</button>
                <ng-template #primaryButton>
                  <button rteButton rteButtonVariant="danger" (click)="handlePrimaryClick()">Continue</button>
                </ng-template>
                <ng-template #secondaryButton>
                  <button rteButton rteButtonVariant="neutral" (click)="handleSecondaryClick()">Cancel</button>
                </ng-template>
              </div>
      `,
  }),

  play: async ({ canvasElement }) => {
    focusElementBeforeComponent(canvasElement);

    await userEvent.tab();
    await userEvent.keyboard(TESTING_SPACE_KEY);

    const modal = within(document.body).getByRole("dialog");
    expect(modal).toBeInTheDocument();

    await userEvent.tab();
    const cancelButton = within(modal).getByRole("button", { name: /cancel/i });
    expect(cancelButton).toHaveFocus();

    await userEvent.tab();
    const continueButton = within(modal).getByRole("button", { name: /continue/i });
    expect(continueButton).toHaveFocus();

    await userEvent.keyboard(TESTING_ENTER_KEY);
    expect(mockFn).toHaveBeenCalled();

    await userEvent.tab();
    const closeButton = within(modal).getByTestId("modal-close-button").children[0];
    expect(closeButton).toHaveFocus();

    await userEvent.keyboard(TESTING_ESCAPE_KEY);
    await waitFor(() => expect(modal).not.toBeVisible());
  },
};
