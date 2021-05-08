import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../firebase/FireBase";
import { logoutUser } from "../redux/actions/authAction";
import Chat from "./Chat.js";
const Chats = () => {
  const userImg = useSelector((state) => state.auth.user.profilePic);
  console.log(userImg);
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const logout = () => {
    dispatch(logoutUser());
  };
  return (
    <div>
      <div className="logout-div">
        <img onClick={logout} src={userImg} alt="" />
      </div>
      <div className="chats_posts">
        {posts.map(
          ({
            id,
            data: { profilePic, userName, timestamp, imageURL, read },
          }) => {
            const usr = userName.userName;
            const profilepic = profilePic.profilePic;
            return (
              <Chat
                key={id}
                id={id}
                username={usr}
                timestamp={timestamp}
                imageURL={imageURL}
                read={read}
                profilePic={profilepic}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default Chats;
