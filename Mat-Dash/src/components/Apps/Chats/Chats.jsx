import Sidebar from "./Sidebar";
import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import Breadcrumb from "../../Breadcrumb";
import { useChat } from "../../../Context/Chats/useChat";

const ChatsApp = () => {
  const {
    activeChat,
    isSidebarOpen,
    toggleSidebar,
  } = useChat();

  if (!activeChat) return null;

  return (
    <>
      <Breadcrumb title="Chat" />

      <div className="flex bg-gray-50 w-full h-[420px] rounded-xl overflow-hidden shadow relative">
        <Sidebar />

        <div className="flex flex-col flex-1 relative">
          {isSidebarOpen && (
            <div
              onClick={toggleSidebar}
              className="absolute inset-0 bg-black/30 z-20 md:hidden"
            />
          )}

          <ChatHeader chat={activeChat} />
          <MessageList />

          <MessageInput />
        </div>
      </div>
    </>
  );
}
export default ChatsApp