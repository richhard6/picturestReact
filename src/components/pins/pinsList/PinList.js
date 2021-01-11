import React, { useState, useEffect } from "react";
import PinCard from "../pinsCard/PinCard";
import "../pinsList/pinList.css";
import PinModal from "../pinsCard/PinModal";

const PinList = () => {
  // necesitamos coger los boards del ID correspndiente
  const [pins, setPins] = useState([]);
  const [isShowing, setToggleModal] = useState(false);

  const handleOpenModal = () => {
    setToggleModal(!isShowing);
    console.log(isShowing);
  };
  const handleOnClose = () => {
    setToggleModal(!isShowing);
  };
  useEffect(() => {
    fetch(`http://localhost:5001/api/pins/`) //http://localhost:5000/api/users/21/boards ruta correcta
      .then((promise) => {
        if (promise.status === 200) {
          return promise.json();
        }
      })
      .then((json) => setPins(json));
  }, []);
  return (
    <>
      <div>
        <span className="pinList__title">Pins</span>
        <div className="pinList__container">
          {pins.map((pin) => (
            <div className="pinCard__container" onClick={handleOpenModal}>
              <PinCard pin={pin} />
            </div>
          ))}
        </div>
      </div>

      <PinModal open={isShowing} handleOnClose={handleOnClose} />
    </>
  );
};

export default PinList;
