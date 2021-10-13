import React, { useState, useEffect } from "react";

import "./App.css";
import Video from "./Video";
import db from "./firebase";
import VideoHeader from "./VideoHeader";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("reels").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  console.log(posts);

  return (
    <div className="app">
      <div className="app__top">
        <img
          className="app__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
          alt=""
        />
        <h1>Reels</h1>
      </div>

      <div className="app__videos">
        {posts.map(({ channel, avatarSrc, song, url, likes, shares }) => (
          <Video
            channel={channel}
            avatarSrc={avatarSrc}
            song={song}
            url={url}
            likes={likes}
            shares={shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;