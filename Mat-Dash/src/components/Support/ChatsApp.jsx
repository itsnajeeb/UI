import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import { useChat } from "../../Context/Chats/useChat";
import Breadcrumb from "../Breadcrumb";

const ChatsApp = () => {
  const {
    activeChat,
    isSidebarOpen,
    toggleSidebar,
  } = useChat();

  if (!activeChat) return null;

  return (
    <>
      <Breadcrumb title="Support" />
      <div className="bg-white py-6 px-8 rounded-xl manrope-fontFamliy space-y-2">
        <h1 className="text-xl font-semibold bg-[#c9e7ff] w-fit px-3 py-1 rounded-xl text-[#065ba1]">Welcome, Najeeb! </h1>
        <h1 className="text-2xl font-extrabold ml-2 text-gray-400/90">How can I help you today? </h1>
      </div>
      <div className="flex bg-gray-50 w-full h-[420px] rounded-xl overflow-hidden shadow relative">
        {/* <Sidebar /> */}

        <div className="flex flex-col flex-1 relative">
          {isSidebarOpen && (
            <div
              onClick={toggleSidebar}
              className="absolute inset-0 bg-black/30 z-20 md:hidden"
            />
          )}

          {/* <ChatHeader chat={activeChat} /> */}
          <MessageList />

          <MessageInput />
        </div>
      </div>
    </>
  );
}
export default ChatsApp