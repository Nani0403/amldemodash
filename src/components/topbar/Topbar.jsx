import React from "react";
import "./topbar.css";
import { Notifications } from "@mui/icons-material";
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

          <div className="dropdown">
      <button className="dropbtn"><Avatar src={luffy}/><span class="text">Jatin Mangela</span></button>
        <div className="dropdown-content">
        <a class="address" href="#"><span class="picon"><i class="fas fa-map-marker"></i></span>Address</a>
            <a class="settings" href="#"><span class="picon"><i class="fas fa-cog"></i></span>Settings</a>
            <a class="logout" href="https://www.hudl.com/login"><span class="picon"><i class="fas fa-sign-out-alt"></i></span>Logout</a>
      </div>
    </div>
    </div>
</div>
</div>
  );
}

export default Topbar;
