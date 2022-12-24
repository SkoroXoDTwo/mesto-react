import avatarLoaderGif from "./images/avatar-loader.gif";

function App() {
  return (
    <div className="App">
      <div className="page">
        <header className="header">
          <div className="header__logo"></div>
        </header>

        <main>
          <section className="profile">
            <div className="profile__info">
              <button className="profile__picture-btn" type="button">
                <img
                  className="profile__picture"
                  src={avatarLoaderGif}
                  alt="аватарка пользователя"
                />
              </button>
              <div className="profile__user">
                <h1 className="profile__user-name">Загрузка...</h1>
                <button className="profile__edit-btn" type="button"></button>
                <p className="profile__user-about">Загрузка...</p>
              </div>
            </div>
            <button className="profile__add-btn" type="button"></button>
          </section>

          <section className="gallery">
            <ul className="gallery__list"></ul>
          </section>
        </main>

        <footer className="footer">
          <p className="footer__copyright">&copy; 2022 Mesto Russia</p>
        </footer>

        <div className="popup" id="popup_profile">
          <div className="popup__container">
            <button className="popup__close-btn" type="button"></button>
            <h2 className="popup__title">Редактировать профиль</h2>
            <form className="popup__form" name="profile-form" noValidate>
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

              <button className="popup__save-btn" type="submit">
                Сохранить
              </button>
            </form>
          </div>
        </div>

        <div className="popup" id="popup_gallery">
          <div className="popup__container">
            <button className="popup__close-btn" type="button"></button>
            <h2 className="popup__title">Новое место</h2>
            <form className="popup__form" name="card-form" noValidate>
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

              <button
                className="popup__save-btn popup__save-btn_disabled"
                type="submit"
                disabled
              >
                Создать
              </button>
            </form>
          </div>
        </div>

        <div className="popup popup_photo" id="popup_gallery_item">
          <div className="popup__container popup__container_photo">
            <button className="popup__close-btn" type="button"></button>
            <img className="popup__photo" alt="" />
            <h2 className="popup__photo-name"></h2>
          </div>
        </div>

        <div className="popup" id="popup_delete_item">
          <div className="popup__container">
            <button className="popup__close-btn" type="button"></button>
            <h2 className="popup__title popup__title_type_delete">Вы уверены?</h2>
            <form className="popup__form" noValidate>
              <button className="popup__save-btn" type="submit">
                Да
              </button>
            </form>
          </div>
        </div>

        <div className="popup" id="popup_avatar">
          <div className="popup__container">
            <button className="popup__close-btn" type="button"></button>
            <h2 className="popup__title">Обновить аватар</h2>
            <form className="popup__form" name="avatar-form" noValidate>
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

              <button
                className="popup__save-btn popup__save-btn_disabled"
                type="submit"
                disabled
              >
                Сохранить
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
