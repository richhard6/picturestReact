import React, { useState, useEffect } from "react";
import "../boardCard/boardCard.css";

const BoardCard = ({ board }) => {
  //  <img src={board.firstPins} alt="first img"></img> linkear esta imagen.
  return (
    <div className="board__Card">
      <div>{board.title}</div>
      <div className="board__Card_NumberPins">{board.numberOfPins}</div>
    </div>
  );
};

export default BoardCard;
