import React, { useEffect, useState } from "react";
import api from "../utils/Api.js";
import Card from "./Card.jsx";

const Main = (props) => {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cardList]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cardList);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="page">
      {isLoading ? (
        <div className="page__loading">
          <span className="page__loading-text">Идет загрузка</span>
          <div className="page__loading-circle"></div>
        </div>
      ) : (
        <>
          <section className="head-profile">
            <div className="head-profile__user-section">
              <div className="head-profile__avatar-section">
                <img
                  className="head-profile__avatar"
                  src={userAvatar}
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
                  <h1 className="head-profile__username">{userName}</h1>
                  <button
                    className="head-profile__edit-button"
                    type="button"
                    aria-label="Редактировать имя и деятельность"
                    onClick={props.onEditProfile}
                  ></button>
                </div>
                <p className="head-profile__job">{userDescription}</p>
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
          >
            {cards.map((card) => {
              return (
                <Card
                  key={card._id}
                  cardData={card}
                  name={card.name}
                  link={card.link}
                  likes={card.likes}
                  onCardClick={props.onCardClick}
                />
              );
            })}
          </section>
        </>
      )}
    </main>
  );
};

export default Main;
