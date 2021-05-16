import React, { useState } from "react";
import SignIn from "../SignIn/SignIn";
import "./login.css";

function Login(props) {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        ></img>
        <button onClick={() => setSignIn(true)} className="loginScreen__button">
          Sign In
        </button>
        {signIn ? (
          <SignIn />
        ) : (
          <div className="loginScreen__body">
            <h1>Unlimited movies, TV shows and more.</h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
            <h4>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h4>
            <div className="loginScreen__subscribe">
              <input
                placeholder="Enter Email"
                className="subscribe__input"
                type="text"
              />
              <button className="subscribe__button">Get Started</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
