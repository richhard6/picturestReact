import React, { useState, useEffect } from "react";

const BoardCard = () => {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/boards/")
      .then((boards) => {
        if (boards.status === 200) {
          console.log(boards.json());
          return boards.json();
        }
      })
      .then((json) => setBoards(json));
  }, []);
  return <div>h00a</div>;
};

export default BoardCard;
