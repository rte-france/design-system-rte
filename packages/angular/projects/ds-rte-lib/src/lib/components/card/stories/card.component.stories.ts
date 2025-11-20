import type { Meta, StoryObj } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";
import { fn, userEvent, within, expect } from "@storybook/test";

import { ButtonComponent } from "../../button/button.component";
import { CardComponent } from "../card.component";

const meta: Meta<CardComponent> = {
  title: "Card",
  component: CardComponent,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "s", "m", "l", "xl"],
      description: "Size of the card",
    },
    cardType: {
      control: "select",
      options: ["default", "outlined"],
      description: "Type of card styling",
    },
    clickable: {
      control: "boolean",
      description: "Whether the card is clickable",
    },
    disabled: {
      control: "boolean",
      description: "Whether the card is disabled",
    },
    cardClicked: { action: "clicked" },
  },
  args: { cardClicked: fn() },
};

export default meta;
type Story = StoryObj<CardComponent>;

const defaultContent = `
  <div style="padding: 16px;">
    <h2 style="margin: 0 0 12px 0; font-size: 20px; font-weight: 600;">Card Title</h2>
    <p style="margin: 0 0 16px 0; color: #666; line-height: 1.5;">
      This is a sample card with some content. You can add any content you want here, including text, images, buttons,
      or other components.
    </p>
  </div>
`;

export const Default: Story = {
  args: {
    size: "m",
    cardType: "default",
    clickable: false,
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <rte-card
        [size]="size"
        [cardType]="cardType"
        [clickable]="clickable"
        [disabled]="disabled"
        (click)="click()"
      >
        ${defaultContent}
      </rte-card>
    `,
  }),
};

export const Sizes: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <rte-card size="xs" [cardType]="cardType" [clickable]="clickable" [disabled]="disabled">
          <div style="padding: 16px;">
            <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600;">Extra Small (xs)</h3>
            <p style="margin: 0; color: #666; font-size: 14px;">240px width</p>
          </div>
        </rte-card>
        <rte-card size="s" [cardType]="cardType" [clickable]="clickable" [disabled]="disabled">
          <div style="padding: 16px;">
            <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600;">Small (s)</h3>
            <p style="margin: 0; color: #666; font-size: 14px;">360px width</p>
          </div>
        </rte-card>
        <rte-card size="m" [cardType]="cardType" [clickable]="clickable" [disabled]="disabled">
          <div style="padding: 16px;">
            <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600;">Medium (m)</h3>
            <p style="margin: 0; color: #666; font-size: 14px;">480px width</p>
          </div>
        </rte-card>
        <rte-card size="l" [cardType]="cardType" [clickable]="clickable" [disabled]="disabled">
          <div style="padding: 16px;">
            <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600;">Large (l)</h3>
            <p style="margin: 0; color: #666; font-size: 14px;">600px width</p>
          </div>
        </rte-card>
        <rte-card size="xl" [cardType]="cardType" [clickable]="clickable" [disabled]="disabled">
          <div style="padding: 16px;">
            <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600;">Extra Large (xl)</h3>
            <p style="margin: 0; color: #666; font-size: 14px;">720px width</p>
          </div>
        </rte-card>
      </div>
    `,
  }),
};

export const CardTypes: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <rte-card size="m" cardType="default" [clickable]="clickable" [disabled]="disabled">
          <div style="padding: 16px;">
            <h3 style="margin: 0 0 8px 0; font-size: 18px; font-weight: 600;">Default Card</h3>
            <p style="margin: 0; color: #666; line-height: 1.5;">
              This card uses the default styling with elevation shadow.
            </p>
          </div>
        </rte-card>
        <rte-card size="m" cardType="outlined" [clickable]="clickable" [disabled]="disabled">
          <div style="padding: 16px;">
            <h3 style="margin: 0 0 8px 0; font-size: 18px; font-weight: 600;">Outlined Card</h3>
            <p style="margin: 0; color: #666; line-height: 1.5;">
              This card uses outlined styling with a border instead of shadow.
            </p>
          </div>
        </rte-card>
      </div>
    `,
  }),
};

export const Clickable: Story = {
  args: {
    size: "m",
    cardType: "default",
    clickable: true,
    disabled: false,
  },
  render: (args) => ({
    props: {
      ...args,
      onCardClick() {
        console.log("Card clicked!");
        args.cardClicked();
      },
    },
    template: `
      <rte-card
        [size]="size"
        [cardType]="cardType"
        [clickable]="clickable"
        [disabled]="disabled"
        (click)="onCardClick()"
      >
        <div style="padding: 16px;">
          <h2 style="margin: 0 0 12px 0; font-size: 20px; font-weight: 600;">Clickable Card</h2>
          <p style="margin: 0 0 16px 0; color: #666; line-height: 1.5;">
            This card is clickable. Click anywhere on the card to trigger an action.
          </p>
          <p style="margin: 0; color: #999; font-size: 14px;">
            Check the console or Actions panel to see the click event.
          </p>
        </div>
      </rte-card>
    `,
  }),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const card = canvas.getByText("Clickable Card").closest(".card");
    if (card) {
      await userEvent.click(card);
      expect(args.cardClicked).toHaveBeenCalled();
    }
  },
};

export const Disabled: Story = {
  args: {
    size: "m",
    cardType: "default",
    clickable: true,
    disabled: true,
  },
  render: (args) => ({
    props: {
      ...args,
      onCardClick() {
        console.log("This should not be called when disabled");
        args.cardClicked();
      },
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <rte-card
          size="m"
          cardType="default"
          [clickable]="true"
          [disabled]="true"
          (click)="onCardClick()"
        >
          <div style="padding: 16px;">
            <h2 style="margin: 0 0 12px 0; font-size: 20px; font-weight: 600;">Disabled Default Card</h2>
            <p style="margin: 0; color: #666; line-height: 1.5;">
              This card is disabled and cannot be clicked.
            </p>
          </div>
        </rte-card>
        <rte-card
          size="m"
          cardType="outlined"
          [clickable]="true"
          [disabled]="true"
          (click)="onCardClick()"
        >
          <div style="padding: 16px;">
            <h2 style="margin: 0 0 12px 0; font-size: 20px; font-weight: 600;">Disabled Outlined Card</h2>
            <p style="margin: 0; color: #666; line-height: 1.5;">
              This outlined card is also disabled.
            </p>
          </div>
        </rte-card>
      </div>
    `,
  }),
  play: async ({ canvasElement }) => {
    const cards = canvasElement.querySelectorAll(".card");
    cards.forEach((card) => {
      expect(card).toHaveAttribute("disabled", "true");
    });
  },
};

export const WithButtons: Story = {
  decorators: [
    moduleMetadata({
      imports: [ButtonComponent],
    }),
  ],
  args: {
    size: "m",
    cardType: "default",
    clickable: false,
    disabled: false,
  },
  render: (args) => ({
    props: {
      ...args,
      onPrimaryClick() {
        console.log("Primary button clicked");
      },
      onSecondaryClick() {
        console.log("Secondary button clicked");
      },
      onNeutralClick() {
        console.log("Neutral button clicked");
      },
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <rte-card [size]="size" [cardType]="cardType" [clickable]="clickable" [disabled]="disabled">
          <div style="padding: 16px;">
            <h3 style="margin: 0 0 12px 0; font-size: 18px; font-weight: 600;">Primary Button</h3>
            <p style="margin: 0 0 16px 0; color: #666; line-height: 1.5;">
              Card with primary button variant
            </p>
            <button rteButton rteButtonVariant="primary" rteButtonSize="m" (click)="onPrimaryClick()">
              Primary Action
            </button>
          </div>
        </rte-card>
        <rte-card [size]="size" [cardType]="cardType" [clickable]="clickable" [disabled]="disabled">
          <div style="padding: 16px;">
            <h3 style="margin: 0 0 12px 0; font-size: 18px; font-weight: 600;">Secondary Button</h3>
            <p style="margin: 0 0 16px 0; color: #666; line-height: 1.5;">
              Card with secondary button variant
            </p>
            <button rteButton rteButtonVariant="secondary" rteButtonSize="m" (click)="onSecondaryClick()">
              Secondary Action
            </button>
          </div>
        </rte-card>
        <rte-card [size]="size" [cardType]="cardType" [clickable]="clickable" [disabled]="disabled">
          <div style="padding: 16px;">
            <h3 style="margin: 0 0 12px 0; font-size: 18px; font-weight: 600;">Multiple Buttons</h3>
            <p style="margin: 0 0 16px 0; color: #666; line-height: 1.5;">
              Card with multiple button actions
            </p>
            <div style="display: flex; gap: 8px;">
              <button rteButton rteButtonVariant="primary" rteButtonSize="m" (click)="onPrimaryClick()">
                Save
              </button>
              <button rteButton rteButtonVariant="neutral" rteButtonSize="m" (click)="onNeutralClick()">
                Cancel
              </button>
            </div>
          </div>
        </rte-card>
      </div>
    `,
  }),
};

export const ClickableWithContent: Story = {
  decorators: [
    moduleMetadata({
      imports: [ButtonComponent],
    }),
  ],
  args: {
    size: "m",
    cardType: "default",
    clickable: true,
    disabled: false,
  },
  render: (args) => ({
    props: {
      ...args,
      onCardClick() {
        console.log("Card clicked!");
        args.cardClicked();
      },
      onButtonClick(event: Event) {
        event.stopPropagation();
        console.log("Button clicked inside card");
      },
    },
    template: `
      <rte-card
        [size]="size"
        [cardType]="cardType"
        [clickable]="clickable"
        [disabled]="disabled"
        (click)="onCardClick()"
      >
        <div style="padding: 16px;">
          <h2 style="margin: 0 0 12px 0; font-size: 20px; font-weight: 600;">Clickable Card with Button</h2>
          <p style="margin: 0 0 16px 0; color: #666; line-height: 1.5;">
            This card is clickable. Click anywhere on the card to trigger the card click event.
            The button inside will stop propagation, so clicking it won't trigger the card click.
          </p>
          <button rteButton rteButtonVariant="primary" rteButtonSize="m" (click)="onButtonClick($event)">
            Action Button
          </button>
        </div>
      </rte-card>
    `,
  }),
};
