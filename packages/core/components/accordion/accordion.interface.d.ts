type AccordionAppearance = "brand" | "neutral";
type AccordionAlignement = "left" | "right";
type AccordionSize = "small" | "large";

export interface AccordionProps {
  id?: string;
  appearance?: AccordionAppearance;
  alignement?: AccordionAlignement;
  compactSpacing?: boolean;
  icon?: string;
  disabled?: boolean;
  isOpen?: boolean;
  size?: AccordionSize;
}
