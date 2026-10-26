import { DividerAppearance } from '../../../../../core';
type DividerAppearanceConfig = {
    leftActive: boolean;
    rightActive: boolean;
    appearance: "brand" | "neutral";
    isDisabled?: boolean;
};
export declare const computedDividerAppearance: ({ leftActive, rightActive, isDisabled, appearance, }: DividerAppearanceConfig) => DividerAppearance;
export {};
