import React, { useState } from 'react';
import "./topbar.css";
import { Notifications } from "@mui/icons-material";
import luffy from "../luffy.png";
import { Avatar } from "@mui/material";
import { Link } from 'react-router-dom';
import {TopbarMenuItems} from "./TopbarMenuItems";
function Topbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className="topbar" >
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">AML-Dashboard</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <Notifications sx={{ fontSize: 27 }} />
          </div>
          <div className="dropdown">
      <button className="dropbtn"><Avatar src={luffy}/><span className="text">Jatin Mangela</span></button>
        <div className="dropdown-content">
       
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {TopbarMenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    
    </div>
    </div>
</div>
</div>
</div>
  );
}

export default Topbar;
