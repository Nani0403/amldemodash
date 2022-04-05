import React from "react";
import "./topbar.css";
import { Notifications, Menu } from "@mui/icons-material";
import luffy from "./luffy.png";
import { Avatar } from "@mui/material";
import FontAwesomeIcon from "@mui/icons-material"
function Topbar() {
  return (

      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
          Aml Dashboard
          </div>
          <div className="topRight">
            <div className="topbarIconContainer">
              <Notifications sx={{ fontSize: 27 }} />
            </div>
            <li className="avatar">
              <Avatar imgsrc={luffy} alt="" className="topAvatar" > 
              <div className="right">
              <ul>
               <li><FontAwesomeIcon icon="fa-regular fa-gear" />Settings</li>
               <li><FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />Logout</li>
               </ul>
               </div>
              </Avatar>
            </li>
          </div>
        </div>
      </div>
    
  );
}

export default Topbar;
