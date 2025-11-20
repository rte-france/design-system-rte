import type { Size } from "../common/common-types";

import type { CardType } from "./card.interface";

export interface CardStoryArgTypes {
  size: {
    control: "select";
    options: Size[];
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
};

export interface SizeExample {
  size: Size;
  label: string;
  width: string;
}

export const sizeExamples: SizeExample[] = [
  { size: "xs", label: "Extra Small (xs)", width: "240px width" },
  { size: "s", label: "Small (s)", width: "360px width" },
  { size: "m", label: "Medium (m)", width: "480px width" },
  { size: "l", label: "Large (l)", width: "600px width" },
  { size: "xl", label: "Extra Large (xl)", width: "720px width" },
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
  size: Size;
  cardType: CardType;
  clickable: boolean;
  disabled: boolean;
}

export const defaultStoryArgs: DefaultStoryArgs = {
  size: "m",
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
