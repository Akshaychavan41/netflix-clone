import React, { useRef } from "react";
import { auth } from "../../firebase";
import "./signIn.css";
function SignIn(props) {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signInHandler = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((user) => {})
      .catch((error) => {
        alert(error.message);
      });
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((user) => {})
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="signIn_container">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email or phone number" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit" onClick={signInHandler}>
          Sign In
        </button>
        <p>
          New to Netflix? <span onClick={register}>Sign up now.</span>
        </p>
      </form>
    </div>
  );
}

export default SignIn;
