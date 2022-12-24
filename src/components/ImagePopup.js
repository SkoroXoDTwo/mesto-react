function ImagePopup() {
  return (
    <div className="popup popup_photo" id="popup_gallery_item">
      <div className="popup__container popup__container_photo">
        <button className="popup__close-btn" type="button"></button>
        <img className="popup__photo" alt="" />
        <h2 className="popup__photo-name"></h2>
      </div>
    </div>
  );
}

export default ImagePopup;
