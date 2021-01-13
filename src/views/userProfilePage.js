import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import PinList from "../components/pins/pinsList/PinList";
import UserCard from "../components/userCard/UserCard";
import BoardList from "../components/boards/boardList/BoardsList";
import BoardFormModal from "../components/boardForm/BoardFormModal";
import "../views/boardModal.css";

const UserProfile = ({ user }) => {
  let history = useHistory(); //aqui tendriamos que fetchear solamente

  //boards especificos de usuario y un board que se llame todos los pines que contenga todos los pines del usuario.
  const handleClick = () => {
    history.goBack();
  };

  const [isShowing, setToggleModal] = useState(false);

  const handleOpenModal = () => {
    setToggleModal(!isShowing);
    console.log(isShowing);
  };
  const handleOnClose = () => {
    setToggleModal(!isShowing);
  };

  return (
    <div>
      <UserCard
        avatar={user.avatar}
        userName={`${user.username}`}
        followingCount={user.following && user.following.length} // por que no sirve el length? peta todo.
        fullName={`${user.firstName} ${user.lastName}`}
      />
      <button type="button" onClick={handleOpenModal} class="button__Modal">
        +
      </button>
      <BoardFormModal
        open={isShowing}
        handleOnClose={handleOnClose}
        id={user.id}
      />
      <BoardList id={user.id} />

      <PinList />
      <button type="button" onClick={handleClick}>
        Go back
      </button>
    </div>
  );
};

export default UserProfile;
