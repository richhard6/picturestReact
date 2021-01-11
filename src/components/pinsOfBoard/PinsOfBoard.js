import { useEffect, useState } from "react";
import PinCard from "../pins/pinsCard/PinCard";

const PinsOfBoard = () => {
  const [pins, setPins] = useState([{}]);

  let boardId = localStorage.getItem("clickedBoard");
  console.log(boardId);

  useEffect(() => {
    fetch(`http://localhost:5001/api/boards/${boardId}/pins`) //http://localhost:5000/api/users/21/boards ruta correcta
      .then((promise) => {
        if (promise.status === 200) {
          return promise.json();
        }
      })
      .then((json) => setPins(json));
  }, []);

  console.log(pins);

  return (
    <div className="pinList__container">
      {pins.map((pin) => (
        <div className="pinCard__container">
          <PinCard pin={pin} />
        </div>
      ))}
    </div>
  );
};

export default PinsOfBoard;
