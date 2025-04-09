import { create } from '@storybook/theming/create';
import themes from './theme.json';

export const customThemes = {
  bleu_iceberg_light: create({
    base: 'light',
    brandTitle: 'Design System RTE',
    brandImage: '',
    appBg: themes.bleu_iceberg.light['background-default'],
    appContentBg: themes.bleu_iceberg.light['background-default'],
    appBorderColor: themes.bleu_iceberg.light['border-brand_default'],
    appBorderRadius: 6,
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',
    textColor: themes.bleu_iceberg.light['content-primary'],
    textInverseColor: themes.bleu_iceberg.light['content-primary_inverse'],
    barTextColor: themes.bleu_iceberg.light['content-primary'],
    barSelectedColor: themes.bleu_iceberg.light['content-brand_pressed'],
    barBg: themes.bleu_iceberg.light['background-default'],
    inputBg: themes.bleu_iceberg.light['background-default'],
    inputBorder: themes.bleu_iceberg.light['border-primary'],
    inputTextColor: themes.bleu_iceberg.light['content-primary'],
    inputBorderRadius: 4,
    colorPrimary: themes.bleu_iceberg.light['content-primary'],
    colorSecondary: themes.bleu_iceberg.light['background-brand_default'],
  }),

  bleu_iceberg_dark: create({
    base: 'dark',
    brandTitle: 'Design System RTE',
    brandImage: '',
    appBg: themes.bleu_iceberg.dark['background-default'],
    appContentBg: themes.bleu_iceberg.dark['background-default'],
    appBorderColor: themes.bleu_iceberg.dark['border-brand_default'],
    appBorderRadius: 6,
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',
    textColor: themes.bleu_iceberg.dark['content-primary'],
    textInverseColor: themes.bleu_iceberg.dark['content-primary_inverse'],
    barTextColor: themes.bleu_iceberg.dark['content-primary'],
    barSelectedColor: themes.bleu_iceberg.dark['content-brand_pressed'],
    barBg: themes.bleu_iceberg.dark['background-default'],
    inputBg: themes.bleu_iceberg.dark['background-default'],
    inputBorder: themes.bleu_iceberg.dark['border-primary'],
    inputTextColor: themes.bleu_iceberg.dark['content-primary'],
    inputBorderRadius: 4,
    colorPrimary: themes.bleu_iceberg.dark['content-primary'],
    colorSecondary: themes.bleu_iceberg.dark['background-brand_default'],
  }),

  vert_foret_light: create({
    base: 'light',
    brandTitle: 'Design System RTE',
    brandImage: '',
    appBg: themes.vert_foret.light['background-default'],
    appContentBg: themes.vert_foret.light['background-default'],
    appBorderColor: themes.vert_foret.light['border-brand_default'],
    appBorderRadius: 6,
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',
    textColor: themes.vert_foret.light['content-primary'],
    textInverseColor: themes.vert_foret.light['content-primary_inverse'],
    barTextColor: themes.vert_foret.light['content-primary'],
    barSelectedColor: themes.vert_foret.light['content-brand_pressed'],
    barBg: themes.vert_foret.light['background-default'],
    inputBg: themes.vert_foret.light['background-default'],
    inputBorder: themes.vert_foret.light['border-primary'],
    inputTextColor: themes.vert_foret.light['content-primary'],
    inputBorderRadius: 4,
    colorPrimary: themes.vert_foret.light['content-primary'],
    colorSecondary: themes.vert_foret.light['background-brand_default'],
  }),

  vert_foret_dark: create({
    base: 'dark',
    brandTitle: 'Design System RTE',
    brandImage: '',
    appBg: themes.vert_foret.dark['background-default'],
    appContentBg: themes.vert_foret.dark['background-default'],
    appBorderColor: themes.vert_foret.dark['border-brand_default'],
    appBorderRadius: 6,
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',
    textColor: themes.vert_foret.dark['content-primary'],
    textInverseColor: themes.vert_foret.dark['content-primary_inverse'],
    barTextColor: themes.vert_foret.dark['content-primary'],
    barSelectedColor: themes.vert_foret.dark['content-brand_pressed'],
    barBg: themes.vert_foret.dark['background-default'],
    inputBg: themes.vert_foret.dark['background-default'],
    inputBorder: themes.vert_foret.dark['border-primary'],
    inputTextColor: themes.vert_foret.dark['content-primary'],
    inputBorderRadius: 4,
    colorPrimary: themes.vert_foret.dark['content-primary'],
    colorSecondary: themes.vert_foret.dark['background-brand_default'],
  }),

  violet_light: create({
    base: 'light',
    brandTitle: 'Design System RTE',
    brandImage: '',
    appBg: themes.violet.light['background-default'],
    appContentBg: themes.violet.light['background-default'],
    appBorderColor: themes.violet.light['border-brand_default'],
    appBorderRadius: 6,
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',
    textColor: themes.violet.light['content-primary'],
    textInverseColor: themes.violet.light['content-primary_inverse'],
    barTextColor: themes.violet.light['content-primary'],
    barSelectedColor: themes.violet.light['content-brand_pressed'],
    barBg: themes.violet.light['background-default'],
    inputBg: themes.violet.light['background-default'],
    inputBorder: themes.violet.light['border-primary'],
    inputTextColor: themes.violet.light['content-primary'],
    inputBorderRadius: 4,
    colorPrimary: themes.violet.light['content-primary'],
    colorSecondary: themes.violet.light['background-brand_default'],
  }),

  violet_dark: create({
    base: 'dark',
    brandTitle: 'Design System RTE',
    brandImage: '',
    appBg: themes.violet.dark['background-default'],
    appContentBg: themes.violet.dark['background-default'],
    appBorderColor: themes.violet.dark['border-brand_default'],
    appBorderRadius: 6,
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',
    textColor: themes.violet.dark['content-primary'],
    textInverseColor: themes.violet.dark['content-primary_inverse'],
    barTextColor: themes.violet.dark['content-primary'],
    barSelectedColor: themes.violet.dark['content-brand_pressed'],
    barBg: themes.violet.dark['background-default'],
    inputBg: themes.violet.dark['background-default'],
    inputBorder: themes.violet.dark['border-primary'],
    inputTextColor: themes.violet.dark['content-primary'],
    inputBorderRadius: 4,
    colorPrimary: themes.violet.dark['content-primary'],
    colorSecondary: themes.violet.dark['background-brand_default'],
  }),
};
