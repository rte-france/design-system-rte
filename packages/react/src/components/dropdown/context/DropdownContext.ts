import { createContext } from "react";

export const DropdownParentContext = createContext<
  { dropdownId: string; closeRoot: () => void; autoClose: boolean } | undefined
>(undefined);
