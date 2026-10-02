import { describe, expect, it } from "vitest";

import { DRAWER_MISSING_CONTENT_ERROR } from "./drawer.constants";
import { getDrawerConfigurationIssues } from "./drawer.utils";

const validBase = {
  hasCustomHeader: false,
  hasTitle: true,
  hasCustomFooter: false,
  hasPrimaryButtonLabel: true,
  position: "modal" as const,
  hasMainContent: false,
  showHeader: true,
  showFooter: true,
  hasAriaLabel: false,
};

describe("getDrawerConfigurationIssues", () => {
  it("skips the content rule when hasDrawerContent is null", () => {
    expect(
      getDrawerConfigurationIssues({
        ...validBase,
        hasDrawerContent: null,
      }),
    ).toBeUndefined();
  });

  it("skips the content rule when hasDrawerContent is omitted", () => {
    expect(getDrawerConfigurationIssues(validBase)).toBeUndefined();
  });

  it("reports missing content when hasDrawerContent is false", () => {
    expect(
      getDrawerConfigurationIssues({
        ...validBase,
        hasDrawerContent: false,
      }),
    ).toBe(DRAWER_MISSING_CONTENT_ERROR);
  });

  it("normalizes legacy Drawer: prefixes in issue messages", () => {
    expect(
      getDrawerConfigurationIssues({
        ...validBase,
        hasDrawerContent: true,
        showFooter: true,
        hasPrimaryButtonLabel: false,
      }),
    ).toBe("You must provide either a primaryButtonLabel or a custom footer.");
  });
});
