import React from "react";

const ImagePopup = (props) => {
  return (
    <div className={`popup popup_preview ${props.isOpen && 'popup_opened'}`}>
      <div className="popup__image-content">
        <button
          type="button"
          name="button_form_close"
          id="button_form-preview_close"
          className="popup__close-button"
          aria-label="Закрыть превью"
          onClick={props.onClose}
        ></button>
        <img className="popup__image-preview" alt={props.card.name} src={props.card.link} />
        <h2 className="popup__title-preview">{props.card.name}</h2>
      </div>
    </div>
  );
};

export default ImagePopup;
