import { useState, useEffect } from "react";
import "../pinForm/pinForm.css";

const PinForm = () => {
  const [selectedBoard, setSelectedBoard] = useState();
  const [pinName, setPinName] = useState();
  const [image, setImage] = useState();
  const [source, setSource] = useState();
  const [description, setDescription] = useState();

  const [boards, setBoards] = useState([]);

  const localStorageUser = JSON.parse(localStorage.getItem("user"));

  let userId = null;
  if (localStorageUser === null) {
    userId = 1;
  } else {
    userId = localStorageUser._id;
  }

  useEffect(() => {
    if (localStorageUser) {
      fetch(`http://localhost:5001/api/users/${localStorageUser._id}/boards`) //http://localhost:5000/api/users/21/boards ruta correcta
        .then((promise) => {
          if (promise.status === 200) {
            return promise.json();
          }
        })
        .then((json) => setBoards(json));
    }
  }, []);

  console.log("holaaaAKSDSAJKDJDKSA" + boards);

  const body = {
    author: userId,
    board: selectedBoard,
    name: pinName,
    urlImage: image,
    source: source,
    description: description,
  };

  const handleSubmit = () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    fetch("http://localhost:5001/api/pins", options).then((response) =>
      response.json()
    );
  }; // Ya hace el POST de lo qe tu le mandes.

  return (
    <form className="pinForm">
      <label>Pin Name</label>
      <input
        type="text"
        name="pinName"
        onChange={(e) => setPinName(e.target.value)}
      />
      <label>Image</label>
      <input
        type="text"
        name="image"
        onChange={(e) => setImage(e.target.value)}
      />
      <label>Source</label>
      <input
        type="text"
        name="source"
        onChange={(e) => setSource(e.target.value)}
      />
      <label>Description</label>
      <input
        type="text"
        name="description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <label>Select your desired Board</label>
      <select onChange={(e) => setSelectedBoard(e.target.value)}>
        <option value="----">----</option>
        {boards.map((board) => {
          return <option value={board._id}>{board.title}</option>;
        })}
        ;
      </select>

      <button onClick={handleSubmit} type="submit">
        Enviar pin!
      </button>
    </form>
  );
};

export default PinForm;
