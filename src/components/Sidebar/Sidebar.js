import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">maliko</div>

      <div className="sidebar-subnav">
        <Link to="/material">material</Link>
        <Link to="/designers">designers</Link>
        <Link to="/process">process</Link>
      </div>

      <div className="sidebar-socials">
        <Link to="/fb">fb</Link>
        <Link to="/pi">pi</Link>
        <Link to="/in">in</Link>
      </div>
    </aside>
  );
}

export default Sidebar;
