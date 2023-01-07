import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { useEffect, useState } from "react";
import api from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getInitialUserInfo()
      .then((result) => {
        setCurrentUser(result);
      })
      .catch((err) => {
        console.log(err);
      });

    api
      .getInitialCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  };

  const handleCardLike = (card) => {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    }).catch((err) => {
      console.log(err);
    });;
  };

  const handleCardDelete = (card) => {
    api.deleteCard(card._id).then((_) => {
      setCards((state) => state.filter((c) => (c._id !== card._id)));
    }).catch((err) => {
      console.log(err);
    });;
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className="page">
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            handleCardLike={handleCardLike}
            handleCardDelete={handleCardDelete}
            cards={cards}
          />
          <Footer />
          <PopupWithForm
            name="profile"
            title="Редактировать профиль"
            btnName="Сохранить"
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
          >
            <input
              className="popup__input"
              id="name-profile-input"
              name="user-name"
              placeholder="Имя"
              minLength="2"
              maxLength="40"
              required
            />
            <span
              className="popup__input-error"
              id="name-profile-input-error"
            ></span>

            <input
              className="popup__input"
              id="about-profile-input"
              name="user-about"
              placeholder="Место работы"
              minLength="2"
              maxLength="200"
              required
            />
            <span
              className="popup__input-error"
              id="about-profile-input-error"
            ></span>
          </PopupWithForm>

          <PopupWithForm
            name="gallery"
            title="Новое место"
            btnName="Создать"
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
          >
            <input
              className="popup__input"
              id="name-photo-input"
              name="photo-name"
              placeholder="Название"
              minLength="2"
              maxLength="30"
              required
            />
            <span
              className="popup__input-error"
              id="name-photo-input-error"
            ></span>

            <input
              className="popup__input"
              id="link-photo-input"
              type="url"
              name="photo-link"
              placeholder="Ссылка на картинку"
              required
            />
            <span
              className="popup__input-error"
              id="link-photo-input-error"
            ></span>
          </PopupWithForm>

          <PopupWithForm
            name="avatar"
            title="Обновить аватар"
            btnName="Сохранить"
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
          >
            <input
              className="popup__input"
              id="link-avatar-input"
              type="url"
              name="avatar-link"
              placeholder="Ссылка на аватар"
              required
            />
            <span
              className="popup__input-error"
              id="link-avatar-input-error"
            ></span>
          </PopupWithForm>

          <PopupWithForm name="delete_item" title="Вы уверены?" btnName="Да" />
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
