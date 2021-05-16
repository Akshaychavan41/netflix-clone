import React from "react";
import Navbar from "../Navbar/Navbar";
import logo from "../../Assets/avatar.png";
import "./profileScreen.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";
import { useHistory } from "react-router";

function ProfileScreen(props) {
  const user = useSelector(selectUser);
  const history = useHistory();
  console.log(user);
  return (
    <div className="profileScreen">
      <Navbar />
      <div className="profileCard">
        <h1>Edit Profile</h1>
        <div className="profileInfo">
          <img src={logo}></img>
          <div className="profileDetails">
            <h2>{user.email}</h2>
            <button
              onClick={() => {
                auth.signOut();
                history.push("/");
              }}
              className="logoutButton"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
