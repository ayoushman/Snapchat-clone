import { StopRounded } from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router";
import ReactTimeago from "react-timeago";
import { useDispatch } from "react-redux";
import { viewImage } from "../redux/actions/cameraAction";
import { db } from "../firebase/FireBase";
function Chat({ id, userName, timestamp, read, imageURL, profilePic }) {
  const history = useHistory();

  const dispatch = useDispatch();
  const open = () => {
    if (!read) {
      console.log(imageURL);
      dispatch(viewImage(imageURL));
      db.collection("posts").doc(id).set({ read: true }, { merge: true });
      history.push("/chats/view");
    }
  };
  return (
    <div onClick={open}>
      <h4>{userName}</h4>
      <p>
        {!read && "Tap to view -"}
        <ReactTimeago date={new Date(timestamp?.toDate()).toUTCString()} />
      </p>

      {!read && <StopRounded />}
    </div>
  );
}

export default Chat;
