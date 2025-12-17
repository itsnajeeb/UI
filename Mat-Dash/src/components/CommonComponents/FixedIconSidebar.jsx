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
                            color: "var(--text-primary-color)", // hover color
                        },
                    }}   >
                    <IconButton  >
                        <MenuIcon size={19} />
                    </IconButton>
                </ListItem>


                {MAIN_MENU_ITEMS.map((item) => {
                    const active = selectedMenu === item.id;

                    return (
                        <ListItem key={item.id} disablePadding sx={{ marginBottom: 1.3 }}>
                            <ListItemButton
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onMenuSelect(item.id);   //  ONLY place where menu changes
                                }}
                                sx={{
                                    // border: 1,
                                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                                    // padding: 1.8,
                                    padding:0,
                                    marginX: 1.4,
                                    borderRadius: 4,
                                    bgcolor: `${active ? "var(--bg-primary-color)" : ""}`,
                                    "&:hover": {
                                        bgcolor: `${active ? "var(--bg-primary-color)" : ""}`
                                    }
                                }}
                                disableTouchRipple
                            >
                                <div className={`rounded-xl ${active ? 'text-white' : ""}`} >
                                    <img src={item.icon} alt="" className="object-cover  transition-all duration-300 hover:scale-125" />
                                </div>
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </Box >
    );
});


export default FixedSidebarIcons;
