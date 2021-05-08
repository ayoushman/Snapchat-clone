import { StopRounded } from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router";
import ReactTimeago from "react-timeago";
import { useDispatch, useSelector } from "react-redux";
import { viewImage } from "../redux/actions/cameraAction";
import { db } from "../firebase/FireBase";
import "./css/Chat.css";
function Chat({ id, username, timestamp, read, imageURL, profilePic }) {
  const history = useHistory();

  const dispatch = useDispatch();
  const open = () => {
    if (!read) {
      dispatch(viewImage(imageURL));
      db.collection("posts").doc(id).set({ read: true }, { merge: true });
      history.push("/chats/view");
    }
  };

  return (
    <div className="chat-holder" onClick={open}>
      <img className="profilepic" src={profilePic} alt="" />
      <h4 className="name-head"> {username} </h4>

      <p className="date-para">
        {!read && "Tap to view -"}
        <ReactTimeago date={new Date(timestamp?.toDate()).toUTCString()} />
      </p>

      {!read && <StopRounded />}
    </div>
  );
}

export default Chat;
