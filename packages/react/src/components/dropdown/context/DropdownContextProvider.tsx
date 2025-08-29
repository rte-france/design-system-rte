import { DropdownParentContext } from "./DropdownContext";

export const DropdownContextProvider = ({
  dropdownId,
  autoClose,
  children,
}: {
  dropdownId: string;
  autoClose: boolean;
  children: React.ReactNode;
}) => {
  return <DropdownParentContext.Provider value={{ dropdownId, autoClose }}>{children}</DropdownParentContext.Provider>;
};
