import React from "react";
import PopupWithForm from "../PopupWithForm";

const PopupAddCard = (props) => {
  return (
    <PopupWithForm
      name="card-add"
      title="Новое место"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <fieldset className="popup__input-container">
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
      </fieldset>
      <button
        className="popup__submit-button"
        name="button_placeForm_add"
        id="button_placeForm_add"
        type="submit"
        disabled
      >
        Создать
      </button>
    </PopupWithForm>
  );
};

export default PopupAddCard;
