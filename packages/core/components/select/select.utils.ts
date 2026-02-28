import { OptionToDisplay } from "./select.interface";

export const getSelectedOption = (
  optionToDisplay: OptionToDisplay,
  options: { value: string; label: string }[],
  selectedValues: string | string[],
) => {
  if (Array.isArray(selectedValues)) {
    if (optionToDisplay === "first-selected") {
      return options.find((option) => option.value === selectedValues[0]);
    } else if (optionToDisplay === "last-selected") {
      return options.find((option) => option.value === selectedValues[selectedValues.length - 1]);
    } else {
      return options.find((option) =>
        Array.isArray(selectedValues) ? selectedValues.includes(option.value) : option.value === selectedValues,
      );
    }
  } else {
    return options.find((option) => option.value === selectedValues);
  }
};
