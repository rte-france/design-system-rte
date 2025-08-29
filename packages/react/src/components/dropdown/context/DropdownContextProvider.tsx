import { DropdownParentContext } from "./DropdownContext";

export const DropdownContextProvider = ({
  dropdownId,
  children,
}: {
  dropdownId: string;
  children: React.ReactNode;
}) => {
  return <DropdownParentContext.Provider value={dropdownId}>{children}</DropdownParentContext.Provider>;
};
