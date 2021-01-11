import { useState } from "react";
import "../registerForm/registerForm.css";

const RegisterForm = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [avatar, setAvatar] = useState();
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();

  const body = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    avatar: avatar,
    password: password,
    username: username,
  };

  const handleSubmit = () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    fetch("http://localhost:5001/api/users", options).then((response) =>
      response.json()
    );
  }; // Ya hace el POST de lo qe tu le mandes.

  // Ya hace el POST de lo qe tu le mandes.
  return (
    <form className="registerForm">
      <label>First Name</label>
      <input
        type="text"
        name="firstName"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <label>Last Name</label>
      <input
        type="text"
        name="lastName"
        onChange={(e) => setLastName(e.target.value)}
      />
      <label>Email</label>
      <input
        type="text"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Avatar</label>
      <input
        type="text"
        name="avatar"
        onChange={(e) => setAvatar(e.target.value)}
      />
      <label>Password</label>
      <input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <label>Username</label>
      <input
        type="text"
        name="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSubmit} type="submit">
        Register!
      </button>
    </form>
  );
};

export default RegisterForm;
