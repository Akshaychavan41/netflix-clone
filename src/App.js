import React, { useEffect, useState } from "react";
import "./App.css";
import Homescreen from "./Components/Homescreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./Components/ProfileScreen/ProfileScreen";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //logged in
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);
  const user = useSelector(selectUser);
  console.log(user);
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Switch>
            <Route exact path="/profile">
              <ProfileScreen />
            </Route>
            <Route exact path="/">
              <Homescreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
