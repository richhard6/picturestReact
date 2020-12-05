import { useState } from "react";

const BoardForm = (props) => {
  const [title, setTitle] = useState();

  const body = {
    author: props.id,
    title: title,
  };

  console.log(body);

  const handleSubmit = () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    fetch("http://localhost:5000/api/boards", options).then((response) =>
      console.log(response)
    );
  }; // Ya hace el POST de lo qe tu le mandes.
  return (
    <form>
      <label>
        <input
          type="text"
          name="name"
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <button onClick={handleSubmit} type="submit">
        Create board!
      </button>
    </form>
  );
};

export default BoardForm;
