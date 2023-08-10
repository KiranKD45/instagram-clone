import React, { useState } from "react";
import "./Timeline.css";
import Suggestions from "./Suggestions";
import Post from "./Post";

const Timeline = () => {
  const [posts, setPosts] = useState([
    {
      user: "jiran2",
      postImage:
        "https://images.pexels.com/photos/13255535/pexels-photo-13255535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      likes: 46,
      timestamp: "13h",
    },
    {
      user: "kiran1",
      postImage:
        "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      likes: 45,
      timestamp: "12h",
    },

    {
      user: "miran1",
      postImage:
        "https://images.pexels.com/photos/8383681/pexels-photo-8383681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      likes: 47,
      timestamp: "15h",
    },
  ]);
  return (
    <div className="timeline">
      <div className="timeline-left">
        <div className="timeline-posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline-right">
        <Suggestions />
      </div>
    </div>
  );
};

export default Timeline;
