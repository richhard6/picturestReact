import { useState } from "react";
import "../pinForm/pinForm.css";

const PinForm = () => {
  const [selectedBoard, setSelectedBoard] = useState();
  const [author, setAuthor] = useState();
  const [pinName, setPinName] = useState();
  const [image, setImage] = useState();
  const [source, setSource] = useState();
  const [description, setDescription] = useState();

  const body = {
    author: author,
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

  // Ya hace el POST de lo qe tu le mandes.
  return (
    <form className="pinForm">
      <label>Author</label>
      <input
        type="text"
        name="author"
        onChange={(e) => setAuthor(e.target.value)}
      />
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
        <option value="5fdc71a67e176802d85cfaf2">
          5fdc71a67e176802d85cfaf2
        </option>
        <option value="e"></option>
        <option value="3"></option>
        <option value="1"></option>
      </select>
      <button onClick={handleSubmit} type="submit">
        Enviar pin!
      </button>
    </form>
  );
};

export default PinForm;
