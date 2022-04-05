import React from "react";
import "./topbar.css";
import { Notifications, Menu } from "@mui/icons-material";
import luffy from "./luffy.png";
import { Avatar } from "@mui/material";

function Topbar() {
  return (
  
      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
            <span className="logo">AML-Dashboard</span>
          </div>
          <div className="topRight">
            <div className="topbarIconContainer">
              <Notifications sx={{ fontSize: 27 }} />
            </div>
            <div class="dropdown">
  <Avatar  img src={luffy} class="dropbtn" />
  <div class="dropdown-content">
  <a>Your Profile</a>
  <a>Settings</a>
  <a>Logout</a>
  </div></div>
            
          </div>
        </div>
      </div>
  
  );
}

export default Topbar;
