import React from "react";
import DashboardDrawer from "../Shared/DashboardDrawer";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex flex-row h-full w-full justify-between">
      <DashboardDrawer />
      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;
