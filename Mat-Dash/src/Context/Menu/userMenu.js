import { useContext } from "react";
import { MenuContext } from "./menu.context";

export function useMenu() {
  const ctx = useContext(MenuContext);
  if (!ctx) throw new Error("useMenu must be inside MenuProvider");
  return ctx;
}
