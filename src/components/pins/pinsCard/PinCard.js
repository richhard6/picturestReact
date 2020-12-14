import React, { useState } from "react";
import "../pinsCard/pinsCard.css";

const PinCard = ({ pin }) => {
  // {pin.name}
  return (
    <div className="pin__Card_container">
      <img src={pin.urlImage} alt="pin imagex" className="image"></img>
      <div>{pin.name}</div>
    </div>
  );
};

export default PinCard;
