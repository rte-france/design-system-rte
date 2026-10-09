/** @deprecated Prefer `ButtonAppearance`, `ButtonHierarchy`, `ButtonIsCritical`, and `ButtonIsReversed`. */
export type ButtonVariant = "primary" | "secondary" | "text" | "transparent" | "danger" | "neutral" | "reverse";
export type ButtonSize = "s" | "m" | "l";
export type ButtonAppearance = "brand" | "neutral";
export type ButtonHierarchy = "primary" | "secondary" | "text" | "transparent";
/** `brand` and `neutral` describe the button shell. `outlined` and `filled` are a deprecated alias of `iconAppearance`. */
export type IconButtonAppearanceInput = ButtonAppearance | "outlined" | "filled";
