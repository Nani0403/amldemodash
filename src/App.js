import "./App.css";
import Sidebar from "./components/topbar/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import SubNavbar from "./components/sub-navigation/SubNavbar";
import SidebarV2 from "./components/sub-navigation/sidebarV2";
import { Component } from "react";
import { Router } from "react-router";

function App() {
 
    return (
     
        <div className="container">
          <SidebarV2 />
        </div>
     
    );
  
}

export default App;
