import { ElementType, ReactNode } from "react";

import { NavigationContext } from "./NavigationContext";

interface NavigationProviderProps {
  linkComponent?: ElementType;
  children: ReactNode;
}

const NavigationProvider = ({ linkComponent = "a", children }: NavigationProviderProps) => {
  return <NavigationContext.Provider value={linkComponent}>{children}</NavigationContext.Provider>;
};

export default NavigationProvider;
