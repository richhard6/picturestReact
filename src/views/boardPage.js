import { useEffect, useState } from "react";
import BoardList from "../components/boards/boardList/BoardsList";
import Header from "../components/header/header/Header";
import UserCard from "../components/userCard/UserCard";
import userEvent from "@testing-library/user-event";
import UserMenu from "../components/header/userMenu/UserMenu";
import BoardFormModal from "../components/boardForm/BoardFormModal";
import { useParams } from "react-router";
import { useHistory } from "react-router";

const BoardPage = ({ user }) => {
  const params = useParams(); //EL routing para cada. importantisimo.

  const [board, setBoard] = useState({}); // para meter el fetch aqui especifico.

  let history = useHistory();

  useEffect(() => {
    fetch(`http://localhost:5001/api/boards/${params.id}`)
      .then((response) => response.json()) //SI ESTOY RECIBIENDO EL USUARIO CORRECTO..
      .then((json) => setBoard(json))
      .catch(() => {
        history.push("/");
      });
  }, []); //los history push se pueden usar dentro del catch.

  console.log(board);
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
      <UserCard
        avatar={user.avatar}
        userName={`${user.username}`}
        followingCount={user.following && user.following.length} // por que no sirve el length? peta todo.
        fullName={`${user.firstName} ${user.lastName}`}
      />
      <BoardList id={user.id} />

      <button type="button" onClick={handleOpenModal} class="button__Modal">
        +
      </button>
      <div>
        {board.author}
        {board.title}
      </div>

      <BoardFormModal
        open={isShowing}
        handleOnClose={handleOnClose}
        id={user.id}
      />
    </div>
  );
};

export default BoardPage;
