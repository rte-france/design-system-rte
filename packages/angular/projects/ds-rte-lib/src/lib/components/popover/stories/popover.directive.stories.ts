import { Meta, StoryObj } from "@storybook/angular";

import { PopoverDirective } from "../popover.directive";

const meta: Meta<PopoverDirective> = {
  title: "Popover",
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
            [rtePopoverContent]="rtePopoverContent"
            (clickSecondaryButton)="clickSecondaryButton()"
            (clickPrimaryButton)="clickPrimaryButton()"
        `),
  }),
};
