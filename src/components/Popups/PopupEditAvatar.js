import React from "react";
import PopupWithForm from "../PopupWithForm";

const PopupEditAvatar = (props) => {
  return (
    <PopupWithForm
      name="avatar-edit"
      title="Обновить аватар"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <fieldset className="popup__input-container">
        <input
          className="popup__input popup__input_field_ava-url"
          type="url"
          placeholder="Ссылка на аватар"
          name="avaurl"
          id="avaurl"
          required
        />
        <span className="popup__input-error avaurl-error"></span>
      </fieldset>
      <button
        className="popup__submit-button"
        name="buttonAvatarSubmit"
        id="buttonAvatarSubmit"
        type="submit"
      >
        Сохранить
      </button>
    </PopupWithForm>
  );
};

export default PopupEditAvatar;
