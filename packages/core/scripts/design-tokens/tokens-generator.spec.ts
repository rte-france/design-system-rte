import fs from "fs";

import { describe, it, expect, vi, beforeEach } from "vitest";

import { Collection, generateTokensScssFiles } from "./tokens-generator";
import { ColorMode, generateThemeIndexScssFile } from "./tokens-generators/colors";

vi.mock("fs");

describe("tokens-generator", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("génère correctement un fichier SCSS de couleurs pour un mode", () => {
    const colorTokens = [
      {
        collection: Collection.COLORS,
        mode: ColorMode.BLEU_ICEBERG_LIGHT,
        variables: {
          background: {
            default: { $type: "color", $scopes: [], $value: "Semantic.bleu-iceberg-light.bleu-100" },
            hover: { $type: "color", $scopes: [], $value: "Semantic.bleu-iceberg-light.bleu-200" },
          },
          border: {
            primary: { $type: "color", $scopes: [], $value: "Semantic.bleu-iceberg-light.rouge-500" },
          },
        },
      },
    ];
    const writeSpy = vi.spyOn(fs, "writeFileSync");
    generateTokensScssFiles(colorTokens);
    expect(writeSpy).toHaveBeenCalledWith(
      expect.stringContaining("bleu-iceberg-light.scss"),
      expect.stringContaining('"background-default": $bleu-100,'),
    );
    expect(writeSpy).toHaveBeenCalledWith(
      expect.stringContaining("bleu-iceberg-light.scss"),
      expect.stringContaining('"background-hover": $bleu-200,'),
    );
  });

  it("génère correctement le fichier _main.scss pour les thèmes", () => {
    const writeSpy = vi.spyOn(fs, "writeFileSync");
    generateThemeIndexScssFile();
    expect(writeSpy).toHaveBeenCalledWith(
      expect.stringContaining("themes/_main.scss"),
      expect.stringContaining('@forward "bleu-iceberg-light";'),
    );
    expect(writeSpy).toHaveBeenCalledWith(
      expect.stringContaining("themes/_main.scss"),
      expect.stringContaining('@forward "vert-foret-dark";'),
    );
  });

  it("génère correctement un fichier SCSS de typo", () => {
    const typoTokens = [
      {
        collection: Collection.TYPOGRAPHY,
        mode: "desktop",
        variables: {
          heading: {
            xl: {
              bold: {
                main: { $type: "typography", $scopes: [], $value: "Type.desktop.heading.xl.bold.main" },
              },
            },
          },
        },
      },
    ];
    const writeSpy = vi.spyOn(fs, "writeFileSync");
    generateTokensScssFiles(typoTokens);
    expect(writeSpy).toHaveBeenCalledWith(
      expect.stringContaining("_typography.scss"),
      expect.stringContaining("$heading-xl-bold-main: $heading-xl-bold-main;"),
    );
  });

  it("génère correctement un fichier SCSS d'opacité", () => {
    const opacityTokens = [
      {
        collection: Collection.OPACITY,
        mode: "",
        variables: {
          "80%": { $type: "opacity", $scopes: [], $value: 0.8 },
          "50%": { $type: "opacity", $scopes: [], $value: 0.5 },
        },
      },
    ];
    const writeSpy = vi.spyOn(fs, "writeFileSync");
    generateTokensScssFiles(opacityTokens);
    expect(writeSpy).toHaveBeenCalledWith(
      expect.stringContaining("_opacity.scss"),
      expect.stringContaining("$opacity-80: 80%;"),
    );
    expect(writeSpy).toHaveBeenCalledWith(
      expect.stringContaining("_opacity.scss"),
      expect.stringContaining("$opacity-50: 50%;"),
    );
  });

  it("génère correctement un fichier SCSS de shadow", () => {
    const shadowTokens = [
      {
        collection: Collection.SHADOWS,
        mode: "",
        variables: {
          elevation: {
            shadow1: { $type: "shadow", $scopes: [], $value: "0 1px 2px #00000033" },
            shadow2: { $type: "shadow", $scopes: [], $value: "0 2px 4px #00000033" },
          },
        },
      },
    ];
    const writeSpy = vi.spyOn(fs, "writeFileSync");
    generateTokensScssFiles(shadowTokens);
    expect(writeSpy).toHaveBeenCalledWith(
      expect.stringContaining("_shadows.scss"),
      expect.stringContaining("$elevation-shadow1: 0 1px 2px #00000033;"),
    );
    expect(writeSpy).toHaveBeenCalledWith(
      expect.stringContaining("_shadows.scss"),
      expect.stringContaining("$elevation-shadow2: 0 2px 4px #00000033;"),
    );
  });

  it("génère correctement un fichier SCSS de layout", () => {
    const layoutTokens = [
      {
        collection: Collection.LAYOUT,
        mode: "",
        variables: {
          spacing: {
            sm: { $type: "layout", $scopes: [], $value: 8 },
            md: { $type: "layout", $scopes: [], $value: 16 },
          },
          "column-number": {
            default: { $type: "layout", $scopes: [], $value: 12 },
          },
        },
      },
    ];
    const writeSpy = vi.spyOn(fs, "writeFileSync");
    generateTokensScssFiles(layoutTokens);
    expect(writeSpy).toHaveBeenCalledWith(
      expect.stringContaining("_layout.scss"),
      expect.stringContaining("$spacing-sm: 8px;"),
    );
    expect(writeSpy).toHaveBeenCalledWith(
      expect.stringContaining("_layout.scss"),
      expect.stringContaining("$spacing-md: 16px;"),
    );
    expect(writeSpy).toHaveBeenCalledWith(
      expect.stringContaining("_layout.scss"),
      expect.stringContaining("$column-number-default: 12;"),
    );
  });

  it("génère correctement un fichier SCSS pour le cas par défaut (DefaultToken)", () => {
    const defaultTokens = [
      {
        collection: Collection.SPACING,
        mode: "",
        variables: {
          space: {
            sm: { $type: "spacing", $scopes: [], $value: 4 },
            md: { $type: "spacing", $scopes: [], $value: 8 },
          },
        },
      },
    ];
    const writeSpy = vi.spyOn(fs, "writeFileSync");
    generateTokensScssFiles(defaultTokens);
    expect(writeSpy).toHaveBeenCalledWith(
      expect.stringContaining("_spacing.scss"),
      expect.stringContaining("$space-sm: 4px;"),
    );
    expect(writeSpy).toHaveBeenCalledWith(
      expect.stringContaining("_spacing.scss"),
      expect.stringContaining("$space-md: 8px;"),
    );
  });
});
