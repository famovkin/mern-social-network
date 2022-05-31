import React, { memo } from "react";
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
    <section className="sidebar">
      <div className="sidebar__wrapper">
        <ul className="sidebar__list">
          <li className="item sidebar__item">
            <RssFeed className="item__icon" />
            <p className="item__text">Лента</p>
          </li>
          <li className="item sidebar__item">
            <Chat className="item__icon" />
            <p className="item__text">Чаты</p>
          </li>
          <li className="item sidebar__item">
            <PlayCircleFilledOutlined className="item__icon" />
            <p className="item__text">Видео</p>
          </li>
          <li className="item sidebar__item">
            <Group className="item__icon" />
            <p className="item__text">Группы</p>
          </li>
          <li className="item sidebar__item">
            <HelpOutline className="item__icon" />
            <p className="item__text">FAQ</p>
          </li>
          <li className="item sidebar__item">
            <WorkOutline className="item__icon" />
            <p className="item__text">Вакансии</p>
          </li>
          <li className="item sidebar__item">
            <Event className="item__icon" />
            <p className="item__text">События</p>
          </li>
          <li className="item sidebar__item">
            <School className="item__icon" />
            <p className="item__text">Курсы</p>
          </li>
        </ul>
        <hr className="sidebar__hr" />
        <div className="sidebar__bookmark-box">
          <Bookmark className="item__icon" />
          <h3 className="sidebar__title">Закладки</h3>
        </div>
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
    </section>
  );
}

export default memo(SideBar);
