import React, { Component } from "react";
// import Button from "@mui/material/Button";
import {  Search, Settings, FilterList } from "@mui/icons-material";
import "../User/users.css";
import Searchbox from "./Searchbox";
import Userdetails from "./Userdetails";
import { Userdata } from "../User/Userdata";

class Users extends Component {
  constructor() {
    super();
    this.state = {
      Userdata: Userdata,
      searchfield: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredUsers = this.state.Userdata.filter((Userdata) => {
      return Userdata.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="userDetails"  style={{
        alignItems: "center",
        height: "100%",
        width: "1500px",
        marginTop: "3%",
      }}>
        <div className="userInfobar">
          <div className="userWrapper">
            <div className="leftSide">
              <div className="leftIconContainer">
                <div className="totalUsers">ALL(15)</div>
                <div class="space"></div>
              </div>
            </div>
            <div className="rightSide">
              <div className="rightIconContainer">
                <div className="rightIcons">
                  <Searchbox searchChange={this.onSearchChange} />
                 <Search sx={{ fontSize: 40 }}  />
                </div>
                <div className="rightIcons">
                  {" "}
                  <Settings sx={{ fontSize: 40 }} />
                </div>
                <div className="rightIcons">
                  <FilterList sx={{ fontSize: 40 }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="line" />
        <Userdetails Userdata={filteredUsers} />
      </div>
    );
  }
}

export default Users;
