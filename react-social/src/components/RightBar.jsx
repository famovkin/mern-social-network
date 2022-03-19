import React from "react";
import { Close } from "@mui/icons-material";

const HomeRightBar = () => {
  return (
    <>
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
            <img
              className="avatar friend__avatar"
              src="/assets/person/1.jpeg"
              alt=""
            />
            <span className="friend__badge"></span>
          </div>
          <p className="friend__name">Peter Parker</p>
        </li>
        <li className="friend rightbar__friend">
          <div className="friend__image-box">
            <img
              className="avatar friend__avatar"
              src="/assets/person/2.jpeg"
              alt=""
            />
            <span className="friend__badge"></span>
          </div>
          <p className="friend__name">Mary Jane</p>
        </li>
        <li className="friend rightbar__friend">
          <div className="friend__image-box">
            <img
              className="avatar friend__avatar"
              src="/assets/person/3.jpeg"
              alt=""
            />
            <span className="friend__badge"></span>
          </div>
          <p className="friend__name">Harry Osborn</p>
        </li>
        <li className="friend rightbar__friend">
          <div className="friend__image-box">
            <img
              className="avatar friend__avatar"
              src="/assets/person/4.jpeg"
              alt=""
            />
            <span className="friend__badge"></span>
          </div>
          <p className="friend__name">Robbie Robertson</p>
        </li>
        <li className="friend rightbar__friend">
          <div className="friend__image-box">
            <img
              className="avatar friend__avatar"
              src="/assets/person/5.jpeg"
              alt=""
            />
            <span className="friend__badge"></span>
          </div>
          <p className="friend__name">Curt Connors</p>
        </li>
      </ul>
    </>
  );
};

const ProfileRightBar = () => {
  return (
    <>
      <h3 className="rightbar__title">Краткая информация:</h3>
      <div className="rightbar__info">
        <p className="rightbar__info-item">
          <span>Родной город:</span> Москва
        </p>
        <p className="rightbar__info-item">
          <span>Город:</span> Саратов
        </p>
        <p className="rightbar__info-item">
          <span>Семейное положение:</span> Без пары
        </p>
      </div>
      <h3 className="rightbar__title">Подписки:</h3>
      <div className="rightbar__followings">
        <div className="rightbar__following">
          <img src="/assets/person/1.jpeg" alt="avatar" />
          <p>Piter Parker</p>
        </div>
        <div className="rightbar__following">
          <img src="/assets/person/7.jpeg" alt="avatar" />
          <p>Piter Parker</p>
        </div>
        <div className="rightbar__following">
          <img src="/assets/person/6.jpeg" alt="avatar" />
          <p>Piter Parker</p>
        </div>
        <div className="rightbar__following">
          <img src="/assets/person/5.jpeg" alt="avatar" />
          <p>Piter Parker</p>
        </div>
        <div className="rightbar__following">
          <img src="/assets/person/3.jpeg" alt="avatar" />
          <p>Piter Parker</p>
        </div>
        <div className="rightbar__following">
          <img src="/assets/person/4.jpeg" alt="avatar" />
          <p>Piter Parker</p>
        </div>
      </div>
    </>
  );
};

function RightBar({ profile }) {
  return (
    <section className="rightbar">
      <div className="rightbar__wrapper">
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
        <Close className="circle-button circle-button_type_close" />
      </div>
    </section>
  );
}

export default RightBar;
