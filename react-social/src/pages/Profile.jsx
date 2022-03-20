import React, { useState } from "react";
import { TopBar, Feed, RightBar, SideBar } from "../components";

function Profile() {
  const [rightBarOpened, setRightBarOpened] = useState(false);

  const openRightBar = () => setRightBarOpened(true);
  const closeRightBar = () => setRightBarOpened(false);

  return (
    <>
      <TopBar openRightBar={openRightBar} isRightBarOpened={rightBarOpened} />
      <main className="profile">
        <SideBar />
        <section className="profile__container">
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
            <RightBar
              isOpen={rightBarOpened}
              closeRightBar={closeRightBar}
              profile
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default Profile;
