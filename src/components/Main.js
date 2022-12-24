import avatarLoaderGif from "../images/avatar-loader.gif";

function Main() {
  const handleEditAvatarClick = () => {
    document.querySelector("#popup_avatar").classList.add("popup_opened");
  };

  const handleEditProfileClick = () => {
    document.querySelector("#popup_profile").classList.add("popup_opened");
  };

  const handleAddPlaceClick = () => {
    document.querySelector("#popup_gallery").classList.add("popup_opened");
  };

  return (
    <main>
      <section className="profile">
        <div className="profile__info">
          <button className="profile__picture-btn" type="button" onClick={handleEditAvatarClick}>
            <img
              className="profile__picture"
              src={avatarLoaderGif}
              alt="аватарка пользователя"
            />
          </button>
          <div className="profile__user">
            <h1 className="profile__user-name">Загрузка...</h1>
            <button className="profile__edit-btn" type="button" onClick={handleEditProfileClick}></button>
            <p className="profile__user-about">Загрузка...</p>
          </div>
        </div>
        <button className="profile__add-btn" type="button" onClick={handleAddPlaceClick}></button>
      </section>

      <section className="gallery">
        <ul className="gallery__list"></ul>
      </section>
    </main>
  );
}

export default Main;
