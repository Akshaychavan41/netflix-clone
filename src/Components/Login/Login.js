import React, { useState } from "react";
import SignIn from "../SignIn/SignIn";
import "./login.css";
import jumboData from "../../jumbo.json";
import Jumbotron from "./Jumbotron/Jumbotron";
import { useHistory } from "react-router";
function Login(props) {
  const [signIn, setSignIn] = useState(false);
  const [requestPage, setRequestPage] = useState("");
  const history = useHistory();
  return (
    <div className="main__container">
      <div className={`loginScreen ${signIn ? "signIn" : ""}`}>
        <div className="loginScreen__background">
          <img
            onClick={() => setSignIn(false)}
            className="loginScreen__logo"
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          ></img>
          <button
            onClick={() => {
              setRequestPage("signIn");
              setSignIn(true);
            }}
            className="loginScreen__button"
          >
            Sign In
          </button>
          {signIn ? (
            <SignIn requestPage={requestPage} />
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
                <button
                  onClick={() => {
                    setRequestPage("register");
                    setSignIn(true);
                  }}
                  className="subscribe__button"
                >
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {!signIn && (
        <div className="jumbotron">
          {jumboData.map((card) => (
            <Jumbotron
              id={card.id}
              title={card.title}
              subtitle={card.subTitle}
              image={card.image}
              alt={card.alt}
              direction={card.direction}
              video={card.video}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Login;
