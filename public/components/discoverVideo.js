import React, { useEffect } from "react";

const discoverVideo = (props) => {
  const { title, featuredImage, authorName, views, time, duration } =
    props.content;

  useEffect(() => {
    console.log(props.content.title);
  }, []);

  return (
    <div className="main-blog anim">
      {/* <div className="main-blog anim" style="--delay: .1s"> */}
      <div className="main-blog__title"> {title}</div>
      <div className="main-blog__author">
        <div className="author-img__wrapper">
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
        <div className="author-detail">
          <div className="author-name">{authorName}</div>
          <div className="author-info">
            {views} <span className="seperate"></span>
            {time}
          </div>
        </div>
      </div>
      <div className="main-blog__time">{duration}</div>
    </div>
  );
};

export default discoverVideo;
