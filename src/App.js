import React, { useEffect } from "react";
import WebcamCapture from "./components/WebcamCapture";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Preview from "./components/Preview";
import Chat from "./components/Chats";
import ChatView from "./components/ChatView";
import { useDispatch, useSelector } from "react-redux";
import LogIn from "./components/LogIn";
import { auth } from "./firebase/FireBase";
import { loginUser, logoutUser } from "./redux/actions/authAction";
import "./css/App.css";
function App() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            username: authUser.user.displayName,
            profilePic: authUser.user.photoURL,
            id: authUser.user.uid,
          })
        );
      } else {
        dispatch(logoutUser);
      }
    });
  }, []);
  return (
    <div className="App">
      <div className="app-body">
        <Router>
          {user ? (
            <Switch>
              {" "}
              <Route exact path="/">
                <WebcamCapture />
              </Route>
              <Route exact path="/preview">
                <Preview />
              </Route>
              <Route exact path="/chats">
                <Chat />
              </Route>
              <Route exact path="/chats/view">
                <ChatView />
              </Route>
            </Switch>
          ) : (
            <LogIn />
          )}
        </Router>{" "}
      </div>
    </div>
  );
}

export default App;
