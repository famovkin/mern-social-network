import React from "react";
import { Share, Post } from "../components";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__wrapper">
        <Share />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default Feed;
