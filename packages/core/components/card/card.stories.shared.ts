import type { CardType } from "./card.interface";
import { DEFAULT_CARD_WIDTH } from "./card.constats";

export interface CardStoryArgTypes {
  width: {
    control: "text";
    description: string;
  };
  cardType: {
    control: "select";
    options: CardType[];
    description: string;
  };
  clickable: {
    control: "boolean";
    description: string;
  };
  disabled: {
    control: "boolean";
    description: string;
  };
}

export const cardStoryArgTypes: CardStoryArgTypes = {
  width: {
    control: "text",
    description: "Width of the card (e.g. '480px', '50%'). Defaults to 480px.",
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
};

export interface WidthExample {
  label: string;
  width: string;
}

export const widthExamples: WidthExample[] = [
  { label: "Extra Small", width: "240px" },
  { label: "Small", width: "360px" },
  { label: "Medium", width: "480px" },
  { label: "Large", width: "600px" },
  { label: "Extra Large", width: "720px" },
];

export interface CardTypeExample {
  cardType: CardType;
  title: string;
  description: string;
}

export const cardTypeExamples: CardTypeExample[] = [
  {
    cardType: "default",
    title: "Default Card",
    description: "This card uses the default styling with elevation shadow.",
  },
  {
    cardType: "outlined",
    title: "Outlined Card",
    description: "This card uses outlined styling with a border instead of shadow.",
  },
];

export interface DefaultStoryArgs {
  width: string;
  cardType: CardType;
  clickable: boolean;
  disabled: boolean;
}

export const defaultStoryArgs: DefaultStoryArgs = {
  width: DEFAULT_CARD_WIDTH,
  cardType: "default",
  clickable: false,
  disabled: false,
};

export interface ClickableStoryArgs extends DefaultStoryArgs {
  clickable: true;
}

export const clickableStoryArgs: ClickableStoryArgs = {
  ...defaultStoryArgs,
  clickable: true,
};

export interface DisabledStoryArgs extends DefaultStoryArgs {
  clickable: true;
  disabled: true;
}

export const disabledStoryArgs: DisabledStoryArgs = {
  ...defaultStoryArgs,
  clickable: true,
  disabled: true,
};
