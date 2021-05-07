import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const ChatView = () => {
  const history = useHistory();
  const selectedImage = useSelector((state) => state.viewImage.viewedImage);

  const exit = () => {
    history.replace("/chats");
  };
  useEffect(() => {
    if (!selectedImage) {
      exit();
    }
  });
  console.log(selectedImage);
  return (
    <div>
      <img onClick={exit} src={selectedImage} alt="" />
      {selectedImage && (
        <CountdownCircleTimer
          isPlaying
          duration={10}
          strokeWidth={6}
          size={50}
          colors={[
            ["#E7D7C1", 0.33],
            ["#A78A7F", 0.33],
            ["#8C1C13", 0.33],
            ["#BF4342", 0.33],
          ]}
        >
          {({ remainingTime }) => {
            if (remainingTime === 0) {
              exit();
            }
            return remainingTime;
          }}
        </CountdownCircleTimer>
      )}
    </div>
  );
};

export default ChatView;
