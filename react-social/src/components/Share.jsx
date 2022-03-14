import React from "react";
import {
  PermMedia,
  LocalOffer,
  LocationOn,
  EmojiEmotions,
} from "@mui/icons-material";

function Share() {
  return (
    <div className="share feed__share">
      <div className="share__wrapper">
        <div className="share__input">
          <img
            className="avatar share__avatar"
            src="/assets/person/1.jpeg"
            alt="avatar"
          />
          <textarea type="text" placeholder="Что происходит?"></textarea>
        </div>
        <hr className="share__hr" />
        <div className="share__confirm">
          <div className="share__options">
            <div className="share__option">
              <PermMedia className="share__icon" htmlColor="tomato" />
              <span>Фото или видео</span>
            </div>
            <div className="share__option">
              <LocalOffer className="share__icon" htmlColor="blue" />
              <span>Теги</span>
            </div>
            <div className="share__option">
              <LocationOn className="share__icon" htmlColor="green"/>
              <span>Локация</span>
            </div>
            <div className="share__option">
              <EmojiEmotions className="share__icon" htmlColor="goldenrod"/>
              <span>Эмоции</span>
            </div>
          </div>
          <button>Поделиться</button>
        </div>
      </div>
    </div>
  );
}

export default Share;
