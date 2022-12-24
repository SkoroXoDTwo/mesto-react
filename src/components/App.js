import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main />
        <Footer />
        <PopupWithForm
          name="profile"
          title="Редактировать профиль"
          btnName="Сохранить"
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

        <PopupWithForm name="gallery" title="Новое место" btnName="Создать">
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
