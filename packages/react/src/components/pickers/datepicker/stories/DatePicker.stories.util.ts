import { expect, waitFor, within } from "@storybook/test";

export function expectCalendarGridStructure(grid: HTMLElement, columnCount: 3 | 7): void {
  const rows = within(grid).getAllByRole("row");
  const cells = within(grid).getAllByRole("gridcell");
  const headerRowCount = within(grid).queryAllByRole("columnheader").length > 0 ? 1 : 0;
  expect(rows).toHaveLength(Math.ceil(cells.length / columnCount) + headerRowCount);
  for (const row of rows) {
    expect(row.parentElement).toBe(grid);
  }
  for (const cell of cells) {
    expect(cell.parentElement).toHaveAttribute("role", "row");
  }
  rows.slice(headerRowCount).forEach((row, index) => {
    expect(within(row).getAllByRole("gridcell")).toHaveLength(
      Math.min(columnCount, cells.length - index * columnCount),
    );
  });
}

export function expectCalendarWeekdayHeaders(grid: HTMLElement, weekdayNames: string[]): void {
  expect(grid.tagName).toBe("DIV");
  const headers = within(grid).getAllByRole("columnheader");
  expect(headers).toHaveLength(weekdayNames.length);
  const buttons = within(grid).getAllByRole("gridcell");
  headers.forEach((header, index) => {
    expect(header.tagName).toBe("DIV");
    expect(header).toHaveAccessibleName(weekdayNames[index]);
    expect(header.childElementCount).toBe(0);
    expect(header).toHaveTextContent(weekdayNames[index][0].toUpperCase());
    expect(header).toBeVisible();
    const headerRect = header.getBoundingClientRect();
    const buttonRect = buttons[index].getBoundingClientRect();
    expect(Math.abs(headerRect.x + headerRect.width / 2 - buttonRect.x - buttonRect.width / 2)).toBeLessThan(1);
  });
  for (const button of buttons) {
    expect(button.getBoundingClientRect().width).toBeCloseTo(40);
    expect(button.getBoundingClientRect().height).toBeCloseTo(40);
  }
  if (buttons.length > 7) {
    expect(buttons[7].getBoundingClientRect().top - buttons[0].getBoundingClientRect().bottom).toBeCloseTo(4);
  }
}

export const calendarTriggerAccessibleName = /ouvrir le calendrier|changer la date/i;

export function normalizedDateInputValue(root: HTMLInputElement | null | undefined): string {
  return (root?.value ?? "").replace(/[\s\u200b]/g, "");
}

export const getDropdown = async () => {
  const overlay = document.getElementById("overlay-root");
  let dropdown!: HTMLElement;

  await waitFor(() => {
    const found = overlay?.querySelector("[data-dropdown-id]") as HTMLElement;
    if (!found) {
      throw new Error("Dropdown not found");
    }
    expect(found).toBeInTheDocument();
    dropdown = found;
    return found;
  });

  return dropdown;
};
