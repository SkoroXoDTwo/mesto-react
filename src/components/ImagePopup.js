function ImagePopup({ card, onClose }) {
  return (
    <div
      className={`popup ${card ? "popup_opened" : ""} popup_photo`}
      id="popup_gallery_item"
    >
      <div className="popup__container popup__container_photo">
        <button
          className="popup__close-btn"
          type="button"
          onClick={onClose}
        ></button>
        <img
          className="popup__photo"
          alt=""
          src={card && card.link}
        />
        <h2 className="popup__photo-name">{card && card.name}</h2>
      </div>
    </div>
  );
}

export default ImagePopup;
