import React, { useState } from "react";
import "../userMenu/userMenu.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const UserMenu = ({ avatar, firstName, lastName, following, username }) => {
  const history = useHistory();
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle); //toggle is working.
    console.log(toggle);
  };

  const handleClick = () => {
    localStorage.clear();
    history.push("/login");
    window.location.reload();
  };

  return (
    <div>
      <div>
        <img src={avatar} alt="User Avatar" className="user__menu_avatar" />
        <Link to="/user">
          <div>@{username}</div>
        </Link>
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
            <div>{following && following.length} following</div>
            <Link to="/user">
              <div>Profile</div>
            </Link>
            <Link to="/login">
              <div className="logOut" onClick={handleClick}>
                Log Out
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserMenu;
