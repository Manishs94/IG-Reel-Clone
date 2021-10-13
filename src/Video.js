import React, { useState, useRef } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoHeader from "./VideoHeader";

function Video({ autoplay, url, likes, shares, channel, avatarSrc, song }) {
  const [play, setPlay] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (play) {
      videoRef.current.play();
      setPlay(false);
    } else {
      videoRef.current.pause();
      setPlay(true);
    }
  };

  return (
    <div className="video">
      <VideoHeader />
      <video
        ref={videoRef}
        onClick={onVideoPress}
        autoPlay={autoplay}
        loop
        className="video__player"
        src={url}
      />
      <VideoFooter
        channel={channel}
        likes={likes}
        shares={shares}
        avatarSrc={avatarSrc}
        song={song}
      />
    </div>
  );
}

export default Video;