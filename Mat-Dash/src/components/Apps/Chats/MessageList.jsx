import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";
import { useChat } from "../../../Context/Chats/useChat";

export default function MessageList() {
  const { activeChat } = useChat();

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [activeChat?.messages]);

  if (!activeChat) return null;

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-white sliding-panel-scroll">
      {activeChat.messages.map(msg => (
        <MessageBubble
          key={msg.id}
          msg={msg}
          avatar={activeChat.avatar}
        />
      ))}
      <div ref={bottomRef} />
    </div>
  );
}
