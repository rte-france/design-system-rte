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
import { PopoverDirective } from "../../popover/popover.directive";
import { SelectComponent } from "../../select/select.component";
import { TextareaComponent } from "../../textarea/textarea.component";
import { ModalDirective } from "../modal.directive";
import { ModalModule } from "../modal.module";

const RegularIconIds = Object.keys(RegularIconsList);
const TogglableIconIds = Object.keys(TogglableIconsList);

const modalUsageDoc = `
\`\`\`html
<div
  rteModal
  #modalHost="rteModal"
  [rteModalId]="'my-modal'"
  [rteModalTitle]="'Title'"
  [rteModalDescription]="'Content'"
  [rteModalSize]="'m'"
  [rteModalPrimaryActionLabel]="'Validate'"
  [rteModalSecondaryActionLabel]="'Cancel'"
  (rteModalPrimaryActionClick)="onValidate(); modalHost.close()"
  (rteModalSecondaryActionClick)="modalHost.close()"
>
  <button rteButton rteButtonVariant="primary" rteModalTrigger>Open Modal</button>
</div>
\`\`\`
`;

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
    rteModalPrimaryActionLabel: { control: "text", description: "Primary footer action label" },
    rteModalSecondaryActionLabel: { control: "text", description: "Secondary footer action label" },
    rteModalPrimaryActionType: {
      control: "select",
      options: ["button", "split-button"],
      description: "Primary footer action type",
    },
    rteModalPrimaryActionIsCritical: { control: "boolean", description: "Critical primary button styling" },
  },
  parameters: {
    docs: {
      description: {
        component: modalUsageDoc,
      },
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
    rteModalPrimaryActionLabel: "Continue",
    rteModalSecondaryActionLabel: "Cancel",
  },
  render: (args) => ({
    props: {
      ...args,
      handlePrimaryClick: () => console.log("Primary button clicked"),
      handleSecondaryClick: () => console.log("Secondary button clicked"),
    },
    imports: [ModalDirective],
    template: `<div
                rteModal
                #modalHost="rteModal"
                [rteModalId]="rteModalId"
                [rteModalIconAppearance]="rteModalIconAppearance"
                [rteModalTitle]="rteModalTitle"
                [rteModalDescription]="rteModalDescription"
                [rteModalSize]="rteModalSize"
                [rteModalIcon]="rteModalIcon"
                [rteModalAriaDescribedby]="rteModalAriaDescribedby"
                [rteModalCloseOnClickOutside]="rteModalCloseOnClickOutside"
                [rteModalPrimaryActionLabel]="rteModalPrimaryActionLabel"
                [rteModalSecondaryActionLabel]="rteModalSecondaryActionLabel"
                (rteModalPrimaryActionClick)="handlePrimaryClick(); modalHost.close()"
                (rteModalSecondaryActionClick)="handleSecondaryClick(); modalHost.close()"
                >
                <button rteButton rteButtonVariant="primary" rteModalTrigger>Open Modal</button>
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
    imports: [ModalDirective],
    template: `
    <div style="display: flex; gap: 12px; margin-bottom: 16px;">
    <div
                rteModal
                #modalHostXs="rteModal"
                [rteModalId]="'modal-xs'"
                [rteModalIconAppearance]="rteModalIconAppearance"
                [rteModalTitle]="rteModalTitle"
                [rteModalDescription]="rteModalDescription"
                [rteModalSize]="'xs'"
                [rteModalIcon]="rteModalIcon"
                [rteModalAriaDescribedby]="rteModalAriaDescribedby"
                [rteModalCloseOnClickOutside]="rteModalCloseOnClickOutside"
                [rteModalPrimaryActionLabel]="rteModalPrimaryActionLabel"
                [rteModalSecondaryActionLabel]="rteModalSecondaryActionLabel"
                (rteModalPrimaryActionClick)="handlePrimaryClick(); modalHostXs.close()"
                (rteModalSecondaryActionClick)="handleSecondaryClick(); modalHostXs.close()"
                >
                <button rteButton rteButtonVariant="primary" rteModalTrigger>Open Modal xs</button>
              </div>
              <div
                rteModal
                #modalHostS="rteModal"
                [rteModalId]="'modal-s'"
                [rteModalIconAppearance]="rteModalIconAppearance"
                [rteModalTitle]="rteModalTitle"
                [rteModalDescription]="rteModalDescription"
                [rteModalSize]="'s'"
                [rteModalIcon]="rteModalIcon"
                [rteModalAriaDescribedby]="rteModalAriaDescribedby"
                [rteModalCloseOnClickOutside]="rteModalCloseOnClickOutside"
                [rteModalPrimaryActionLabel]="rteModalPrimaryActionLabel"
                [rteModalSecondaryActionLabel]="rteModalSecondaryActionLabel"
                (rteModalPrimaryActionClick)="handlePrimaryClick(); modalHostS.close()"
                (rteModalSecondaryActionClick)="handleSecondaryClick(); modalHostS.close()"
                >
                <button rteButton rteButtonVariant="primary" rteModalTrigger>Open Modal s</button>
              </div>
              <div
                rteModal
                #modalHostM="rteModal"
                [rteModalId]="'modal-m'"
                [rteModalIconAppearance]="rteModalIconAppearance"
                [rteModalTitle]="rteModalTitle"
                [rteModalDescription]="rteModalDescription"
                [rteModalSize]="'m'"
                [rteModalIcon]="rteModalIcon"
                [rteModalAriaDescribedby]="rteModalAriaDescribedby"
                [rteModalCloseOnClickOutside]="rteModalCloseOnClickOutside"
                [rteModalPrimaryActionLabel]="rteModalPrimaryActionLabel"
                [rteModalSecondaryActionLabel]="rteModalSecondaryActionLabel"
                (rteModalPrimaryActionClick)="handlePrimaryClick(); modalHostM.close()"
                (rteModalSecondaryActionClick)="handleSecondaryClick(); modalHostM.close()"
                >
                <button rteButton rteButtonVariant="primary" rteModalTrigger>Open Modal m</button>
              </div>
              <div
                rteModal
                #modalHostL="rteModal"
                [rteModalId]="'modal-l'"
                [rteModalIconAppearance]="rteModalIconAppearance"
                [rteModalTitle]="rteModalTitle"
                [rteModalDescription]="rteModalDescription"
                [rteModalSize]="'l'"
                [rteModalIcon]="rteModalIcon"
                [rteModalAriaDescribedby]="rteModalAriaDescribedby"
                [rteModalCloseOnClickOutside]="rteModalCloseOnClickOutside"
                [rteModalPrimaryActionLabel]="rteModalPrimaryActionLabel"
                [rteModalSecondaryActionLabel]="rteModalSecondaryActionLabel"
                (rteModalPrimaryActionClick)="handlePrimaryClick(); modalHostL.close()"
                (rteModalSecondaryActionClick)="handleSecondaryClick(); modalHostL.close()"
                >
                <button rteButton rteButtonVariant="primary" rteModalTrigger>Open Modal l</button>
              </div>
              <div
                rteModal
                #modalHostXl="rteModal"
                [rteModalId]="'modal-xl'"
                [rteModalIconAppearance]="rteModalIconAppearance"
                [rteModalTitle]="rteModalTitle"
                [rteModalDescription]="rteModalDescription"
                [rteModalSize]="'xl'"
                [rteModalIcon]="rteModalIcon"
                [rteModalAriaDescribedby]="rteModalAriaDescribedby"
                [rteModalCloseOnClickOutside]="rteModalCloseOnClickOutside"
                [rteModalPrimaryActionLabel]="rteModalPrimaryActionLabel"
                [rteModalSecondaryActionLabel]="rteModalSecondaryActionLabel"
                (rteModalPrimaryActionClick)="handlePrimaryClick(); modalHostXl.close()"
                (rteModalSecondaryActionClick)="handleSecondaryClick(); modalHostXl.close()"
                >
                <button rteButton rteButtonVariant="primary" rteModalTrigger>Open Modal xl</button>
              </div>
    </div>
      `,
  }),
};

export const WithCustomContent: Story = {
  decorators: [
    moduleMetadata({
      imports: [ModalModule, ButtonComponent, TextareaComponent, SelectComponent, PopoverDirective],
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
    imports: [ModalDirective],
    template: `<div
                rteModal
                #modalHost="rteModal"
                [rteModalId]="rteModalId"
                [rteModalIconAppearance]="rteModalIconAppearance"
                [rteModalTitle]="rteModalTitle"
                [rteModalSize]="rteModalSize"
                [rteModalIcon]="rteModalIcon"
                [rteModalAriaDescribedby]="rteModalAriaDescribedby"
                [rteModalCloseOnClickOutside]="rteModalCloseOnClickOutside"
                [rteModalPrimaryActionLabel]="rteModalPrimaryActionLabel"
                [rteModalSecondaryActionLabel]="rteModalSecondaryActionLabel"
                (rteModalPrimaryActionClick)="handlePrimaryClick(); modalHost.close()"
                (rteModalSecondaryActionClick)="handleSecondaryClick(); modalHost.close()"
                >
                <button rteButton rteButtonVariant="primary" rteModalTrigger>Open Modal</button>
                <ng-template #customContent>
                  <rte-textarea resizeable="true" />
                  <rte-select [options]="[{ label: 'Option 1', value: 'option1' }, { label: 'Option 2', value: 'option2' }]" />
                  <p 
                  rtePopover
                  [rtePopoverContent]="'Blabla'"
                  [rtePopoverPosition]= "'auto'"
                  [rtePopoverAlignment]= "'center'"
                  [rtePopoverPrimaryButtonLabel]= "'Close'"
                  [rtePopoverSecondaryButtonLabel]= "'Cancel'"
                  [rtePopoverTitle]= "'Popover Title'"  
                  style="margin-top= 12px;">En motivant votre refus, vous aidez votre collaborateur à mieux identifier comment corriger sa demande.</p>
                </ng-template>
              </div>
      `,
  }),
};

const splitMenuOptions = [
  { id: "save-draft", label: "Save as draft" },
  { id: "save-template", label: "Save as template" },
];

export const PrimaryDanger: Story = {
  decorators: [
    moduleMetadata({
      imports: [ModalModule, ButtonComponent],
    }),
  ],
  args: {
    rteModalId: "modal-danger",
    rteModalTitle: "Delete 3 documents",
    rteModalDescription: "The selected documents will be deleted.",
    rteModalSize: "s",
    rteModalIcon: "delete",
    rteModalIconAppearance: "filled",
    rteModalCloseOnClickOutside: true,
    rteModalPrimaryActionLabel: "Delete",
    rteModalSecondaryActionLabel: "Cancel",
    rteModalPrimaryActionIsCritical: true,
  },
  render: (args) => ({
    props: {
      ...args,
      handlePrimaryClick: () => console.log("Delete confirmed"),
      handleSecondaryClick: () => console.log("Cancelled"),
    },
    imports: [ModalDirective],
    template: `<div
      rteModal
      #modalHost="rteModal"
      [rteModalId]="rteModalId"
      [rteModalTitle]="rteModalTitle"
      [rteModalDescription]="rteModalDescription"
      [rteModalSize]="rteModalSize"
      [rteModalIcon]="rteModalIcon"
      [rteModalIconAppearance]="rteModalIconAppearance"
      [rteModalCloseOnClickOutside]="rteModalCloseOnClickOutside"
      [rteModalPrimaryActionLabel]="rteModalPrimaryActionLabel"
      [rteModalSecondaryActionLabel]="rteModalSecondaryActionLabel"
      [rteModalPrimaryActionIsCritical]="rteModalPrimaryActionIsCritical"
      (rteModalPrimaryActionClick)="handlePrimaryClick(); modalHost.close()"
      (rteModalSecondaryActionClick)="handleSecondaryClick(); modalHost.close()"
    >
      <button rteButton rteButtonVariant="primary" rteModalTrigger>Open Modal</button>
    </div>`,
  }),
};

export const PrimarySplitButton: Story = {
  decorators: [
    moduleMetadata({
      imports: [ModalModule, ButtonComponent],
    }),
  ],
  args: {
    rteModalId: "modal-split",
    rteModalTitle: "Save document",
    rteModalDescription: "Choose how to save your changes.",
    rteModalSize: "m",
    rteModalCloseOnClickOutside: true,
    rteModalPrimaryActionLabel: "Save",
    rteModalSecondaryActionLabel: "Cancel",
    rteModalPrimaryActionType: "split-button",
    rteModalPrimarySplitButtonAriaLabelRight: "More save options",
  },
  render: (args) => ({
    props: {
      ...args,
      splitMenuOptions,
      handlePrimaryClick: () => console.log("Save"),
      handlePrimaryOptionClick: (optionId: string) => console.log("Save option", optionId),
      handleSecondaryClick: () => console.log("Cancel"),
    },
    imports: [ModalDirective],
    template: `<div
      rteModal
      #modalHost="rteModal"
      [rteModalId]="rteModalId"
      [rteModalTitle]="rteModalTitle"
      [rteModalDescription]="rteModalDescription"
      [rteModalSize]="rteModalSize"
      [rteModalCloseOnClickOutside]="rteModalCloseOnClickOutside"
      [rteModalPrimaryActionLabel]="rteModalPrimaryActionLabel"
      [rteModalSecondaryActionLabel]="rteModalSecondaryActionLabel"
      [rteModalPrimaryActionType]="rteModalPrimaryActionType"
      [rteModalPrimarySplitButtonOptions]="splitMenuOptions"
      [rteModalPrimarySplitButtonAriaLabelRight]="rteModalPrimarySplitButtonAriaLabelRight"
      (rteModalPrimaryActionClick)="handlePrimaryClick(); modalHost.close()"
      (rteModalPrimaryActionOptionClick)="handlePrimaryOptionClick($event); modalHost.close()"
      (rteModalSecondaryActionClick)="handleSecondaryClick(); modalHost.close()"
    >
      <button rteButton rteButtonVariant="primary" rteModalTrigger>Open Modal</button>
    </div>`,
  }),
};

export const KeyboardInteractionSplitButton: Story = {
  tags: ["!autodocs"],
  ...PrimarySplitButton,
  play: async () => {
    focusElementBeforeComponent();

    await userEvent.tab();
    await userEvent.keyboard(TESTING_SPACE_KEY);

    const modal = within(document.body).getByRole("dialog");
    expect(modal).toBeVisible();

    const menuButton = within(modal).getByTestId("Menu button");
    await userEvent.click(menuButton);

    await waitFor(() => {
      expect(document.body.querySelector("rte-dropdown-menu")).toBeTruthy();
    });

    await userEvent.keyboard(TESTING_ESCAPE_KEY);

    await waitFor(() => {
      expect(document.body.querySelector("rte-dropdown-menu")).toBeFalsy();
    });
    expect(modal).toBeVisible();

    await userEvent.keyboard(TESTING_ESCAPE_KEY);

    await waitFor(() => expect(modal).not.toBeVisible());
  },
};

export const InputAndLegacyFooterComparison: Story = {
  decorators: [
    moduleMetadata({
      imports: [ModalModule, ButtonComponent],
    }),
  ],
  args: {
    rteModalTitle: "Save changes",
    rteModalDescription: "Compare configured footer inputs with legacy footer templates.",
    rteModalSize: "m",
    rteModalCloseOnClickOutside: true,
    rteModalPrimaryActionLabel: "Save",
    rteModalSecondaryActionLabel: "Cancel",
  },
  render: (args) => ({
    props: {
      ...args,
      handlePrimaryClick: () => console.log("Primary action"),
      handleSecondaryClick: () => console.log("Secondary action"),
    },
    imports: [ModalDirective],
    template: `<div style="display: flex; gap: 16px; flex-wrap: wrap;">
      <div
        rteModal
        #inputModalHost="rteModal"
        [rteModalId]="'modal-input-footer'"
        [rteModalTitle]="rteModalTitle"
        [rteModalDescription]="rteModalDescription"
        [rteModalSize]="rteModalSize"
        [rteModalCloseOnClickOutside]="rteModalCloseOnClickOutside"
        [rteModalPrimaryActionLabel]="rteModalPrimaryActionLabel"
        [rteModalSecondaryActionLabel]="rteModalSecondaryActionLabel"
        (rteModalPrimaryActionClick)="handlePrimaryClick(); inputModalHost.close()"
        (rteModalSecondaryActionClick)="handleSecondaryClick(); inputModalHost.close()"
      >
        <button rteButton rteButtonVariant="primary" rteModalTrigger>Open (input footer)</button>
      </div>
      <div
        rteModal
        #legacyModalHost="rteModal"
        [rteModalId]="'modal-legacy-footer'"
        [rteModalTitle]="rteModalTitle"
        [rteModalDescription]="rteModalDescription"
        [rteModalSize]="rteModalSize"
        [rteModalCloseOnClickOutside]="rteModalCloseOnClickOutside"
      >
        <button rteButton rteButtonVariant="primary" rteModalTrigger>Open (legacy templates)</button>
        <ng-template #primaryButton>
          <button rteButton rteButtonVariant="primary" (click)="handlePrimaryClick(); legacyModalHost.close()">Save</button>
        </ng-template>
        <ng-template #secondaryButton>
          <button rteButton rteButtonVariant="neutral" (click)="handleSecondaryClick(); legacyModalHost.close()">Cancel</button>
        </ng-template>
      </div>
    </div>`,
  }),
};

export const KeyboardInteraction: Story = {
  tags: ["!autodocs"],
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
    rteModalPrimaryActionLabel: "Continue",
    rteModalSecondaryActionLabel: "Cancel",
    rteModalPrimaryActionIsCritical: true,
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
    imports: [ModalDirective],
    template: `<div
                rteModal
                #modalHost="rteModal"
                [rteModalId]="rteModalId"
                [rteModalIconAppearance]="rteModalIconAppearance"
                [rteModalTitle]="rteModalTitle"
                [rteModalDescription]="rteModalDescription"
                [rteModalSize]="rteModalSize"
                [rteModalIcon]="rteModalIcon"
                [rteModalAriaDescribedby]="rteModalAriaDescribedby"
                [rteModalIsOpen]="rteModalIsOpen"
                [rteModalPrimaryActionLabel]="rteModalPrimaryActionLabel"
                [rteModalSecondaryActionLabel]="rteModalSecondaryActionLabel"
                [rteModalPrimaryActionIsCritical]="rteModalPrimaryActionIsCritical"
                (rteModalPrimaryActionClick)="handlePrimaryClick(); modalHost.close()"
                (rteModalSecondaryActionClick)="handleSecondaryClick(); modalHost.close()"
                >
                <button rteButton rteModalTrigger variant="primary">Open Modal</button>
              </div>
      `,
  }),

  play: async () => {
    focusElementBeforeComponent();

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
