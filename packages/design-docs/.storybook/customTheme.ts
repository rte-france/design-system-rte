import { create } from "@storybook/theming/create";

import themes from "./theme.json";

const baseTheme = {
  brandTitle: "Design System RTE",
  brandImage: "",
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",
  inputBorderRadius: 4,
  appBorderRadius: 6,
};

function createTheme(themeName: string, mode: "light" | "dark") {
  return create({
    ...baseTheme,
    base: mode,
    appBg: themes[themeName][mode]["background-default"],
    appContentBg: themes[themeName][mode]["background-default"],
    appBorderColor: themes[themeName][mode]["border-brand-default"],
    textColor: themes[themeName][mode]["content-primary"],
    textInverseColor: themes[themeName][mode]["content-primary-inverse"],
    barTextColor: themes[themeName][mode]["content-primary"],
    barSelectedColor: themes[themeName][mode]["content-brand-press"],
    barBg: themes[themeName][mode]["background-default"],
    inputBg: themes[themeName][mode]["background-default"],
    inputBorder: themes[themeName][mode]["border-primary"],
    inputTextColor: themes[themeName][mode]["content-primary"],
    colorPrimary: themes[themeName][mode]["content-primary"],
    colorSecondary: themes[themeName][mode]["background-brand-default"],
  });
}

export const customThemes = {
  bleu_iceberg_light: createTheme("bleu_iceberg", "light"),
  bleu_iceberg_dark: createTheme("bleu_iceberg", "dark"),

  vert_foret_light: createTheme("vert_foret", "light"),
  vert_foret_dark: createTheme("vert_foret", "dark"),

  violet_light: createTheme("violet", "light"),
  violet_dark: createTheme("violet", "dark"),
};
