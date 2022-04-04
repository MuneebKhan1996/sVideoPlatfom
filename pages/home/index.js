import React from "react";
import Sidebar from "../../public/components/sidebar";
import Navbar from "../../public/components/navbar";
import DiscoverVideo from "../../public/components/discoverVideo";
import MostWatched from "../../public/components/mostWatched";

const discoverContent = [
  {
    title: "How to do Basic Jumping and how to landing safely",
    featuredImage:
      "https://images.unsplash.com/photo-1560941001-d4b52ad00ecc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    authorName: "Thomas Hope",
    views: "53K views",
    time: "2 weeks ago",
    duration: "7 min",
  },
  {
    title: "How to do Basic Jumping and how to landing safely",
    featuredImage:
      "https://images.unsplash.com/photo-1560941001-d4b52ad00ecc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    authorName: "Thomas Hope",
    views: "53K views",
    time: "2 weeks ago",
    duration: "7 min",
  },
];

const mostWatchedContent = [
  {
    id: "1",
    duration: "8 min",
    videoLink:
      "https://player.vimeo.com/external/436572488.sd.mp4?s=eae5fb490e214deb9ff532dd98d101efe94e7a8b&profile_id=139&oauth2_token_id=57447761",
    featuredImage:
      "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    authorName: "Andy William",
    videoName: "Basic how to ride your skateboard comfortly",
    views: "54K views",
    time: "1 week ago",
  },
  {
    id: "2",
    duration: "5 min",
    videoLink:
      "https://player.vimeo.com/external/449972745.sd.mp4?s=9943177fe8a6147b7bc4598259401f06ec57878a&profile_id=139&oauth2_token_id=57447761",
    featuredImage:
      "https://images.pexels.com/photos/3370021/pexels-photo-3370021.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    authorName: "Gerard Bind",
    videoName: "Prepare for your first skateboard jump",
    views: "44K views",
    time: "2 week ago",
  },
  {
    id: "3",
    duration: "2 min",
    videoLink:
      "https://player.vimeo.com/external/436553499.sd.mp4?s=0e44527f269278743db448761e35c5e39cfaa52c&profile_id=139&oauth2_token_id=57447761",
    featuredImage:
      "https://images.pexels.com/photos/1870163/pexels-photo-1870163.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    authorName: "John Wise",
    videoName: "Basic equipment to play skateboard safely",
    views: "34K views",
    time: "4 week ago",
  },
  {
    id: "4",
    duration: "9 min",
    videoLink:
      "https://player.vimeo.com/external/361861493.sd.mp4?s=19d8275ca755d653042a87ef28b2f0b2eabf57d0&profile_id=139&oauth2_token_id=57447761",
    featuredImage:
      "https://images.pexels.com/photos/2889942/pexels-photo-2889942.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    authorName: "Budi Hakim",
    videoName: "Tips to playing skateboard on the ramp",
    views: "50K views",
    time: "6 week ago",
  },
];

const Home = () => {
  return (
    <div>
      <div className="container">
        <Sidebar />
        <div className="wrapper">
          <Navbar />
          <div className="main-container">
            <div className="main-header anim">Discover</div>
            <div className="main-blogs">
              {discoverContent.map((dContent) => (
                <DiscoverVideo content={dContent} />
              ))}
            </div>
            <div className="small-header anim">Most Watched</div>
            <div className="videos">
              {mostWatchedContent.map((mContent) => (
                <MostWatched content={mContent} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
