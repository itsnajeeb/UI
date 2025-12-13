import { Box, Collapse, Divider, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { PAGES_NAV_ITEM, TABLES_NAV_LINK, UI_COMPONENT_NAV_LINK } from "../../data/SideBarData";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";


export const UI_COMPONENTS = () => {

    const [selectedId, setSelectedId] = useState(1); // Default to Dashboard 1
    const [openDropdown, setOpenDropdown] = useState({});

    const handleDropdownClick = (itemId) => {

        setOpenDropdown(prevOpenDropdowns => ({
            ...prevOpenDropdowns,
            // Toggle the state for the specific item ID
            [itemId]: !prevOpenDropdowns[itemId]
        }));
    };

    const handleLinkClick = (id) => {
        setSelectedId(id);
    };

    const ACTIVE_COLOR = '#635BFF';
    return (
        <Box sx={{ bgcolor: 'white', height: '100%', width: '100%', padding: 0 }}>
            {UI_COMPONENT_NAV_LINK.map((sectionData, index) => (
                <div key={index} className=" p-0">
                    {/* Section Title (DASHBOARDS / APPS) */}
                    <Typography
                        variant="caption"
                        display="block"
                        sx={{
                            fontWeight: 'bold',
                            color: '#505056',
                            mb: 2,
                            // pl: 2,
                            fontSize: '0.75rem',
                        }}  >
                        {sectionData.section}
                    </Typography>

                    <List disablePadding>
                        {sectionData.links.map((item) => {
                            const isSelected = item.id === selectedId;

                            // 1. Dropdown Item (e.g., "Front Pages")
                            if (item.isDropdown) {
                                return (
                                    <React.Fragment key={item.id}>
                                        <ListItemButton
                                            onClick={() => handleDropdownClick(item.id)}
                                            sx={{
                                                borderRadius: '12px',
                                                my: 0.1,
                                                fontSize: "5px",
                                                color: '#505056',
                                                '&:hover': {
                                                    bgcolor: '#f2f4f6', // Light gray background on hover
                                                },
                                            }}
                                        >
                                            <ListItemIcon sx={{ minWidth: 40, color: 'inherit' }}>
                                                {item.icon}
                                            </ListItemIcon>

                                            {/* Sub Links heading */}
                                            <ListItemText className='text-sm' sx={{ color: "#505056", }} primary={item.name} />

                                            {/* Dropdown Arrow Icon */}
                                            {openDropdown[item.id] ? <ChevronUp size={17} /> : <ChevronDown size={17} />}
                                        </ListItemButton>

                                        {/* Collapsible Sub-Links */}
                                        <Collapse in={openDropdown[item.id]} timeout="auto" unmountOnExit>
                                            <List component="div" disablePadding>
                                                {item.subLinks.map((subItem) => (
                                                    <ListItemButton
                                                        key={subItem.id}
                                                        component={Link}
                                                        to={subItem.path}
                                                        onClick={() => handleLinkClick(subItem.id)}
                                                        sx={{
                                                            pl: 2, // Increased padding for sub-links
                                                            borderRadius: '8px',
                                                            my: 0.3,
                                                            bgcolor: subItem.id === selectedId ? '#E2E8F0' : 'transparent', // Light highlight for active sub-link
                                                            color: subItem.id === selectedId ? ACTIVE_COLOR : '#505056',
                                                            fontWeight: subItem.id === selectedId ? 'bold' : 'normal',
                                                            // '&:hover': {
                                                            //     bgcolor: '#f2f4f6',
                                                            // },
                                                        }}
                                                    >
                                                        <ListItemIcon>
                                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--solar mat-mdc-list-item-icon routeIcon sub-item-icon ng-tns-c1496236254-23 mdc-list-item__start ng-star-inserted" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon="" data-icon="solar:round-alt-arrow-right-line-duotone" width="18" height="18"><g fill="none" stroke="#29343D" stroke-width="1.5px"><circle cx="12" cy="12" r="10" opacity=".5" stroke="#29343D" fill="none" stroke-width="1.5px"></circle><path stroke-linecap="round" stroke-linejoin="round" d="m10.5 9l3 3l-3 3" stroke="#29343D" fill="none" stroke-width="1.5px"></path></g></svg>
                                                        </ListItemIcon>

                                                        <ListItemText
                                                            sx={{ color: isSelected ? "red" : "#505056" }}
                                                            primary={subItem.name} />
                                                    </ListItemButton>
                                                ))}
                                            </List>
                                        </Collapse>
                                    </React.Fragment>
                                );
                            }

                            //  Standard Nav Link
                            return (
                                <ListItemButton
                                    key={item.id}
                                    component={Link}
                                    to={item.path}
                                    onClick={() => handleLinkClick(item.id)}
                                    sx={{
                                        borderRadius: '12px',
                                        my: 1,
                                        // Conditional Active State Styling
                                        ...(isSelected ? {
                                            background: ACTIVE_COLOR,
                                            // color: 'white',
                                            // boxShadow: '0 4px 14px 0 rgba(99, 91, 255, 0.4)', 
                                            '&:hover': {
                                                background: ACTIVE_COLOR, // Keep active state on hover
                                                // opacity: 0.9,
                                            },
                                        } : {
                                            backgroundColor: "#fff",
                                            color: '#1a1b1f', // Default text color
                                            '&:hover': {
                                                bgcolor: '#f2f4f6',
                                            },
                                        }),
                                    }}
                                >
                                    {/* Icon */}
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 35,
                                            color: isSelected ? 'white' : 'black',
                                        }}
                                    >
                                        {item.icon}
                                    </ListItemIcon>

                                    {/* Text and optional badge */}
                                    <ListItemText className='' sx={{
                                        color: isSelected ? 'white' : '#505056',
                                    }} primary={item.name} />

                                    {item.badge && (
                                        <Typography
                                            component="span"
                                            sx={{
                                                bgcolor: isSelected ? 'white' : ACTIVE_COLOR,
                                                color: isSelected ? ACTIVE_COLOR : 'white',
                                                px: 1,
                                                borderRadius: '6px',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            {item.badge}
                                        </Typography>
                                    )}
                                </ListItemButton>
                            );
                        })}
                    </List>
                    {index < UI_COMPONENT_NAV_LINK.length - 1 && <Divider sx={{ my: 2, borderColor: '#EDF2F7' }} />}
                </div>
            ))}
        </Box>
    );
}