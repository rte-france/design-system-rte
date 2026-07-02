import {
  TESTING_ENTER_KEY,
  TESTING_ESCAPE_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard-test.constants";
import { Meta, StoryObj } from "@storybook/angular";
import { userEvent, waitFor, within, expect } from "@storybook/test";

import { focusElementBeforeComponent } from "../../../../../../../.storybook/testing/testing.utils";
import { PopoverDirective } from "../popover.directive";

const meta: Meta<PopoverDirective> = {
  title: "Composants/Popover",
  component: PopoverDirective,
  tags: ["autodocs"],
  argTypes: {
    rtePopoverPosition: {
      control: "select",
      options: ["auto", "top", "bottom", "left", "right"],
      description: "Position of the popover relative to trigger",
      defaultValue: "auto",
    },
    rtePopoverAlignment: {
      control: "select",
      options: ["start", "center", "end"],
      description: "Alignment of the popover",
      defaultValue: "start",
    },
    rtePopoverArrow: {
      control: "boolean",
      description: "Whether to show the arrow",
      defaultValue: true,
    },
    rtePopoverTitle: {
      control: "text",
      description: "Title of the popover",
      defaultValue: "Popover Title",
    },
    rtePopoverContent: {
      control: "text",
      description: "Content of the popover",
      defaultValue: "Popover content",
    },
    rtePopoverPrimaryButtonLabel: {
      control: "text",
      description: "Label for the primary button",
      defaultValue: "Close",
    },
    rtePopoverSecondaryButtonLabel: {
      control: "text",
      description: "Label for the secondary button",
      defaultValue: "Cancel",
    },
    clickPrimaryButton: { action: "primary click", control: false },
    clickSecondaryButton: { action: "secondary click", control: false },
  },
};
export default meta;
type Story = StoryObj<PopoverDirective>;

const mockHost = (popoverDirectives: string) => `
<button 
    ${popoverDirectives}
>
    Click me!
</button>
`;

export const Default: Story = {
  args: {
    rtePopoverContent:
      "Le Popover est un composant de type superposition (overlay), qui apparaît au clic, au focus ou au survol d'un élément déclencheur (trigger). Il est utilisé pour afficher un contenu contextuel enrichi : aide, options, actions complémentaires…",
    rtePopoverPosition: "auto",
    rtePopoverAlignment: "center",
    rtePopoverArrow: true,
    rtePopoverPrimaryButtonLabel: "Close",
    rtePopoverSecondaryButtonLabel: "Cancel",
    rtePopoverTitle: "Popover Title",
    clickSecondaryButton: () => console.log("Secondary button clicked"),
    clickPrimaryButton: () => console.log("Primary button clicked"),
  },
  render: (args) => ({
    props: args,
    declarations: [PopoverDirective],
    template: mockHost(`
            rtePopover
            [rtePopoverContent]="rtePopoverContent"
            [rtePopoverPosition]="rtePopoverPosition"
            [rtePopoverAlignment]="rtePopoverAlignment"
            [rtePopoverArrow]="rtePopoverArrow"
            [rtePopoverPrimaryButtonLabel]="rtePopoverPrimaryButtonLabel"
            [rtePopoverSecondaryButtonLabel]="rtePopoverSecondaryButtonLabel"
            [rtePopoverTitle]="rtePopoverTitle"
            (clickSecondaryButton)="clickSecondaryButton()"
            (clickPrimaryButton)="clickPrimaryButton()"
        `),
  }),
};
export const WithTwoButtons: Story = {
  args: {
    rtePopoverContent: "Are you sure you want to proceed with this action? This cannot be undone.",
    rtePopoverPosition: "auto",
    rtePopoverAlignment: "center",
    rtePopoverArrow: true,
    rtePopoverPrimaryButtonLabel: "Confirm",
    rtePopoverSecondaryButtonLabel: "Cancel",
    rtePopoverTitle: "Confirm Action",
  },
  render: (args) => ({
    props: args,
    declarations: [PopoverDirective],
    template: mockHost(`
            rtePopover
            [rtePopoverContent]="rtePopoverContent"
            [rtePopoverPosition]="rtePopoverPosition"
            [rtePopoverAlignment]="rtePopoverAlignment"
            [rtePopoverArrow]="rtePopoverArrow"
            [rtePopoverPrimaryButtonLabel]="rtePopoverPrimaryButtonLabel"
            [rtePopoverSecondaryButtonLabel]="rtePopoverSecondaryButtonLabel"
            [rtePopoverTitle]="rtePopoverTitle"
            (clickSecondaryButton)="clickSecondaryButton()"
            (clickPrimaryButton)="clickPrimaryButton()"
        `),
  }),
};
export const WithoutTitle: Story = {
  args: {
    rtePopoverContent: "This popover has no title, just content and a close button.",
    rtePopoverPosition: "auto",
    rtePopoverAlignment: "center",
    rtePopoverArrow: true,
    rtePopoverPrimaryButtonLabel: "Got it",
  },
  render: (args) => ({
    props: args,
    declarations: [PopoverDirective],
    template: mockHost(`
            rtePopover
            [rtePopoverContent]="rtePopoverContent"
            [rtePopoverPosition]="rtePopoverPosition"
            [rtePopoverAlignment]="rtePopoverAlignment"
            [rtePopoverArrow]="rtePopoverArrow"
            [rtePopoverPrimaryButtonLabel]="rtePopoverPrimaryButtonLabel"
            [rtePopoverSecondaryButtonLabel]="rtePopoverSecondaryButtonLabel"
            [rtePopoverTitle]="rtePopoverTitle"
            (clickSecondaryButton)="clickSecondaryButton()"
            (clickPrimaryButton)="clickPrimaryButton()"
        `),
  }),
};
export const WithoutArrow: Story = {
  args: {
    rtePopoverContent: "This popover is displayed without an arrow pointer.",
    rtePopoverPosition: "auto",
    rtePopoverAlignment: "center",
    rtePopoverArrow: false,
    rtePopoverPrimaryButtonLabel: "Close",
    rtePopoverTitle: "No Arrow",
  },
  render: (args) => ({
    props: args,
    declarations: [PopoverDirective],
    template: mockHost(`
            rtePopover
            [rtePopoverContent]="rtePopoverContent"
            [rtePopoverPosition]="rtePopoverPosition"
            [rtePopoverAlignment]="rtePopoverAlignment"
            [rtePopoverArrow]="rtePopoverArrow"
            [rtePopoverPrimaryButtonLabel]="rtePopoverPrimaryButtonLabel"
            [rtePopoverSecondaryButtonLabel]="rtePopoverSecondaryButtonLabel"
            [rtePopoverTitle]="rtePopoverTitle"
            (clickSecondaryButton)="clickSecondaryButton()"
            (clickPrimaryButton)="clickPrimaryButton()"
        `),
  }),
};
export const KeyboardInteraction: Story = {
  args: {
    rtePopoverContent:
      "Le Popover est un composant de type superposition (overlay), qui apparaît au clic, au focus ou au survol d'un élément déclencheur (trigger). Il est utilisé pour afficher un contenu contextuel enrichi : aide, options, actions complémentaires…",
    rtePopoverPosition: "auto",
    rtePopoverAlignment: "center",
    rtePopoverArrow: true,
    rtePopoverPrimaryButtonLabel: "Close",
    rtePopoverSecondaryButtonLabel: "Cancel",
    rtePopoverTitle: "Popover Title",
  },
  render: (args) => ({
    props: args,
    declarations: [PopoverDirective],
    template: mockHost(`
            rtePopover
            [rtePopoverContent]="rtePopoverContent"
            [rtePopoverPosition]="rtePopoverPosition"
            [rtePopoverAlignment]="rtePopoverAlignment"
            [rtePopoverArrow]="rtePopoverArrow"
            [rtePopoverPrimaryButtonLabel]="rtePopoverPrimaryButtonLabel"
            [rtePopoverSecondaryButtonLabel]="rtePopoverSecondaryButtonLabel"
            [rtePopoverTitle]="rtePopoverTitle"
            (clickSecondaryButton)="clickSecondaryButton()"
            (clickPrimaryButton)="clickPrimaryButton()"
        `),
  }),
  play: async ({ canvasElement }) => {
    focusElementBeforeComponent(canvasElement);
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
