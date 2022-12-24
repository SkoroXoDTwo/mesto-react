function ImagePopup(props) {
  return (
    <div
      className={`popup ${props.card ? "popup_opened" : ""} popup_photo`}
      id="popup_gallery_item"
    >
      <div className="popup__container popup__container_photo">
        <button
          className="popup__close-btn"
          type="button"
          onClick={props.onClose}
        ></button>
        <img
          className="popup__photo"
          alt=""
          src={props.card && props.card.link}
        />
        <h2 className="popup__photo-name">{props.card && props.card.name}</h2>
      </div>
    </div>
  );
}

export default ImagePopup;
