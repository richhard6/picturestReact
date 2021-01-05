import PinList from "../components/pins/pinsList/PinList";
import UserCard from "../components/userCard/UserCard";
import BoardList from "../components/boards/boardList/BoardsList";

const HomePage = ({ user }) => {
  return (
    <div className="app_body">
      <UserCard
        avatar={`${user.avatar}`}
        userName={`${user.username}`}
        followingCount={user.following && user.following.length} // por que no sirve el length? peta todo.
        fullName={`${user.firstName} ${user.lastName}`}
      />

      <BoardList id={user.id} />

      <PinList />
    </div>
  );
};

export default HomePage;
