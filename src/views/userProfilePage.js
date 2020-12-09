import { useState, useEffect } from "react";
import "./App.css";
import UserCard from "../components/userCard/UserCard";

const UserProfile = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch("http://localhost:5000/api/users/21")
      .then((promise) => {
        if (promise.status === 200) {
          return promise.json();
        }
      })
      .then((json) => setUser(json));
  }, []);
  return (
    <UserCard
      avatar={user.avatar}
      userName={`${user.username}`}
      followingCount={user.following} // por que no sirve el length? peta todo.
      fullName={`${user.firstName} ${user.lastName}`}
    />
  );
};

export default UserProfile;
