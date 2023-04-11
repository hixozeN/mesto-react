import React from "react";
import PopupWithForm from "../PopupWithForm";

const PopupAddCard = (props) => {
  return (
    <PopupWithForm
      name="card-add"
      title="Новое место"
      btnName={props.btnName}
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <input
        className="popup__input popup__input_field_placename"
        type="text"
        placeholder="Название"
        name="placename"
        id="placename"
        minLength="2"
        maxLength="30"
        required
      />
      <span className="popup__input-error placename-error"></span>
      <input
        className="popup__input popup__input_field_placeurl"
        type="url"
        placeholder="Ссылка на картинку"
        name="placeurl"
        id="placeurl"
        required
      />
      <span className="popup__input-error placeurl-error"></span>
    </PopupWithForm>
  );
};

export default PopupAddCard;
