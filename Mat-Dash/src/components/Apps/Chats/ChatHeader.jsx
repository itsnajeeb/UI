import { IconButton, Menu, MenuItem } from "@mui/material";
import { ChartNoAxesGantt, EllipsisVertical } from "lucide-react";
import { useState } from "react";
import { useChat } from "../../../Context/Chats/useChat";

export default function ChatHeader({ chat }) {
  const { toggleSidebar } = useChat(); // context se

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (!chat) return null;

  return (
    <div className="border-b-2 border-b-gray-200/95 p-4 flex justify-between items-center bg-white">

      {/* LEFT */}
      <div className="flex gap-3 items-center">
        <div
          onClick={toggleSidebar}
          className="w-10 h-10 flex justify-center items-center rounded-full cursor-pointer
          hover:bg-indigo-200 transition-all duration-300 hover:text-indigo-700"
        >
          <ChartNoAxesGantt size={20} />
        </div>

        <div className="flex items-center gap-3">
          <img
            src={`/Images/profile/${chat.avatar}`}
            className="w-10 h-10 rounded-full"
          />
          <h2 className="font-semibold">{chat.name}</h2>
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-9 h-9 flex justify-center items-center rounded-full hover:bg-indigo-200">
        <IconButton onClick={handleClick}>
          <EllipsisVertical size={20} />
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          PaperProps={{ className: "rounded-lg" }}
        >
          <MenuItem onClick={handleClose}>Contact Info</MenuItem>
          <MenuItem onClick={handleClose}>Mute</MenuItem>
          <MenuItem onClick={handleClose} className="text-red-500">
            Delete Chat
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}
