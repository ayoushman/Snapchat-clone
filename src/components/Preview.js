import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { resetImage } from "../redux/actions/cameraAction";

import { v4 as uuid } from "uuid";
import CloseIcon from "@material-ui/icons/Close";
import SendIcon from "@material-ui/icons/Send";
import "./css/Preview.css";
import { db, storage } from "../firebase/FireBase";
import firebase from "firebase";

const Preview = () => {
  const dispatch = useDispatch();

  const CameraImage = useSelector((state) => state.cameraImage.image);
  const userName = useSelector((state) => state.auth.user.username);
  const profilePic = useSelector((state) => state.auth.user.profilePic);
  const history = useHistory();

  const ClearImage = () => {
    dispatch(resetImage());
  };

  const sendPost = () => {
    const id = uuid();
    const uploadTask = storage
      .ref(`posts/${id}`)
      .putString(CameraImage, "data_url");

    uploadTask.on(
      "state_changed",
      null,
      (err) => {
        console.log(err);
      },
      () => {
        storage
          .ref("posts")
          .child(id)
          .getDownloadURL()
          .then((url) => {
            db.collection("posts").add({
              imageURL: url,
              userName: { userName },
              profilePic: { profilePic },
              read: false,
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            });
            history.replace("/chats");
          });
      }
    );
  };

  useEffect(() => {
    if (!CameraImage) {
      history.replace("/");
    }
  }, [CameraImage, history]);

  return (
    <div className="preview">
      <img className="preview-img" src={CameraImage} alt="" />
      <CloseIcon className="close-icon" onClick={ClearImage} />
      <div className="send-div">
        <button className="send-btn" onClick={sendPost}>
          Send Now <SendIcon />
        </button>
      </div>
    </div>
  );
};

export default Preview;
