import React, { useEffect, useState } from "react";
import "./nav.css";
import logo from "../../Assets/avatar.png";
import netflixLogo from "../../Assets/netflixLogo.png";
import { useHistory } from "react-router";
function Navbar() {
  const [show, handleShow] = useState(false);
  const history = useHistory();
  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    // return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          onClick={() => history.push("/")}
          className="nav__logo"
          src={
            "https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          }
        />
        {show}
        <img
          onClick={() => history.push("/profile")}
          className="nav__avatar"
          src={logo}
        />
      </div>
    </div>
  );
}

export default Navbar;
