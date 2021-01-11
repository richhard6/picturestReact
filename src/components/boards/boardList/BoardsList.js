import React, { useState, useEffect } from "react";
import BoardCard from "../boardCard/BoardCard";
import "../boardList/boardList.css";

//ESTO AHORA SERIA BOARD USER LIST, YA QUE MUESTRA SOLO LOS BOARDS DEl USUARIo CORreSPNDIENTE.
//hay que hacer uno igual pero que fetchee /api/boards, o sea getall. o realmente solo de
const BoardsList = () => {
  // necesitamos coger los boards del ID correspndiente
  const [boards, setBoards] = useState([]);

  const [pinsInfo, setPinsInfo] = useState([]);

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

  useEffect(() => {
    boards.map((board) => {
      let boardId = board._id;
      console.log(boardId); // no esta haciedno el console .log ....
      fetch(`http://localhost:5001/api/boards/${boardId}/pins`)
        .then((promise) => {
          if (promise.status === 200) {
            return promise.json();
          }
        })
        .then((json) => setPinsInfo(json));
    });
  }, []);

  console.log(boards);
  console.log(pinsInfo); //array vacio.

  boards.map((board) => {
    let x = board._id;
    console.log(x); ///esta es la clave de todo. quiza un fetch for each esos ID. :o
  });

  return (
    <div className="boardList__container">
      {boards.map((board) => (
        <div className="boardCard__container">
          <BoardCard board={board} />
        </div>
      ))}
    </div>
  );
};

export default BoardsList;
