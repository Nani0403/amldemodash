import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

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
              <li class="px-4 py-1 hover:bg-gray-50 border-b text-gray-600 text-xs">
                <Home className="sidebarIcon" />

                <Link to="/">Home</Link>
              </li>
              {/* <li    class="px-4 py-1 hover:bg-gray-50 border-b text-gray-600 text-xs">
                     <Link to="https://docs.google.com/spreadsheets/d/1qJWe-I26pkV9gEPbPeMtMAPyyCsWmJxF7kx7p-HXC0c/edit#gid=0">View React Commits</Link>
                    </li> */}
              {/*to link pages on the side bar need to use a tag nd href as above */}
            </li>
            <li className="sidebarListItem">
              <Dashboard className="sidebarIcon" />

              <Link to="/dashboards">Dashboard</Link>
            </li>
          </ul>
          <h3 className="sidebarTitle">Work Space</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Mail className="sidebarIcon" />

              <Link to="/inboxs">Inbox</Link>
            </li>
            <li className="sidebarListItem">
              <People className="sidebarIcon" />
              <Link to='/users'>User</Link>
            </li>
            <li className="sidebarListItem">
              <CalendarToday className="sidebarIcon" />
              <Link to='/availability'>Availability</Link>
            </li>
            <li className="sidebarListItem">
              <Restore className="sidebarIcon" />
              <Link to='/workhistory'>Work History</Link>
            </li>
          </ul>

          <h3 className="sidebarTitle">Others</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <ShowChart className="sidebarIcon" />
              <Link to='/updates'>Updates</Link>
            </li>
            <li className="sidebarListItem">
              <Settings className="sidebarIcon" />
              <Link to='/settings'>Settings</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
