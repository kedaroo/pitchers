import React from "react";
import Video from "../Video/Video";
const data = [
  {
    url: "https://res.cloudinary.com/di2flcikt/video/upload/q_49/v1665816416/pitches/ZERO_to_HERO_story___Tanay_Pratap_Shorts_HD_dlwcqo.mp4",
    profileUrl: "https://avatars.githubusercontent.com/u/80971056?v=4",
    username: "Startup pitcher",
    likes: 100,
    comments: 50,
  },
  {
    url: "https://res.cloudinary.com/di2flcikt/video/upload/q_48/v1665816413/pitches/This_is_how_to_pitch_your_startup_shorts_HD_ouuq9f.mp4",
    profileUrl: "https://avatars.githubusercontent.com/u/80971056?v=4",
    username: "Startup pitcher",
    likes: 100,
    comments: 50,
  },
  {
    url: "https://res.cloudinary.com/di2flcikt/video/upload/q_49/v1665816413/pitches/19_Year_Olds_Built_a_4000_CRORE_Startup__Zepto_Business_Model_Ishan_atpuog.mp4",
    profileUrl: "https://avatars.githubusercontent.com/u/80971056?v=4",
    username: "Startup pitcher",
    likes: 100,
    comments: 50,
  },
  {
    url: "https://res.cloudinary.com/di2flcikt/video/upload/q_50/v1665816415/pitches/MENTOR_Khojne_Ka_Sabase_BEST_Tareeka_Tanay_Pratap_Shorts_HD_ur03n3.mp4",
    profileUrl: "https://avatars.githubusercontent.com/u/80971056?v=4",
    username: "Startup pitcher",
    likes: 100,
    comments: 50,
  },
];

export default function Feed() {
  return <div className="video-container" id="video-container">
  {data.map((video) => (
    <Video
      url={video.url}
      profileUrl={video.profileUrl}
      username={video.username}
      likes={video.likes}
      comments={video.comments}
    ></Video>
  ))}
</div>;
}