import React from "react";
import PopupWithForm from "../PopupWithForm";

const PopupEditProfile = (props) => {
  return (
    <PopupWithForm
      name="profile-edit"
      title="Редактировать профиль"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <fieldset className="popup__input-container">
        <input
          className="popup__input popup__input_field_name"
          type="text"
          placeholder="Как Вас зовут?"
          name="username"
          id="username"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="popup__input-error username-error"></span>
        <input
          className="popup__input popup__input_field_job"
          type="text"
          placeholder="Кем Вы работаете?"
          name="userjob"
          id="userjob"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="popup__input-error userjob-error"></span>
      </fieldset>
      <button
        className="popup__submit-button"
        name="button_editForm_save"
        id="button_editForm_save"
        type="submit"
      >
        Сохранить
      </button>
    </PopupWithForm>
  );
};

export default PopupEditProfile;
