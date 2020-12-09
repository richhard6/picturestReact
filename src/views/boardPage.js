import { useEffect, useState } from "react";
import "./App.css";
import BoardList from "../components/boards/boardList/BoardsList";
import Header from "../components/header/header/Header";
import UserCard from "../components/userCard/UserCard";
import userEvent from "@testing-library/user-event";
import UserMenu from "../components/header/userMenu/UserMenu";
import BoardFormModal from "../components/boardForm/BoardFormModal";

const BoardPage = (user) => {
  const [isShowing, setToggleModal] = useState(false);

  const handleOpenModal = () => {
    setToggleModal(!isShowing);
    console.log(isShowing);
  };
  const handleOnClose = () => {
    setToggleModal(!isShowing);
  };

  return (
    <div className="app__body">
      <div className="header">
        <Header />
        <UserMenu
          avatar={user.avatar}
          firstName={user.firstName}
          lastName={user.lastName}
          following={user.following}
          username={user.username}
        />
      </div>
      <UserCard
        avatar={user.avatar}
        userName={`${user.username}`}
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
};

export default BoardPage;
