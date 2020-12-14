import React, { useState, useEffect } from "react";
import PinCard from "../pinsCard/PinCard";
import "../pinsList/pinList.css";

const PinList = () => {
  // necesitamos coger los boards del ID correspndiente
  const [pins, setPins] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/api/pins/`) //http://localhost:5000/api/users/21/boards ruta correcta
      .then((promise) => {
        if (promise.status === 200) {
          return promise.json();
        }
      })
      .then((json) => setPins(json));
  }, []);
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

export default PinList;
