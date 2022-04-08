import React from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";

import {
  CalendarToday,
  Dashboard,
  Home,
  Mail,
  People,
  Restore,
  Settings,
  ShowChart,
} from "@mui/icons-material";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Home className="sidebarIcon" />

              <NavLink className="navlink" to="/" >Home</NavLink>

              {/* <li    class="px-4 py-1 hover:bg-gray-50 border-b text-gray-600 text-xs">
                     <NavLink to="https://docs.google.com/spreadsheets/d/1qJWe-I26pkV9gEPbPeMtMAPyyCsWmJxF7kx7p-HXC0c/edit#gid=0">View React Commits</NavLink>
                    </li> */}
              {/*to NavLink pages on the side bar need to use a tag nd href as above */}
            </li>
            <li className="sidebarListItem">
              <Dashboard className="sidebarIcon" />

              <NavLink className="navlink" to="/dashboards">Dashboard</NavLink>
            </li>
          </ul>
          <h3 className="sidebarTitle">Work Space</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Mail className="sidebarIcon" />

              <NavLink  className="navlink" to="/inboxs">Inbox</NavLink>
            </li>
            <li className="sidebarListItem">
              <People className="sidebarIcon" />
              <NavLink className="navlink" to="/users">User</NavLink>
            </li>
            <li className="sidebarListItem">
              <CalendarToday className="sidebarIcon" />
              <NavLink  className="navlink" to="/availability">Availability</NavLink>
            </li>
            <li className="sidebarListItem">
              <Restore className="sidebarIcon" />
              <NavLink className="navlink"  to="/workhistory">Work History</NavLink>
            </li>
          </ul>

          <h3 className="sidebarTitle">Others</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <ShowChart className="sidebarIcon" />
              <NavLink className="navlink" to="/updates">Updates</NavLink>
            </li>
            <li className="sidebarListItem">
              <Settings className="sidebarIcon" />
              <NavLink className="navlink" to="/settings">Settings</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
