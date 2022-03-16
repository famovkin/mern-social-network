import React from "react";

function Register() {
  return (
    <div className="login">
      <div className="login__wrapper">
        <div className="login__logo">
          <h1 className="login__title">Socian Network</h1>
          <p className="login__text">
            Socian Network помогает вам всегда оставаться на связи и общаться со
            своими знакомыми.
          </p>
        </div>
        <form className="login__form" name="register">
          <input
            className="login__input"
            type="text"
            placeholder="Имя пользователя"
            name="username"
          />
          <input
            className="login__input"
            type="email"
            placeholder="Электронный адрес"
            name="email"
          />
          <input
            className="login__input"
            type="password"
            placeholder="Пароль"
            name="password"
          />
          <input
            className="login__input"
            type="password"
            placeholder="Подтвердите пароль"
            name="confirm-password"
          />
          <button className="button button_type_login" type="button">
            Вход
          </button>
          <hr />
          <button className="button button_type_reg" type="button">
            Создать новый аккаунт
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
