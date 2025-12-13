import { useReducer, useMemo } from "react";
import chatData from "../../data/chats.js";
import { ChatContext } from "./chat.context";
import { chatReducer, initialChatState } from "./chat.reducer";
import { SEND_MESSAGE, SET_ACTIVE, SET_SEARCH, TOGGLE_SIDEBAR } from "./ActionType";

export function ChatProvider({ children }) {
  const [state, dispatch] = useReducer(chatReducer, {
    ...initialChatState,
    chats: chatData,
  });
  

  const filteredChats = useMemo(() => {
    return state.chats.filter(chat =>
      chat.name.toLowerCase().includes(
        state.searchChat.trim().toLowerCase()
      )
    );
  }, [state.chats, state.searchChat]);

  const activeChat = state.chats.find(
    chat => chat.id === state.activeId
  );

  const value = {
    chats: filteredChats,
    activeChat,
    activeId: state.activeId,
    isSidebarOpen: state.isSidebarOpen,
    searchChat: state.searchChat,

    setActiveId: id =>
      dispatch({ type: SET_ACTIVE, payload: id }),

    toggleSidebar: () =>
      dispatch({ type: TOGGLE_SIDEBAR }),

    setSearchChat: value =>
      dispatch({ type: SET_SEARCH, payload: value }),

    sendMessage: text =>
      dispatch({ type: SEND_MESSAGE, payload: text }),
  };

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  );
}
