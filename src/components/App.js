import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import React from "react";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);

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
  }

  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
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
        <ImagePopup />
      </div>
    </div>
  );
}

export default App;
