import { SET_CHATS, SET_ACTIVE, TOGGLE_SIDEBAR, SET_SEARCH, SEND_MESSAGE } from "./ActionType";

export const initialChatState = {
    chats: [],
    activeId: 1,
    isSidebarOpen: true,
    searchChat: "",
};

export function chatReducer(state, action) {
    console.log("ACTION ", action);
    console.log("STATE ", state);

    switch (action.type) {
        case SET_CHATS:
            return { ...state, chats: action.payload };

        case SET_ACTIVE:
            return { ...state, activeId: action.payload };

        case TOGGLE_SIDEBAR:
            return { ...state, isSidebarOpen: !state.isSidebarOpen };

        case SET_SEARCH:
            return { ...state, searchChat: action.payload };

        case SEND_MESSAGE:
            return {
                ...state,
                chats: state.chats.map(chat =>
                    chat.id === state.activeId
                        ? {
                            ...chat,
                            messages: [
                                ...chat.messages,
                                {
                                    id: Date.now(),
                                    text: action.payload,
                                    sender: "me",
                                },
                            ],
                        }
                        : chat
                ),
            };

        default:
            return state;
    }
}
