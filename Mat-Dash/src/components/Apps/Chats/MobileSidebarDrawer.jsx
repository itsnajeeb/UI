import { Drawer } from "@mui/material";
import Sidebar from "./Sidebar";

export default function MobileSidebarDrawer({
  open,
  onClose,
  chats,
  activeId,
  setActiveId,
  containerRef,
}) {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      container={containerRef?.current}
      ModalProps={{
        disablePortal: true,      // ✅ BODY me mount nahi hoga
        keepMounted: true,
      }}
      PaperProps={{
        className: "w-72 h-full",
      }}
      className="md:hidden"
    >
      <Sidebar
        chats={chats}
        activeId={activeId}
        setActiveId={(id) => {
          setActiveId(id);
          onClose(); // ✅ close after select
        }}
      />
    </Drawer>
  );
}
