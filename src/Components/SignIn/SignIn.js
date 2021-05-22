import React, { useRef, useState } from "react";
import { auth } from "../../firebase";
import "./signIn.css";
function SignIn({ requestPage }) {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [registerUser, setRegisterUser] = useState(requestPage === "register");
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
        {registerUser ? <h1>Register</h1> : <h1>Sign In</h1>}
        <input ref={emailRef} placeholder="Email or phone number" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        {registerUser ? (
          <div>
            <button type="submit" onClick={register}>
              Register
            </button>
            <p>
              Already a user?{" "}
              <span onClick={() => setRegisterUser(false)}>Login now.</span>
            </p>
          </div>
        ) : (
          <div>
            <button type="submit" onClick={signInHandler}>
              Sign In
            </button>
            <p>
              New to Netflix?{" "}
              <span onClick={() => setRegisterUser(true)}>Sign up now.</span>
            </p>
          </div>
        )}
      </form>
    </div>
  );
}

export default SignIn;
