import React, { useState } from "react";
import "../header/header.css";
import logo from "../header/picturest.png";

const Header = () => {
  return (
    <div className="header__container">
      <img src={logo} alt="Picturest Logo" class="picturest-logo" />
      <div className="header__userContainer"></div>
    </div>
  );
};

export default Header;
