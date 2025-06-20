import fs from "fs";

import { describe, it, expect, vi, beforeEach } from "vitest";

import { Collection, generatePrimitivesScssFiles } from "./primitives-generator";

vi.mock("fs");

describe("primitives-generator", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("génère correctement les variables SCSS pour les couleurs", () => {
    const colorCollection = [
      {
        collection: Collection.COLORS,
        variables: {
          bleu: {
            100: { $value: "#abcdef" },
            200: { $value: "#123456" },
          },
          rouge: {
            500: { $value: "#ff0000" },
          },
        },
      },
    ];

    const writeSpy = vi.spyOn(fs, "writeFileSync");

    vi.spyOn(fs, "existsSync").mockReturnValue(true);

    vi.spyOn(fs, "readFileSync").mockReturnValue(colorCollection.toString());

    generatePrimitivesScssFiles(colorCollection);

    expect(writeSpy).toHaveBeenCalledWith(
      expect.stringContaining("_colors.scss"),
      expect.stringContaining("$bleu-100: #abcdef;"),
    );
    expect(writeSpy).toHaveBeenCalledWith(
      expect.stringContaining("_colors.scss"),
      expect.stringContaining("$rouge-500: #ff0000;"),
    );
  });

  it("génère correctement les variables SCSS pour la typo", () => {
    const typoCollection = [
      {
        collection: Collection.TYPOGRAPHY,
        variables: {
          "font-weight": {
            bold: { $value: "700" },
          },
          "font-family": {
            main: { $value: "Nunito" },
          },
          "font-size": {
            small: { $value: "12" },
          },
        },
      },
    ];

    const writeSpy = vi.spyOn(fs, "writeFileSync");
    vi.spyOn(fs, "existsSync").mockReturnValue(true);

    generatePrimitivesScssFiles(typoCollection);

    expect(writeSpy).toHaveBeenCalledWith(
      expect.stringContaining("_typography.scss"),
      expect.stringContaining("$font-weight-bold: 700;"),
    );
    expect(writeSpy).toHaveBeenCalledWith(
      expect.stringContaining("_typography.scss"),
      expect.stringContaining('$font-family-main: "Nunito";'),
    );
    expect(writeSpy).toHaveBeenCalledWith(
      expect.stringContaining("_typography.scss"),
      expect.stringContaining("$font-size-small: 12px;"),
    );
  });
});
