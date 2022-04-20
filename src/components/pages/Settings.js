import React, { useState } from "react";
import { Paper } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import "./Settings.css";
function Settings() {
  const tabBtn = document.querySelectorAll(".tab-btn");
  const tab = document.querySelectorAll(".tabShow");
  return (
    <Paper className="paper">
      <div className="leftbox">
        <nav>
          <a onClick="tabs(0)" className="tab active">
            Personal Info<i className="fa fa-user"></i>{" "}
          </a>
        </nav>
      </div>

      <div className="rightbox">
        <div className="tabShow">
          <h1> Personal Info</h1>
          <h2>Full Name</h2>
          <input type="text" className="input" value="shivani Sawant" />
          <h2>Date Of Birth</h2>
          <input type="text" className="input" value="4th march 1997" />
          <h2>Gender</h2>
          <input type="text" className="input" value="Female" />
          <h2>Email Address</h2>
          <input type="text" className="input" value="example@example.com" />
          <h2>Password</h2>
          <input type="password" className="input" value="shivani@123" />
          <button className="btn">Update</button>
        </div>
      </div>
    </Paper>
  );
}
export default Settings;
