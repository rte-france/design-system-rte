import { describe, expect, it } from "vitest";

import { computeVisibleTabCount } from "./dynamic-tab-overflow.utils";

describe("computeVisibleTabCount", () => {
  it("shows all tabs at preferred 15% width when space allows", () => {
    const result = computeVisibleTabCount(1000, 5);

    expect(result.hasOverflow).toBe(false);
    expect(result.maxVisibleTabs).toBe(5);
    expect(result.tabWidth).toBe(150);
  });

  it("shrinks tabs equally before triggering overflow", () => {
    const result = computeVisibleTabCount(1000, 19);

    expect(result.hasOverflow).toBe(false);
    expect(result.maxVisibleTabs).toBe(19);
    expect(result.tabWidth).toBeCloseTo(956 / 19, 5);
  });

  it("triggers overflow when tabs cannot fit at 44px minimum", () => {
    const result = computeVisibleTabCount(1000, 22);

    expect(result.hasOverflow).toBe(true);
    expect(result.maxVisibleTabs).toBe(18);
    expect(result.tabWidth).toBeCloseTo(812 / 18, 5);
  });

  it("uses 44px minimum width on narrow containers", () => {
    const result = computeVisibleTabCount(400, 3);

    expect(result.hasOverflow).toBe(false);
    expect(result.maxVisibleTabs).toBe(3);
    expect(result.tabWidth).toBeCloseTo(356 / 3, 5);
  });
});
