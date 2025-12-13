import { SET_MENU, TOGGLE_SIDEBAR } from "./ActionType";

export const initialMenuState = {
  selectedMenuId: Number(localStorage.getItem("selectedMenuId") || 1),
  isSidebarOpen: true,
};

export function menuReducer(state, action) {
  switch (action.type) {
    case SET_MENU:
      return { ...state, selectedMenuId: action.payload };

    case TOGGLE_SIDEBAR:
      return { ...state, isSidebarOpen: !state.isSidebarOpen };

    default:
      return state;
  }
}
