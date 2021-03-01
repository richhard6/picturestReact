import React, { useState, useEffect } from "react";
import BoardCard from "../boardCard/BoardCard";
import "../boardList/boardList.css";

//ESTO AHORA SERIA BOARD USER LIST, YA QUE MUESTRA SOLO LOS BOARDS DEl USUARIo CORreSPNDIENTE.
//hay que hacer uno igual pero que fetchee /api/boards, o sea getall. o realmente solo de
const BoardsList = () => {
  // necesitamos coger los boards del ID correspndiente
  const [boards, setBoards] = useState([]);

  const [pinsInfo, setPinsInfo] = useState([{}]);

  const localStorageUser = JSON.parse(localStorage.getItem("user"));

  let userId = null;
  if (localStorageUser === null) {
    userId = 1;
  } else {
    userId = localStorageUser._id;
  }

  useEffect(() => {
    fetch(`http://localhost:5001/api/users/${userId}/boards`) //http://localhost:5000/api/users/21/boards ruta correcta
      .then((promise) => {
        if (promise.status === 200) {
          return promise.json();
        }
      })
      .then((json) => setBoards(json));
  }, []);

  console.log(boards);
  //array vacio.
  let boardId = [];

  boards.map((board) => {
    boardId.push(board._id);
    console.log(boardId); ///esta es la clave de todo. quiza un fetch for each esos ID. :o
  });
  console.log(boardId);

  useEffect(() => {
    boardId.map((boardId) => {
      fetch(`http://localhost:5001/api/boards/${boardId}/pins`) //http://localhost:5000/api/users/21/boards ruta correcta
        .then((promise) => {
          if (promise.status === 200) {
            return promise.json(); //Se queda solamente con el valor del ultimo fetch.
          }
        })
        .then((json) => setPinsInfo(json));
    });
  }, [boards]);

  console.log(pinsInfo);
  let urlImage = [];

  pinsInfo.map((pins) => {
    console.log(pins.urlImage);
    urlImage.push(pins.urlImage);
  });

  console.log(urlImage);

  return (
    <div>
      <span className="boardsList__title">Boards</span>
      <div className="boardsList__container">
        {boards.map((board) => (
          <BoardCard board={board} urlImage={urlImage} />
        ))}
      </div>
    </div>
  );
};

export default BoardsList;
