import React from "react";
import {
  Search,
  Person,
  Chat,
  Notifications,
  KeyboardDoubleArrowLeft,
} from "@mui/icons-material";

function TopBar({ openRightBar, isRightBarOpened }) {
  return (
    <header className="topbar">
      <div className="topbar__logo">
        <h1>Social Network</h1>
      </div>
      <div className="topbar__search">
        <Search />
        <input type="text" placeholder="Найдите друзей" />
      </div>
      <nav className="topbar__nav">
        <ul className="topbar__links">
          <li>
            <a className="topbar__link" href="#">
              Главная
            </a>
          </li>
          <li>
            <a className="topbar__link" href="#">
              Лента
            </a>
          </li>
        </ul>
        <ul className="topbar__icons">
          <li className="icon">
            <Person />
            <span className="icon__badge">1</span>
          </li>
          <li className="icon">
            <Chat />
            <span className="icon__badge">2</span>
          </li>
          <li className="icon">
            <Notifications />
            <span className="icon__badge">4</span>
          </li>
        </ul>
        <img
          className="avatar topbar__avatar"
          src="/assets/person/1.jpeg"
          alt="avatar"
        />
      </nav>
      <KeyboardDoubleArrowLeft
        className={`circle-button circle-button_type_arrow ${
          isRightBarOpened && "circle-button_type_hidden"
        }`}
        onClick={openRightBar}
      />
    </header>
  );
}

export default TopBar;
