import React, { useEffect, useState } from "react";
import { db } from "../firebase/FireBase";
import Chat from "./Chat.js";
const Chats = () => {
  const [posts, setPosts] = useState([]);
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
  return (
    <div>
      <div className="chats_posts">
        {posts.map(
          ({
            id,
            data: { profilePic, userName, timestamp, imageURL, read },
          }) => (
            <Chat
              key={id}
              id={id}
              username={userName}
              timestamp={timestamp}
              imageURL={imageURL}
              read={read}
              profilePic={profilePic}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Chats;
