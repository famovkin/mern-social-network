import React from "react";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@mui/icons-material";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        <ul className="sidebar__list">
          <li className="item sidebar__item">
            <RssFeed className="item__icon" />
            <p className="item__text">Feed</p>
          </li>
          <li className="item sidebar__item">
            <Chat className="item__icon" />
            <p className="item__text">Chats</p>
          </li>
          <li className="item sidebar__item">
            <PlayCircleFilledOutlined className="item__icon" />
            <p className="item__text">Videos</p>
          </li>
          <li className="item sidebar__item">
            <Group className="item__icon" />
            <p className="item__text">Groups</p>
          </li>
          <li className="item sidebar__item">
            <Bookmark className="item__icon" />
            <p className="item__text">Bookmarks</p>
          </li>
          <li className="item sidebar__item">
            <HelpOutline className="item__icon" />
            <p className="item__text">Questions</p>
          </li>
          <li className="item sidebar__item">
            <WorkOutline className="item__icon" />
            <p className="item__text">Jobs</p>
          </li>
          <li className="item sidebar__item">
            <Event className="item__icon" />
            <p className="item__text">Events</p>
          </li>
          <li className="item sidebar__item">
            <School className="item__icon" />
            <p className="item__text">Courses</p>
          </li>
        </ul>
        <button className="sidebar__button">Show more</button>
        <hr className="sidebar__hr" />
        <ul className="sidebar__friend-list">
          <li className="friend sidebar__friend">
            <img
              className="avatar friend__avatar"
              src="/assets/person/2.jpeg"
              alt="avatar"
            />
            <p className="friend__name">Peter Parker</p>
          </li>
          <li className="friend sidebar__friend">
            <img
              className="avatar friend__avatar"
              src="/assets/person/3.jpeg"
              alt="avatar"
            />
            <p className="friend__name">Mary Jane</p>
          </li>
          <li className="friend sidebar__friend">
            <img
              className="avatar friend__avatar"
              src="/assets/person/4.jpeg"
              alt="avatar"
            />
            <p className="friend__name">Harry Osborn</p>
          </li>
          <li className="friend sidebar__friend">
            <img
              className="avatar friend__avatar"
              src="/assets/person/5.jpeg"
              alt="avatar"
            />
            <p className="friend__name">Robbie Robertson</p>
          </li>
          <li className="friend sidebar__friend">
            <img
              className="avatar friend__avatar"
              src="/assets/person/6.jpeg"
              alt="avatar"
            />
            <p className="friend__name">Curt Connors</p>
          </li>
          <li className="friend sidebar__friend">
            <img
              className="avatar friend__avatar"
              src="/assets/person/7.jpeg"
              alt="avatar"
            />
            <p className="friend__name">Flint Marko</p>
          </li>
          <li className="friend sidebar__friend">
            <img
              className="avatar friend__avatar"
              src="/assets/person/8.jpeg"
              alt="avatar"
            />
            <p className="friend__name">Gwen Stacy</p>
          </li>
          <li className="friend sidebar__friend">
            <img
              className="avatar friend__avatar"
              src="/assets/person/9.jpeg"
              alt="avatar"
            />
            <p className="friend__name">Adrian Toomes</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
