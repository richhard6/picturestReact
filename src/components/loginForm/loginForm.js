import { useState } from "react";
import { useHistory } from "react-router";
const LogInForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(false);
  const history = useHistory();

  const userInfo = localStorage.getItem("user");

  const body = {
    email: email,
    password: password,
  };

  const handleLogin = () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    fetch("http://localhost:5001/login", options)
      .then((response) => response.json())
      .then((json) => {
        localStorage.setItem("token", json.token);
        localStorage.setItem("user", JSON.stringify(json.user));
        history.replaceState("/user");
        window.location.reload(false);
      })
      .catch((error) => {
        setError(true);
      });
  };
  return (
    <form>
      <label>Email</label>
      <input
        type="text"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Password</label>
      <input
        type="text"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p>Something went wrong....</p>}
      <button onClick={handleLogin} type="submit">
        Login!
      </button>
    </form>
  );
};

export default LogInForm;
