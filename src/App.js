import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/header/Header";
import BoardPage from "./views/boardPage";
import HomePage from "./views/homePage";
import UserProfilePage from "./views/userProfilePage";
import PinList from "./components/pins/pinsList/PinList";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "./views/loginPage";
import RegisterPage from "./views/registerPage";
import BoardFormModal from "../src/components/boardForm/BoardFormModal";
import PinsOfBoardPage from "./views/pinsOfBoardPage";

function App() {
  const [user, setUser] = useState({});

  const token = localStorage.getItem("token");
  const localStorageUser = JSON.parse(localStorage.getItem("user"));

  let userId = null;
  if (localStorageUser === null) {
    userId = 1;
  } else {
    userId = localStorageUser._id;
  }

  useEffect(() => {
    fetch("http://localhost:5001/api/users/" + userId)
      .then((promise) => {
        if (promise.status === 200) {
          return promise.json();
        }
      })
      .then((json) => setUser(json));
  }, []);

  return (
    <div className="app__body">
      <BrowserRouter>
        <div className="header">
          <Header
            avatar={user.avatar}
            firstName={user.firstName}
            lastName={user.lastName}
            following={user.following}
            username={user.username}
          />
        </div>

        <Switch>
          <Route path="/test">
            <PinsOfBoardPage />
          </Route>
          <Route path="/boards">
            <BoardPage user={user} />
          </Route>
          <Route path="/user">
            <UserProfilePage user={user} />
          </Route>
          <Route path="/pins">
            <PinList user={user} />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/register">
            <RegisterPage />
          </Route>
          <Route path="/">
            <HomePage user={user} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
