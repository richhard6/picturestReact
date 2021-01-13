import React, { useState, useEffect } from "react";
import PinCard from "../pinsCard/PinCard";
import "../pinsList/pinList.css";
import PinModal from "../pinsCard/PinModal";

const PinList = () => {
  // necesitamos coger los boards del ID correspndiente
  const [pins, setPins] = useState([]);
  const [isShowing, setToggleModal] = useState(false);

  const handleOpenModal = (pinx) => {
    setToggleModal(!isShowing);

    console.log(isShowing);
  };

  const localStorageUser = JSON.parse(localStorage.getItem("user"));

  let userId = null;
  if (localStorageUser === null) {
    userId = 1;
  } else {
    userId = localStorageUser._id;
  }

  const handleOnClose = () => {
    setToggleModal(!isShowing);
  };
  useEffect(() => {
    fetch(`http://localhost:5001/api/users/${userId}/pins`) //http://localhost:5000/api/users/21/boards ruta correcta
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
              <PinModal
                open={isShowing}
                handleOnClose={handleOnClose}
                pin={pin}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PinList;
