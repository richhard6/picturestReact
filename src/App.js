import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/header/Header";
import BoardPage from "./views/boardPage";
import HomePage from "./views/homePage";
import UserProfilePage from "./views/userProfilePage";
import PinList from "./components/pins/pinsList/PinList";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "./views/loginPage";
import BoardFormModal from "../src/components/boardForm/BoardFormModal";

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("http://localhost:5001/api/users/5fd9e66ff61fe4098091bab1")
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
          <Route path="/">
            <HomePage user={user} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
