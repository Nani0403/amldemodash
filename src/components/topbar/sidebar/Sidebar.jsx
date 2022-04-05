import React from "react";
import "./sidebar.css";
import home from "../../pages/homepage/Home";
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
            <li     class="px-4 py-1 hover:bg-gray-50 border-b text-gray-600 text-xs">
              <Home className="sidebarIcon"/> 
              <a target="_blank" href="https://docs.google.com/spreadsheets/d/1FZdzonJS694IgK6rbFFz_EfEnQzhGdyOp2ROqGliw8M/edit#gid=132966247"> Home </a>
              </li>
              
            {/*to link pages on the side bar need to use a tag nd href as above */ }
            </li>
            <li className="sidebarListItem">
              <Dashboard className="sidebarIcon" />
              Dashboard
            </li>
          </ul>
          <h3 className="sidebarTitle">Work Space</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Mail className="sidebarIcon" />
              Inbox
            </li>
            <li className="sidebarListItem">
              <People className="sidebarIcon" />
              User
            </li>
            <li className="sidebarListItem">
              <CalendarToday className="sidebarIcon" />
              Availability
            </li>
            <li className="sidebarListItem">
              <Restore className="sidebarIcon" />
              Work History
            </li>
          </ul>

          <h3 className="sidebarTitle">Others</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <ShowChart className="sidebarIcon" />
              Updates
            </li>
            <li className="sidebarListItem">
              <Settings className="sidebarIcon" />
              Settings
            </li>
          </ul>
        </div>
      </div>
    </div>
    
  );
  }

export default Sidebar;
