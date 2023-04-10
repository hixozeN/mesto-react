import React from "react";

const Main = (props) => {
  return (
    <main className="page">
      <section className="head-profile">
        <div className="head-profile__user-section">
          <div className="head-profile__avatar-section">
            <img
              className="head-profile__avatar"
              src="#"
              alt="Аватар пользователя"
            />
            <button
              className="head-profile__edit-avatar-button"
              type="button"
              aria-label="Редактировать аватар"
              onClick={props.onEditAvatar}
            ></button>
          </div>
          <div className="head-profile__userinfo">
            <div className="head-profile__username-and-edit">
              <h1 className="head-profile__username">Жак-Ив Кусто</h1>
              <button
                className="head-profile__edit-button"
                type="button"
                aria-label="Редактировать имя и деятельность"
                onClick={props.onEditProfile}
              ></button>
            </div>
            <p className="head-profile__job">Исследователь океанов</p>
          </div>
        </div>
        <button
          className="head-profile__add-button"
          type="button"
          aria-label="Добавить фото в ленту"
          onClick={props.onAddPlace}
        ></button>
      </section>

      <section
        className="photo-feed"
        aria-label="Лента с карточками фото-мест"
      ></section>
    </main>
  );
};

export default Main;
