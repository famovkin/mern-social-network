import React from "react";

function RightBar() {
  return (
    <div className="rightbar">
      <div className="rightbar__wrapper">
        <div className="rightbar__birthday">
          <img src="/assets/gift.png" alt="Подарок" />
          <p>
            <b>Питер Паркер </b>и ещё <b>3 друзей </b> отмечают сегодня день
            рождения!
          </p>
        </div>
        <img className="rightbar__ad" src="assets/ad.png" alt="Реклама" />
        <h3 className="rightbar__title">Друзья онлайн</h3>
        <ul className="rightbar__friend-list">
          <li className="friend rightbar__friend">
            <div className="friend__image-box">
              <img className="avatar friend__avatar" src="/assets/person/1.jpeg" alt="" />
              <span className="friend__badge"></span>
            </div>
            <p className="friend__name">Peter Parker</p>
          </li>
          <li className="friend rightbar__friend">
            <div className="friend__image-box">
              <img className="avatar friend__avatar" src="/assets/person/2.jpeg" alt="" />
              <span className="friend__badge"></span>
            </div>
            <p className="friend__name">Mary Jane</p>
          </li>
          <li className="friend rightbar__friend">
            <div className="friend__image-box">
              <img className="avatar friend__avatar" src="/assets/person/3.jpeg" alt="" />
              <span className="friend__badge"></span>
            </div>
            <p className="friend__name">Harry Osborn</p>
          </li>
          <li className="friend rightbar__friend">
            <div className="friend__image-box">
              <img className="avatar friend__avatar" src="/assets/person/4.jpeg" alt="" />
              <span className="friend__badge"></span>
            </div>
            <p className="friend__name">Robbie Robertson</p>
          </li>
          <li className="friend rightbar__friend">
            <div className="friend__image-box">
              <img className="avatar friend__avatar" src="/assets/person/5.jpeg" alt="" />
              <span className="friend__badge"></span>
            </div>
            <p className="friend__name">Curt Connors</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RightBar;
