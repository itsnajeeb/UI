import React from 'react';
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import { useChat } from "../../Context/Chats/useChat";
import Breadcrumb from "../CommonComponents/Breadcrumb";
import { motion } from "motion/react"
import { useEffect, useState } from "react";


const ChatsApp = () => {
  const {
    activeChat,
    isSidebarOpen,
    toggleSidebar,
  } = useChat();

  if (!activeChat) return null;
  const text = "How can I help you today?";
  const [typedText, setTypedText] = useState("");
  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setTypedText(text.slice(0, index + 1));
      index++;

      if (index === text.length) {
        clearInterval(interval);
      }
    }, 45); // typing speed (ms)

    return () => clearInterval(interval);
  }, []);


  return (
    <>
      <Breadcrumb title="Support" />
      <div className="bg-white py-6 px-4 rounded-xl manrope-fontFamliy space-y-2 overflow-hidden md:px-8">

        {/* Welcome line - slide & fade */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-base font-semibold bg-[#e8e6fd] w-fit px-3 py-1 rounded-xl text-[#635BFF] md:text-xl"
        >
          Welcome back, Najeeb!
        </motion.h1>

        {/* Typing line */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl font-extrabold ml-2 text-gray-400/90 md:text-2xl"
        >
          {typedText}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
            className="ml-1"
          >
            
          </motion.span>
        </motion.h1>

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