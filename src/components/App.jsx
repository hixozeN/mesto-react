import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PopupEditProfile from "./PopupsWithForm/PopupEditProfile";
import PopupEditAvatar from "./PopupsWithForm/PopupEditAvatar";
import PopupAddCard from "./PopupsWithForm/PopupAddCard";
import ImagePopup from "./ImagePopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import api from "../utils/Api";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [isFetching, setFetching] = useState(false);

  const handleEditProfileClick = () => setIsEditProfilePopupOpen(true);
  const handleAddPlaceClick = () => setIsAddPlacePopupOpen(true);
  const handleEditAvatarClick = () => setIsEditAvatarPopupOpen(true);
  
  useEffect(() => {
    setLoading(true);
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cardList]) => {
        setCurrentUser(userData);
        setCards(cardList);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

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

  const handleCardLike = (card) => {
    const isLiked = card.likes.some((user) => user._id === currentUser._id);

    api
      .changeLikeCardStatus(card._id, isLiked)
      .then((newCard) =>
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        )
      )
      .catch((err) => console.error(err));
  };

  const handleCardDelete = (card) => {
    api
      .deleteCard(card._id)
      .then(() => setCards(cards.filter((c) => c._id !== card._id)))
      .catch((err) => console.error(err));
  };

  const handleUpdateUser = ({ name, about }) => {
    setFetching(true);
    api
      .setUserInfo({ name, about })
      .then((userData) => {
        setCurrentUser(userData);
        closeAllPopups();
      })
      .catch((err) => console.error(err))
      .finally(() => setFetching(false))
  };

  const handleUpdateAvatar = ({ avatar }) => {
    setFetching(true);
    api
      .setUserAvatar({ avatar })
      .then((userData) => {
        setCurrentUser(userData);
        closeAllPopups();
      })
      .catch((err) => console.error(err))
      .finally(() => setFetching(false))
  };

  const handleAddPlaceSubmit = ({ name, link }) => {
    setFetching(true);
    api
      .createCard({ name, link })
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.error(err))
      .finally(() => setFetching(false))
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header />
      {isLoading ? (
        <div className="page__loading">
          <span className="page__loading-text">Идет загрузка</span>
          <div className="page__loading-circle"></div>
        </div>
      ) : (
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          cards={cards}
        />
      )}
      <Footer />
      <PopupEditProfile
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
        btnName={isFetching ? 'Сохранение...' : 'Сохранить'}
      />
      <PopupEditAvatar
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
        btnName={isFetching ? 'Сохранение...' : 'Сохранить'}
      />
      <PopupAddCard
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onAddPlace={handleAddPlaceSubmit}
        btnName={isFetching ? 'Создание...' : 'Создать'}
      />
      <ImagePopup
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
        card={selectedCard}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
