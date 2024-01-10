import React from "react";
import battManLogo from "./LogoBattman.svg";
import userCircle from "./UserLogo.svg";

export default function NavBar() {
  return (
    <nav className="navbar">
      <img src={battManLogo} alt="logo not found" />
      <img src={userCircle} alt="user not found" className="userLogo" />
    </nav>
  );
}
