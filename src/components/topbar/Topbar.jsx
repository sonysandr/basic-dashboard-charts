import React from "react";
import "./topbar.css";
import {  Settings } from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
      {/* left */}
        <div className="topLeft">
          <span className="logo">Company Logo</span>
        </div>
        {/* right */}
        <div className="topRight">
          

          <div className="topbarIconsContainer">
            <Settings />
          </div>
          <img
            src="https://images.pexels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="user"
            className="topAvatar"
          />

        </div>
      </div>
    </div>
  );
}
