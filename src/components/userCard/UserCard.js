import "../userCard/userCard.css";
import { Link } from "react-router-dom";

const UserCard = ({ avatar, userName, fullName, followingCount }) => {
  return (
    <div className="userCard__container">
      <div className="userCard_info__container">
        <img src={avatar} alt="user Avatar" className="userCard__image" />
        <span className="userCard_info__userFullName__text">{fullName}</span>
        <Link to="/user">
          <span className="userCard_info__username__text">@{userName}</span>
        </Link>
        <span className="userCard_info__userFollowing__text">
          {followingCount} following
        </span>
      </div>
    </div>
  );
};

export default UserCard;
