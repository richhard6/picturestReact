import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import BoardCard from "./components/boards/boardCard/BoardCard";
import BoardList from "./components/boards/boardList/BoardsList";
import Header from "./components/header/header/Header";
import UserCard from "./components/userCard/UserCard";
import userEvent from "@testing-library/user-event";
import UserMenu from "./components/header/userMenu/UserMenu";
import BoardFormModal from "./components/boardForm/BoardFormModal";

function App() {
  const [user, setUser] = useState({});
  const [isShowing, setToggleModal] = useState(false);

  const handleOpenModal = () => {
    setToggleModal(!isShowing);
    console.log(isShowing);
  };
  const handleOnClose = () => {
    setToggleModal(!isShowing);
  };

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
      <div className="header">
        <Header />
        <UserMenu
          avatar={user.avatar}
          firstName={user.firstName}
          lastName={user.lastName}
          following="0"
        />
      </div>
      <UserCard
        avatar={user.avatar}
        userName={`${user.firstName}`}
        followingCount={user.following} // por que no sirve el length? peta todo.
        fullName={`${user.firstName} ${user.lastName}`}
      />
      <BoardList id={user.id} />

      <button type="button" onClick={handleOpenModal} class="button__Modal">
        +
      </button>

      <BoardFormModal
        open={isShowing}
        handleOnClose={handleOnClose}
        id={user.id}
      />
    </div>
  );
}

export default App;
