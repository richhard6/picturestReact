import React, { useState, useEffect } from "react";

const BoardsList = () => {
  const [boards, setBoards] = useState({});
  useEffect(() => {
    fetch("http://localhost:5000/api/boards")
      .then((promise) => {
        if (promise.status === 200) {
          return promise.json();
        }
      })
      .then((json) => setBoards(json));
  }, []);
  return <div className="boardsList__container"></div>;
};

export default BoardsList;
