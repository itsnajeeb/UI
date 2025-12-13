import { Search, X } from "lucide-react";
import { useChat } from "../../../Context/Chats/useChat";

export default function Sidebar() {
  const {
    chats,
    activeId,
    setActiveId,
    isSidebarOpen,
    toggleSidebar,
    searchChat,
    setSearchChat,
  } = useChat();

  const tabHandler = (id) => {
    setActiveId(id);

    // this will close sidebar in mobile 
    if (window.matchMedia("(max-width: 768px)").matches) {
      toggleSidebar();
    }
  };

  return (
    <div
      className={`
        bg-white py-5 overflow-y-scroll sliding-panel-scroll
        transition-all duration-300

        /* MOBILE DRAWER */
        absolute inset-y-0 left-0 z-30 w-72
        ${isSidebarOpen ? "translate-x-0 px-3" : "-translate-x-full"}
        md:translate-x-0

        /* DESKTOP */
        md:relative md:z-0
        ${isSidebarOpen ? "md:w-82 md:px-7" : "md:w-0 md:px-0"}
      `}
    >
      {/* Header */}
      <div className="flex mb-5 items-center justify-between">
        <div className="flex gap-4 items-center">
          <div className="w-14 h-14 rounded-full overflow-hidden">
            <img src="/Images/profile/user-1.jpg" alt="Profile" />
          </div>
          <div>
            <h2 className="font-semibold">Md Najeeb</h2>
            <p className="text-sm text-gray-500">
              info@matdash.com
            </p>
          </div>
        </div>

        {/* Mobile close button */}
        <div
          className="md:hidden text-gray-500"
          onClick={toggleSidebar}
        >
          <X />
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <input
          value={searchChat}
          onChange={(e) => setSearchChat(e.target.value)}
          placeholder="Search Contacts"
          className="w-full px-4 h-10 text-sm border rounded-lg focus:border-indigo-600 outline-none"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          <Search size={20} />
        </div>
      </div>

      {/* Chat List */}
      {chats.length ? (
        chats.map(chat => (
          <div
            key={chat.id}
            onClick={() => tabHandler(chat.id)}
            className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer
              ${
                activeId === chat.id
                  ? "bg-[#DEDCFF]"
                  : "hover:bg-gray-50"
              }`}
          >
            <img
              src={`/Images/profile/${chat.avatar}`}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold">{chat.name}</p>
              <p className="text-xs text-gray-400">
                {chat.messages.at(-1)?.text}
              </p>
            </div>
          </div>
        ))
      ) : (
        <div className="bg-[#DEDCFF] text-center py-3 rounded-lg text-blue-700">
          Not Found.
        </div>
      )}
    </div>
  );
}
