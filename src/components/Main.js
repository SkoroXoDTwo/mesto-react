import { useEffect, useState, useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import avatarLoaderGif from "../images/avatar-loader.gif";
import api from "../utils/Api";
import Card from "./Card";

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  handleCardLike,
  cards,
  handleCardDelete,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main>
      <section className="profile">
        <div className="profile__info">
          <button
            className="profile__picture-btn"
            type="button"
            onClick={onEditAvatar}
          >
            <img
              className="profile__picture"
              src={currentUser.avatar ? currentUser.avatar : avatarLoaderGif}
              alt="аватарка пользователя"
            />
          </button>
          <div className="profile__user">
            <h1 className="profile__user-name">
              {currentUser.name ? currentUser.name : "Загрузка..."}
            </h1>
            <button
              className="profile__edit-btn"
              type="button"
              onClick={onEditProfile}
            ></button>
            <p className="profile__user-about">
              {currentUser.about ? currentUser.about : "Загрузка..."}
            </p>
          </div>
        </div>
        <button
          className="profile__add-btn"
          type="button"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="gallery">
        <ul className="gallery__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={onCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
