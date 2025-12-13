import { useReducer } from "react";
import { MenuContext } from "./menu.context";
import { menuReducer, initialMenuState } from "./menu.reducer";
import { SET_MENU, TOGGLE_SIDEBAR } from "./ActionType";

export function MenuProvider({ children }) {
  const [state, dispatch] = useReducer(menuReducer, initialMenuState);

  const value = {
    selectedMenuId: state.selectedMenuId,
    isSidebarOpen: state.isSidebarOpen,
    setMenu: (id) => dispatch({ type: SET_MENU, payload: id }),
    toggleSidebar: () => dispatch({ type: TOGGLE_SIDEBAR }),
  };

  return (
    <MenuContext.Provider value={value}>
      {children}
    </MenuContext.Provider>
  );
}
