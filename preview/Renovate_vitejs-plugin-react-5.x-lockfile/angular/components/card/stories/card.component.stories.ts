import {
  cardStoryArgTypes,
  sizeExamples,
  cardTypeExamples,
  defaultStoryArgs,
  clickableStoryArgs,
  disabledStoryArgs,
} from "@design-system-rte/core/components/card/card.stories.shared";
import type { Meta, StoryObj } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";
import { fn, userEvent, within, expect } from "@storybook/test";

import { ButtonComponent } from "../../button/button.component";
import { CardComponent } from "../card.component";

const meta: Meta<CardComponent> = {
  title: "Composants/Card",
  component: CardComponent,
  tags: ["autodocs"],
  argTypes: {
    ...cardStoryArgTypes,
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
  args: defaultStoryArgs,
  render: (args) => ({
    props: args,
    template: `
      <rte-card
        [size]="size"
        [cardType]="cardType"
        [clickable]="clickable"
        [disabled]="disabled"
        (cardClicked)="cardClicked()"
      >
        ${defaultContent}
      </rte-card>
    `,
  }),
};

function generateSizesTemplate(examples: typeof sizeExamples): string {
  return examples
    .map(
      (example) => `
        <rte-card size="${example.size}" [cardType]="cardType" [clickable]="clickable" [disabled]="disabled">
          <div style="padding: 16px;">
            <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600;">${example.label}</h3>
            <p style="margin: 0; color: #666; font-size: 14px;">${example.width}</p>
          </div>
        </rte-card>`,
    )
    .join("");
}

export const Sizes: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        ${generateSizesTemplate(sizeExamples)}
      </div>
    `,
  }),
};

function generateCardTypesTemplate(examples: typeof cardTypeExamples): string {
  return examples
    .map(
      (example) => `
        <rte-card size="m" cardType="${example.cardType}" [clickable]="clickable" [disabled]="disabled">
          <div style="padding: 16px;">
            <h3 style="margin: 0 0 8px 0; font-size: 18px; font-weight: 600;">${example.title}</h3>
            <p style="margin: 0; color: #666; line-height: 1.5;">
              ${example.description}
            </p>
          </div>
        </rte-card>`,
    )
    .join("");
}

export const CardTypes: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        ${generateCardTypesTemplate(cardTypeExamples)}
      </div>
    `,
  }),
};

export const Clickable: Story = {
  args: clickableStoryArgs,
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
        (cardClicked)="onCardClick()"
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
  args: disabledStoryArgs,
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
          (cardClicked)="onCardClick()"
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
          (cardClicked)="onCardClick()"
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
  args: defaultStoryArgs,
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
  args: clickableStoryArgs,
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
        (cardClicked)="onCardClick()"
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
