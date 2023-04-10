import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PopupEditProfile from "./Popups/PopupEditProfile";
import PopupEditAvatar from "./Popups/PopupEditAvatar";
import PopupAddCard from "./Popups/PopupAddCard";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  };

  return (
    <>
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
      />
      <Footer />
      <PopupEditProfile
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />
      <PopupEditAvatar
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      />
      <PopupAddCard isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />

      <div className="popup popup_preview">
        <div className="popup__image-content">
          <button
            type="button"
            name="button_form_close"
            id="button_form-preview_close"
            className="popup__close-button"
            aria-label="Закрыть превью"
          ></button>
          <img className="popup__image-preview" alt="" />
          <h2 className="popup__title-preview">Название</h2>
        </div>
      </div>

      <div className="popup popup_confirm">
        <div className="popup__content">
          <button
            type="button"
            name="button_confirm_close"
            id="button_confirm_close"
            className="popup__close-button"
            aria-label="Закрыть окно подтверждения"
          ></button>
          <h1 className="popup__title">Вы уверены?</h1>
          <button
            className="popup__submit-button"
            name="button_delete-card"
            id="button_delete-card"
            type="submit"
          >
            Да
          </button>
        </div>
      </div>

      <template id="card-template">
        <div className="card">
          <div className="card__heading">
            <h2 className="card__title">Название</h2>
            <div className="card__like-container">
              <button
                className="card__like-button"
                type="button"
                aria-label="Нравится"
              ></button>
              <p className="card__like-counter">0</p>
            </div>
          </div>
          <img className="card__image" alt="" />
          <button
            className="card__delete-button"
            name="button_card_delete"
            id="button_card_delete"
            type="button"
            aria-label="Удалить карточку"
          ></button>
        </div>
      </template>
    </>
  );
}

export default App;
