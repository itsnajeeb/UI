import React, { useState, useCallback } from "react";
import { useLocation, NavLink } from "react-router-dom";
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
import { DASHBOARD_NAV_ITEMS } from "../../data/SideBarData";

const ACTIVE_COLOR = "#635BFF";

const Dashboard = React.memo(function DASHBOARDS() {
  // console.log("DASHBOARD NAV LINK LIST");

  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState({});

  const handleDropdownClick = useCallback((itemId) => {
    setOpenDropdown((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  }, []);

  const isActivePath = useCallback(
    (path) => location.pathname === path,
    [location.pathname]
  );

  return (
    <Box
      className="bg-white"
      sx={{ height: "100%", width: "100%" }}>
      {DASHBOARD_NAV_ITEMS.map((sectionData, index) => (
        <div key={index}>
          {/* SECTION TITLE */}
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
              /* ================= DROPDOWN ================= */
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
                          const active = isActivePath(subItem.path);

                          return (
                            <NavLink
                              to={subItem.path}
                              key={subItem.id}
                              style={{ textDecoration: "none" }}
                            >
                              <ListItemButton
                                sx={{
                                  pl: 4,
                                  color: "#505056",
                                  borderRadius: "8px",
                                  my: 0.5,
                                  ...(active
                                    ? {
                                      bgcolor: ACTIVE_COLOR,
                                      color: "white",
                                      "&:hover": {
                                        bgcolor: ACTIVE_COLOR,
                                      },
                                    }
                                    : {
                                      "&:hover": {
                                        bgcolor: "#f2f4f6",
                                      },
                                    }),
                                }}
                              >
                                <ListItemText primary={subItem.name} />
                              </ListItemButton>
                            </NavLink>
                          );
                        })}
                      </List>
                    </Collapse>
                  </React.Fragment>
                );
              }

              /* ================= NORMAL ITEM ================= */
              const active = isActivePath(item.path);

              return (
                <NavLink
                  to={item.path}
                  key={item.id}
                  style={{ textDecoration: "none" }}
                >
                  <ListItemButton
                    sx={{
                      borderRadius: "12px",
                      my: 0.8,
                      color: "#505056",
                      ...(active
                        ? {
                          bgcolor: ACTIVE_COLOR,
                          color: "white",
                          "&:hover": {
                            bgcolor: ACTIVE_COLOR,
                          },
                        }
                        : {
                          "&:hover": {
                            bgcolor: "#f2f4f6",
                          },
                        }),
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 35,
                        color: active ? "white" : "black",
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </NavLink>
              );
            })}
          </List>

          {index < DASHBOARD_NAV_ITEMS.length - 1 && (
            <Divider sx={{ my: 2 }} />
          )}
        </div>
      ))}
    </Box>
  );
});

export default Dashboard;
