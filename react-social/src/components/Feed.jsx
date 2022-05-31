import React, { memo } from "react";
import { Share, Post } from "../components";

function Feed() {
  return (
    <section className="feed">
      <div className="feed__wrapper">
        <Share />
        <Post />
        <Post />
      </div>
    </section>
  );
}

export default memo(Feed);
