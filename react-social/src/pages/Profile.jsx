import React from "react";
import { TopBar, Feed, RightBar, SideBar } from "../components";

function Profile() {
  return (
    <>
      <TopBar />
      <div className="profile">
        <SideBar />
        <div className="profile__container">
          <div className="profile__content">
            <div className="profile__cover">
              <img
                className="profile__cover-image"
                src="/assets/post/1.jpeg"
                alt="Oбложка профиля"
              />
              <img
                className="avatar profile__avatar"
                src="/assets/person/7.jpeg"
                alt=""
              />
            </div>
            <div className="profile__info">
              <h2 className="profile__username">Peter Parker</h2>
              <p className="profile__description">Hello my friends!</p>
            </div>
          </div>
          <div className="profile__home-info">
            <Feed />
            <RightBar profile />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
