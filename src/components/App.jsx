import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PopupEditProfile from "./PopupsWithForm/PopupEditProfile";
import PopupEditAvatar from "./PopupsWithForm/PopupEditAvatar";
import PopupAddCard from "./PopupsWithForm/PopupAddCard";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  const handleEditProfileClick = () => setIsEditProfilePopupOpen(true);

  const handleAddPlaceClick = () => setIsAddPlacePopupOpen(true);

  const handleEditAvatarClick = () => setIsEditAvatarPopupOpen(true);

  const handleCardClick = (cardData) => {
    setIsImagePopupOpen(true);
    setSelectedCard(cardData);
  };

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
  };

  return (
    <>
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupEditProfile
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        btnName="Сохранить"
      />
      <PopupEditAvatar
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        btnName="Сохранить"
      />
      <PopupAddCard
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        btnName="Создать"
      />
      <ImagePopup
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
        card={selectedCard}
      />
    </>
  );
}

export default App;
