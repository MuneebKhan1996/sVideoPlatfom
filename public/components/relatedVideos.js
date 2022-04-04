import React from "react";

const videos = [
  {
    title: "Prepare for your first skateboard jump",
    featuredImage: "https://cdn.nohat.cc/thumb/f/720/3b55eddcfffa4e87897d.jpg",
    views: "125.908 views",
    time: "2 days ago",
    author: "Jordan Wise",
  },
  {
    title: "Prepare for your first skateboard jump",
    featuredImage: "https://cdn.nohat.cc/thumb/f/720/3b55eddcfffa4e87897d.jpg",
    views: "125.908 views",
    time: "3 days ago",
    author: "Jordan Wise",
  },
  {
    title: "Prepare for your first skateboard jump",
    featuredImage: "https://cdn.nohat.cc/thumb/f/720/3b55eddcfffa4e87897d.jpg",
    views: "125.908 views",
    time: "4 days ago",
    author: "Jordan Wise",
  },
];

const relatedVideos = () => {
  return (
    <>
      {videos.map((video, index) => {
        if (index < 2) {
          return (
            <div className="chat-vid anim">
              <div className="chat-vid__wrapper">
                <img className="chat-vid__img" src={video.featuredImage} />
                <div className="chat-vid__content">
                  <div className="chat-vid__name">{video.title}</div>
                  <div className="chat-vid__by">{video.author}</div>
                  <div className="chat-vid__info">
                    {video.views} <span className="seperate"></span>
                    {video.time}
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}

      <div className="chat-vid__button anim">
        See All related videos ({videos.length})
      </div>
    </>
  );
};

export default relatedVideos;
