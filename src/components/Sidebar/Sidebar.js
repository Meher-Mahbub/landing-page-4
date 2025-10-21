import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">maliko</div>

      <div className="sidebar-subnav">
        <span>material</span>
        <span>designers</span>
        <span>process</span>
      </div>

      <div className="sidebar-socials">
        <span>fb</span>
        <span>pi</span>
        <span>in</span>
      </div>
    </aside>
  );
}

export default Sidebar;
