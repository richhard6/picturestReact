import React, { useState, useEffect } from "react";
import BoardCard from "../boardCard/BoardCard";
import "../boardList/boardList.css";

const BoardsList = () => {
  // necesitamos coger los boards del ID correspndiente
  const [boards, setBoards] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/api/boards/`)
      .then((promise) => {
        if (promise.status === 200) {
          return promise.json();
        }
      })
      .then((json) => setBoards(json));
  }, []);
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
