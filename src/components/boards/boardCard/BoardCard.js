import "../boardCard/boardCard.css";
import { useHistory } from "react-router";

const BoardCard = ({ board }) => {
  //  <img src={board.firstPins} alt="first img"></img> linkear esta imagen.
  const history = useHistory();

  const handleClick = () => {
    console.log(board._id);
    localStorage.setItem("clickedBoard", board._id); //implementar el history push /test.
    history.push("/test");
    //lo que hay que usar para fetchear.
  };
  return (
    <div className="board__Card" onClick={handleClick}>
      <div>{board.title}</div>
      <div className="board__Card_NumberPins">{board.numberOfPins}</div>
    </div>
  );
};

export default BoardCard;
