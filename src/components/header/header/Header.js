import "../header/header.css";
import logo from "../header/picturest.png";
import { Link } from "react-router-dom";
import UserMenu from "../userMenu/UserMenu";

const Header = ({ avatar, firstName, lastName, following, username }) => {
  return (
    <div className="header__container">
      <div className="picturest">
        <Link to="/">
          <img src={logo} alt="Picturest Logo" class="picturest-logo" />
        </Link>
        Picturest
      </div>
      <div className="header__userContainer">
        <UserMenu
          avatar={avatar}
          firstName={firstName}
          lastName={lastName}
          following={following}
          username={username}
        />
      </div>
    </div>
  );
};

export default Header;
