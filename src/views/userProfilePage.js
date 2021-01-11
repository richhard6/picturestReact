import UserCard from "../components/userCard/UserCard";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

const UserProfile = ({ user }) => {
  let history = useHistory(); //aqui tendriamos que fetchear solamente

  //boards especificos de usuario y un board que se llame todos los pines que contenga todos los pines del usuario.
  const handleClick = () => {
    history.goBack();
  };

  return (
    <div>
      <UserCard
        avatar={user.avatar}
        userName={`${user.username}`}
        followingCount={user.following && user.following.length} // por que no sirve el length? peta todo.
        fullName={`${user.firstName} ${user.lastName}`}
      />
      <button type="button" onClick={handleClick}>
        Go back
      </button>
    </div>
  );
};

export default UserProfile;
