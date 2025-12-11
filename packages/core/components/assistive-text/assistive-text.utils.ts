export const getIconNameFromAppearance = (appearance: string) => {
  if (appearance === "error") {
    return "error";
  } else if (appearance === "success") {
    return "check-circle";
  }
  return undefined;
};
