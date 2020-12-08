import React, { useState } from "react";
import "../userMenu/userMenu.css";

const UserMenu = ({ avatar, firstName, lastName, following }) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle); //toggle is working.
    console.log(toggle);
  };
  return (
    <div>
      <div>
        <img src={avatar} alt="User Avatar" className="user__menu_avatar" />
        <div>@{firstName}</div>
        <img
          src="https://cdn1.iconfinder.com/data/icons/ios-11-ui-elements-vol-1/29/25_dropdown_menu_down_arrow-512.png"
          alt="Dropdown arrow"
          onClick={handleToggle}
          className="user__menu_arrow"
        />
        {toggle === true && (
          <div className="user__toggled">
            <div>
              {firstName} {lastName}
            </div>
            <div>{following} </div>
            <div>Profile</div>
            <div> Log Out</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserMenu;
