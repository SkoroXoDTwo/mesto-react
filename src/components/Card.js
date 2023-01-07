import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onCardClick }) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (
    `gallery__like-btn ${isLiked && 'gallery__like-btn_active'}`
  );

  const handleClick = () => {
    onCardClick(card);
  };

  return (
    <li className="gallery__list-element">
      <article className="gallery__item">
        <img
          className="gallery__photo"
          alt={card.name}
          src={card.link}
          onClick={handleClick}
        />
        {isOwn && <button className="gallery__trash" type="button"></button>}
        <div className="gallery__cover">
          <h2 className="gallery__name">{card.name}</h2>
          <div className="gallery__like-container">
            <button className={cardLikeButtonClassName} type="button"></button>
            <span className="gallery__like-count">{card.likes.length}</span>
          </div>
        </div>
      </article>
    </li>
  );
}

export default Card;
