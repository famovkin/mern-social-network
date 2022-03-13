import React from "react";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";

function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar__logo">
        <h1>Social Network</h1>
      </div>
      <div className="topbar__search">
        <Search />
        <input
          type="text"
          placeholder="Найдите друзей"
        />
      </div>
      <div className="topbar__nav">
        <ul className="topbar__links">
          <li>
            <a className="topbar__link" href="#">Homepage</a>
          </li>
          <li>
            <a className="topbar__link" href="#">Timeline</a>
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
        <img className="topbar__avatar" src="/assets/person/1.jpeg" alt="avatar" />
      </div>
    </div>
  );
}

export default TopBar;