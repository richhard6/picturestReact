import "../boardCard/boardCard.css";
import { useHistory } from "react-router";

const BoardCard = ({ board, urlImage }) => {
  //  <img src={board.firstPins} alt="first img"></img> linkear esta imagen.
  const history = useHistory();

  const handleClick = () => {
    console.log(board._id);
    localStorage.setItem("clickedBoard", board._id); //implementar el history push /test.
    history.push("/test");
    //lo que hay que usar para fetchear.
  };
  return (
    <div className="boardCard__container">
      <div className="boardCard_info__container" onClick={handleClick}>
        <img src={urlImage} className="board__image"></img>
        <div className="boardCard_info_board__title">{board.title}</div>
        <div className="boardCard_info_board__number">{board.numberOfPins}</div>
      </div>
    </div>
  );
};

export default BoardCard;
