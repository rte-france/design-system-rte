import { createContext, ElementType, useContext } from "react";

export const NavigationContext = createContext<ElementType>("a");

export const useNavigationLinkComponent = (): ElementType => useContext(NavigationContext);
