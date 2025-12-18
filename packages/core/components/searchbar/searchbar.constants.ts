import { SearchBarAppearance } from "./searchbar.interface";

export const DROPDOWN_OFFSET = 10;
export const SEARCHBAR_PADDING_LEFT = "8px";
export const SEARCHBAR_BUTTON_WIDTH = "44px";
export const SEARCHBAR_BUTTON_HEIGHT_COMPACT = "24px";
export const SEARCHBAR_BORDER_RADIUS = "8px";

export const APPEARANCE_CONFIG: Record<SearchBarAppearance, { showSearchButton: boolean; showLeftIcon: boolean }> = {
  primary: {
    showSearchButton: true,
    showLeftIcon: false,
  },
  secondary: {
    showSearchButton: false,
    showLeftIcon: true,
  },
};
