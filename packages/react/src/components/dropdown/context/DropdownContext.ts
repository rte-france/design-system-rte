import { createContext } from "react";

export const DropdownParentContext = createContext<{ dropdownId: string; autoClose: boolean } | undefined>(undefined);
