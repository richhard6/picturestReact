import "../userCard/userCard.css";

const UserCard = ({ avatar, userName, fullName, followingCount }) => {
  return (
    <div className="userCard__container">
      <img src={avatar} alt="user Avatar" className="userCard__image" />
      <div className="userCard_info__container">
        <span className="userCard_info__userFullName__text">{fullName}</span>
        <span className="userCard_info__username__text">@{userName}</span>
        <span className="userCard_info__userFollowing__text">
          {followingCount} following
        </span>
      </div>
    </div>
  );
};

export default UserCard;
