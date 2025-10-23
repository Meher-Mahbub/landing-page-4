import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">maliko</div>

      <div className="sidebar-subnav">
        <a href="#material">material</a>
        <a href="#designers">designers</a>
        <a href="#process">process</a>
      </div>

      <div className="sidebar-socials">
        <a href="#fb">fb</a>
        <a href="#pi">pi</a>
        <a href="#in">in</a>
      </div>
    </aside>
  );
}

export default Sidebar;
