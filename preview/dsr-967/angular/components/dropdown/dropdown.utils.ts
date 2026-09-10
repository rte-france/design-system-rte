import { DropdownManager } from "@design-system-rte/core/components/dropdown/DropdownManager";

export const focusNextElement = (dropdown: HTMLElement) => {
  const menuItems = getDropdownMenuItems(dropdown);
  const activeElementIndex = menuItems.indexOf(document.activeElement as HTMLElement);

  if (activeElementIndex < menuItems.length - 1) {
    const nextElement = menuItems[activeElementIndex + 1];
    nextElement.focus();
  } else {
    menuItems[0]?.focus();
  }
};

export const focusPreviousElement = (dropdown: HTMLElement) => {
  const menuItems = getDropdownMenuItems(dropdown);
  const activeElementIndex = menuItems.indexOf(document.activeElement as HTMLElement);

  if (activeElementIndex > 0) {
    const previousElement = menuItems[activeElementIndex - 1];
    previousElement.focus();
  } else {
    menuItems.at(-1)?.focus();
  }
};

export const focusDropdownFirstElement = (dropdownId: string) => {
  const childDropdown = document.querySelector(`[data-menu-id='${dropdownId}']`);
  if (childDropdown) {
    const allChildDropdownElement = childDropdown?.querySelectorAll<HTMLElement>('li[role="menuitem"]');
    allChildDropdownElement[0]?.focus();
  }
};

export const focusParentDropdownFirstElement = (dropdownId: string) => {
  const parentDropdownId = DropdownManager.getParentDropdownId(dropdownId);
  const parentDropdown = document.querySelector(`[data-menu-id='${parentDropdownId}']`);
  parentDropdown?.querySelector<HTMLElement>("[data-active=true]")?.focus();
};

const getDropdownMenuItems = (dropdown: HTMLElement) => {
  const allDropdownElement = dropdown?.querySelectorAll<HTMLElement>('li[role="menuitem"]');
  return allDropdownElement ? Array.from(allDropdownElement) : [];
};
