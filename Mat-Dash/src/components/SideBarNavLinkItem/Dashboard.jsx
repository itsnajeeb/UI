
import { DASHBOARD_NAV_ITEMS } from "../../data/SideBarData";
import {
    Box,
    Collapse,
    Divider,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
} from "@mui/material";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMenu } from "../../Context/Menu/userMenu";

export const DASHBOARDS = () => {

    const {
        selectedMenuId,
        setMenu,
        toggleSidebar,
    } = useMenu();
    console.log("SELECTED MENU ID ", selectedMenuId);

    const [openDropdown, setOpenDropdown] = useState({});

    const handleDropdownClick = (itemId) => {
        setOpenDropdown(prev => ({
            ...prev,
            [itemId]: !prev[itemId],
        }));
    };

    const handleLinkClick = (id) => {
        localStorage.setItem("selectedMenuId", id)
        console.log("ID> ", id);
        setMenu(id);
        toggleSidebar();
    };

    const ACTIVE_COLOR = "#635BFF";

    return (
        <Box sx={{ bgcolor: "white", height: "100%", width: "100%" }}>
            {DASHBOARD_NAV_ITEMS.map((sectionData, index) => (
                <div key={index}>
                    {/* Section title */}
                    <Typography
                        variant="caption"
                        sx={{
                            fontWeight: "bold",
                            color: "#505056",
                            mb: 2,
                            fontSize: "0.75rem",
                        }}
                    >
                        {sectionData.section}
                    </Typography>

                    <List disablePadding>
                        {sectionData.links.map((item) => {
                            const isSelected = item.id === selectedMenuId;

                            /* ===== DROPDOWN ITEM ===== */
                            if (item.isDropdown) {
                                return (
                                    <React.Fragment key={item.id}>
                                        <ListItemButton
                                            onClick={() => handleDropdownClick(item.id)}
                                            sx={{
                                                borderRadius: "12px",
                                                my: 0.5,
                                                color: "#505056",
                                                "&:hover": { bgcolor: "#f2f4f6" },
                                            }}
                                        >
                                            <ListItemIcon sx={{ minWidth: 40 }}>
                                                {item.icon}
                                            </ListItemIcon>

                                            <ListItemText primary={item.name} />

                                            {openDropdown[item.id] ? (
                                                <ChevronUp size={16} />
                                            ) : (
                                                <ChevronDown size={16} />
                                            )}
                                        </ListItemButton>

                                        <Collapse in={openDropdown[item.id]} timeout="auto">
                                            <List disablePadding>
                                                {item.subLinks.map((subItem) => {
                                                    const active = subItem.id === selectedMenuId;

                                                    return (
                                                        <Link to={subItem.path} key={subItem.id}>
                                                            <ListItemButton
                                                                onClick={() => handleLinkClick(subItem.id)}
                                                                sx={{
                                                                    pl: 4,
                                                                    borderRadius: "8px",
                                                                    my: 0.5,

                                                                    ...(active
                                                                        ? {
                                                                            bgcolor: ACTIVE_COLOR,
                                                                            color: "white",
                                                                            "&:hover": { bgcolor: ACTIVE_COLOR },
                                                                        }
                                                                        : {
                                                                            "&:hover": { bgcolor: "#f2f4f6" },
                                                                        }),
                                                                }}
                                                            >
                                                                <ListItemText primary={subItem.name} />
                                                            </ListItemButton>
                                                        </Link>
                                                    );
                                                })}
                                            </List>
                                        </Collapse>
                                    </React.Fragment>
                                );
                            }

                            /* ===== NORMAL ITEM ===== */
                            return (
                                <Link to={item.path} key={item.id}>
                                    <ListItemButton
                                        onClick={() => handleLinkClick(item.id)}
                                        sx={{
                                            color: "#505056",
                                            fontSize: "3px",
                                            borderRadius: "12px",
                                            my: 0.8,
                                            ...(isSelected
                                                ? {
                                                    bgcolor: ACTIVE_COLOR,
                                                    color: "white",
                                                    "&:hover": { bgcolor: ACTIVE_COLOR },
                                                }
                                                : {
                                                    "&:hover": { bgcolor: "#f2f4f6" },
                                                }),
                                        }}
                                    >
                                        <ListItemIcon
                                            sx={{ minWidth: 35, color: isSelected ? "white" : "black" }}
                                        >
                                            {item.icon}
                                        </ListItemIcon>
                                        <ListItemText  >{item.name}</ListItemText>
                                    </ListItemButton>
                                </Link>
                            );
                        })}
                    </List>

                    {
                        index < DASHBOARD_NAV_ITEMS.length - 1 && (
                            <Divider sx={{ my: 2 }} />
                        )
                    }
                </div>
            ))
            }
        </Box >
    );
};
