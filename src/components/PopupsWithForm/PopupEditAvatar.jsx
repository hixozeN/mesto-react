import React from "react";
import PopupWithForm from "../PopupWithForm";

const PopupEditAvatar = (props) => {
  return (
    <PopupWithForm
      name="avatar-edit"
      title="Обновить аватар"
      btnName={props.btnName}
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <input
        className="popup__input popup__input_field_ava-url"
        type="url"
        placeholder="Ссылка на аватар"
        name="avaurl"
        id="avaurl"
        required
      />
      <span className="popup__input-error avaurl-error"></span>
    </PopupWithForm>
  );
};

export default PopupEditAvatar;
