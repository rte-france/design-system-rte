import { DropdownParentContext } from "./DropdownContext";

export const DropdownContextProvider = ({
  dropdownId,
  closeRoot,
  autoClose = true,
  children,
}: {
  dropdownId: string;
  autoClose?: boolean;
  closeRoot: () => void;
  children: React.ReactNode;
}) => {
  return (
    <DropdownParentContext.Provider value={{ dropdownId, closeRoot, autoClose }}>
      {children}
    </DropdownParentContext.Provider>
  );
};
