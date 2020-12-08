import React, { useState } from "react";
import "../header/header.css";

const Header = () => {
  return (
    <div className="header__container">
      <img
        src="https://dbdzm869oupei.cloudfront.net/img/sticker/preview/9569.png"
        alt="Picturest Logo"
        class="picturest-logo"
      />
      <div className="header__userContainer"></div>
    </div>
  );
};

export default Header;
