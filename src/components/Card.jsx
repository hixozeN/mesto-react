import React from "react";

const Card = (props) => {
  const handleClick = () => {
    props.onCardClick(props.cardData)
  };

  return (
    <div className="card">
      <div className="card__heading">
        <h2 className="card__title">{props.name}</h2>
        <div className="card__like-container">
          <button
            className="card__like-button"
            type="button"
            aria-label="Нравится"
          ></button>
          <p className="card__like-counter">{props.likes.length}</p>
        </div>
      </div>
      <img className="card__image" src={props.link} alt={props.name} onClick={handleClick} />
      <button
        className="card__delete-button"
        name="button_card_delete"
        id="button_card_delete"
        type="button"
        aria-label="Удалить карточку"
      ></button>
    </div>
  );
};

export default Card;
