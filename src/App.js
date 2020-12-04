import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import BoardCard from "./components/boards/boardCard/BoardCard";
import Header from "./components/header/header/Header";
import UserCard from "./components/userCard/UserCard";
import userEvent from "@testing-library/user-event";

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/api/users/23")
      .then((promise) => {
        if (promise.status === 200) {
          return promise.json();
        }
      })
      .then((json) => setUser(json));
  }, []);
  return (
    <div className="app__body">
      <Header />
      <UserCard
        avatar={user.avatar}
        userName={`${user.firstName}`}
        followingCount={`${user.following.length}`}
        fullName={`${user.firstName} ${user.lastName}`}
      />
    </div>
  );
}

export default App;
