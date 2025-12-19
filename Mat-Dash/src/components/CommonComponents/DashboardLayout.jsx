import { Outlet } from "react-router-dom";
import { Suspense, useState } from "react";
import AppDrawer from "./SideBar";
import TopBar from "./TopBar";
import useIsLgScreen from "../../hooks/useIsLgScreen";
import RouteLoader from "./RouteLoader";

const SLIDING_PANEL_WIDTH = 300;
const FIXED_SIDEBAR_WIDTH = 20;

const DashboardLayout = () => {
  // console.log("LAYOUT RENDER");

  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  const isLgScreen = useIsLgScreen();

  const marginLeft = isLgScreen
    ? isDrawerOpen
      ? `${FIXED_SIDEBAR_WIDTH + SLIDING_PANEL_WIDTH}px`
      : `${FIXED_SIDEBAR_WIDTH}px`
    : "0px";

  return (
    <div className="lg:flex relative overflow-x-hidden w-full">

      {/* Sidebar */}
      <div className="fixed h-screen z-50 bg-white hidden lg:flex">
        <AppDrawer
          open={isDrawerOpen}
          setOpen={setIsDrawerOpen}
          FIXED_SIDEBAR_WIDTH={FIXED_SIDEBAR_WIDTH}
          SLIDING_PANEL_WIDTH={SLIDING_PANEL_WIDTH}
        />
      </div>

      {/* Mobile Sidebar */}
      {isDrawerOpen && (
        <div className="fixed h-screen z-50 bg-white lg:hidden">
          <AppDrawer
            open={isDrawerOpen}
            setOpen={setIsDrawerOpen}
            FIXED_SIDEBAR_WIDTH={FIXED_SIDEBAR_WIDTH}
            SLIDING_PANEL_WIDTH={SLIDING_PANEL_WIDTH}
          />
        </div>
      )}

      {/* Right Content */}
      <div
        className="px-3 py-4 rounded-3xl bg-white w-full"
        style={{ marginLeft, transition: "margin-left 0.3s ease" }}
      >
        <TopBar setIsDrawerOpen={setIsDrawerOpen}  />
        <Suspense fallback={<RouteLoader/>}>
          <Outlet />
        </Suspense>
      </div>

    </div>
  );
};

export default DashboardLayout;
