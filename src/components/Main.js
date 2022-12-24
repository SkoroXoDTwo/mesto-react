import avatarLoaderGif from "../images/avatar-loader.gif";

function Main() {
  return (
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
  );
}

export default Main;
