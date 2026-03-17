export type AccordionAppearance = "brand" | "neutral";
export type AccordionAlignement = "left" | "right";
export type AccordionSize = "small" | "large";

export interface AccordionProps {
  id?: string;
  title: string;
  appearance?: AccordionAppearance;
  alignement?: AccordionAlignement;
  compactSpacing?: boolean;
  icon?: string;
  disabled?: boolean;
  isOpen?: boolean;
  size?: AccordionSize;
}
