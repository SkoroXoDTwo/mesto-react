import React from "react";
import avatarLoaderGif from "../images/avatar-loader.gif";
import api from "../utils/Api"

function Main(props) {
  const [userName, setUserName] = React.useState('Загрузка...');
  const [userDescription, setUserDescription] = React.useState('Загрузка...');
  const [userAvatar, setUserAvatar] = React.useState(avatarLoaderGif);

  React.useEffect(() => {
    api.getInitialUserInfo()
    .then((result) => {
      setUserName(result.name);
      setUserDescription(result.about);
      setUserAvatar(result.avatar);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <main>
      <section className="profile">
        <div className="profile__info">
          <button className="profile__picture-btn" type="button" onClick={props.onEditAvatar}>
            <img
              className="profile__picture"
              src={userAvatar}
              alt="аватарка пользователя"
            />
          </button>
          <div className="profile__user">
            <h1 className="profile__user-name">{userName}</h1>
            <button className="profile__edit-btn" type="button" onClick={props.onEditProfile}></button>
            <p className="profile__user-about">{userDescription}</p>
          </div>
        </div>
        <button className="profile__add-btn" type="button" onClick={props.onAddPlace}></button>
      </section>

      <section className="gallery">
        <ul className="gallery__list"></ul>
      </section>
    </main>
  );
}

export default Main;
