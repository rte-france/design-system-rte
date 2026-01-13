import { createContext, ReactNode, useContext } from "react";

interface FrameworkContextValue {
  framework: "angular" | "react";
}

const FrameworkContext = createContext<FrameworkContextValue | null>(null);

export function useFrameworkContext(): FrameworkContextValue {
  const context = useContext(FrameworkContext);
  return context || { framework: "react" };
}

interface FrameworkProviderProps {
  framework: "angular" | "react";
  children: ReactNode;
}

export function FrameworkProvider({ framework, children }: FrameworkProviderProps) {
  return <FrameworkContext.Provider value={{ framework }}>{children}</FrameworkContext.Provider>;
}
