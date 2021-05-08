import React, { useCallback, useRef, useState } from "react";
import WebCam from "react-webcam";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import { useDispatch } from "react-redux";
import { setImage } from "../redux/actions/cameraAction";
import { useHistory } from "react-router";
import "./css/webcam.css";
//  for sizing the webcam

const videoConstraints = {
  width: 250,
  height: 400,
  facingMode: "user",
};

function WebcamCapture() {
  const WebcamRef = useRef(null);
  const history = useHistory();
  const dispatch = useDispatch();
  //   this function stores the output of the functions and seees if the function is changed again or not with ref
  //and runs the function again if the dependecy is changed here WebcamRef
  // const [capturedImg, setcapturedImg] = useState(null);
  const WebcamCapture = useCallback(() => {
    const imgsrc = WebcamRef.current.getScreenshot();
    dispatch(setImage(imgsrc));
    history.push("/preview");
  }, [WebcamRef]);

  return (
    <div className="WebcamCapture">
      <WebCam
        className="webcam"
        audio={false}
        height={videoConstraints.height}
        ref={WebcamRef}
        screenshotFormat="image/jpeg"
        width={videoConstraints.width}
        videoConstraints={videoConstraints}
      />

      <RadioButtonUncheckedIcon
        className="webcam-capture-btn"
        onClick={WebcamCapture}
      />
    </div>
  );
}

export default WebcamCapture;
