import React from "react";
import Link from "next/link";

const mostWatched = (props) => {
  const {
    id,
    duration,
    videoLink,
    featuredImage,
    authorName,
    videoName,
    views,
    time,
  } = props.content;
  return (
    <Link href={"/videos/" + id}>
      <div className="video anim">
        <div className="video-time">{duration}</div>
        <div className="video-wrapper">
          <video muted="">
            <source src={videoLink} type="video/mp4" />
          </video>
          <div className="author-img__wrapper video-author">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-check"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
            <img className="author-img" src={featuredImage} />
          </div>
        </div>
        <div className="video-by">{authorName}</div>
        <div className="video-name">{videoName}</div>
        <div className="video-view">
          {views} <span className="seperate video-seperate"></span>
          {time}
        </div>
      </div>
    </Link>
  );
};

export default mostWatched;
