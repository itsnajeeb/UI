import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import { useChat } from "../../Context/Chats/useChat";

export default function MessageInput() {
  const { sendMessage } = useChat(); //  context

  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;

    sendMessage(text);   // calling context direct
    setText("");
  };

  return (
    <div className="p-4 border-t border-t-gray-200/95 bg-white flex gap-2">
      <div className="w-full relative flex items-center">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Send message"
          className="
            flex-1 px-4 py-2 border-2 border-gray-200/95
            focus:border-indigo-600 outline-none rounded-lg
            transition-all duration-300
          "
        />

        <div className="absolute right-2">
          <button
            onClick={handleSend}
            className="
              bg-white text-black cursor-pointer
              hover:bg-indigo-400 w-8 h-8 rounded-full
              hover:text-white flex justify-center items-center
              transition-all duration-300
            "
          >
            <SendIcon sx={{ fontSize: 20 }} />
          </button>
        </div>
      </div>
    </div>
  );
}
