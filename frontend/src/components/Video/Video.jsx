import React, { useRef, useState, useEffect } from "react";

import "./Video.css";

export default function Video({ url, profileUrl, username, likes, comments }) {
  const [isVideoPlaying, setisVideoPlaying] = useState(false);

  const vidRef = useRef();

  const onVideoClick = () => {
    if (isVideoPlaying) {
      vidRef.current.pause();
      setisVideoPlaying(false);
    } else {
      vidRef.current.play();
      setisVideoPlaying(true);
    }
  };

  useEffect(() => {
    const scroll = document.getElementById("video-container");

    if (scroll) {
      scroll.addEventListener("scroll", () => {
        vidRef.current.pause();
      });
    }
  }, []);

  return (
    <div className="video-cards">
      <video
        onClick={onVideoClick}
        className="video-player"
        ref={vidRef}
        src={url}
        loop
      />
      <div className="video-details">
        <div className="likes">
          <i className="fa-solid fa-heart"></i>
          <div>{likes}</div>
        </div>

        <div className="comments">
          <i class="fa-solid fa-comment"></i>
          <div>{comments}</div>
        </div>

        <div className="message">
          <i className="fa-solid fa-message"></i>
        </div>
      </div>
      <div className="user-details">
        <div className="profile">
          <img className="user-profile" src={profileUrl} alt="User profile" />
          <span className="username">{username}</span>
        </div>
        <div className="caption">
            One stop solution to all of your problems
        </div>
      </div>
    </div>
  );
}
