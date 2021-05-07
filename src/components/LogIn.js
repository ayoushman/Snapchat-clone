import React from "react";
import "./css/login.css";
import { useDispatch } from "react-redux";
import { auth, Provider } from "../firebase/FireBase";
import { loginUser } from "../redux/actions/authAction";
import { FaSignInAlt } from "react-icons/fa";
import sloth from "../assets/sloth (1).svg";

const LogIn = () => {
  const dispatch = useDispatch();
  const signIn = () => {
    auth
      .signInWithPopup(Provider)
      .then((result) => {
        console.log(result);
        dispatch(
          loginUser({
            username: result.user.displayName,
            profilePic: result.user.photoURL,
            id: result.user.uid,
          })
        );
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  };
  return (
    <div classname="login">
      <div className="login-container">
        <img className="login-img" src={sloth} alt="" />
        <button className="signIn-btn" onClick={signIn}>
          {" "}
          <FaSignInAlt className="btn-icon" />
          SignIn
        </button>
      </div>
    </div>
  );
};

export default LogIn;
