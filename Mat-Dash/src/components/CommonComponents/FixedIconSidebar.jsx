import React from "react";
import {
    Box,
    IconButton,
    List,
    ListItem,
    ListItemButton,
} from "@mui/material";
import { MenuIcon } from "lucide-react";
import { MAIN_MENU_ITEMS } from "../../data/SideBarData";
const FixedSidebarIcons = React.memo(function FixedSidebarIcons({
    selectedMenu,
    onMenuSelect,
    onToggle,
    width,
}) {
    return (
        <Box sx={{ width, bgcolor: "#F4F7FB", paddingTop: 3 }}>
            <List disablePadding>

                {/* Toggle */}
                <ListItem
                    disablePadding
                    onClick={onToggle}
                    sx={{
                        display: "flex",
                        mb: 1,
                        justifyContent: "center",
                        cursor: "pointer",
                        "&:hover svg": {
                            color: "#635BFF", // hover color
                        },
                    }}   >
                    <IconButton  >
                        <MenuIcon size={19} />
                    </IconButton>
                </ListItem>


                {MAIN_MENU_ITEMS.map((item) => {
                    const active = selectedMenu === item.id;

                    return (
                        <ListItem key={item.id} disablePadding>
                            <ListItemButton
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onMenuSelect(item.id);   //  ONLY place where menu changes
                                }}
                                disableTouchRipple
                            >
                                <span className={`p-3 rounded-xl ${active ? "bg-[#635BFF] text-white" : ""}`}>
                                    {item.icon}
                                </span>
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </Box>
    );
});


export default FixedSidebarIcons;
