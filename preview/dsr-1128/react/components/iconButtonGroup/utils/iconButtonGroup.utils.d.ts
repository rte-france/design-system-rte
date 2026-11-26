import { DividerAppearance } from '../../../../../core';
type DividerAppearanceConfig = {
    leftActive: boolean;
    rightActive: boolean;
    leftDisabled?: boolean;
    rightDisabled?: boolean;
    appearance: "brand" | "neutral";
    isDisabled?: boolean;
};
export declare const computedDividerAppearance: ({ leftActive, rightActive, leftDisabled, rightDisabled, isDisabled, appearance, }: DividerAppearanceConfig) => DividerAppearance;
export {};
