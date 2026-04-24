import { expect, waitFor } from "@storybook/test";

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
