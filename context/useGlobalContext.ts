import { createContext, useContext } from "react";
import type { TGlobalContext } from "@/lib/types";

export const GlobalContext = createContext<TGlobalContext | null>(null);

export function useGlobalContext() {
  const state = useContext(GlobalContext);
  if (!state)
    throw new Error("useGlobalContext must be used within GlobalContext");
  return state;
}
