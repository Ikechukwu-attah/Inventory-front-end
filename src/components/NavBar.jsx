import React from "react";
import logo from "../Images/Svg/logo.svg";

export default function NavBar() {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="navbar__logo" />
      <button className="navbar__btn navbar__btn ">Help Center</button>
      
    
    </div>
  );
}
