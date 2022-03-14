import React from "react";
import { MoreVert } from "@mui/icons-material";

function Post() {
  return (
    <div className="post feed__post">
      <div className="post__wrapper">
        <div className="post__header">
          <div className="post__info">
            <img
              className="avatar post__avatar"
              src="/assets/person/1.jpeg"
              alt="avatar"
            />
            <span className="post__username">Peter Parker</span>
            <span className="post__date">5 минут назад</span>
          </div>
          <div className="post__options">
            <MoreVert />
          </div>
        </div>
        <div className="post__body">
          <p>Hey! It's my first post :)</p>
          <img src="/assets/post/1.jpeg" alt="post" />
        </div>
        <div className="post__footer">
          <div className="post__likes">
            <img src="/assets/like.png" alt="Палец вверх" />
            <img src="/assets/heart.png" alt="Сердце" />
            <span>3 Нравится</span>
          </div>
          <span className="post__comments">42 комментария</span>
        </div>
      </div>
    </div>
  );
}

export default Post;
